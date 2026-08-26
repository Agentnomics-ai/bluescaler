import { getCopy } from "./content/site";
import type { Locale } from "./i18n";
import { DemoCTA } from "./DemoCTA";

export function Hero({ locale }: { locale: Locale }) {
  const t = getCopy(locale).hero;

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
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060C18] via-[#060C18]/80 to-[#060C18]/40 rtl:bg-gradient-to-l"
        aria-hidden
      />

      {/* Ambient glow orbs — breathe slowly */}
      <div
        className="glow-orb-gold orb-breathe pointer-events-none absolute -start-64 -top-64 h-[700px] w-[700px]"
        aria-hidden
      />
      <div
        className="glow-orb-teal orb-breathe-delayed pointer-events-none absolute -end-80 -top-32 h-[600px] w-[600px]"
        aria-hidden
      />

      {/* Dot grid overlay */}
      <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="hero-in mb-8">
          <span className="brand-pill">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping-slow absolute h-full w-full rounded-full bg-[#7CE2EF] opacity-70" />
              <span className="relative flex h-2 w-2 rounded-full bg-[#7CE2EF]" />
            </span>
            {t.pill}
          </span>
        </div>

        {/* Headline + CTAs + stats. The right half is deliberately open —
            the background video carries it. */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="hero-in hero-in-d1 text-[54px] font-black leading-[1.02] tracking-tight text-[#F7F4EF] sm:text-7xl lg:text-[80px]">
              {t.titleLine1}<br />
              {t.titleLine2}<br />
              <span className="text-gold-shimmer">{t.titleAccent}</span>
            </h1>

            <p className="hero-in hero-in-d2 mt-7 max-w-xl text-xl leading-8 text-[#C8D2E2]">
              {t.body}
            </p>

            <div className="hero-in hero-in-d3 mt-10 flex flex-wrap gap-4">
              <DemoCTA locale={locale} className="btn-primary">
                {t.primaryCta}
              </DemoCTA>
              <a href="#conversational-agents" className="btn-ghost">
                {t.secondaryCta}
              </a>
            </div>

            <div className="hero-in hero-in-d4 mt-12 grid grid-cols-3 gap-6 border-t border-white/8 pt-8">
              {t.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-gold text-3xl font-black">{stat.value}</p>
                  <p className="mt-1 text-sm text-[#9AABC3]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
