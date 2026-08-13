/**
 * Minimal, dependency-free transactional email sender.
 *
 * Picks whichever provider is configured, in order:
 *   1. RESEND_API_KEY    → https://resend.com
 *   2. SENDGRID_API_KEY  → https://sendgrid.com
 *
 * Both are plain `fetch` calls, so the site keeps zero runtime dependencies
 * and runs unchanged on Vercel's Node runtime.
 */

export type EmailMessage = {
  to: string;
  subject: string;
  text: string;
  html: string;
  /** Where a reply should go — normally the person who filled in the form. */
  replyTo?: string;
};

export type SendResult =
  | { ok: true; provider: "resend" | "sendgrid" }
  | { ok: false; reason: "not_configured" | "provider_error"; detail?: string };

/** Verified sender. Must be on a domain verified with the provider. */
const FROM_ADDRESS =
  process.env.LEAD_EMAIL_FROM ?? "BlueScaler <noreply@bluescaler.com>";

/** Splits `Name <a@b.com>` into its parts; SendGrid needs them separately. */
function parseAddress(address: string): { email: string; name?: string } {
  const match = address.match(/^\s*(.*?)\s*<\s*([^>]+)\s*>\s*$/);
  if (match) {
    const name = match[1].replace(/^"|"$/g, "").trim();
    return { email: match[2].trim(), name: name || undefined };
  }
  return { email: address.trim() };
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY || process.env.SENDGRID_API_KEY);
}

export async function sendEmail(message: EmailMessage): Promise<SendResult> {
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) return sendViaResend(resendKey, message);

  const sendgridKey = process.env.SENDGRID_API_KEY;
  if (sendgridKey) return sendViaSendGrid(sendgridKey, message);

  return { ok: false, reason: "not_configured" };
}

async function sendViaResend(
  apiKey: string,
  message: EmailMessage,
): Promise<SendResult> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [message.to],
        subject: message.subject,
        text: message.text,
        html: message.html,
        ...(message.replyTo ? { reply_to: message.replyTo } : {}),
      }),
    });

    if (!res.ok) {
      return {
        ok: false,
        reason: "provider_error",
        detail: `resend ${res.status}: ${await safeBody(res)}`,
      };
    }
    return { ok: true, provider: "resend" };
  } catch (error) {
    return { ok: false, reason: "provider_error", detail: String(error) };
  }
}

async function sendViaSendGrid(
  apiKey: string,
  message: EmailMessage,
): Promise<SendResult> {
  try {
    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: message.to }] }],
        from: parseAddress(FROM_ADDRESS),
        subject: message.subject,
        content: [
          { type: "text/plain", value: message.text },
          { type: "text/html", value: message.html },
        ],
        ...(message.replyTo ? { reply_to: { email: message.replyTo } } : {}),
      }),
    });

    // SendGrid returns 202 Accepted on success.
    if (!res.ok) {
      return {
        ok: false,
        reason: "provider_error",
        detail: `sendgrid ${res.status}: ${await safeBody(res)}`,
      };
    }
    return { ok: true, provider: "sendgrid" };
  } catch (error) {
    return { ok: false, reason: "provider_error", detail: String(error) };
  }
}

async function safeBody(res: Response): Promise<string> {
  try {
    return (await res.text()).slice(0, 500);
  } catch {
    return "<unreadable body>";
  }
}