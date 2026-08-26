import { DEFAULT_LOCALE, isLocale } from "@/components/i18n";
import { tr } from "@/components/content/strings";
import type { Metadata } from "next";
import { Globe, Layers, Rocket, Users, Wrench, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PARTNER_EMAIL_URL, PARTNER_TYPES } from "@/components/site-content";

export const metadata: Metadata = {
  title: "Services Partners | BlueScaler",
  description:
    "Partner with BlueScaler to implement AI agents for businesses across the Middle East. We provide the platform — you deliver for your clients.",
};

/* ── data ──────────────────────────────────────────────────────── */

const HOW_IT_WORKS = [
  {
    label: "You",
    items: ["Identify the client need", "Scope the deployment", "Manage the relationship"],
    color: "text-[#C8A96E]",
    border: "border-[#C8A96E]/30",
    bg: "bg-[#C8A96E]/6",
  },
  {
    label: "BlueScaler",
    items: ["Provide the AI platform", "Handle infrastructure & AI", "Support you through delivery"],
    color: "text-[#7CE2EF]",
    border: "border-[#1A8FA0]/30",
    bg: "bg-[#1A8FA0]/6",
  },
  {
    label: "Client",
    items: ["Gets a working AI agent", "Live in days, not months", "Supported end-to-end"],
    color: "text-[#F7F4EF]",
    border: "border-white/10",
    bg: "bg-white/3",
  },
];

const PARTNER_BENEFITS: { title: string; Icon: LucideIcon; body: string; accent: string; iconBg: string; iconColor: string }[] = [
  {
    title: "We provide the platform",
    Icon: Layers,
    body: "No need to build AI infrastructure from scratch. BlueScaler handles the platform, AI models, and uptime — you focus on client delivery.",
    accent: "from-[#1A8FA0]/70",
    iconBg: "bg-[#1A8FA0]/10",
    iconColor: "text-[#7CE2EF]",
  },
  {
    title: "You implement for clients",
    Icon: Wrench,
    body: "Configure, customise, and launch AI agents for your clients. We give you the tools and training to deliver fast.",
    accent: "from-[#C8A96E]/60",
    iconBg: "bg-[#C8A96E]/10",
    iconColor: "text-[#C8A96E]",
  },
  {
    title: "Joint go-to-market",
    Icon: Megaphone,
    body: "Co-branded materials, regional case studies, and business development support to help you win more clients across the GCC.",
    accent: "from-white/20",
    iconBg: "bg-white/5",
    iconColor: "text-[#9AABC3]",
  },
];

const TYPE_META: Record<string, { bestFor: string; accentLine: string; dotColor: string; labelClass: string }> = {
  "Agency Partners": {
    bestFor: "Web & marketing agencies",
    accentLine: "from-[#C8A96E]/70",
    dotColor: "bg-[#C8A96E]",
    labelClass: "text-[#C8A96E]",
  },
  "Systems Integrators": {
    bestFor: "Tech & IT consultancies",
    accentLine: "from-[#1A8FA0]/70",
    dotColor: "bg-[#7CE2EF]",
    labelClass: "text-[#7CE2EF]",
  },
  "Consultants": {
    bestFor: "Strategy & operations advisors",
    accentLine: "from-white/25",
    dotColor: "bg-[#6B7E9A]",
    labelClass: "text-[#9AABC3]",
  },
};

const APPLY_STEPS = [
  { num: "01", label: "Fill in the partner application", time: "5 min" },
  { num: "02", label: "We review and onboard you",       time: "5 days" },
  { num: "03", label: "Start delivering for clients",    time: "Day 6+" },
];

/* ── page ──────────────────────────────────────────────────────── */

