import { Document, Source } from "./types";
import { VectorStore } from "./vectorStore";
import { embedText } from "./embeddings";

export class Retriever {
  constructor(private store: VectorStore, private topK: number = 5) {}

  async search(query: string): Promise<Source[]> {
    const queryEmbedding = await embedText(query);
    const results = this.store.search(queryEmbedding, this.topK);

    return results.map(({ doc, score }) => ({
      id: doc.id,
      text: doc.text,
      score,
    }));
  }
}
