import { ContactForm } from "./ContactForm";
import { DemoCTA } from "./DemoCTA";
import { getCopy } from "./content/site";
import type { Locale } from "./i18n";
import { SIGNUP_URLS, WHATSAPP_URL } from "./site-content";

export function CTASection({ locale }: { locale: Locale }) {
  const t = getCopy(locale).ctaSection;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-32"
    >
      {/* Central gold glow — draws the eye to the CTA */}
      <div
        className="glow-orb-gold orb-breathe pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-25"
        aria-hidden
      />
      <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="scroll-reveal">
          <span className="brand-pill mb-8 inline-flex">{t.pill}</span>
          <h2 className="text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl lg:text-7xl">
            {t.titleLine1}<br />
            {t.titleLine2}{" "}
            <span className="text-gold-shimmer">{t.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#C8D2E2]">
            {t.body}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <DemoCTA locale={locale} className="btn-primary">
              {t.bookDemo}
            </DemoCTA>
            <a href={WHATSAPP_URL} className="btn-ghost">
              {t.whatsapp}
            </a>
          </div>
        </div>

        {/* Signup path cards */}
        <div className="mt-16 grid gap-4 text-start sm:grid-cols-2">
          <a
            href={SIGNUP_URLS.conversational}
            className="scroll-reveal glass-card card-lift rounded-xl p-6"
          >
            <span className="teal-pill mb-4 inline-flex">
              {t.conversationalPill}
            </span>
            <p className="font-black text-[#F7F4EF]">{t.conversationalTitle}</p>
            <p className="mt-2 text-sm leading-6 text-[#9AABC3]">
              {t.conversationalBody}
            </p>
            <p className="mt-4 text-sm font-bold text-[#C8A96E]">
              {t.getStarted}
            </p>
          </a>
          <a
            href={SIGNUP_URLS.analytical}
            className="scroll-reveal scroll-reveal-d1 glass-card card-lift rounded-xl p-6"
          >
            <span className="brand-pill mb-4 inline-flex">
              {t.analyticalPill}
            </span>
            <p className="font-black text-[#F7F4EF]">{t.analyticalTitle}</p>
            <p className="mt-2 text-sm leading-6 text-[#9AABC3]">
              {t.analyticalBody}
            </p>
            <p className="mt-4 text-sm font-bold text-[#C8A96E]">
              {t.getStarted}
            </p>
          </a>
        </div>

        {/* Contact form */}
        <div className="scroll-reveal glass-card mt-6 rounded-2xl p-6 text-start sm:p-8">
          <h3 className="text-xl font-black text-[#F7F4EF]">
            {t.messageHeading}
          </h3>
          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
