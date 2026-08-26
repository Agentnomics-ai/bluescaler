"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { getCopy } from "./content/site";
import type { Locale } from "./i18n";
import { DEMO_BOOKING_URL } from "./site-content";
import { submitLead } from "./submit-lead";

type DemoCTAProps = {
  locale: Locale;
  className?: string;
  children: React.ReactNode;
};

/**
 * "Book a Demo" trigger. Captures the lead first — so sales hears about it
 * even if the visitor never finishes booking — then hands off to the Google
 * Calendar page.
 *
 * Renders a real anchor to the booking URL, so with JavaScript disabled the
 * click still works exactly as it did before.
 */
export function DemoCTA({ locale, className, children }: DemoCTAProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href={DEMO_BOOKING_URL}
        className={className}
        onClick={(event) => {
          // Let modified clicks (new tab/window) through untouched.
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
            return;
          }
          event.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </a>
      {/* Portalled to <body>: several CTAs sit inside animated (transformed)
          containers, which would otherwise become the containing block for
          the overlay's `position: fixed` and trap it in a small box. */}
      {open &&
        createPortal(
          <DemoModal locale={locale} onClose={() => setOpen(false)} />,
          document.body,
        )}
    </>
  );
}

function DemoModal({
  locale,
  onClose,
}: {
  locale: Locale;
  onClose: () => void;
}) {
  const t = getCopy(locale).demoModal;
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstFieldRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const goToCalendar = () => {
    window.location.href = DEMO_BOOKING_URL;
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    const data = new FormData(event.currentTarget);
    const result = await submitLead({
      type: "demo",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    });

    if (!result.ok) {
      // Never let our own notification failure block a booking.
      setPending(false);
      setError(`${result.error} You can still pick a time below.`);
      return;
    }

    setDone(true);
    goToCalendar();
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto bg-[#030609]/80 px-4 py-10 backdrop-blur-sm sm:items-center"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {/* Deliberately not .glass-card — that class is translucent, and a form
          needs an opaque surface to stay readable over the page behind it. */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0B1628] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.55)] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="absolute end-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-[#9AABC3] transition-colors hover:border-white/20 hover:text-[#F7F4EF]"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="brand-pill mb-5 inline-flex">{t.pill}</span>
        <h2
          id="demo-modal-title"
          className="text-2xl font-black leading-tight text-[#F7F4EF]"
        >
          {t.heading}
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#9AABC3]">
          {t.body}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          {/* Honeypot — hidden from people, catnip for bots. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
              {t.name}
              <input
                ref={firstFieldRef}
                name="name"
                type="text"
                required
                autoComplete="name"
                className="form-input"
                placeholder={t.namePlaceholder}
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
              {t.email}
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="form-input"
                placeholder={t.emailPlaceholder}
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
              {t.company}
              <input
                name="company"
                type="text"
                autoComplete="organization"
                className="form-input"
                placeholder={t.companyPlaceholder}
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
              {/* One element, or the grid puts the hint on its own row. */}
              <span>
                {t.phone}{" "}
                <span className="font-normal text-[#6B7E9A]">{t.optional}</span>
              </span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                className="form-input"
                placeholder={t.phonePlaceholder}
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
            <span>
              {t.needs}{" "}
              <span className="font-normal text-[#6B7E9A]">{t.optional}</span>
            </span>
            <textarea
              name="message"
              rows={3}
              className="form-input resize-none"
              placeholder={t.needsPlaceholder}
            />
          </label>

          {error && (
            <p className="text-sm font-medium text-[#E4A0A0]" role="alert">
              {error}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" className="btn-primary" disabled={pending || done}>
              {done ? t.opening : pending ? t.submitting : t.submit}
            </button>
            {error && (
              <button type="button" onClick={goToCalendar} className="btn-ghost">
                {t.skip}
              </button>
            )}
          </div>

          <p className="text-xs leading-5 text-[#6B7E9A]">
            {t.footnote}
          </p>
        </form>
      </div>
    </div>
  );
}
