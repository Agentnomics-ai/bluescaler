import { DEFAULT_LOCALE, isLocale, localizedPath } from "@/components/i18n";
import { tr, trList } from "@/components/content/strings";
import type { Metadata } from "next";
import Link from "next/link";
import { DemoCTA } from "@/components/DemoCTA";
import {
  Clock,
  Globe,
  Hospital,
  Hotel,
  MessageCircle,
  Package,
  ShoppingBag,
  UtensilsCrossed,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { IndustryTabs } from "@/components/IndustryTabs";
import { INDUSTRY_IMPACT } from "@/components/site-content";

export const metadata: Metadata = {
  title: "Industries | BlueScaler",
  description:
    "BlueScaler AI agents for restaurants, retail, automotive services, hospitality, healthcare, and logistics.",
};

const MARKET_SIGNALS: { stat: string; label: string; Icon: LucideIcon }[] = [
  { stat: "6", label: "GCC SMB verticals", Icon: Globe },
  { stat: "24/7", label: "Customer response", Icon: Clock },
  { stat: "1", label: "Shared agent platform", Icon: Zap },
];

const HERO_PREVIEWS = [
  { title: "Restaurants", body: "Bookings, menu questions, order status" },
  { title: "Retail", body: "Inventory, pricing, returns, product queries" },
  { title: "Logistics", body: "Shipment updates, delivery analytics, SLA risk" },
];

const INDUSTRY_META: Record<string, {
  Icon: LucideIcon;
  accentClass: string;
  iconBg: string;
  iconClass: string;
  dotClass: string;
}> = {
  "Restaurants & F&B": { Icon: UtensilsCrossed, accentClass: "from-[#C8A96E]/70", iconBg: "bg-[#C8A96E]/10", iconClass: "text-[#C8A96E]", dotClass: "bg-[#C8A96E]" },
  "Retail":            { Icon: ShoppingBag,     accentClass: "from-[#1A8FA0]/70", iconBg: "bg-[#1A8FA0]/10", iconClass: "text-[#7CE2EF]", dotClass: "bg-[#7CE2EF]" },
  "Automotive":        { Icon: Wrench,          accentClass: "from-[#C8A96E]/70", iconBg: "bg-[#C8A96E]/10", iconClass: "text-[#C8A96E]", dotClass: "bg-[#C8A96E]" },
  "Hospitality":       { Icon: Hotel,           accentClass: "from-[#1A8FA0]/70", iconBg: "bg-[#1A8FA0]/10", iconClass: "text-[#7CE2EF]", dotClass: "bg-[#7CE2EF]" },
  "Healthcare":        { Icon: Hospital,        accentClass: "from-[#C8A96E]/70", iconBg: "bg-[#C8A96E]/10", iconClass: "text-[#C8A96E]", dotClass: "bg-[#C8A96E]" },
  "Logistics":         { Icon: Package,         accentClass: "from-[#1A8FA0]/70", iconBg: "bg-[#1A8FA0]/10", iconClass: "text-[#7CE2EF]", dotClass: "bg-[#7CE2EF]" },
};

const SHIPMENTS = [
  { id: "#SHP-4821", dest: "Dubai Marina",  status: "Delivered",        statusClass: "text-[#C8A96E]" },
  { id: "#SHP-4822", dest: "Abu Dhabi",     status: "In transit",       statusClass: "text-[#7CE2EF]" },
  { id: "#SHP-4823", dest: "Sharjah",       status: "Out for delivery", statusClass: "text-[#7CE2EF]" },
];

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;

  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#060C18] px-5 pb-24 pt-20 sm:px-8 lg:pb-32 lg:pt-28">
        <div className="glow-orb-gold orb-breathe pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px]" aria-hidden />
        <div className="glow-orb-teal orb-breathe-delayed pointer-events-none absolute -right-60 top-0 h-[500px] w-[500px]" aria-hidden />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="hero-in mb-8">
            <span className="brand-pill">{tr(locale, "Industries")}</span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h1 className="hero-in hero-in-d1 text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl lg:text-7xl">
                {tr(locale, "AI agents built")}<br />
                {tr(locale, "for your")}{" "}
                <span className="text-gold-shimmer">{tr(locale, "industry.")}</span>
              </h1>
              <p className="hero-in hero-in-d2 mt-6 max-w-xl text-xl leading-8 text-[#C8D2E2]">
                {tr(locale, "From restaurants to retail, logistics to healthcare — BlueScaler agents plug into how your business already works.")}
              </p>
              <div className="hero-in hero-in-d3 mt-8 flex flex-wrap gap-4">
                <Link href={localizedPath("/agents", locale)} className="btn-primary">{tr(locale, "See the Agents →")}</Link>
                <DemoCTA locale={locale} className="btn-ghost">{tr(locale, "Book a Demo")}</DemoCTA>
              </div>
            </div>

            {/* Market signals card */}
            <div className="hero-card-in glass-card gradient-border-gold rounded-2xl p-5">
              <p className="mb-4 text-sm font-bold text-[#F7F4EF]">{tr(locale, "Market coverage")}</p>
              <div className="grid grid-cols-3 gap-3">
                {MARKET_SIGNALS.map(({ stat, label, Icon }) => (
                  <div key={label} className="rounded-xl bg-white/3 p-4 text-center">
                    <span className="flex justify-center"><Icon className="h-5 w-5 text-[#C8A96E]" /></span>
                    <p className="mt-2 text-2xl font-black text-[#F7F4EF]">{stat}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#9AABC3]">{tr(locale, label)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2.5">
                {HERO_PREVIEWS.map(({ title, body }) => (
                  <div key={title} className="group flex items-center gap-3 rounded-xl border border-white/6 bg-white/3 p-3 transition-colors hover:border-[#1A8FA0]/40 cursor-pointer">
                    <span className="h-full w-0.5 shrink-0 self-stretch rounded-full bg-[#1A8FA0] opacity-0 transition-opacity group-hover:opacity-100" />
                    <div>
                      <p className="font-black text-[#C8A96E]">{tr(locale, title)}</p>
                      <p className="text-sm text-[#9AABC3]">{tr(locale, body)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY TABS ─────────────────────────────────────── */}
      <IndustryTabs locale={locale} />

      {/* ── BUSINESS IMPACT BENTO ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-teal pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] opacity-30" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="teal-pill mb-6 inline-flex">{tr(locale, "Business Impact")}</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              {tr(locale, "One platform,")}<br />
              <span className="text-teal">{tr(locale, "six industries.")}</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
              {tr(locale, "Each vertical gets purpose-built agent flows — not a generic chatbot repurposed for your industry.")}
            </p>
          </div>

          {/* Bento grid */}
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_IMPACT.map((row, i) => {
              const meta = INDUSTRY_META[row.industry] ?? {
                Icon: Zap, accentClass: "from-white/30", iconBg: "bg-white/5", iconClass: "text-[#9AABC3]", dotClass: "bg-[#9AABC3]",
              };
              const { Icon } = meta;
              const capabilities = trList(locale, row.capabilities);

              /* ── Featured: Restaurants & F&B (col-span-2) ─────── */
              if (i === 0) {
                return (
                  <article
                    key={row.industry}
                    className="scroll-reveal glass-card card-lift group relative overflow-hidden rounded-2xl md:col-span-2 lg:col-span-2"
                  >
                    <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${meta.accentClass} to-transparent`} />
                    <div className="grid gap-6 p-6 sm:grid-cols-[1.15fr_0.85fr] lg:p-8">

                      {/* Left: text */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${meta.iconBg}`}>
                            <Icon className={`h-5 w-5 ${meta.iconClass}`} />
                          </span>
                          <span className="brand-pill">{tr(locale, row.industry)}</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-black leading-snug text-[#F7F4EF]">{tr(locale, row.impact)}</h3>
                        <ul className="mt-5 space-y-2.5">
                          {capabilities.map((cap) => (
                            <li key={cap} className="flex items-center gap-2.5 text-sm text-[#9AABC3]">
                              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${meta.dotClass}`} />
                              {cap}
                            </li>
                          ))}
                        </ul>
                        <DemoCTA locale={locale} className="btn-primary-sm mt-6 self-start">{tr(locale, "Book a Demo →")}</DemoCTA>
                      </div>

                      {/* Right: booking mockup */}
                      <div className="flex flex-col gap-3">
                        <div className="rounded-xl border border-[#C8A96E]/25 bg-black/25 p-4">
                          <div className="mb-3 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#C8A96E]" />
                            <p className="text-xs font-bold text-[#C8A96E]">{tr(locale, "Booking confirmed")}</p>
                          </div>
                          <p className="font-black text-[#F7F4EF]">{tr(locale, "Al Bayt Restaurant")}</p>
                          <p className="mt-0.5 text-sm text-[#9AABC3]">{tr(locale, "Tonight · 8PM · 4 guests")}</p>
                          <div className="mt-3 space-y-1.5">
                            <div className="flex items-center gap-2 rounded-lg bg-[#1A8FA0]/10 px-3 py-2">
                              <MessageCircle className="h-3 w-3 shrink-0 text-[#7CE2EF]" />
                              <p className="text-xs text-[#7CE2EF]">{tr(locale, "WhatsApp confirmation sent")}</p>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-white/3 px-3 py-2">
                              <Clock className="h-3 w-3 shrink-0 text-[#6B7E9A]" />
                              <p className="text-xs text-[#9AABC3]">{tr(locale, "Reminder set for 7:30PM")}</p>
                            </div>
                          </div>
                        </div>
                        {/* Mini chat */}
                        <div className="space-y-2 rounded-xl border border-white/6 bg-black/15 p-3">
                          <div className="flex justify-end">
                            <div className="max-w-[85%] rounded-xl rounded-tr-sm bg-[#C8A96E]/15 px-3 py-2">
                              <p className="text-xs text-[#F7F4EF]">{tr(locale, "Book outdoor for 4 at 8 tonight")}</p>
                            </div>
                          </div>
                          <div className="flex items-end gap-1.5">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1A8FA0]/20 text-[9px] font-black text-[#7CE2EF]">A</span>
                            <div className="rounded-xl rounded-bl-sm border border-white/8 bg-white/4 px-3 py-2">
                              <p className="text-xs text-[#C8D2E2]">{tr(locale, "Terrace confirmed at 8PM for 4 guests!")}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }

              /* ── Full-width landscape: Logistics ───────────────── */
              if (i === 5) {
                return (
                  <article
                    key={row.industry}
                    className="scroll-reveal glass-card card-lift group relative overflow-hidden rounded-2xl md:col-span-2 lg:col-span-3"
                  >
                    <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${meta.accentClass} to-transparent`} />
                    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:p-8">

                      {/* Left */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3">
                          <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${meta.iconBg}`}>
                            <Icon className={`h-5 w-5 ${meta.iconClass}`} />
                          </span>
                          <span className="teal-pill">{tr(locale, row.industry)}</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-black leading-snug text-[#F7F4EF]">{tr(locale, row.impact)}</h3>
                        <ul className="mt-4 space-y-2.5">
                          {capabilities.map((cap) => (
                            <li key={cap} className="flex items-center gap-2.5 text-sm text-[#9AABC3]">
                              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${meta.dotClass}`} />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: shipment tracker */}
                      <div className="rounded-xl border border-white/6 bg-black/20 p-4">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7E9A]">
                          {tr(locale, "Active shipments · UAE region")}
                        </p>
                        <div className="space-y-2">
                          {SHIPMENTS.map(({ id, dest, status, statusClass }) => (
                            <div
                              key={id}
                              className="flex items-center justify-between rounded-lg border border-white/6 bg-white/3 px-3 py-2.5"
                            >
                              <div>
                                <p className="font-mono text-[11px] text-[#6B7E9A]">{id}</p>
                                <p className="text-sm font-bold text-[#F7F4EF]">{tr(locale, dest)}</p>
                              </div>
                              <p className={`text-xs font-bold ${statusClass}`}>{tr(locale, status)}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 flex items-center justify-between border-t border-white/6 pt-3">
                          <p className="text-xs text-[#6B7E9A]">{tr(locale, "Automated via Analytical Agent")}</p>
                          <p className="text-xs font-bold text-[#7CE2EF]">{tr(locale, "0 manual calls today")}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }

              /* ── Regular cards: Retail, Automotive, Hospitality, Healthcare ── */
              const delayClass =
                i % 3 === 1 ? "scroll-reveal scroll-reveal-d1"
                : i % 3 === 2 ? "scroll-reveal scroll-reveal-d2"
                : "scroll-reveal";
              return (
                <article
                  key={row.industry}
                  className={`${delayClass} glass-card card-lift group relative overflow-hidden rounded-xl p-5`}
                >
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${meta.accentClass} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${meta.iconBg}`}>
                      <Icon className={`h-4 w-4 ${meta.iconClass}`} />
                    </span>
                    <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${meta.iconClass}`}>
                      {tr(locale, row.industry)}
                    </p>
                  </div>
                  <h3 className="text-lg font-black leading-snug text-[#F7F4EF]">{tr(locale, row.impact)}</h3>
                  <ul className="mt-4 space-y-2">
                    {capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2.5 text-sm text-[#9AABC3]">
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${meta.dotClass}`} />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          {/* ── CTA ───────────────────────────────────────────────── */}
          <div className="scroll-reveal gradient-border-gold glass-card mt-12 rounded-2xl p-8 text-center sm:p-12">
            <span className="brand-pill mb-5 inline-flex">{tr(locale, "Ready to start?")}</span>
            <h2 className="text-3xl font-black text-[#F7F4EF] sm:text-4xl">
              {tr(locale, "Which industry are you")}<br />
              <span className="text-gold">{tr(locale, "transforming today?")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#9AABC3]">
              {tr(locale, "Live in 5 business days. No credit card required to start.")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <DemoCTA locale={locale} className="btn-primary">{tr(locale, "Book a Demo →")}</DemoCTA>
              <Link href={localizedPath("/agents", locale)} className="btn-ghost">{tr(locale, "See the Agents")}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
