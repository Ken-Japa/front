import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isHomePage = request.nextUrl.pathname === "/";

  // If it's homepage and user is authenticated, redirect to dashboard
  if (isHomePage && token) {
    return NextResponse.redirect(new URL("/visao-economia", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // Only run middleware on homepage
};
