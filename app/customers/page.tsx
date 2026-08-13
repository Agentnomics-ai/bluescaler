import type { Metadata } from "next";
import { DemoCTA } from "@/components/DemoCTA";
import { ShoppingBag, UtensilsCrossed, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  CUSTOMER_CASE_STUDIES,
  RESULTS_STATS,
  SIGNUP_URLS,
} from "@/components/site-content";

export const metadata: Metadata = {
  title: "Customers | BlueScaler",
  description:
    "Customer stories and outcomes from GCC businesses using BlueScaler AI agents.",
};

/* ── data ──────────────────────────────────────────────────────── */

const HERO_WINS = [
  { metric: "20%",  label: "more orders",         detail: "Starchandco · UAE" },
  { metric: "2min", label: "response time",      detail: "Retail · UAE" },
  { metric: "3×",   label: "more bookings",      detail: "Automotive · KSA" },
];

const CASE_META: Record<string, { big: string; label: string; sub: string; accent: "gold" | "teal" }> = {
  "Starchandco":            { big: "20%",  label: "more orders",    sub: "and 2× brand awareness",   accent: "gold" },
  "UAE retail chain":       { big: "2min", label: "response time",  sub: "down from 4 hours",         accent: "teal" },
  "KSA automotive service": { big: "3×",   label: "more bookings",  sub: "zero extra staff",          accent: "gold" },
};

const INDUSTRY_ICON: Record<string, LucideIcon> = {
  "Restaurants & F&B": UtensilsCrossed,
  "Retail":            ShoppingBag,
  "Automotive":        Wrench,
};

const SERVICE_SLOTS = [
  { time: "8:30AM",  service: "Oil Change",      via: "WhatsApp" },
  { time: "12:00PM", service: "Brake Inspection", via: "Website"  },
  { time: "4:00PM",  service: "Full Service",     via: "WhatsApp" },
];

const TESTIMONIALS = [
  {
    role: "Kwan, Starchandco",
    quote: "Agentnomics has been the best thing our company has incorporated since launch. From customer inquiries to marketing, it really gave us that freedom back. Who doesn't want to make money and also have freedom to do it?",
    industry: "Restaurants & F&B",
  },
  {
    role: "Retail Manager",
    quote: "Customers now get answers in minutes, and our staff can focus on higher-value work.",
    industry: "Retail",
  },
  {
    role: "Clinic Owner",
    quote: "The biggest change was fewer repetitive calls and a calmer front desk.",
    industry: "Healthcare",
  },
];

/* ── page ──────────────────────────────────────────────────────── */

