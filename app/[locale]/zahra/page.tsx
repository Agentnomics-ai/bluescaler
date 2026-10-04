import type { Metadata } from "next";
import { CheckCircle, Lock, MessageCircle, Mic, ShieldCheck } from "lucide-react";
import { DemoCTA } from "@/components/DemoCTA";
import {
  getZahra,
  ZAHRA_FILM,
  ZAHRA_INVITE_URL,
} from "@/components/content/zahra";
import { DEFAULT_LOCALE, isLocale } from "@/components/i18n";

export const metadata: Metadata = {
  title: "Zahra | BlueScaler",
  description:
    "Zahra is a voice-first AI chief of staff that answers from your SAP, Salesforce and ServiceNow. Apply for one of 100 free design-partner seats.",
};

const TRUST_ICONS = [Lock, ShieldCheck, CheckCircle, Mic];

export default async function ZahraPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = getZahra(locale);

  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#060C18] px-5 pb-20 pt-20 sm:px-8 lg:pb-24 lg:pt-28">
        <div className="glow-orb-teal orb-breathe pointer-events-none absolute -start-48 -top-48 h-[600px] w-[600px]" aria-hidden />
        <div className="glow-orb-gold orb-breathe-delayed pointer-events-none absolute -end-60 top-0 h-[520px] w-[520px]" aria-hidden />
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="hero-in mb-8">
            <span className="teal-pill">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping-slow absolute h-full w-full rounded-full bg-[#7CE2EF] opacity-70" />
                <span className="relative flex h-2 w-2 rounded-full bg-[#7CE2EF]" />
              </span>
              {t.pill}
            </span>
          </div>

          <h1 className="hero-in hero-in-d1 text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl lg:text-7xl">
            {t.title} <span className="text-gold-shimmer">{t.name}</span>
          </h1>
          <p className="hero-in hero-in-d1 mt-2 text-sm font-medium text-[#6B7E9A]">
            {t.byline}
          </p>
          <p className="text-teal hero-in hero-in-d2 mt-5 text-2xl font-bold">
            {t.tagline}
          </p>
          <p className="hero-in hero-in-d2 mt-6 max-w-2xl text-xl leading-8 text-[#C8D2E2]">
            {t.intro}
          </p>

          <div className="hero-in hero-in-d3 mt-9 flex flex-wrap gap-4">
            <a href={ZAHRA_INVITE_URL} className="btn-primary">
              {t.cta}
            </a>
            <DemoCTA locale={locale} className="btn-ghost">
              {t.programme.cta}
            </DemoCTA>
          </div>

          <div className="hero-in hero-in-d4 mt-10 flex flex-wrap gap-3">
            {t.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-[#C8D2E2]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE FILM ───────────────────────────────────────────── */}
      <section
        id="zahra-film"
        className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="glow-orb-gold pointer-events-none absolute -end-48 -top-48 h-[560px] w-[560px] opacity-40" aria-hidden />

        <div className="relative mx-auto max-w-5xl">
          <div className="scroll-reveal">
            <span className="brand-pill mb-6 inline-flex">{t.film.eyebrow}</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              {t.film.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C8D2E2]">
              {t.film.body}
            </p>
          </div>

          <div className="scroll-reveal scroll-reveal-d1 glass-card gradient-border-gold mt-10 overflow-hidden rounded-2xl p-2.5">
            <div className="overflow-hidden rounded-xl bg-[#030609]">
              <div className="aspect-video">
                <video
                  src={ZAHRA_FILM.videoSrc}
                  poster={ZAHRA_FILM.poster}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PRODUCT LINE ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28">
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="teal-pill mb-6 inline-flex">
              {t.productLine.eyebrow}
            </span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              {t.productLine.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
              {t.productLine.body}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {t.productLine.roles.map((role, i) => (
              <article
                key={role.code}
                className={`${i % 2 === 1 ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal"} glass-card card-lift rounded-2xl p-6`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1A8FA0]/15 text-xs font-black text-[#7CE2EF]">
                    {role.code}
                  </span>
                  <h3 className="text-lg font-black text-[#F7F4EF]">
                    {role.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#9AABC3]">
                  {role.body}
                </p>

                <div className="mt-5 space-y-2.5 rounded-xl border border-white/6 bg-black/20 p-4">
                  <p className="text-sm italic leading-6 text-[#C8D2E2]">
                    &ldquo;{role.ask}&rdquo;
                  </p>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C8A96E]/20 text-[10px] font-black text-[#C8A96E]">
                      Z
                    </span>
                    <p className="text-sm leading-6 text-[#F7F4EF]">
                      {role.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE INTERFACE ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-teal pointer-events-none absolute -bottom-40 -start-40 h-[500px] w-[500px] opacity-40" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="brand-pill mb-6 inline-flex">
              {t.interfaceSection.eyebrow}
            </span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              {t.interfaceSection.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
              {t.interfaceSection.body}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="scroll-reveal glass-card rounded-2xl p-6">
              <p className="text-base italic leading-7 text-[#C8D2E2]">
                &ldquo;{t.interfaceSection.ask}&rdquo;
              </p>
              <div className="mt-4 flex items-start gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C8A96E]/20 text-[11px] font-black text-[#C8A96E]">
                  Z
                </span>
                <p className="text-base leading-7 text-[#F7F4EF]">
                  {t.interfaceSection.answer}
                </p>
              </div>
              <p className="text-teal mt-5 flex items-center gap-2 text-sm font-bold">
                <CheckCircle className="h-4 w-4 shrink-0" aria-hidden />
                {t.interfaceSection.confirm}
              </p>
            </div>
            <div className="scroll-reveal scroll-reveal-d1 flex items-center">
              <p className="text-lg leading-8 text-[#C8D2E2]">
                {t.interfaceSection.closing}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEYOND THE APP ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28">
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="teal-pill mb-6 inline-flex">{t.beyond.eyebrow}</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              {t.beyond.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
              {t.beyond.body}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.beyond.cards.map((card, i) => (
              <article
                key={card.title}
                className={`${i === 1 ? "scroll-reveal scroll-reveal-d1" : i === 2 ? "scroll-reveal scroll-reveal-d2" : "scroll-reveal"} glass-card card-lift rounded-2xl p-6`}
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8A96E]/10">
                  <MessageCircle className="h-4 w-4 text-[#C8A96E]" aria-hidden />
                </span>
                <h3 className="text-lg font-black text-[#F7F4EF]">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#9AABC3]">
                  {card.body}
                </p>
                <div className="mt-5 space-y-2">
                  {card.lines.map((line, j) => (
                    <p
                      key={line}
                      className={`rounded-xl px-3 py-2 text-xs leading-5 ${
                        j % 2 === 0
                          ? "border border-white/6 bg-white/4 text-[#C8D2E2]"
                          : "bg-[#C8A96E]/12 text-[#F7F4EF]"
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="glow-orb-gold pointer-events-none absolute -end-40 -top-40 h-[500px] w-[500px] opacity-40" aria-hidden />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="brand-pill mb-6 inline-flex">{t.trust.eyebrow}</span>
            <h2 className="text-4xl font-black leading-tight text-[#F7F4EF] sm:text-5xl">
              {t.trust.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">{t.trust.body}</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.trust.items.map((item, i) => {
              const Icon = TRUST_ICONS[i] ?? ShieldCheck;
              const delay =
                i % 3 === 1
                  ? "scroll-reveal scroll-reveal-d1"
                  : i % 3 === 2
                    ? "scroll-reveal scroll-reveal-d2"
                    : "scroll-reveal";
              return (
                <article
                  key={item.title}
                  className={`${delay} glass-card card-lift rounded-xl p-6`}
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A8FA0]/10">
                    <Icon className="h-4 w-4 text-[#7CE2EF]" aria-hidden />
                  </span>
                  <h3 className="text-base font-black text-[#F7F4EF]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#9AABC3]">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DESIGN PARTNER PROGRAMME ───────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28">
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-5xl">
          <div className="scroll-reveal gradient-border-gold glass-card rounded-2xl p-8 sm:p-12">
            <span className="teal-pill mb-6 inline-flex">
              {t.programme.eyebrow}
            </span>
            <h2 className="text-3xl font-black leading-tight text-[#F7F4EF] sm:text-4xl">
              {t.programme.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
              {t.programme.body}
            </p>

            <ul className="mt-8 space-y-3">
              {t.programme.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[#C8D2E2]">
                  <CheckCircle
                    className="text-teal mt-1 h-4 w-4 shrink-0"
                    aria-hidden
                  />
                  <span className="leading-7">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={ZAHRA_INVITE_URL} className="btn-primary">
                {t.programme.cta}
              </a>
              <p className="text-sm text-[#6B7E9A]">{t.programme.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT STARTS ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <span className="brand-pill mb-6 inline-flex">
              {t.howItStarts.eyebrow}
            </span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              {t.howItStarts.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#C8D2E2]">
              {t.howItStarts.body}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.howItStarts.steps.map((step, i) => (
              <article
                key={step.n}
                className={`${i === 1 ? "scroll-reveal scroll-reveal-d1" : i === 2 ? "scroll-reveal scroll-reveal-d2" : "scroll-reveal"} glass-card rounded-xl p-6`}
              >
                <p className="text-gold text-3xl font-black">{step.n}</p>
                <h3 className="mt-3 text-lg font-black text-[#F7F4EF]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#9AABC3]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060C18] px-5 py-20 sm:px-8 lg:py-28">
        <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-4xl">
          <div className="scroll-reveal">
            <span className="teal-pill mb-6 inline-flex">{t.faq.eyebrow}</span>
            <h2 className="text-4xl font-black text-[#F7F4EF] sm:text-5xl">
              {t.faq.title}
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {t.faq.items.map((item, i) => (
              <details
                key={item.q}
                className={`${i % 2 === 1 ? "scroll-reveal scroll-reveal-d1" : "scroll-reveal"} glass-card group rounded-xl p-6`}
              >
                <summary className="cursor-pointer list-none text-lg font-bold text-[#F7F4EF] marker:content-none">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-[#9AABC3]">{item.a}</p>
              </details>
            ))}
          </div>

          <p className="scroll-reveal mt-12 border-t border-white/8 pt-8 text-sm leading-7 text-[#6B7E9A]">
            {t.closing}
          </p>
        </div>
      </section>
    </main>
  );
}
