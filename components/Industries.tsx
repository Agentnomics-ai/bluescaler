import { Hospital, Hotel, Package, ShoppingBag, UtensilsCrossed, Wrench, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getCopy } from "./content/site";
import type { Locale } from "./i18n";

/** Keyed on a stable id, not the label — the label is translated. */
const INDUSTRY_META: Record<string, { Icon: LucideIcon; color: string; iconColor: string }> = {
  food:       { Icon: UtensilsCrossed, color: "bg-[#C8A96E]/10", iconColor: "text-[#C8A96E]" },
  retail:     { Icon: ShoppingBag,     color: "bg-[#C8A96E]/10", iconColor: "text-[#C8A96E]" },
  automotive: { Icon: Wrench,          color: "bg-[#1A8FA0]/10", iconColor: "text-[#7CE2EF]" },
  hospitality:{ Icon: Hotel,           color: "bg-[#1A8FA0]/10", iconColor: "text-[#7CE2EF]" },
  healthcare: { Icon: Hospital,        color: "bg-[#C8A96E]/10", iconColor: "text-[#C8A96E]" },
  logistics:  { Icon: Package,         color: "bg-[#1A8FA0]/10", iconColor: "text-[#7CE2EF]" },
};

export function Industries({ locale }: { locale: Locale }) {
  const t = getCopy(locale).industries;

  return (
    <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
      <div
        className="glow-orb-gold pointer-events-none absolute -bottom-48 -end-48 h-[520px] w-[520px] opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="scroll-reveal max-w-3xl">
          <span className="brand-pill mb-6 inline-flex">{t.pill}</span>
          <h2 className="text-4xl font-black leading-tight text-[#F7F4EF] sm:text-5xl">
            {t.titleLine1}<br />
            <span className="text-gold">{t.titleAccent}</span>
          </h2>
          <p className="mt-5 text-lg leading-7 text-[#9AABC3]">{t.body}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((industry, i) => {
            const { Icon, color, iconColor } = INDUSTRY_META[industry.key] ?? {
              Icon: Zap,
              color: "bg-white/5",
              iconColor: "text-[#9AABC3]",
            };
            const delayClass =
              i % 3 === 1
                ? "scroll-reveal scroll-reveal-d1"
                : i % 3 === 2
                  ? "scroll-reveal scroll-reveal-d2"
                  : "scroll-reveal";
            return (
              <article
                key={industry.key}
                className={`${delayClass} glass-card card-lift rounded-xl p-6`}
              >
                <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
                  <Icon className={`h-5 w-5 ${iconColor}`} />
                </span>
                <h3 className="text-lg font-black text-[#F7F4EF]">
                  {industry.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#9AABC3]">
                  {industry.useCase}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
