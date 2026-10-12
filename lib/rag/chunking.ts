import { Document } from "./types";

const DEFAULT_CHUNK_SIZE = 500;
const DEFAULT_OVERLAP = 100;

export function chunkText(
  text: string,
  chunkSize: number = DEFAULT_CHUNK_SIZE,
  overlap: number = DEFAULT_OVERLAP,
): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    chunks.push(text.slice(start, end));

    if (end === text.length) break;

    start = end - overlap;
  }

  return chunks.length === 0 ? [text] : chunks;
}

export function chunkDocuments(
  documents: Document[],
  chunkSize: number = DEFAULT_CHUNK_SIZE,
  overlap: number = DEFAULT_OVERLAP,
): Document[] {
  const result: Document[] = [];

  for (const doc of documents) {
    const chunks = chunkText(doc.text, chunkSize, overlap);
    chunks.forEach((chunk, i) => {
      result.push({
        id: `${doc.id}#chunk-${i}`,
        text: chunk,
        metadata: { ...doc.metadata, source: doc.id, chunkIndex: i },
      });
    });
  }

  return result;
}
