import { BarChart3, MessageCircle, ShoppingBag } from "lucide-react";
import { DemoCTA } from "./DemoCTA";

type FeedIcon = typeof MessageCircle;

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
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
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
                  Live activity · GCC region
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

            {/* Live event feed */}
            <div className="space-y-2.5">
              {(
                [
                  {
                    Icon: MessageCircle as FeedIcon,
                    event: "Dubai restaurant booking",
                    status: "Confirmed in 4s",
                    statusClass: "text-[#C8A96E]",
                    time: "Just now",
                  },
                  {
                    Icon: BarChart3 as FeedIcon,
                    event: "Sales report request",
                    status: "Chart generated",
                    statusClass: "text-[#7CE2EF]",
                    time: "18s ago",
                  },
                  {
                    Icon: ShoppingBag as FeedIcon,
                    event: "Retail return request",
                    status: "Flow completed",
                    statusClass: "text-[#C8A96E]",
                    time: "1m ago",
                  },
                ]
              ).map(({ Icon, event, status, statusClass, time }) => (
                <div
                  key={event}
                  className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/3 p-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <Icon className="h-4 w-4 text-[#9AABC3]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[#F7F4EF]">
                      {event}
                    </p>
                    <p className={`text-xs ${statusClass}`}>{status}</p>
                  </div>
                  <span className="shrink-0 text-xs text-[#6B7E9A]">
                    {time}
                  </span>
                </div>
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
