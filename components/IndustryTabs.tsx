"use client";

import { Lightbulb } from "lucide-react";
import { useState } from "react";
import { tr } from "./content/strings";
import type { Locale } from "./i18n";
import { INDUSTRY_TABS } from "./site-content";

export function IndustryTabs({ locale }: { locale: Locale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = INDUSTRY_TABS[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28">
      <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="scroll-reveal mb-10 max-w-3xl">
          <span className="brand-pill mb-6 inline-flex">{tr(locale, "Industry Playbooks")}</span>
          <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
            {tr(locale, "Pick your vertical,")}{" "}
            <span className="text-gold">{tr(locale, "see the exact fit.")}</span>
          </h2>
        </div>

        {/* Tab pills */}
        <div className="scroll-reveal flex gap-2 overflow-x-auto pb-1">
          {INDUSTRY_TABS.map((industry, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={industry.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#C8A96E] text-[#060C18] shadow-[0_0_20px_rgba(200,169,110,0.4)]"
                    : "border border-white/10 bg-white/3 text-[#C8D2E2] hover:border-[#C8A96E]/40 hover:text-[#C8A96E]"
                }`}
              >
                {tr(locale, industry.label)}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="scroll-reveal glass-card mt-6 rounded-2xl p-6 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 lg:p-10">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <h3 className="text-3xl font-black text-[#F7F4EF]">
                {tr(locale, active.label)}
              </h3>
              <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
                {tr(locale, active.value)}
              </p>
              {active.insight && (
                <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-[#1A8FA0]/30 bg-[#1A8FA0]/[0.07] p-4 text-sm font-semibold leading-6 text-[#7CE2EF]">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{tr(locale, active.insight)} — Capgemini</span>
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3 border-t border-white/8 pt-6">
              {(["Queries", "Actions", "Insights"] as const).map(
                (label, i) => (
                  <div key={label}>
                    <p className="text-gold text-2xl font-black">
                      0{i + 1}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#6B7E9A]">
                      {tr(locale, label)}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-0">
            <div className="rounded-xl border border-white/8 bg-white/3 p-5">
              <h4 className="font-black text-[#F7F4EF]">{tr(locale, "Key challenges")}</h4>
              <ul className="mt-4 space-y-3">
                {active.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex items-start gap-2 text-sm leading-6 text-[#C8D2E2]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96E]" />
                    {tr(locale, challenge)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#1A8FA0]/20 bg-[#1A8FA0]/[0.04] p-5">
              <h4 className="font-black text-[#F7F4EF]">
                {tr(locale, "BlueScaler in action")}
              </h4>
              <ul className="mt-4 space-y-3">
                {active.actions.map((action) => (
                  <li
                    key={action}
                    className="flex items-start gap-2 text-sm leading-6 text-[#C8D2E2]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7CE2EF]" />
                    {tr(locale, action)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
