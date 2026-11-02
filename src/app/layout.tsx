import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travel Ease | Visa and travel agency",
  description:
    "Visa assistance, flights, holidays, corporate travel and study abroad support, handled by one team from planning to departure.",
  icons: { icon: "/brand/travelease-icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-navy">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
