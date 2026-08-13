import type { Metadata } from "next";
import { DemoCTA } from "@/components/DemoCTA";
import {
  BarChart3,
  Bot,
  CheckCircle,
  ClipboardList,
  DollarSign,
  Factory,
  Flag,
  Hospital,
  MessageCircle,
  Package,
  Plug,
  Rocket,
  ShoppingBag,
  TrendingUp,
  UtensilsCrossed,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  AGENTS_PAGE_VIDEOS,
  ANALYTICAL_AGENTS,
  CONVERSATIONAL_AGENT_CARDS,
  RESULTS_STATS,
  SIGNUP_URLS,
} from "@/components/site-content";

export const metadata: Metadata = {
  title: "Agents | BlueScaler",
  description:
    "Meet BlueScaler conversational and analytical AI agents for GCC SMBs.",
};

const HERO_EVENTS: { source: string; result: string; time: string; Icon: LucideIcon }[] = [
  { source: "WhatsApp lead", result: "Restaurant booking confirmed", time: "4s", Icon: MessageCircle },
  { source: "Inventory question", result: "Stock risk chart generated", time: "11s", Icon: BarChart3 },
  { source: "Service request", result: "Mechanic slot reserved", time: "8s", Icon: Wrench },
];

const AGENT_CATEGORIES: { label: string; desc: string; Icon: LucideIcon }[] = [
  { label: "Conversations", desc: "Bookings, questions, orders, returns", Icon: MessageCircle },
  { label: "Analytics", desc: "Revenue, inventory, pricing, compliance", Icon: TrendingUp },
  { label: "Builder", desc: "Templates, no-code flows, fast launch", Icon: Zap },
];

const CONV_ICONS: Record<string, LucideIcon> = {
  "Restaurant Bot": UtensilsCrossed,
  "Health Assistant": Hospital,
  "Fairway Concierge": Flag,
  "Retail Bot": ShoppingBag,
  "Mechanic Bot": Wrench,
};

const CONV_PREVIEWS: Record<string, { prompt: string; reply: string }> = {
  "Restaurant Bot": {
    prompt: "Reserve a table for 4 tonight at 8PM",
    reply: "Done! 4 seats confirmed at 8PM. I'll send a reminder 30 mins before.",
  },
  "Health Assistant": {
    prompt: "Book a checkup for next Tuesday",
    reply: "Dr. Al-Hassan has 10AM free. Shall I confirm?",
  },
  "Fairway Concierge": {
    prompt: "Any tee times Saturday morning?",
    reply: "Emirates Club has 8:30AM open. Want me to reserve?",
  },
  "Retail Bot": {
    prompt: "Track my order #2847",
    reply: "Shipped today — arriving Thursday by 6PM.",
  },
  "Mechanic Bot": {
    prompt: "Need an oil change this week",
    reply: "Tomorrow at 2PM. Your Toyota Camry is all set.",
  },
};

const ANALYTICAL_ICONS: Record<string, LucideIcon> = {
  "Sales Analytics Agent": TrendingUp,
  "Inventory Agent": Package,
  "Pricing Agent": DollarSign,
  "Compliance Agent": CheckCircle,
  "Warehouse Agent": Factory,
};

const ANALYTICAL_QUERIES: Record<string, string> = {
  "Inventory Agent": "Which items are running low this week?",
  "Pricing Agent": "Am I priced competitively for my market?",
  "Compliance Agent": "Any missed audit checkpoints this quarter?",
  "Warehouse Agent": "What's my average pick time in Zone B?",
};

const BUILDER_PILLARS: { title: string; Icon: LucideIcon; desc: string }[] = [
  { title: "No-code simplicity", Icon: Zap, desc: "Practical setup for SMB teams that need working agents, not a long implementation project." },
  { title: "Plug into your systems", Icon: Plug, desc: "Connect to your existing data, CRM, calendar, or WhatsApp with no custom engineering." },
  { title: "Live in days", Icon: Rocket, desc: "From sign-up to live agent in 3–5 business days with our onboarding team by your side." },
  { title: "Pre-built templates", Icon: ClipboardList, desc: "Start from a proven template for your industry and customise from there." },
];

