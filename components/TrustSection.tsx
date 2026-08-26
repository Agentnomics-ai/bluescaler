import { CheckCircle, Handshake, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getCopy } from "./content/site";
import type { Locale } from "./i18n";

const PILLAR_ICONS: LucideIcon[] = [Layers, CheckCircle, Handshake];

export function TrustSection({ locale }: { locale: Locale }) {
  const t = getCopy(locale).trust;

  return (
    <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
      <div
        className="glow-orb-gold pointer-events-none absolute -end-48 -top-48 h-[550px] w-[550px] opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="scroll-reveal flex flex-col justify-center">
            <span className="brand-pill mb-6 self-start">{t.pill}</span>
            <h2 className="text-4xl font-black leading-tight text-[#F7F4EF] sm:text-5xl">
              {t.titleBefore}{" "}
              <span className="text-gold">{t.titleAccent}</span> {t.titleAfter}
            </h2>
            <p className="mt-6 text-lg leading-7 text-[#9AABC3]">{t.body}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {t.pillars.map((pillar, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <article
                  key={pillar.title}
                  className={`${i === 0 ? "scroll-reveal" : i === 1 ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal scroll-reveal-d2"} glass-card card-lift rounded-xl p-6`}
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#C8A96E]/10">
                    <Icon className="h-5 w-5 text-[#C8A96E]" />
                  </span>
                  <h3 className="font-black text-[#F7F4EF]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#9AABC3]">
                    {pillar.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3">
          <p className="me-2 text-sm font-bold text-[#6B7E9A]">
            {t.coverageLabel}
          </p>
          {t.regions.map((region) => (
            <span
              key={region}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-[#C8D2E2]"
            >
              {region}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
