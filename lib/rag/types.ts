export interface Document {
  id: string;
  text: string;
  metadata?: Record<string, unknown>;
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ChatResponse {
  text: string;
  sources?: Source[];
}

export interface Source {
  id: string;
  text: string;
  score: number;
  metadata?: Record<string, unknown>;
}
