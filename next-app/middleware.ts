import { NextRequest, NextResponse } from "next/server";

/**
 * API Key middleware for Next.js API routes.
 * Protects /api/projects and /api/testimonials with BW_API_KEY env var.
 * /api/contact and /api/health remain public.
 */

const PROTECTED = ["/api/projects", "/api/testimonials"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only enforce on protected routes
  if (!PROTECTED.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const apiKey = process.env.BW_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured on server" }, { status: 503 });
  }

  const provided =
    req.headers.get("x-api-key") ||
    req.nextUrl.searchParams.get("api_key") ||
    "";

  if (provided !== apiKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/projects/:path*", "/api/testimonials/:path*"],
};