export default async function PartnersPage({
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
        <div className="glow-orb-teal orb-breathe pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px]" aria-hidden />
        <div className="glow-orb-gold orb-breathe-delayed pointer-events-none absolute -right-60 top-0 h-[500px] w-[500px]" aria-hidden />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="hero-in mb-8">
            <span className="brand-pill">{tr(locale, "Services Partners")}</span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h1 className="hero-in hero-in-d1 text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl lg:text-7xl">
                {tr(locale, "We provide the platform.")}<br />
                <span className="text-gold-shimmer">
                  {tr(locale, "You deliver for clients.")}
                </span>
              </h1>
              <p className="hero-in hero-in-d2 mt-6 max-w-xl text-xl leading-8 text-[#C8D2E2]">
                {tr(locale, "BlueScaler partners are agencies, system integrators, and consultants who implement AI agents for businesses across the Middle East. We handle the technology — you own the client relationship.")}
              </p>
              <div className="hero-in hero-in-d3 mt-8 flex flex-wrap gap-4">
                <a href={PARTNER_EMAIL_URL} className="btn-primary">
                  {tr(locale, "Become a Partner →")}
                </a>
              </div>
            </div>

            {/* How it works card */}
            <div className="hero-card-in glass-card gradient-border-gold rounded-2xl p-5">
              <p className="mb-5 text-sm font-black text-[#F7F4EF]">{tr(locale, "How it works")}</p>

              <div className="space-y-3">
                {HOW_IT_WORKS.map(({ label, items, color, border, bg }) => (
                  <div
                    key={label}
                    className={`rounded-xl border ${border} ${bg} px-4 py-3.5`}
                  >
                    <p className={`mb-2 text-[10px] font-black uppercase tracking-[0.16em] ${color}`}>
                      {tr(locale, label)}
                    </p>
                    <ul className="space-y-1">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[#9AABC3]">
                          <span className={`h-1 w-1 shrink-0 rounded-full ${color.replace("text-", "bg-")}`} />
                          {tr(locale, item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { stat: "3",      label: "Partner types" },
                  { stat: "5 days", label: "Onboarding"    },
                  { stat: "GCC",    label: "Region"        },
                ].map(({ stat, label }) => (
                  <div key={label} className="rounded-xl bg-white/3 py-3 text-center">
                    <p className="text-lg font-black text-[#F7F4EF]">{tr(locale, stat)}</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#6B7E9A]">{tr(locale, label)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW THE PARTNERSHIP WORKS ───────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-gold pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] opacity-30" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="teal-pill mb-6 inline-flex">{tr(locale, "The partnership model")}</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              {tr(locale, "A clear division of")}<br />
              <span className="text-gold">{tr(locale, "responsibility.")}</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PARTNER_BENEFITS.map((b, i) => {
              const isFeatured = i === 0;
              const delayClass = i === 1 ? "scroll-reveal scroll-reveal-d1" : i === 2 ? "scroll-reveal scroll-reveal-d2" : "scroll-reveal";

              if (isFeatured) {
                return (
                  <article
                    key={b.title}
                    className="scroll-reveal glass-card card-lift group relative overflow-hidden rounded-2xl md:col-span-2 lg:col-span-2"
                  >
                    <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${b.accent} to-transparent`} />
                    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:p-8">
                      <div className="flex flex-col justify-between">
                        <div>
                          <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${b.iconBg}`}>
                            <b.Icon className={`h-5 w-5 ${b.iconColor}`} />
                          </span>
                          <h3 className="mt-5 text-2xl font-black text-[#F7F4EF]">{tr(locale, b.title)}</h3>
                          <p className="mt-3 text-sm leading-6 text-[#9AABC3]">{tr(locale, b.body)}</p>
                        </div>
                        <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#7CE2EF]">
                          {tr(locale, "Built for services businesses")}
                        </p>
                      </div>

                      {/* What's included panel */}
                      <div className="flex flex-col justify-center rounded-xl border border-white/6 bg-black/20 p-5">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#6B7E9A]">
                          {tr(locale, "What BlueScaler provides")}
                        </p>
                        <ul className="space-y-3">
                          {[
                            "AI agent platform",
                            "Infrastructure & hosting",
                            "Model updates & improvements",
                            "Technical support",
                            "Onboarding & training",
                          ].map((item) => (
                            <li key={item} className="flex items-center gap-2.5 text-sm text-[#C8D2E2]">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7CE2EF]" />
                              {tr(locale, item)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={b.title}
                  className={`${delayClass} glass-card card-lift group relative overflow-hidden rounded-xl p-6`}
                >
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${b.accent} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                  <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${b.iconBg}`}>
                    <b.Icon className={`h-5 w-5 ${b.iconColor}`} />
                  </span>
                  <h3 className="text-2xl font-black text-[#F7F4EF]">{tr(locale, b.title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#9AABC3]">{tr(locale, b.body)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNER TYPES ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28">
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="brand-pill mb-6 inline-flex">{tr(locale, "Who we work with")}</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              {tr(locale, "Built for businesses that")}<br />
              <span className="text-gold">{tr(locale, "serve other businesses.")}</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PARTNER_TYPES.map((type, index) => {
              const meta = TYPE_META[type.title];
              const delayClass = index === 1 ? "scroll-reveal scroll-reveal-d1" : index === 2 ? "scroll-reveal scroll-reveal-d2" : "scroll-reveal";

              return (
                <article
                  key={type.title}
                  className={`${delayClass} glass-card card-lift group relative overflow-hidden rounded-xl p-6`}
                >
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${meta?.accentLine ?? "from-white/20"} to-transparent`} />

                  <div className="mb-5">
                    <p className={`text-[11px] font-bold uppercase tracking-[0.16em] ${meta?.labelClass ?? "text-[#9AABC3]"}`}>
                      {meta?.bestFor ? tr(locale, meta.bestFor) : null}
                    </p>
                    <h3 className="mt-1 text-xl font-black text-[#F7F4EF]">{tr(locale, type.title)}</h3>
                  </div>

                  <p className="text-sm leading-6 text-[#9AABC3]">{tr(locale, type.body)}</p>

                  <a
                    href={PARTNER_EMAIL_URL}
                    className="btn-ghost mt-6 flex w-full items-center justify-center text-sm"
                  >
                    {tr(locale, "Get in touch →")}
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW TO APPLY ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-gold pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-15" aria-hidden />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal mb-14 text-center">
            <span className="brand-pill mb-6 inline-flex">{tr(locale, "How to Apply")}</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              {tr(locale, "Let's grow the GCC")}<br />
              <span className="text-gold">{tr(locale, "together.")}</span>
            </h2>
          </div>

          {/* Desktop: horizontal step flow */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-x-[calc(16.66%-1rem)] top-8 h-0 border-t-2 border-dashed border-[#C8A96E]/18" />
            <div className="grid grid-cols-3 gap-6">
              {APPLY_STEPS.map(({ num, label, time }) => (
                <div key={num} className="scroll-reveal flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#C8A96E]/40 bg-[#0B1628]">
                    <p className="text-xl font-black text-[#C8A96E]">{num}</p>
                  </div>
                  <div className="mt-5 glass-card rounded-xl p-5">
                    <p className="font-black text-[#F7F4EF]">{tr(locale, label)}</p>
                    <p className="mt-1.5 text-xs font-bold text-[#7CE2EF]">{tr(locale, time)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="space-y-4 lg:hidden">
            {APPLY_STEPS.map(({ num, label, time }, index) => {
              const delayClass = index === 1 ? "scroll-reveal scroll-reveal-d1" : index === 2 ? "scroll-reveal scroll-reveal-d2" : "scroll-reveal";
              return (
                <div key={num} className={`${delayClass} glass-card rounded-xl p-6`}>
                  <div className="flex items-start gap-5">
                    <p className="text-gold shrink-0 text-3xl font-black">{num}</p>
                    <div>
                      <p className="text-lg font-bold text-[#F7F4EF]">{tr(locale, label)}</p>
                      <p className="mt-1 text-xs font-bold text-[#7CE2EF]">{tr(locale, time)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <a href={PARTNER_EMAIL_URL} className="btn-primary">
              {tr(locale, "Apply to Partner →")}
            </a>
            <p className="mt-4 text-sm text-[#6B7E9A]">
              {tr(locale, "We respond within 2 business days")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
