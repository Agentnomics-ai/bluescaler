export type LeadPayload = {
  type: "demo" | "contact";
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  /** Honeypot — hidden from real users, left empty by them. */
  website?: string;
};

export type LeadResponse = { ok: true } | { ok: false; error: string };

/** Posts a lead to /api/lead, which emails the sales inbox. */
export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        page: typeof window === "undefined" ? "" : window.location.pathname,
      }),
    });

    const data = (await res.json().catch(() => null)) as {
      ok?: boolean;
      error?: string;
    } | null;

    if (!res.ok || !data?.ok) {
      return {
        ok: false,
        error: data?.error ?? "Something went wrong. Please try again.",
      };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}
