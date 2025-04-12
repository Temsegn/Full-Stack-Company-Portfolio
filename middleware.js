import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = createRouteMatcher([
  "/sign-in(.*)", // Include subpaths for Clerk’s sign-in flow
  "/sign-up(.*)", // Include subpaths for Clerk’s sign-up flow (e.g., /sign-up/verify-email-address)
  "/",
  "/about",
  "/about/(.*)",
  "/course/(.*)",
  "/services",
  "/blog",
  "/blog/(.*)",

  "/contact",
]);

export default clerkMiddleware(async (auth, req) => {
  const authData = await auth();
  const { userId } = authData;
  const isPublicRoute = publicRoutes(req);
  const pathname = req.nextUrl.pathname;

  console.log(
    "Path:",
    pathname,
    "User ID:",
    userId,
    "Is Public?",
    isPublicRoute
  );

  // Allow Clerk’s sign-up and sign-in flows to proceed without interference
  if (pathname.startsWith("/sign-up") || pathname.startsWith("/sign-in")) {
    return NextResponse.next(); // Let Clerk handle these routes fully
  }

  // Redirect unauthenticated users from protected routes
  if (!userId && !isPublicRoute) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    console.log("Redirecting to:", signInUrl.toString());
    return NextResponse.redirect(signInUrl);
  }

  // Redirect authenticated users away from sign-in page
  if (userId && pathname.startsWith("/sign-in")) {
    console.log("User signed in, redirecting to /course");
    return NextResponse.redirect(new URL("/course", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"],
};
