export const LOCALES = ["en", "ar"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Cookie holding an explicit choice. Once set, geo never overrides it. */
export const LOCALE_COOKIE = "bluescaler_locale";

/** Query param the switcher uses to hand the choice to middleware. */
export const LOCALE_QUERY_PARAM = "setlang";

/** A year — the choice should outlive the session that made it. */
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/**
 * Visitors from these countries get Arabic unless they've chosen otherwise.
 * ISO 3166-1 alpha-2, matched against Vercel's x-vercel-ip-country header.
 */
export const ARABIC_FIRST_COUNTRIES = new Set([
  "AE", // United Arab Emirates
  "SA", // Saudi Arabia
  "QA", // Qatar
  "KW", // Kuwait
  "BH", // Bahrain
  "OM", // Oman
  "JO", // Jordan
  "LB", // Lebanon
  "EG", // Egypt
  "IQ", // Iraq
  "SY", // Syria
  "YE", // Yemen
  "PS", // Palestine
  "LY", // Libya
  "SD", // Sudan
  "MA", // Morocco
  "DZ", // Algeria
  "TN", // Tunisia
  "MR", // Mauritania
]);

export function isLocale(value: string | null | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function dirFor(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export const LOCALE_LABELS: Record<Locale, { native: string; short: string }> = {
  en: { native: "English", short: "EN" },
  ar: { native: "العربية", short: "AR" },
};

/**
 * English lives at the root so existing links keep working; Arabic is
 * prefixed. Middleware rewrites the root paths onto the [locale] segment.
 */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** Strips a locale prefix, giving the path as the default locale serves it. */
export function stripLocale(pathname: string): string {
  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}
