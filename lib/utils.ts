import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind CSS class names, handling conflicts intelligently.
 * Required by all shadcn/ui components via `cn(...)`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
