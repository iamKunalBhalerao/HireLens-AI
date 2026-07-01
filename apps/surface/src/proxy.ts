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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/auth/me`,
        {
          headers: {
            Cookie: `accessToken=${accessToken}`,
          },
        },
      );

      if (response.ok) {
        const body = await response.json();
        if (body && (body.success || body.data)) {
          isValidUser = true;
        }
      }
    } catch (error) {
      console.error("Middleware auth check failed:", error);
      isValidUser = false;
    }
  }

  if (isValidUser && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isValidUser && !isHomePage && !isAuthPage) {
    const loginUrl = new URL("/auth/signin", request.url);
    loginUrl.searchParams.set("from", pathname);

    const response = NextResponse.redirect(loginUrl);
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
