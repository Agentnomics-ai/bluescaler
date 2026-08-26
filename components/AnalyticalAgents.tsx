import { Building2, CircleCheck, Compass } from "lucide-react";
import { getCopy } from "./content/site";
import type { Locale } from "./i18n";
import { SIGNUP_URLS } from "./site-content";

export function AnalyticalAgents({ locale }: { locale: Locale }) {
  const t = getCopy(locale).analytical;

  return (
    <section
      id="analytical-agents"
      className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div
        className="glow-orb-teal orb-breathe pointer-events-none absolute -bottom-48 -start-48 h-[600px] w-[600px]"
        aria-hidden
      />
      <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="scroll-reveal max-w-3xl">
          <span className="teal-pill mb-6 inline-flex">{t.pill}</span>
          <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl lg:text-6xl">
            {t.titleLine1}<br />
            {t.titleLine2} <span className="text-teal">{t.titleAccent}</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-[#C8D2E2]">{t.body}</p>
        </div>

        {/* See one answer the agents actually produce */}
        <div className="scroll-reveal mt-14 max-w-4xl">
          <div className="glass-card overflow-hidden rounded-xl">
            <div className="aspect-video">
              <video
                src={t.video.videoSrc}
                poster={t.video.poster}
                controls
                preload="metadata"
                className="h-full w-full"
              />
            </div>
          </div>
          <h3 className="mt-4 text-lg font-bold text-[#F7F4EF]">
            {t.video.title}
          </h3>
        </div>

        <div className="mt-14 space-y-8">
          {t.families.map((family, familyIndex) => {
            const isGold = family.accent === "gold";
            const Icon = isGold ? Building2 : Compass;
            const accentText = isGold ? "text-gold" : "text-teal";
            const accentBar = isGold ? "bg-[#C8A96E]" : "bg-[#7CE2EF]";

            return (
              <div
                key={family.key}
                className={`${familyIndex === 1 ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal"} glass-card rounded-2xl p-6 sm:p-8`}
              >
                {/* Family header — which system these agents read from */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                    <Icon className={`h-5 w-5 ${accentText}`} />
                  </span>
                  <h3 className="text-lg font-black text-[#F7F4EF]">
                    {family.system}
                  </h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-[#9AABC3]">
                    {family.agents.length} {t.agentsSuffix}
                  </span>
                </div>
                <p className="mt-4 max-w-4xl text-sm leading-6 text-[#9AABC3]">
                  {family.blurb}
                </p>

                {/* The agents in this family */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {family.agents.map((agent) => (
                    <a
                      key={agent.name}
                      href={family.signupUrl}
                      className="group relative overflow-hidden rounded-xl border border-white/6 bg-white/3 p-4 ps-5 transition-colors hover:border-white/15 hover:bg-white/6"
                    >
                      <span
                        className={`absolute inset-y-0 start-0 w-0.5 ${accentBar} opacity-60 transition-opacity group-hover:opacity-100`}
                        aria-hidden
                      />
                      <h4 className="text-sm font-bold text-[#F7F4EF]">
                        {agent.name}
                      </h4>
                      <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#7CE2EF]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#7CE2EF]">
                        <CircleCheck className="h-3 w-3" aria-hidden />
                        {t.ready}
                      </span>
                      <p className="mt-3 text-xs leading-5 text-[#9AABC3]">
                        {agent.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="scroll-reveal mt-10">
          <a href={SIGNUP_URLS.analytical} className="btn-primary">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
