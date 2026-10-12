import { GoogleGenerativeAI } from "@google/generative-ai";
import { Document, ChatMessage } from "./types";
import { VectorStore } from "./vectorStore";
import { Retriever } from "./retriever";
import { chunkDocuments } from "./chunking";
import { getKnowledgeDocuments } from "./knowledge";
import { embedBatch, embedText } from "./embeddings";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const chatModel = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const SYSTEM_PROMPT = `You are Ahtesham's portfolio assistant. Answer questions based strictly on the provided context. If the context doesn't contain the answer, say you don't have that information. Keep answers concise and helpful. Never make up facts.`;

let store: VectorStore | null = null;
let retriever: Retriever | null = null;

async function getStore(): Promise<{ store: VectorStore; retriever: Retriever }> {
  if (store && retriever) return { store, retriever };

  const docs = getKnowledgeDocuments();
  const chunks = chunkDocuments(docs, 300, 50);
  const embeddings = await embedBatch(chunks.map((c) => c.text));

  store = new VectorStore();
  await store.add(chunks, embeddings);

  retriever = new Retriever(store, 3);
  return { store, retriever };
}

export async function chat(
  messages: ChatMessage[],
  query: string,
): Promise<{ text: string; sources: { id: string; text: string; score: number }[] }> {
  const { retriever } = await getStore();

  const sources = await retriever.search(query);

  const context = sources
    .map((s, i) => `[${i + 1}] ${s.text}`)
    .join("\n\n");

  const conversation = [...messages, { role: "user" as const, content: query }]
    .map((m) => `${m.role}: ${m.content}`)
    .join("\n");

  const prompt = `${SYSTEM_PROMPT}

Context:
${context}

Conversation:
${conversation}
assistant:`;

  const result = await chatModel.generateContent(prompt);
  const text = result.response.text();

  return {
    text,
    sources: sources.map((s) => ({
      id: s.id,
      text: s.text.slice(0, 200),
      score: Math.round(s.score * 100) / 100,
    })),
  };
}

export async function chatStream(
  messages: ChatMessage[],
  query: string,
  onChunk: (chunk: string) => void,
): Promise<{ sources: { id: string; text: string; score: number }[] }> {
  const { retriever } = await getStore();

  const sources = await retriever.search(query);

  const context = sources
    .map((s, i) => `[${i + 1}] ${s.text}`)
    .join("\n\n");

  const conversation = [...messages, { role: "user" as const, content: query }]
    .map((m) => `${m.role}: ${m.content}`)
    .join("\n");

  const prompt = `${SYSTEM_PROMPT}

Context:
${context}

Conversation:
${conversation}
assistant:`;

  const result = await chatModel.generateContentStream(prompt);

  for await (const chunk of result.stream) {
    const text = chunk.text();
    if (text) onChunk(text);
  }

  return {
    sources: sources.map((s) => ({
      id: s.id,
      text: s.text.slice(0, 200),
      score: Math.round(s.score * 100) / 100,
    })),
  };
}
