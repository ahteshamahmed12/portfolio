import { Document } from "./types";

export class VectorStore {
  private documents: { doc: Document; embedding: number[] }[] = [];

  async add(documents: Document[], embeddings: number[][]): Promise<void> {
    if (documents.length !== embeddings.length) {
      throw new Error("Documents and embeddings length mismatch");
    }
    for (let i = 0; i < documents.length; i++) {
      this.documents.push({ doc: documents[i], embedding: embeddings[i] });
    }
  }

  search(queryEmbedding: number[], topK: number = 5): { doc: Document; score: number }[] {
    const scored = this.documents.map(({ doc, embedding }) => ({
      doc,
      score: cosineSimilarity(queryEmbedding, embedding),
    }));
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, topK);
  }

  get size(): number {
    return this.documents.length;
  }
}

export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom > 0 ? dot / denom : 0;
}
