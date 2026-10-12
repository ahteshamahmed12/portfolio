import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const embeddingModel = genAI.getGenerativeModel({
  model: "gemini-embedding-001",
});

export async function embedText(text: string): Promise<number[]> {
  const truncated = text.slice(0, 8192);
  const result = await embeddingModel.embedContent(truncated);
  return result.embedding.values;
}

export async function embedBatch(texts: string[]): Promise<number[][]> {
  return Promise.all(texts.map((t) => embedText(t)));
}
