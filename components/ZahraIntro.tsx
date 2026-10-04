import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { getZahra, ZAHRA_FILM } from "./content/zahra";
import { localizedPath, type Locale } from "./i18n";

/**
 * Opens the home page. The film is the pitch, so it sits beside the copy
 * rather than below it — muted and looping as a preview, with the full
 * sound-on version on the Zahra page itself.
 */
export function ZahraIntro({ locale }: { locale: Locale }) {
  const t = getZahra(locale).teaser;

  return (
    <section
      id="zahra"
      className="relative overflow-hidden bg-[#0B1628] px-5 py-20 sm:px-8 lg:py-24"
    >
      <div
        className="glow-orb-teal orb-breathe pointer-events-none absolute -top-40 -end-40 h-[520px] w-[520px] opacity-50"
        aria-hidden
      />
      <div className="bg-dot-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div className="scroll-reveal">
          <span className="teal-pill mb-6 inline-flex">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping-slow absolute h-full w-full rounded-full bg-[#7CE2EF] opacity-70" />
              <span className="relative flex h-2 w-2 rounded-full bg-[#7CE2EF]" />
            </span>
            {t.pill}
          </span>

          <h2 className="text-4xl font-black leading-tight text-[#F7F4EF] sm:text-5xl lg:text-6xl">
            {t.title}{" "}
            <span className="text-gold-shimmer">{t.name}</span>
          </h2>
          <p className="mt-2 text-sm font-medium text-[#6B7E9A]">{t.byline}</p>
          <p className="text-teal mt-4 text-xl font-bold">{t.tagline}</p>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[#C8D2E2]">
            {t.body}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href={localizedPath("/zahra", locale)} className="btn-primary">
              {t.cta}
            </Link>
            <a href="#zahra-film" className="btn-ghost inline-flex items-center gap-2">
              <PlayCircle className="h-4 w-4" aria-hidden />
              {t.secondary}
            </a>
          </div>
        </div>

        {/* Preview of the film — muted loop; the full cut lives on /zahra */}
        <div className="scroll-reveal scroll-reveal-d1">
          <Link
            href={localizedPath("/zahra", locale)}
            className="group glass-card gradient-border-gold block overflow-hidden rounded-2xl p-2.5"
          >
            <div className="overflow-hidden rounded-xl bg-[#030609]">
              <div className="aspect-video">
                <video
                  src={ZAHRA_FILM.videoSrc}
                  poster={ZAHRA_FILM.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-label={t.secondary}
                />
              </div>
            </div>
            <p className="flex items-center justify-between gap-3 px-2 pb-1 pt-3 text-sm font-bold text-[#C8A96E]">
              {t.cta}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                aria-hidden
              />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
