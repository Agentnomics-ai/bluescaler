import Image from "next/image";
import Link from "next/link";
import { DemoCTA } from "./DemoCTA";
import { getCopy } from "./content/site";
import { localizedPath, type Locale } from "./i18n";
import {
  CONTACT_EMAIL_URL,
  PARTNER_EMAIL_URL,
  SIGNUP_URLS,
  SUPPORT_EMAIL_URL,
} from "./site-content";

const LOGO_SRC = "/agentnomics_logo.png";

/** Link tokens the copy uses so translated labels never carry a mailto. */
const HREF_TOKENS: Record<string, string> = {
  "contact-email": CONTACT_EMAIL_URL,
  "support-email": SUPPORT_EMAIL_URL,
  "partner-email": PARTNER_EMAIL_URL,
};

export function Footer({ locale }: { locale: Locale }) {
  const t = getCopy(locale).footer;

  return (
    <footer className="relative overflow-hidden bg-[#030609]">
      {/* Gold gradient top line */}
      <div className="h-px bg-linear-to-r from-transparent via-[rgba(200,169,110,0.35)] to-transparent" />

      {/* Subtle background orb */}
      <div
        className="footer-orb pointer-events-none absolute -bottom-48 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full"
        aria-hidden
      />

      {/* ── CTA strip ─────────────────────────────────────────── */}
      <div className="relative border-b border-white/5 px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8A96E]">
              {t.ctaEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#F7F4EF] sm:text-3xl">
              {t.ctaTitle} <span className="text-gold">{t.ctaAccent}</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SIGNUP_URLS.conversational} className="btn-primary">
              {t.getStarted}
            </a>
            <DemoCTA locale={locale} className="btn-ghost">
              {t.bookDemo}
            </DemoCTA>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ──────────────────────────────────── */}
      <div className="relative px-5 pb-10 pt-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
            {/* Brand column */}
            <div>
              <Link
                href={localizedPath("/", locale)}
                className="inline-flex items-center gap-3"
              >
                <Image
                  src={LOGO_SRC}
                  alt="Agentnomics"
                  width={36}
                  height={36}
                  className="size-9 object-contain"
                />
                <span className="leading-tight">
                  <span className="block text-base font-black tracking-tight text-[#F7F4EF]">
                    {getCopy(locale).nav.brand}
                  </span>
                  <span className="block text-[10px] font-medium text-[#6B7E9A]">
                    {getCopy(locale).nav.brandSub}
                  </span>
                </span>
              </Link>

              <p className="mt-5 max-w-[28ch] text-sm leading-7 text-[#6B7E9A]">
                {t.tagline}
              </p>

              {/* Region tags */}
              <div className="mt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4A5568]">
                  {t.coverage}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.regions.map((region) => (
                    <span
                      key={region}
                      className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-[11px] font-semibold text-[#6B7E9A]"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link columns */}
            {t.columns.map((col) => (
              <div key={col.heading}>
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4A5568]">
                  {col.heading}
                </p>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href === "demo" ? (
                        <DemoCTA
                          locale={locale}
                          className="text-sm font-medium text-[#6B7E9A] transition-colors hover:text-[#C8A96E]"
                        >
                          {link.label}
                        </DemoCTA>
                      ) : link.href.startsWith("/") ? (
                        <Link
                          href={localizedPath(link.href, locale)}
                          className="text-sm font-medium text-[#6B7E9A] transition-colors hover:text-[#C8A96E]"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={HREF_TOKENS[link.href] ?? link.href}
                          className="text-sm font-medium text-[#6B7E9A] transition-colors hover:text-[#C8A96E]"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Bottom bar ──────────────────────────────────────── */}
          <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#3A4557]">{t.rights}</p>
            <p className="text-sm text-[#3A4557]">
              {t.builtFor}{" "}
              <a
                href={SUPPORT_EMAIL_URL}
                dir="ltr"
                className="text-[#6B7E9A] transition-colors hover:text-[#C8A96E]"
              >
                support@agentnomics.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
