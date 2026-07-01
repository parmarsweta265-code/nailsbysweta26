// ─── Utility Functions ────────────────────────────────────────────────────────

/**
 * Build a WhatsApp chat URL with a pre-filled message.
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  const clean = phone.replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encoded}`;
}

/**
 * Build a WhatsApp booking message for a specific service.
 */
export function buildBookingMessage(serviceName: string): string {
  return `Hello NailsbySweta26,\n\nI would like to book:\n${serviceName}\n\nPlease let me know your available timings.\n\nThank you.`;
}

/**
 * Return a human-readable relative date label.
 */
export function relativeDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return "1 week ago";
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 60) return "1 month ago";
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? "s" : ""} ago`;
}

/**
 * Sort gallery items newest-first.
 */
export function sortByDate<T extends { uploadDate: string }>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
  );
}

/**
 * Merge class names (lightweight cn helper).
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
