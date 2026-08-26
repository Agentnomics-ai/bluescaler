"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Check, Globe } from "lucide-react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_LABELS,
  LOCALE_QUERY_PARAM,
  stripLocale,
  type Locale,
} from "./i18n";

export function LanguageSwitcher({
  locale,
  label,
  className = "",
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const wrapper = useRef<HTMLDivElement>(null);

  // Close on outside click and on Escape — a menu that traps the page is worse
  // than no menu.
  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(next: Locale) {
    setOpen(false);

    const bare = stripLocale(pathname || "/");
    const path =
      next === DEFAULT_LOCALE ? bare : `/${next}${bare === "/" ? "" : bare}`;
    // Middleware writes the preference cookie and strips the param, so the
    // choice persists without this component touching document.cookie.
    // A full load, not a client transition — <html lang/dir> is rendered on
    // the server from the locale, and a soft nav would leave it stale.
    window.location.assign(`${path}?${LOCALE_QUERY_PARAM}=${next}`);
  }

  return (
    <div ref={wrapper} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/3 px-2.5 text-xs font-bold text-[#9AABC3] transition-colors hover:border-white/20 hover:text-[#F7F4EF]"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open ? "true" : "false"}
      >
        <Globe className="h-3.5 w-3.5" aria-hidden />
        {LOCALE_LABELS[locale].short}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute end-0 z-50 mt-2 min-w-40 overflow-hidden rounded-xl border border-white/10 bg-[#0B1628] py-1 shadow-xl shadow-black/40"
        >
          {LOCALES.map((option) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={option === locale}
                onClick={() => choose(option)}
                lang={option}
                dir={option === "ar" ? "rtl" : "ltr"}
                className="flex w-full items-center justify-between gap-3 px-3 py-2 text-start text-sm text-[#C8D2E2] transition-colors hover:bg-white/6 hover:text-[#F7F4EF]"
              >
                {LOCALE_LABELS[option].native}
                {option === locale && (
                  <Check className="h-3.5 w-3.5 text-[#C8A96E]" aria-hidden />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
