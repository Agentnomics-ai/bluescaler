import { sendEmail } from "@/lib/email";

/** Never prerender or cache — every request must hit the handler. */
export const dynamic = "force-dynamic";

/** Inbox that receives every demo request and contact message. */
const NOTIFY_TO = process.env.LEAD_NOTIFICATION_EMAIL ?? "javed@agentnomics.ai";

const LEAD_TYPES = ["demo", "contact"] as const;
type LeadType = (typeof LEAD_TYPES)[number];

const FIELD_LIMITS = {
  name: 120,
  email: 200,
  company: 160,
  phone: 40,
  message: 4000,
} as const;

type Lead = {
  type: LeadType;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  page: string;
};

/**
 * Best-effort flood guard. Serverless instances are short-lived and not
 * shared, so this only blunts a naive repeat-submit — the honeypot below
 * does the heavier lifting against bots.
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recentSubmissions.get(ip) ?? []).filter(
    (at) => now - at < RATE_LIMIT_WINDOW_MS,
  );
  hits.push(now);
  recentSubmissions.set(ip, hits);

  // Keep the map from growing without bound on a long-lived instance.
  if (recentSubmissions.size > 500) {
    for (const [key, times] of recentSubmissions) {
      if (times.every((at) => now - at >= RATE_LIMIT_WINDOW_MS)) {
        recentSubmissions.delete(key);
      }
    }
  }

  return hits.length > RATE_LIMIT_MAX;
}

/** Control characters, minus tab/newline/carriage return. */
const CONTROL_CHARS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  // Strip control characters so they can't be smuggled into email headers.
  return value.replace(CONTROL_CHARS, "").trim().slice(0, max);
}

/** Single-line fields must not carry newlines into a header. */
function cleanLine(value: unknown, max: number): string {
  return clean(value, max).replace(/[\r\n\t]+/g, " ");
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: real people never see this field, bots fill everything in.
  if (cleanLine(payload.website, 200)) {
    // Pretend it worked so the bot doesn't retry with a different shape.
    return Response.json({ ok: true });
  }

  const type: LeadType = LEAD_TYPES.includes(payload.type as LeadType)
    ? (payload.type as LeadType)
    : "contact";

  const lead: Lead = {
    type,
    name: cleanLine(payload.name, FIELD_LIMITS.name),
    email: cleanLine(payload.email, FIELD_LIMITS.email),
    company: cleanLine(payload.company, FIELD_LIMITS.company),
    phone: cleanLine(payload.phone, FIELD_LIMITS.phone),
    message: clean(payload.message, FIELD_LIMITS.message),
    page: cleanLine(payload.page, 300),
  };

  if (!lead.name) {
    return Response.json(
      { ok: false, error: "Please tell us your name." },
      { status: 400 },
    );
  }
  if (!isValidEmail(lead.email)) {
    return Response.json(
      { ok: false, error: "Please enter a valid work email." },
      { status: 400 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many submissions. Please try again shortly." },
      { status: 429 },
    );
  }

  const result = await sendEmail({
    to: NOTIFY_TO,
    replyTo: lead.email,
    subject: subjectFor(lead),
    text: textBody(lead),
    html: htmlBody(lead),
  });

  if (!result.ok) {
    // Always leave a trace in the Vercel logs so a lead is never lost to a
    // provider outage or a missing API key.
    console.error(
      `[lead] delivery failed (${result.reason}${
        result.detail ? `: ${result.detail}` : ""
      }) — lead:`,
      JSON.stringify({ ...lead, ip }),
    );
    return Response.json(
      {
        ok: false,
        error:
          "We couldn't send that just now. Please email sales@agentnomics.ai and we'll pick it up.",
      },
      { status: 502 },
    );
  }

  console.log(
    `[lead] ${lead.type} from ${lead.email} sent via ${result.provider}`,
  );
  return Response.json({ ok: true });
}

function subjectFor(lead: Lead): string {
  const who = lead.company ? `${lead.name} — ${lead.company}` : lead.name;
  return lead.type === "demo"
    ? `BlueScaler demo request: ${who}`
    : `BlueScaler contact form: ${who}`;
}

function textBody(lead: Lead): string {
  const heading =
    lead.type === "demo"
      ? "New demo request from bluescaler.com"
      : "New contact message from bluescaler.com";

  const details = detailRows(lead)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
  const message = lead.message ? `\n\nMessage:\n${lead.message}` : "";

  return `${heading}\n\n${details}${message}\n\nReply directly to this email to reach them.`;
}

function detailRows(lead: Lead): [string, string][] {
  return (
    [
      ["Name", lead.name],
      ["Email", lead.email],
      ["Company", lead.company],
      ["Phone", lead.phone],
      ["Page", lead.page],
    ] as [string, string][]
  ).filter(([, value]) => value);
}

function htmlBody(lead: Lead): string {
  const heading =
    lead.type === "demo" ? "New demo request" : "New contact message";

  const rows = detailRows(lead)
    .map(([label, value]) => {
      const rendered =
        label === "Email"
          ? `<a href="mailto:${escapeHtml(value)}">${escapeHtml(value)}</a>`
          : escapeHtml(value);
      return (
        `<tr><td style="padding:6px 16px 6px 0;color:#6B7E9A;font-size:13px;">${label}</td>` +
        `<td style="padding:6px 0;color:#0B1628;font-size:14px;font-weight:600;">${rendered}</td></tr>`
      );
    })
    .join("");

  const message = lead.message
    ? `<p style="margin:20px 0 0;color:#6B7E9A;font-size:13px;">Message</p>
  <p style="margin:4px 0 0;color:#0B1628;font-size:14px;line-height:22px;white-space:pre-wrap;">${escapeHtml(
    lead.message,
  )}</p>`
    : "";

  return `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:560px;">
  <p style="margin:0 0 4px;color:#C8A96E;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">BlueScaler</p>
  <h1 style="margin:0 0 20px;color:#0B1628;font-size:20px;">${heading}</h1>
  <table style="border-collapse:collapse;">${rows}</table>
  ${message}
  <p style="margin:24px 0 0;color:#6B7E9A;font-size:12px;">Reply directly to this email to reach them.</p>
</div>`;
}
