import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { Database } from "@/types/supabase";

async function customMiddleware(req: NextRequest) {
  // Handle Supabase authentication
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  await supabase.auth.getSession(); //updating cookie

  // Internationalization logic
  const intlMiddleware = createIntlMiddleware({
    locales: ["en", "ua"],
    defaultLocale: "en",
  });

  const intlResponse = await intlMiddleware(req);
  if (intlResponse) {
    return intlResponse;
  }

  return res;
}

export default customMiddleware;

// 	Middleware Matcher: The matcher configuration is set to apply the middleware to all routes
// 	except those starting with /api, /_next, /_vercel, or any static files.
// 	This is a standard practice to avoid unnecessary processing on API routes and system paths.
export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
