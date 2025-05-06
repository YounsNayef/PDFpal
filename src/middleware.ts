import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware(req) {
    // You can add custom middleware logic here if needed
  },
  {
    // Protect all routes except public ones
    publicPaths: [
      "/",
      "/api/auth/callback",
      "/api/trpc/authCallback",
      "/auth-callback",
    ],
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
