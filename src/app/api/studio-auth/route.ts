import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

function makeToken(secret: string): string {
  const expires = String(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days
  const sig = createHmac("sha256", secret).update(expires).digest("hex");
  return `${sig}.${expires}`;
}

function verifyToken(token: string, secret: string): boolean {
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [sig, expires] = parts;
  if (Date.now() > parseInt(expires)) return false;
  const expected = createHmac("sha256", secret).update(expires).digest("hex");
  try {
    return timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    const correctPassword = process.env.STUDIO_PASSWORD;
    const secret = process.env.STUDIO_SESSION_SECRET;

    if (!correctPassword || !secret) {
      return NextResponse.json(
        { error: "Innlogging er ikke konfigurert. Legg til STUDIO_PASSWORD og STUDIO_SESSION_SECRET i .env.local." },
        { status: 503 }
      );
    }

    // Constant-time comparison
    let valid = false;
    try {
      valid = timingSafeEqual(
        Buffer.from(password ?? ""),
        Buffer.from(correctPassword)
      );
    } catch {
      valid = false;
    }

    if (!valid) {
      return NextResponse.json({ error: "Feil passord." }, { status: 401 });
    }

    const token = makeToken(secret);
    const res = NextResponse.json({ ok: true });
    res.cookies.set("studio_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("studio_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}

// Export for use in middleware (cannot import from route files, so we re-export)
export { verifyToken };
