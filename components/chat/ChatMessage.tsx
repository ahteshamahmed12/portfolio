import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant" | "system";
  content: string;
  isTyping?: boolean;
}

export function ChatMessage({ role, content, isTyping }: ChatMessageProps) {
  const isBot = role === "assistant";

  return (
    <div
      className={cn(
        "flex w-full gap-3 px-4 py-3",
        isBot ? "bg-card/30" : "bg-secondary/20",
      )}
    >
      <div
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
          isBot
            ? "bg-brand text-primary"
            : "bg-secondary text-foreground",
        )}
      >
        {isBot ? "A" : "U"}
      </div>

      <div className="flex-1">
        {isTyping ? (
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"></span>
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"></span>
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"></span>
          </div>
        ) : (
          <p className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}
