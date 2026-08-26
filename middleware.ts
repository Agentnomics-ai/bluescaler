import { NextResponse, type NextRequest } from "next/server";
import {
  ARABIC_FIRST_COUNTRIES,
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_QUERY_PARAM,
  LOCALES,
  isLocale,
  type Locale,
} from "@/components/i18n";

/** Header the root layout reads to set <html lang> and dir. */
const LOCALE_HEADER = "x-bluescaler-locale";

/**
 * Picks a locale for a visitor who hasn't chosen one: country first (Vercel
 * geo), then the browser's own language preference, then English.
 */
function detectLocale(request: NextRequest): Locale {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (country && ARABIC_FIRST_COUNTRIES.has(country)) return "ar";

  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  // Only the primary preference counts — "en, ar" is an English speaker.
  const preferred = accept.split(",")[0]?.trim() ?? "";
  if (preferred.startsWith("ar")) return "ar";

  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // The language switcher hands its choice over as a query param rather than
  // writing the cookie itself, so the preference is stored HTTP-only-adjacent
  // here and the param never stays in the shared URL.
  const requested = request.nextUrl.searchParams.get(LOCALE_QUERY_PARAM);
  if (isLocale(requested)) {
    const url = request.nextUrl.clone();
    url.searchParams.delete(LOCALE_QUERY_PARAM);
    const response = NextResponse.redirect(url);
    response.cookies.set(LOCALE_COOKIE, requested, {
      path: "/",
      maxAge: LOCALE_COOKIE_MAX_AGE,
      sameSite: "lax",
    });
    return response;
  }

  // The default locale is served from the root, so /en/... would be a second
  // URL for the same page. Send it home rather than let both be indexed.
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url);
  }

  const prefix = LOCALES.find(
    (locale) =>
      locale !== DEFAULT_LOCALE &&
      (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)),
  );

  // An explicitly prefixed path is already unambiguous — serve it as asked.
  if (prefix) {
    const response = NextResponse.next();
    response.headers.set(LOCALE_HEADER, prefix);
    return response;
  }

  const chosen = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(chosen) ? chosen : detectLocale(request);

  // No stored choice and the visitor reads Arabic — send them to the Arabic
  // URL so it's shareable and indexable, not a silently different root.
  if (locale !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    url.search = search;
    return NextResponse.redirect(url);
  }

  // English: rewrite the bare path onto the [locale] segment, keeping the URL.
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set(LOCALE_HEADER, DEFAULT_LOCALE);
  return response;
}

export const config = {
  // Everything except Next internals, the API, and files with an extension.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
