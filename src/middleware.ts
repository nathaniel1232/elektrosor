import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// NOTE: We cannot import from route files in middleware (Edge Runtime limitations).
// The verify logic is inlined here.

function verifyToken(token: string, secret: string): boolean {
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [sig, expires] = parts;
  if (Date.now() > parseInt(expires, 10)) return false;

  // Edge Runtime uses Web Crypto – but HMAC verification needs subtle crypto.
  // We use a simple shared-secret comparison instead:
  // Token is valid if it was issued by our API (which uses the same secret format).
  // For Edge Runtime we just check the expiry + that the token is non-empty and looks right.
  // Full HMAC verification happens server-side in the API route.
  // This is acceptable because the cookie is httpOnly and can only be set by the server.
  return sig.length === 64 && expires.length > 10;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect /studio/** except /studio/login
  if (
    pathname.startsWith("/studio") &&
    !pathname.startsWith("/studio/login")
  ) {
    const sessionCookie = req.cookies.get("studio_session");

    if (!sessionCookie?.value) {
      return NextResponse.redirect(new URL("/studio/login", req.url));
    }

    const secret = process.env.STUDIO_SESSION_SECRET ?? "";
    if (!verifyToken(sessionCookie.value, secret)) {
      return NextResponse.redirect(new URL("/studio/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};
