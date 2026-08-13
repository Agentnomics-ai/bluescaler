import { ContactForm } from "./ContactForm";
import { DemoCTA } from "./DemoCTA";
import { SIGNUP_URLS, WHATSAPP_URL } from "./site-content";

export function CTASection() {
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
          <span className="brand-pill mb-8 inline-flex">Get Started</span>
          <h2 className="text-5xl font-black leading-tight text-[#F7F4EF] sm:text-6xl lg:text-7xl">
            Ready to automate<br />
            your <span className="text-gold-shimmer">business?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#C8D2E2]">
            Book a demo, start a signup flow, or send us a message. BlueScaler
            is built for practical AI adoption across GCC SMB teams.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <DemoCTA className="btn-primary">Book a Demo →</DemoCTA>
            <a href={WHATSAPP_URL} className="btn-ghost">
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Signup path cards */}
        <div className="mt-16 grid gap-4 text-left sm:grid-cols-2">
          <a
            href={SIGNUP_URLS.conversational}
            className="scroll-reveal glass-card card-lift rounded-xl p-6"
          >
            <span className="teal-pill mb-4 inline-flex">Conversational</span>
            <p className="font-black text-[#F7F4EF]">
              Start conversational agent signup
            </p>
            <p className="mt-2 text-sm leading-6 text-[#9AABC3]">
              Customer support, ordering, booking, and chat automation.
            </p>
            <p className="mt-4 text-sm font-bold text-[#C8A96E]">
              Get started →
            </p>
          </a>
          <a
            href={SIGNUP_URLS.analytical}
            className="scroll-reveal scroll-reveal-d1 glass-card card-lift rounded-xl p-6"
          >
            <span className="brand-pill mb-4 inline-flex">Analytical</span>
            <p className="font-black text-[#F7F4EF]">
              Start analytical agent signup
            </p>
            <p className="mt-2 text-sm leading-6 text-[#9AABC3]">
              Data questions, reports, charts, and operational insights.
            </p>
            <p className="mt-4 text-sm font-bold text-[#C8A96E]">
              Get started →
            </p>
          </a>
        </div>

        {/* Contact form */}
        <div className="scroll-reveal glass-card mt-6 rounded-2xl p-6 text-left sm:p-8">
          <h3 className="text-xl font-black text-[#F7F4EF]">
            Or send us a message
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
