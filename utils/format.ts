/**
 * Small formatting helpers used across the site. Kept separate from
 * lib/utils.ts (which holds the Tailwind `cn` class-merge helper) so
 * presentation-agnostic formatting logic has its own home.
 */

/** Formats a number with locale-aware thousand separators, e.g. 12000 -> "12,000". */
export function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}

/** Truncates text to a max length, adding an ellipsis if cut off. */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

/** Converts "Full Stack" -> "full-stack" for use in URLs or data attributes. */
export function slugify(text: string): string {
  return text.toLowerCase().trim().replace(/\s+/g, "-");
}
