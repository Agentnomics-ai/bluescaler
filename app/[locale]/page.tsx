import { AnalyticalAgents } from "@/components/AnalyticalAgents";
import { ConversationalAgents } from "@/components/ConversationalAgents";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { TrustSection } from "@/components/TrustSection";
import { DEFAULT_LOCALE, isLocale } from "@/components/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;

  return (
    <main>
      <Hero locale={locale} />
      <AnalyticalAgents locale={locale} />
      <ConversationalAgents locale={locale} />
      <Industries locale={locale} />
      <TrustSection locale={locale} />
      <CTASection locale={locale} />
    </main>
  );
}
