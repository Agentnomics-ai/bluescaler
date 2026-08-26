import type { Metadata } from "next";
import { headers } from "next/headers";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Cairo } from "next/font/google";
import { DEFAULT_LOCALE, dirFor, isLocale } from "@/components/i18n";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

/** Arabic face — Jakarta has no Arabic coverage, so text would fall back. */
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bluescaler.com"),
  title: "BlueScaler — AI Agents for Middle East Businesses",
  description:
    "Deploy conversational and analytical AI agents for your SMB. Built for UAE, Saudi Arabia, Qatar and Kuwait. Powered by Agentnomics.",
  openGraph: {
    title: "BlueScaler — AI Agents for Middle East Businesses",
    description:
      "Automate customer support and unlock business insights with AI agents built for GCC SMBs.",
    url: "https://bluescaler.com",
    siteName: "BlueScaler",
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Middleware resolves the locale; the <html> element lives above the
  // [locale] segment, so it can't read the route param itself.
  const requestHeaders = await headers();
  const header = requestHeaders.get("x-bluescaler-locale") ?? undefined;
  const locale = isLocale(header) ? header : DEFAULT_LOCALE;

  return (
    <html
      lang={locale}
      dir={dirFor(locale)}
      data-scroll-behavior="smooth"
      className={`${jakartaSans.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#060C18] text-[#F7F4EF]">{children}</body>
    </html>
  );
}
