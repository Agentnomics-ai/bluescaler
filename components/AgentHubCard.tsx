import { ArrowRight, MessageCircle, Sparkles, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getCopy } from "./content/site";
import type { Locale } from "./i18n";
import { SIGNUP_URLS } from "./site-content";

/** Keyed on a stable id — the agent name is translated. */
const AGENT_ICONS: Record<string, LucideIcon> = {
  aria: MessageCircle,
  restaurant: UtensilsCrossed,
  beauty: Sparkles,
};

/** The agents a visitor can put to work today, each row a signup link. */
export function AgentHubCard({ locale }: { locale: Locale }) {
  const t = getCopy(locale).hub;

  return (
    <div className="card-float glass-card gradient-border-gold rounded-2xl p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-[#F7F4EF]">{t.title}</p>
          <p className="mt-0.5 text-xs text-[#9AABC3]">{t.subtitle}</p>
        </div>
        <span className="teal-pill">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping-slow absolute h-full w-full rounded-full bg-[#7CE2EF] opacity-70" />
            <span className="relative flex h-2 w-2 rounded-full bg-[#7CE2EF]" />
          </span>
          {t.online}
        </span>
      </div>

      <div className="space-y-2.5">
        {t.agents.map((agent) => {
          const Icon = AGENT_ICONS[agent.key] ?? MessageCircle;
          return (
            <a
              key={agent.key}
              href={SIGNUP_URLS.conversational}
              className="group flex items-start gap-3 rounded-xl border border-white/6 bg-white/3 p-3 transition-colors hover:border-[#C8A96E]/40 hover:bg-white/6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                <Icon className="h-4 w-4 text-[#9AABC3]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[#F7F4EF]">{agent.name}</p>
                <p className="mt-0.5 text-xs leading-5 text-[#9AABC3]">{agent.blurb}</p>
              </div>
              <ArrowRight
                className="mt-0.5 h-4 w-4 shrink-0 text-[#6B7E9A] transition-transform group-hover:translate-x-0.5 group-hover:text-[#C8A96E] rtl:-scale-x-100"
                aria-hidden
              />
            </a>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/8 pt-4">
        {t.stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-white/3 p-3 text-center">
            <p className="text-sm font-black text-[#F7F4EF]">{stat.value}</p>
            <p className="mt-0.5 text-[10px] text-[#9AABC3]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
