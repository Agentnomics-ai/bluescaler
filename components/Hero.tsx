import { ArrowRight, MessageCircle, Sparkles, UtensilsCrossed } from "lucide-react";
import { DemoCTA } from "./DemoCTA";

type AgentIcon = typeof MessageCircle;

/** Every agent starts on the same conversational-agent signup. */
const SIGNUP_URL = "https://app.agentnomics.ai/signup/conversational-agent";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#060C18] px-5 pb-24 pt-20 sm:px-8 lg:pb-32 lg:pt-28"
    >
      {/* Background video */}
      <video
        src="/videos/platform-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover opacity-20 blur-[3px]"
        aria-hidden
      />

      {/* Scrim — the hero video has its own typography in it; darken and
          defocus it so it reads as ambient motion, not competing copy */}
      <div className="pointer-events-none absolute inset-0 bg-[#060C18]/75" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060C18] via-[#060C18]/80 to-[#060C18]/40"
        aria-hidden
      />

      {/* Ambient glow orbs — breathe slowly */}
      <div
        className="glow-orb-gold orb-breathe pointer-events-none absolute -left-64 -top-64 h-[700px] w-[700px]"
        aria-hidden
      />
      <div
        className="glow-orb-teal orb-breathe-delayed pointer-events-none absolute -right-80 -top-32 h-[600px] w-[600px]"
        aria-hidden
      />

      {/* Dot grid overlay */}
      <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        {/* Announcement pill — first to appear */}
        <div className="hero-in mb-8">
          <span className="brand-pill">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping-slow absolute h-full w-full rounded-full bg-[#7CE2EF] opacity-70" />
              <span className="relative flex h-2 w-2 rounded-full bg-[#7CE2EF]" />
            </span>
            Now live · UAE · KSA · Qatar · Kuwait
          </span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — headline + CTAs + stats */}
          <div>
            <h1 className="hero-in hero-in-d1 text-[54px] font-black leading-[1.02] tracking-tight text-[#F7F4EF] sm:text-7xl lg:text-[80px]">
              AI Agents That<br />
              Work While<br />
              {/* Shimmer gold on the payoff word */}
              <span className="text-gold-shimmer">You Scale.</span>
            </h1>

            <p className="hero-in hero-in-d2 mt-7 max-w-xl text-xl leading-8 text-[#C8D2E2]">
              Automate customer conversations, unlock business insights, and
              go live in days — not months. Built for SMBs across the Middle East.
            </p>

            <div className="hero-in hero-in-d3 mt-10 flex flex-wrap gap-4">
              <DemoCTA className="btn-primary">Book a Demo →</DemoCTA>
              <a href="#conversational-agents" className="btn-ghost">
                See it in action
              </a>
            </div>

            {/* Stats row — last to enter */}
            <div className="hero-in hero-in-d4 mt-12 grid grid-cols-3 gap-6 border-t border-white/8 pt-8">
              {(
                [
                  ["60%", "More sales"],
                  ["24/7", "Agent coverage"],
                  ["Days", "To go live"],
                ] as const
              ).map(([num, label]) => (
                <div key={label}>
                  <p className="text-gold text-3xl font-black">{num}</p>
                  <p className="mt-1 text-sm text-[#9AABC3]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Agent Activity Dashboard — floats gently */}
          <div className="hero-card-in card-float glass-card gradient-border-gold rounded-2xl p-5">
            {/* Dashboard header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#F7F4EF]">
                  BlueScaler Agent Hub
                </p>
                <p className="mt-0.5 text-xs text-[#9AABC3]">
                  Ready to deploy · GCC region
                </p>
              </div>
              <span className="teal-pill">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping-slow absolute h-full w-full rounded-full bg-[#7CE2EF] opacity-70" />
                  <span className="relative flex h-2 w-2 rounded-full bg-[#7CE2EF]" />
                </span>
                3 Agents Online
              </span>
            </div>

            {/* The agents you can put to work today */}
            <div className="space-y-2.5">
              {(
                [
                  {
                    Icon: MessageCircle as AgentIcon,
                    name: "Aria",
                    blurb:
                      "Your conversational customer support agent — drives revenue and keeps business moving.",
                  },
                  {
                    Icon: UtensilsCrossed as AgentIcon,
                    name: "Restaurant Agent",
                    blurb:
                      "A friendly conversational agent that helps customers find favorite menu items or make a reservation.",
                  },
                  {
                    Icon: Sparkles as AgentIcon,
                    name: "Beauty Assistant",
                    blurb:
                      "Matches a customer's shade from a selfie, tracks orders, and books the salon.",
                  },
                ]
              ).map(({ Icon, name, blurb }) => (
                <a
                  key={name}
                  href={SIGNUP_URL}
                  className="group flex items-start gap-3 rounded-xl border border-white/6 bg-white/3 p-3 transition-colors hover:border-[#C8A96E]/40 hover:bg-white/6"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Icon className="h-4 w-4 text-[#9AABC3]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#F7F4EF]">
                      {name}
                    </p>
                    <p className="mt-0.5 text-xs leading-5 text-[#9AABC3]">
                      {blurb}
                    </p>
                  </div>
                  <ArrowRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#6B7E9A] transition-transform group-hover:translate-x-0.5 group-hover:text-[#C8A96E]"
                    aria-hidden
                  />
                </a>
              ))}
            </div>

            {/* Footer stats */}
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/8 pt-4">
              {(
                [
                  ["24/7", "Coverage"],
                  ["Web + WA", "Channels"],
                  ["Instant", "Analytics"],
                ] as const
              ).map(([val, lbl]) => (
                <div key={lbl} className="rounded-lg bg-white/3 p-3 text-center">
                  <p className="text-sm font-black text-[#F7F4EF]">{val}</p>
                  <p className="mt-0.5 text-[10px] text-[#9AABC3]">{lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
