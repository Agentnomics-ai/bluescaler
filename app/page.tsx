import { AnalyticalAgents } from "@/components/AnalyticalAgents";
import { ConversationalAgents } from "@/components/ConversationalAgents";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AnalyticalAgents />
      <ConversationalAgents />
      <Industries />
      <TrustSection />
      <CTASection />
    </main>
  );
}