export default function AgentsPage() {
  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#060C18] px-5 pb-24 pt-20 sm:px-8 lg:pb-32 lg:pt-28">
        {/* Background video */}
        <video
          src="/videos/agents-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
          aria-hidden
        />

        <div className="glow-orb-gold orb-breathe pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px]" aria-hidden />
        <div className="glow-orb-teal orb-breathe-delayed pointer-events-none absolute -right-60 -top-20 h-[500px] w-[500px]" aria-hidden />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="hero-in mb-8">
            <span className="brand-pill">Agents</span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <h1 className="hero-in hero-in-d1 text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl lg:text-7xl">
                Meet your<br />
                <span className="text-gold-shimmer">AI agents.</span>
              </h1>
              <p className="hero-in hero-in-d2 mt-6 max-w-xl text-xl leading-8 text-[#C8D2E2]">
                Ready-to-deploy agents for customer conversations and business
                analytics. Go live in days, not months.
              </p>
              <div className="hero-in hero-in-d3 mt-8 flex flex-wrap gap-4">
                <a href={SIGNUP_URLS.conversational} className="btn-primary">
                  Sign Up →
                </a>
                <DemoCTA className="btn-ghost">Book a Demo</DemoCTA>
              </div>

              <div className="hero-in hero-in-d4 mt-10 flex flex-wrap gap-3">
                {AGENT_CATEGORIES.map(({ label, desc, Icon }) => (
                  <div key={label} className="glass-card rounded-xl px-4 py-3">
                    <p className="flex items-center gap-2 font-black text-[#F7F4EF]">
                      <Icon className="h-4 w-4 text-[#C8A96E]" /> {label}
                    </p>
                    <p className="mt-1 text-xs text-[#9AABC3]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-card-in glass-card gradient-border-gold rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-white/8 px-5 py-4">
                <div>
                  <p className="text-sm font-black text-[#F7F4EF]">Live agent desk</p>
                  <p className="mt-0.5 text-xs text-[#9AABC3]">Website · WhatsApp · Analytics</p>
                </div>
                <span className="teal-pill shrink-0">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping-slow absolute h-full w-full rounded-full bg-[#7CE2EF] opacity-70" />
                    <span className="relative flex h-2 w-2 rounded-full bg-[#7CE2EF]" />
                  </span>
                  24/7 active
                </span>
              </div>
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="aspect-video bg-[#060C18] lg:aspect-auto">
                  <video
                    src={AGENTS_PAGE_VIDEOS[0].videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full min-h-52 w-full object-cover"
                  />
                </div>
                <div className="grid content-center gap-3 p-5">
                  {HERO_EVENTS.map(({ source, result, time, Icon }) => (
                    <div key={result} className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/3 p-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                        <Icon className="h-4 w-4 text-[#9AABC3]" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#C8A96E]">{source}</p>
                        <p className="mt-1 text-sm font-bold text-[#F7F4EF]">{result}</p>
                      </div>
                      <p className="shrink-0 text-base font-black text-[#7CE2EF]">{time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONVERSATIONAL AGENTS ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-gold pointer-events-none absolute -right-48 -top-48 h-[560px] w-[560px] opacity-40" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="brand-pill mb-6 inline-flex">Conversational Agents</span>
              <h2 className="text-4xl font-black leading-tight text-[#F7F4EF] sm:text-5xl">
                Aria handles your<br />
                <span className="text-gold">customer support.</span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
                AI-powered chat across your website, WhatsApp, and app — 24/7, without hiring extra staff.
              </p>
            </div>
            {/* Quick stats */}
            <div className="flex shrink-0 gap-6 text-right">
              {[["24/7", "Coverage"], ["< 5 min", "Setup"], ["Web + WA", "Channels"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-gold text-xl font-black">{val}</p>
                  <p className="mt-0.5 text-xs font-bold text-[#6B7E9A]">{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bento grid — featured first card spans 2 rows */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CONVERSATIONAL_AGENT_CARDS.map((agent, i) => {
              const Icon = CONV_ICONS[agent.name] ?? Bot;
              const preview = CONV_PREVIEWS[agent.name];

              if (i === 0) {
                /* ── Featured: Restaurant Bot ── */
                return (
                  <article
                    key={agent.name}
                    className="scroll-reveal glass-card card-lift group relative overflow-hidden rounded-2xl p-6 md:col-span-2 lg:col-span-1 lg:row-span-2"
                  >
                    {/* Always-visible gold accent line */}
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-[#C8A96E]/70 to-transparent" />

                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C8A96E]/10">
                        <Icon className="h-5 w-5 text-[#C8A96E]" />
                      </span>
                      <div className="flex gap-1.5">
                        <span className="teal-pill py-0.5! text-[10px]!">Website</span>
                        <span className="teal-pill py-0.5! text-[10px]!">WhatsApp</span>
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-black text-[#F7F4EF]">{agent.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#9AABC3]">{agent.tagline}</p>

                    {/* Live chat preview */}
                    <div className="mt-5 space-y-2.5 rounded-xl border border-white/6 bg-black/20 p-4">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6B7E9A]">
                        <span className="mr-2 inline-flex h-1.5 w-1.5 rounded-full bg-[#7CE2EF]" />
                        Live conversation
                      </p>
                      {/* User bubble */}
                      <div className="flex justify-end">
                        <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-[#C8A96E]/15 px-3.5 py-2.5">
                          <p className="text-sm text-[#F7F4EF]">{preview.prompt}</p>
                        </div>
                      </div>
                      {/* Agent bubble */}
                      <div className="flex items-end gap-2">
                        <span className="mb-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A8FA0]/20 text-[10px] font-black text-[#7CE2EF]">A</span>
                        <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-white/8 bg-white/4 px-3.5 py-2.5">
                          <p className="text-sm text-[#C8D2E2]">{preview.reply}</p>
                        </div>
                      </div>
                      {/* Second user message */}
                      <div className="flex justify-end">
                        <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-[#C8A96E]/15 px-3.5 py-2.5">
                          <p className="text-sm text-[#F7F4EF]">Do you have outdoor seating?</p>
                        </div>
                      </div>
                      <div className="flex items-end gap-2">
                        <span className="mb-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A8FA0]/20 text-[10px] font-black text-[#7CE2EF]">A</span>
                        <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-white/8 bg-white/4 px-3.5 py-2.5">
                          <p className="text-sm text-[#C8D2E2]">Yes! Our terrace overlooks the marina.</p>
                        </div>
                      </div>
                    </div>

                    <a href={SIGNUP_URLS.conversational} className="btn-primary mt-6 w-full justify-center">
                      Sign Up Today
                    </a>
                  </article>
                );
              }

              /* ── Regular agent cards ── */
              const delayClass = i % 2 === 0 ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal scroll-reveal-d2";
              return (
                <article
                  key={agent.name}
                  className={`${delayClass} glass-card card-lift group relative overflow-hidden rounded-xl p-5`}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-[#C8A96E] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C8A96E]/10">
                      <Icon className="h-4 w-4 text-[#C8A96E]" />
                    </span>
                    <span className="teal-pill py-0.5! text-[10px]!">WhatsApp</span>
                  </div>
                  <h3 className="mt-3 text-base font-black text-[#F7F4EF]">{agent.name}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-[#9AABC3]">{agent.tagline}</p>

                  {preview && (
                  <div className="mt-4 space-y-1.5 rounded-xl border border-white/6 bg-black/15 p-3">
                    <div className="flex justify-end">
                      <div className="max-w-[90%] rounded-xl rounded-tr-sm bg-[#C8A96E]/12 px-2.5 py-1.5">
                        <p className="text-xs text-[#F7F4EF]">{preview.prompt}</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-1.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1A8FA0]/20 text-[9px] font-black text-[#7CE2EF]">A</span>
                      <div className="rounded-xl rounded-bl-sm border border-white/6 bg-white/4 px-2.5 py-1.5">
                        <p className="text-xs text-[#C8D2E2]">{preview.reply}</p>
                      </div>
                    </div>
                  </div>
                  )}

                  <a href={SIGNUP_URLS.conversational} className="btn-primary mt-4 w-full justify-center py-2! px-4! text-sm!">
                    Sign Up Today
                  </a>
                </article>
              );
            })}
          </div>

          {/* Videos */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {AGENTS_PAGE_VIDEOS.slice(1).map((video) => (
              <article key={video.title}>
                <div className="glass-card overflow-hidden rounded-xl">
                  <div className="aspect-video">
                    <video
                      src={video.videoSrc}
                      controls
                      className="h-full w-full"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#F7F4EF]">{video.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANALYTICAL AGENTS ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-teal orb-breathe pointer-events-none absolute -bottom-40 -left-40 h-[560px] w-[560px]" aria-hidden />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal mb-12 max-w-3xl">
            <span className="teal-pill mb-6 inline-flex">Analytical Agents</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Ask your business data<br />
              <span className="text-teal">questions.</span>
            </h2>
            <p className="mt-5 text-xl leading-8 text-[#C8D2E2]">
              Get instant answers, charts, and recommendations — just ask in plain English.
            </p>
          </div>

          {/* Bento grid — Sales Analytics featured, spans 2 rows */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {/* ── Featured: Sales Analytics ── */}
            <article className="scroll-reveal glass-card card-lift group relative overflow-hidden rounded-2xl p-6 md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-[#1A8FA0]/70 to-transparent" />

              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1A8FA0]/10">
                <TrendingUp className="h-5 w-5 text-[#7CE2EF]" />
              </span>
              <h3 className="mt-4 text-xl font-black text-[#F7F4EF]">{ANALYTICAL_AGENTS[0].name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#9AABC3]">{ANALYTICAL_AGENTS[0].description}</p>

              {/* Sample query */}
              <div className="mt-5 rounded-xl border border-[#1A8FA0]/25 bg-[#1A8FA0]/6 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1A8FA0]">Sample query</p>
                <p className="mt-1 text-sm font-semibold text-[#F7F4EF]">&ldquo;What were my top revenue days last month?&rdquo;</p>
              </div>

              {/* Trendline */}
              <div className="mt-4 overflow-hidden rounded-xl border border-white/6 bg-black/20 px-4 pb-4 pt-3">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B7E9A]">Revenue · 30 days</p>
                <svg viewBox="0 0 280 56" className="h-14 w-full" preserveAspectRatio="none" aria-hidden>
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7CE2EF" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#7CE2EF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 50 L35 44 L70 38 L105 30 L140 22 L175 15 L210 10 L245 7 L280 4"
                    fill="none"
                    stroke="#7CE2EF"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeOpacity="0.75"
                  />
                  <path
                    d="M0 50 L35 44 L70 38 L105 30 L140 22 L175 15 L210 10 L245 7 L280 4 L280 56 L0 56 Z"
                    fill="url(#areaGrad)"
                  />
                </svg>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xs text-[#4A5568]">Last 30 days</p>
                  <p className="text-sm font-black text-[#7CE2EF]">+23% ↑</p>
                </div>
              </div>

              <a href={SIGNUP_URLS.analytical} className="btn-primary mt-5 w-full justify-center">
                Sign Up Today
              </a>
            </article>

            {/* ── Regular analytical agent cards ── */}
            {ANALYTICAL_AGENTS.slice(1).map((agent, i) => {
              const Icon = ANALYTICAL_ICONS[agent.name] ?? BarChart3;
              const query = ANALYTICAL_QUERIES[agent.name];
              const delayClass = i % 2 === 0 ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal scroll-reveal-d2";
              return (
                <article
                  key={agent.name}
                  className={`${delayClass} glass-card card-lift group relative overflow-hidden rounded-xl p-5`}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-[#1A8FA0] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A8FA0]/10">
                    <Icon className="h-4 w-4 text-[#7CE2EF]" />
                  </span>
                  <h3 className="mt-3 text-base font-black text-[#F7F4EF]">{agent.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#9AABC3]">{agent.description}</p>
                  {query && (
                    <div className="mt-4 rounded-lg border border-[#1A8FA0]/18 bg-[#1A8FA0]/5 px-3 py-2">
                      <p className="text-xs font-medium text-[#7CE2EF]">&ldquo;{query}&rdquo;</p>
                    </div>
                  )}
                  <a
                    href={SIGNUP_URLS.analytical}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#C8A96E] transition-colors hover:text-[#E8C47A]"
                  >
                    Sign Up →
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NO-CODE BUILDER ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-gold pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 opacity-30" aria-hidden />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="brand-pill mb-6 inline-flex">No-Code Builder</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              Build your own agent.<br />
              <span className="text-gold">No code needed.</span>
            </h2>
            <p className="mt-5 text-xl leading-8 text-[#C8D2E2]">
              Four steps from sign-up to a live AI agent working for your business.
            </p>
          </div>

          {/* Desktop: horizontal step flow */}
          <div className="relative mt-14 hidden lg:block">
            {/* Connecting dashed line through all badge centres */}
            <div className="absolute inset-x-[calc(12.5%-1rem)] top-7 h-0 border-t-2 border-dashed border-[#C8A96E]/18" />

            <div className="grid grid-cols-4 gap-6">
              {BUILDER_PILLARS.map((pillar, i) => (
                <div key={pillar.title} className="flex flex-col items-center text-center">
                  {/* Number badge — sits over the dashed line */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A96E]/30 bg-[#0B1628]">
                    <div className="absolute inset-0 rounded-full bg-[#C8A96E]/8" />
                    <p className="relative text-base font-black text-[#C8A96E]">0{i + 1}</p>
                  </div>

                  {/* Icon box */}
                  <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/8 bg-white/3">
                    <pillar.Icon className="h-5 w-5 text-[#C8A96E]" />
                  </span>

                  <h3 className="mt-4 text-base font-black text-[#F7F4EF]">{pillar.title}</h3>
                  <p className="mx-auto mt-2 max-w-[22ch] text-sm leading-6 text-[#9AABC3]">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet: 2×2 glass grid */}
          <div className="mt-10 grid grid-cols-2 gap-4 lg:hidden">
            {BUILDER_PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`${i % 2 === 1 ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal"} glass-card card-lift rounded-xl p-5`}
              >
                <p className="text-gold text-2xl font-black">0{i + 1}</p>
                <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8A96E]/10">
                  <pillar.Icon className="h-4 w-4 text-[#C8A96E]" />
                </span>
                <h3 className="mt-3 text-sm font-black text-[#F7F4EF]">{pillar.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#9AABC3]">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="scroll-reveal mt-12 text-center">
            <DemoCTA className="btn-primary">Book a Demo →</DemoCTA>
          </div>
        </div>
      </section>

      {/* ── RESULTS + CTA ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28">
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS_STATS.map(([stat, label], i) => {
              const delayClass = i % 2 === 1 ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal";
              return (
                <div key={label} className={`${delayClass} glass-card rounded-xl p-6 text-center`}>
                  <p className="text-gold text-4xl font-black">{stat}</p>
                  <p className="mt-2 text-sm font-semibold text-[#9AABC3]">{label}</p>
                </div>
              );
            })}
          </div>

          <div className="scroll-reveal glass-card mt-8 rounded-2xl p-6 text-center sm:p-10">
            <h2 className="text-3xl font-black text-[#F7F4EF] sm:text-4xl">
              Ready to see the agents<br />
              <span className="text-gold">in action?</span>
            </h2>
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
