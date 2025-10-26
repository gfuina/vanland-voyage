import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";
  const pathname = request.nextUrl.pathname;

  // Vérifier le mode maintenance
  if (isMaintenanceMode) {
    // Autoriser l'accès aux ressources statiques et aux API
    const isStaticAsset =
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/images") ||
      pathname.startsWith("/lotties") ||
      pathname.includes(".");

    // Autoriser l'accès à la page de maintenance elle-même
    const isMaintenancePage = pathname === "/maintenance";

    // Vérifier si l'utilisateur a le cookie de bypass
    const bypassCookie = request.cookies.get("maintenance-bypass");
    const hasValidBypass = bypassCookie?.value === "active";

    // Si mode maintenance activé et pas de bypass, rediriger vers /maintenance
    if (!isStaticAsset && !isMaintenancePage && !hasValidBypass) {
      return NextResponse.redirect(new URL("/maintenance", request.url));
    }

    // Si l'utilisateur a le bypass et essaie d'accéder à /maintenance, rediriger vers la home
    if (isMaintenancePage && hasValidBypass) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Vérifier si l'utilisateur tente d'accéder à /administration
  if (pathname.startsWith("/administration")) {
    const adminSession = request.cookies.get("admin-session");

    // Si pas de session, rediriger vers la page de login
    if (!adminSession || adminSession.value !== "authenticated") {
      return NextResponse.redirect(new URL("/admin-login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

