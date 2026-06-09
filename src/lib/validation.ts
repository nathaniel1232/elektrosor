// Shared input validation for API routes.
// Keep these strict — values are user-supplied and end up in our database.

export const LIMITS = {
  name: 100,
  email: 200,
  phone: 30,
  address: 200,
  city: 100,
  postalCode: 20,
  serviceType: 80,
  message: 5000,
  description: 5000,
  positionId: 40,
  positionTitle: 100,
  chatMessage: 2000,
  chatHistoryItems: 20,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function str(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const trimmed = v.trim();
  if (trimmed.length === 0 || trimmed.length > max) return null;
  return trimmed;
}

export function optStr(v: unknown, max: number): string | null {
  if (v == null || v === "") return null;
  if (typeof v !== "string") return null;
  const trimmed = v.trim();
  if (trimmed.length === 0) return null;
  if (trimmed.length > max) return null;
  return trimmed;
}

export function email(v: unknown): string | null {
  const s = str(v, LIMITS.email);
  if (!s) return null;
  if (!EMAIL_RE.test(s)) return null;
  return s.toLowerCase();
}

// Honeypot — a field bots fill in but humans don't (it's hidden in the form).
// Returns true if the request looks like spam and should be silently dropped.
export function isHoneypotTriggered(body: Record<string, unknown>): boolean {
  const hp = body.company;
  return typeof hp === "string" && hp.trim().length > 0;
}