export default function CustomersPage() {
  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#060C18] px-5 pb-24 pt-20 sm:px-8 lg:pb-32 lg:pt-28">
        <div className="glow-orb-gold orb-breathe pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px]" aria-hidden />
        <div className="glow-orb-teal orb-breathe-delayed pointer-events-none absolute -right-60 top-0 h-[500px] w-[500px]" aria-hidden />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="hero-in mb-8">
            <span className="brand-pill">Customers</span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h1 className="hero-in hero-in-d1 text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl lg:text-7xl">
                Proof for buyers<br />
                who need to see it{" "}
                <span className="text-gold-shimmer">working.</span>
              </h1>
              <p className="hero-in hero-in-d2 mt-6 max-w-xl text-xl leading-8 text-[#C8D2E2]">
                Real GCC businesses using BlueScaler agents to save time,
                reduce costs, and serve customers better.
              </p>
              <div className="hero-in hero-in-d3 mt-8 flex flex-wrap gap-4">
                <a href={SIGNUP_URLS.conversational} className="btn-primary">Join Them →</a>
                <DemoCTA className="btn-ghost">Book a Demo</DemoCTA>
              </div>
            </div>

            {/* Verified outcomes card */}
            <div className="hero-card-in glass-card gradient-border-gold rounded-2xl p-5">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6B7E9A]">
                Verified outcomes
              </p>
              <p className="mb-5 text-sm font-black text-[#F7F4EF]">
                GCC businesses, measured results
              </p>
              <div className="space-y-3">
                {HERO_WINS.map(({ metric, label, detail }) => (
                  <div
                    key={metric}
                    className="flex items-center gap-4 rounded-xl border border-white/6 bg-white/3 p-4"
                  >
                    <p className="w-16 shrink-0 text-right text-2xl font-black text-[#C8A96E]">
                      {metric}
                    </p>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#F7F4EF]">{label}</p>
                      <p className="text-xs text-[#9AABC3]">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS RIBBON ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-16 sm:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/6 lg:grid-cols-4">
            {RESULTS_STATS.map(([stat, label], i) => (
              <div
                key={label}
                className={`scroll-reveal flex flex-col items-center justify-center bg-white/[0.025] px-6 py-8 text-center ${i % 2 === 1 ? "scroll-reveal-d1" : ""}`}
              >
                <p className="text-5xl font-black text-[#C8A96E] sm:text-6xl">{stat}</p>
                <p className="mt-2 max-w-[16ch] text-sm font-semibold leading-5 text-[#9AABC3]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060C18] px-5 py-10 sm:px-8">
        <div className="relative mx-auto max-w-7xl">
          <p className="scroll-reveal text-center text-xs font-bold uppercase tracking-[0.2em] text-[#4A5568]">
            Trusted by businesses across the GCC
          </p>
        </div>
      </section>

      {/* ── CASE STUDIES BENTO ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-teal pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] opacity-30" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="brand-pill mb-6 inline-flex">Case Studies</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Real outcomes, real{" "}
              <span className="text-gold">GCC businesses.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CUSTOMER_CASE_STUDIES.map((study, i) => {
              const meta   = CASE_META[study.company];
              const Icon   = INDUSTRY_ICON[study.industry] ?? Wrench;
              const isGold = meta?.accent === "gold";
              const iconBg     = isGold ? "bg-[#C8A96E]/10"  : "bg-[#1A8FA0]/10";
              const iconClass  = isGold ? "text-[#C8A96E]"   : "text-[#7CE2EF]";
              const accentLine = isGold ? "from-[#C8A96E]/70" : "from-[#1A8FA0]/70";
              const borderAcc  = isGold ? "border-[#C8A96E]"  : "border-[#7CE2EF]";
              const metricCol  = isGold ? "text-[#C8A96E]"    : "text-[#7CE2EF]";
              const metricBg   = isGold ? "border-[#C8A96E]/20 bg-[#C8A96E]/5" : "border-[#1A8FA0]/20 bg-[#1A8FA0]/5";

              /* ── Featured: Dubai restaurant (col-span-2) ─────── */
              if (i === 0) {
                return (
                  <article
                    key={study.company}
                    className="scroll-reveal glass-card card-lift group relative overflow-hidden rounded-2xl md:col-span-2 lg:col-span-2"
                  >
                    <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${accentLine} to-transparent`} />
                    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:p-8">

                      {/* Left: story */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}>
                              <Icon className={`h-4 w-4 ${iconClass}`} />
                            </span>
                            <div>
                              <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${iconClass}`}>
                                {study.industry}
                              </p>
                              <p className="text-xs text-[#6B7E9A]">{study.country}</p>
                            </div>
                          </div>
                          <h3 className="mt-5 text-xl font-black capitalize text-[#F7F4EF]">
                            {study.company}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-[#9AABC3]">
                            <span className="font-bold text-[#6B7E9A]">Challenge: </span>
                            {study.challenge}
                          </p>
                          <p className={`mt-4 border-l-2 ${borderAcc} pl-4 text-sm font-bold leading-6 text-[#F7F4EF]`}>
                            {study.result}
                          </p>
                        </div>
                        <span className="teal-pill mt-6 self-start">
                          Agent: {study.agent}
                        </span>
                      </div>

                      {/* Right: big metric */}
                      <div className={`flex flex-col items-center justify-center rounded-2xl border ${metricBg} p-6 text-center`}>
                        <p className={`text-7xl font-black sm:text-8xl ${metricCol}`}>
                          {meta?.big}
                        </p>
                        <p className="mt-2 text-lg font-bold text-[#F7F4EF]">{meta?.label}</p>
                        <p className="mt-1 text-sm text-[#9AABC3]">{meta?.sub}</p>
                      </div>
                    </div>
                  </article>
                );
              }

              /* ── Full-width: KSA automotive (col-span-3) ─────── */
              if (i === 2) {
                return (
                  <article
                    key={study.company}
                    className="scroll-reveal glass-card card-lift group relative overflow-hidden rounded-2xl md:col-span-2 lg:col-span-3"
                  >
                    <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${accentLine} to-transparent`} />
                    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:p-8">

                      {/* Left */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3">
                          <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}>
                            <Icon className={`h-4 w-4 ${iconClass}`} />
                          </span>
                          <div>
                            <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${iconClass}`}>
                              {study.industry}
                            </p>
                            <p className="text-xs text-[#6B7E9A]">{study.country}</p>
                          </div>
                        </div>
                        <div className="mt-5 flex items-baseline gap-4">
                          <p className={`text-6xl font-black ${metricCol}`}>{meta?.big}</p>
                          <div>
                            <p className="text-xl font-bold text-[#F7F4EF]">{meta?.label}</p>
                            <p className="text-sm text-[#9AABC3]">{meta?.sub}</p>
                          </div>
                        </div>
                        <p className="mt-5 text-sm leading-6 text-[#9AABC3]">
                          <span className="font-bold text-[#6B7E9A]">Challenge: </span>
                          {study.challenge}
                        </p>
                        <p className={`mt-3 border-l-2 ${borderAcc} pl-3 text-sm font-bold leading-6 text-[#F7F4EF]`}>
                          {study.result}
                        </p>
                        <span className="teal-pill mt-5 self-start">
                          Agent: {study.agent}
                        </span>
                      </div>

                      {/* Right: appointment schedule */}
                      <div className="rounded-xl border border-white/6 bg-black/20 p-4">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7E9A]">
                          Today's schedule · Riyadh
                        </p>
                        <div className="space-y-2">
                          {SERVICE_SLOTS.map(({ time, service, via }) => (
                            <div
                              key={time}
                              className="flex items-center gap-3 rounded-lg border border-white/6 bg-white/3 px-3 py-2.5"
                            >
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96E]" />
                              <p className="flex-1 text-sm font-bold text-[#F7F4EF]">{service}</p>
                              <p className="font-mono text-xs text-[#9AABC3]">{time}</p>
                              <p className="text-xs text-[#7CE2EF]">{via}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 flex items-center justify-between border-t border-white/6 pt-2.5">
                          <p className="text-xs text-[#6B7E9A]">All booked via Mechanic Bot</p>
                          <p className="text-xs font-bold text-[#C8A96E]">3× vs. last quarter</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }

              /* ── Regular: UAE retail (col-span-1) ────────────── */
              return (
                <article
                  key={study.company}
                  className="scroll-reveal scroll-reveal-d1 glass-card card-lift group relative overflow-hidden rounded-xl p-5"
                >
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${accentLine} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}>
                        <Icon className={`h-4 w-4 ${iconClass}`} />
                      </span>
                      <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${iconClass}`}>
                        {study.industry}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#6B7E9A]">{study.country}</span>
                  </div>

                  {/* Metric block */}
                  <div className={`rounded-xl border ${metricBg} p-4 text-center`}>
                    <p className={`text-5xl font-black ${metricCol}`}>{meta?.big}</p>
                    <p className="mt-1 text-sm font-bold text-[#F7F4EF]">{meta?.label}</p>
                    <p className="text-xs text-[#9AABC3]">{meta?.sub}</p>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#9AABC3]">
                    <span className="font-bold text-[#6B7E9A]">Challenge: </span>
                    {study.challenge}
                  </p>
                  <p className={`mt-3 border-l-2 ${borderAcc} pl-3 text-sm font-bold leading-6 text-[#F7F4EF]`}>
                    {study.result}
                  </p>
                  <p className={`mt-4 text-xs font-semibold ${metricCol}`}>
                    Agent: {study.agent}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-gold pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] opacity-30" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal mb-10">
            <span className="brand-pill mb-6 inline-flex">What they say</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              From the people <span className="text-gold">who use it daily.</span>
            </h2>
          </div>

          {/* Featured quote */}
          <blockquote className="scroll-reveal gradient-border-gold glass-card rounded-2xl p-7 sm:p-10">
            <p className="select-none text-7xl font-black leading-none text-[#C8A96E]/25 sm:text-8xl" aria-hidden>
              "
            </p>
            <p className="mt-1 text-xl font-semibold leading-9 text-[#F7F4EF] sm:text-2xl sm:leading-10">
              {TESTIMONIALS[0].quote}
            </p>
            <footer className="mt-6 flex flex-wrap items-center gap-3">
              <span className="teal-pill">{TESTIMONIALS[0].industry}</span>
              <span className="text-sm font-bold text-[#C8A96E]">
                — {TESTIMONIALS[0].role}
              </span>
            </footer>
          </blockquote>

          {/* Two smaller quotes */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {TESTIMONIALS.slice(1).map((t, i) => (
              <blockquote
                key={t.role}
                className={`${i === 0 ? "scroll-reveal" : "scroll-reveal scroll-reveal-d1"} glass-card card-lift rounded-xl p-6`}
              >
                <p className="select-none text-5xl font-black leading-none text-[#C8A96E]/20" aria-hidden>
                  "
                </p>
                <p className="mt-1 text-base leading-7 text-[#F7F4EF]">{t.quote}</p>
                <footer className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="teal-pill py-0.5! text-[10px]!">{t.industry}</span>
                  <span className="text-xs font-bold text-[#C8A96E]">— {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal gradient-border-gold glass-card rounded-2xl p-8 text-center sm:p-14">
            <span className="brand-pill mb-6 inline-flex">Ready to start?</span>
            <h2 className="text-3xl font-black text-[#F7F4EF] sm:text-4xl lg:text-5xl">
              Ready to become our next{" "}
              <span className="text-gold">success story?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#9AABC3]">
              Live in 5 business days. No credit card required.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <DemoCTA className="btn-primary">Book a Demo →</DemoCTA>
              <a href={SIGNUP_URLS.conversational} className="btn-ghost">Start Free</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
