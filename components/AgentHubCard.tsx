import { ArrowRight, MessageCircle, Sparkles, UtensilsCrossed } from "lucide-react";
import { SIGNUP_URLS } from "./site-content";

type AgentIcon = typeof MessageCircle;

const HUB_AGENTS = [
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
];

const HUB_STATS = [
  ["24/7", "Coverage"],
  ["Web + WA", "Channels"],
  ["Instant", "Analytics"],
] as const;

/** The agents a visitor can put to work today, each row a signup link. */
export function AgentHubCard() {
  return (
    <div className="card-float glass-card gradient-border-gold rounded-2xl p-5">
      {/* Card header */}
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

      <div className="space-y-2.5">
        {HUB_AGENTS.map(({ Icon, name, blurb }) => (
          <a
            key={name}
            href={SIGNUP_URLS.conversational}
            className="group flex items-start gap-3 rounded-xl border border-white/6 bg-white/3 p-3 transition-colors hover:border-[#C8A96E]/40 hover:bg-white/6"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
              <Icon className="h-4 w-4 text-[#9AABC3]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#F7F4EF]">{name}</p>
              <p className="mt-0.5 text-xs leading-5 text-[#9AABC3]">{blurb}</p>
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
        {HUB_STATS.map(([val, lbl]) => (
          <div key={lbl} className="rounded-lg bg-white/3 p-3 text-center">
            <p className="text-sm font-black text-[#F7F4EF]">{val}</p>
            <p className="mt-0.5 text-[10px] text-[#9AABC3]">{lbl}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
