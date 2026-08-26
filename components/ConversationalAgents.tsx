import { AgentHubCard } from "./AgentHubCard";
import { getCopy } from "./content/site";
import type { Locale } from "./i18n";
import { SIGNUP_URLS } from "./site-content";

export function ConversationalAgents({ locale }: { locale: Locale }) {
  const t = getCopy(locale).conversational;

  return (
    <section
      id="conversational-agents"
      className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div
        className="glow-orb-gold pointer-events-none absolute -end-48 -top-48 h-[600px] w-[600px] opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header row */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="scroll-reveal">
            <span className="brand-pill mb-6 inline-flex">{t.pill}</span>
            <h2 className="text-4xl font-black leading-tight text-[#F7F4EF] sm:text-5xl lg:text-6xl">
              {t.titleLine1}<br />
              {t.titleLine2} <span className="text-gold">{t.titleAccent}</span>
            </h2>
            <p className="mt-6 text-xl leading-8 text-[#C8D2E2]">{t.body}</p>
          </div>

          {/* The agents themselves, moved up from the hero */}
          <div className="scroll-reveal scroll-reveal-d1">
            <AgentHubCard locale={locale} />
          </div>
        </div>

        {/* Stat badges */}
        <div className="mt-10 grid grid-cols-3 gap-3">
          {t.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${i === 0 ? "scroll-reveal" : i === 1 ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal scroll-reveal-d2"} glass-card rounded-xl p-5 text-center`}
            >
              <p className="text-gold text-2xl font-black">{stat.value}</p>
              <p className="mt-1 text-sm text-[#9AABC3]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Video cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {t.videos.map((video) => (
            <article key={video.title}>
              <div className="glass-card overflow-hidden rounded-xl">
                <div className="aspect-video">
                  <video
                    src={video.videoSrc}
                    poster={video.poster}
                    controls
                    preload="metadata"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#F7F4EF]">
                {video.title}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a href={SIGNUP_URLS.conversational} className="btn-primary">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
