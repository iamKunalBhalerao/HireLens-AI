import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define static files, images, etc. to skip middleware logic
  const isStaticFile =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/images");

  if (isStaticFile) {
    return NextResponse.next();
  }

  const isAuthPage = pathname.startsWith("/auth");
  const isHomePage = pathname === "/";

  const accessToken = request.cookies.get("accessToken")?.value;

  let isValidUser = false;

  if (accessToken) {
    try {
      // Validate the token with the backend auth/me endpoint
      const response = await fetch("http://localhost:5000/api/v1/auth/me", {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
      });

      if (response.ok) {
        const body = await response.json();
        // Checking if response is successful and user data exists
        if (body && (body.success || body.data)) {
          isValidUser = true;
        }
      }
    } catch (error) {
      console.error("Middleware auth check failed:", error);
      isValidUser = false;
    }
  }

  // If user is valid and trying to access signin/signup page, redirect to home page
  if (isValidUser && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If user is NOT valid and trying to access a protected page (not home and not auth page)
  if (!isValidUser && !isHomePage && !isAuthPage) {
    const loginUrl = new URL("/auth/signin", request.url);
    loginUrl.searchParams.set("from", pathname);

    const response = NextResponse.redirect(loginUrl);
    // Invalidate cookies if they were invalid/expired
    if (accessToken) {
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
    }
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
