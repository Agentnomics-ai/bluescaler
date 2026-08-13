"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DemoCTA } from "./DemoCTA";
import { NAV_LINKS, SIGNUP_URLS } from "./site-content";

const LOGO_SRC = "/agentnomics_logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#060C18]/90 backdrop-blur-2xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={close}>
          <Image
            src={LOGO_SRC}
            alt="Agentnomics"
            width={36}
            height={36}
            className="size-9 object-contain"
          />
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight text-[#F7F4EF]">
              BlueScaler
            </span>
            <span className="block text-[10px] font-medium text-[#6B7E9A]">
              powered by Agentnomics
            </span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#9AABC3] transition-colors hover:text-[#F7F4EF]"
            >
              {link.label}
            </Link>
          ))}
          <DemoCTA className="text-sm font-medium text-[#9AABC3] transition-colors hover:text-[#F7F4EF]">
            Book a Demo
          </DemoCTA>
        </div>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-2.5">
          {/* Wrapper controls visibility — avoids specificity clash with btn-primary-sm */}
          <span className="hidden sm:block">
            <a href={SIGNUP_URLS.conversational} className="btn-primary-sm">
              Get Started →
            </a>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-[#9AABC3] transition-colors hover:border-white/20 hover:text-[#F7F4EF] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open ? "true" : "false"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Teal bottom line */}
      <div className="h-px bg-linear-to-r from-transparent via-[rgba(26,143,160,0.45)] to-transparent" />

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/6 bg-[#060C18] px-5 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-lg px-3 py-3 text-base font-medium text-[#9AABC3] transition-colors hover:bg-white/4 hover:text-[#F7F4EF]"
              >
                {link.label}
              </Link>
            ))}
            {/* Drawer stays open behind the modal — closing it here would
                unmount the modal along with this button. */}
            <DemoCTA className="rounded-lg px-3 py-3 text-base font-medium text-[#9AABC3] transition-colors hover:bg-white/4 hover:text-[#F7F4EF]">
              Book a Demo
            </DemoCTA>
          </div>
          <div className="mt-3 border-t border-white/6 pt-4">
            <a
              href={SIGNUP_URLS.conversational}
              className="btn-primary btn-primary-full"
              onClick={close}
            >
              Get Started →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
