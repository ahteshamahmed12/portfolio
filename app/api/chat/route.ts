import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { chat, chatStream } from "@/lib/rag/chat";

const bodySchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    }),
  ),
  query: z.string().min(1),
  stream: z.boolean().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = bodySchema.parse(body);

    if (parsed.stream) {
      const stream = new TransformStream();
      const writer = stream.writable.getWriter();
      const encoder = new TextEncoder();

      chatStream(parsed.messages, parsed.query, (chunk) => {
        writer.write(encoder.encode(`data: ${chunk}\n\n`));
      }).then(async (result) => {
        writer.write(
          encoder.encode(`data: <<SOURCES>>${JSON.stringify(result.sources)}\n\n`),
        );
        writer.close();
      }).catch(async (err) => {
        writer.write(encoder.encode(`data: <<ERROR>>${err.message}\n\n`));
        writer.close();
      });

      return new Response(stream.readable, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
        },
      });
    }

    const result = await chat(parsed.messages, parsed.query);
    return NextResponse.json(result);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request body", details: err.issues },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 },
    );
  }
}
