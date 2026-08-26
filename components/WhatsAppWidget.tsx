import { getCopy } from "./content/site";
import type { Locale } from "./i18n";
import { WHATSAPP_URL } from "./site-content";

export function WhatsAppWidget({ locale }: { locale: Locale }) {
  const t = getCopy(locale);
  return (
    <a
      href={WHATSAPP_URL}
      className="fixed bottom-5 end-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-sm font-black text-[#06150B] shadow-xl shadow-black/30 transition-transform hover:scale-105"
      aria-label={t.whatsapp.label}
    >
      WA
    </a>
  );
}
