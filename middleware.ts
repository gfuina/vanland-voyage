import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Vérifier si l'utilisateur tente d'accéder à /administration
  if (request.nextUrl.pathname.startsWith("/administration")) {
    const adminSession = request.cookies.get("admin-session");

    // Si pas de session, rediriger vers la page de login
    if (!adminSession || adminSession.value !== "authenticated") {
      return NextResponse.redirect(new URL("/admin-login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/administration/:path*",
};

