// Best-effort per-IP rate limiter.
//
// In-memory only — on Vercel each serverless instance has its own map, so a
// determined attacker can spread load across instances. Good enough as a first
// line of defense against casual spam / scraping; pair with a real solution
// (Upstash Redis ratelimit, Cloudflare Turnstile, etc.) if abuse becomes real.

import type { NextRequest } from "next/server";

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

// Cleanup interval to prevent unbounded growth.
let lastCleanup = 0;
function maybeCleanup(now: number) {
  if (now - lastCleanup < 60_000) return;
  lastCleanup = now;
  for (const [k, b] of buckets) {
    if (b.resetAt <= now) buckets.delete(k);
  }
}

export function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

type Options = {
  /** Bucket name — separates per-endpoint limits. */
  key: string;
  /** Max requests inside the window. */
  limit: number;
  /** Window length in ms. */
  windowMs: number;
};

export type RateLimitResult = {
  ok: boolean;
  retryAfterSec: number;
};

export function rateLimit(req: NextRequest, opts: Options): RateLimitResult {
  const ip = getClientIp(req);
  const now = Date.now();
  maybeCleanup(now);

  const k = `${opts.key}:${ip}`;
  const bucket = buckets.get(k);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(k, { count: 1, resetAt: now + opts.windowMs });
    return { ok: true, retryAfterSec: 0 };
  }

  if (bucket.count >= opts.limit) {
    return { ok: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { ok: true, retryAfterSec: 0 };
}
