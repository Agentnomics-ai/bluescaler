"use client";

import { useState } from "react";
import { submitLead } from "./submit-lead";

/**
 * "Or send us a message" form. Posts to /api/lead, which emails the sales
 * inbox — replacing the old `mailto:` form action, which most browsers
 * silently drop.
 */
export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const result = await submitLead({
      type: "contact",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    });

    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    form.reset();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center sm:text-left">
        <p className="text-lg font-black text-[#F7F4EF]">
          Thanks — your message is on its way.
        </p>
        <p className="mt-2 text-sm leading-6 text-[#9AABC3]">
          Someone from the BlueScaler team will reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-sm font-bold text-[#C8A96E] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
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
          Name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="form-input"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
          Work email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="form-input"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#F7F4EF]">
        Message
        <textarea
          name="message"
          rows={3}
          className="form-input resize-none"
          placeholder="Tell us what you want to automate"
        />
      </label>

      {error && (
        <p className="text-sm font-medium text-[#E4A0A0]" role="alert">
          {error}
        </p>
      )}

      <div>
        <button type="submit" className="btn-primary" disabled={pending}>
          {pending ? "Sending…" : "Send Message →"}
        </button>
      </div>
    </form>
  );
}
