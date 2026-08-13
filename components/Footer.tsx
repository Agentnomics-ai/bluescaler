import Image from "next/image";
import Link from "next/link";
import { DemoCTA } from "./DemoCTA";
import {
  CONTACT_EMAIL_URL,
  DEMO_BOOKING_URL,
  PARTNER_EMAIL_URL,
  SIGNUP_URLS,
  SUPPORT_EMAIL_URL,
} from "./site-content";

const LOGO_SRC = "/agentnomics_logo.png";

const FOOTER_COLS = [
  {
    heading: "Platform",
    links: [
      { label: "Conversational Agents", href: "/agents" },
      { label: "Analytical Agents", href: "/agents" },
      { label: "No-Code Builder", href: "/agents" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Customers", href: "/customers" },
      { label: "Partners", href: "/partners" },
      { label: "Book a Demo", href: DEMO_BOOKING_URL },
      { label: "Partner Programme", href: PARTNER_EMAIL_URL },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Get Started", href: SIGNUP_URLS.conversational },
      { label: "Contact Sales", href: CONTACT_EMAIL_URL },
      { label: "Support", href: SUPPORT_EMAIL_URL },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

const GCC_REGIONS = ["UAE", "Saudi Arabia", "Qatar", "Kuwait"];

export function Footer() {
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
              Ready to automate?
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#F7F4EF] sm:text-3xl">
              Deploy your first AI agent{" "}
              <span className="text-gold">in days.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SIGNUP_URLS.conversational} className="btn-primary">
              Get Started →
            </a>
            <DemoCTA className="btn-ghost">Book a Demo</DemoCTA>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ──────────────────────────────────── */}
      <div className="relative px-5 pb-10 pt-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

            {/* Brand column */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <Image
                  src={LOGO_SRC}
                  alt="Agentnomics"
                  width={36}
                  height={36}
                  className="size-9 object-contain"
                />
                <span className="leading-tight">
                  <span className="block text-base font-black tracking-tight text-[#F7F4EF]">
                    BlueScaler
                  </span>
                  <span className="block text-[10px] font-medium text-[#6B7E9A]">
                    powered by Agentnomics
                  </span>
                </span>
              </Link>

              <p className="mt-5 max-w-[22ch] text-sm leading-7 text-[#6B7E9A]">
                AI agents built for GCC SMBs — automating conversations and
                unlocking business insights.
              </p>

              {/* Region tags */}
              <div className="mt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4A5568]">
                  GCC coverage
                </p>
                <div className="flex flex-wrap gap-2">
                  {GCC_REGIONS.map((region) => (
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
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4A5568]">
                  {col.heading}
                </p>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href === DEMO_BOOKING_URL ? (
                        <DemoCTA className="text-sm font-medium text-[#6B7E9A] transition-colors hover:text-[#C8A96E]">
                          {link.label}
                        </DemoCTA>
                      ) : link.href.startsWith("/") ? (
                        <Link
                          href={link.href}
                          className="text-sm font-medium text-[#6B7E9A] transition-colors hover:text-[#C8A96E]"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
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
            <p className="text-sm text-[#3A4557]">
              © 2026 Agentnomics. All rights reserved.
            </p>
            <p className="text-sm text-[#3A4557]">
              Built for the Gulf ·{" "}
              <a
                href={SUPPORT_EMAIL_URL}
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
