import "./globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import SupportHelpSection from "@/components/SupportHelpSection";
import ContactSupportBanner from "@/components/ContactSupportBanner";
import SpacetopiaSubscriptionSection from "@/components/SpacetopiaSubscriptionSection";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAC - National Astronomy Challenge",
  description: "Be Part of India's Biggest Astronomy Challenge",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-YF108ZPTLG" />
      </head>
      <body className="font-inter">
        <Header />
        {children}
        <SupportHelpSection />
        <SpacetopiaSubscriptionSection />
        <ContactSupportBanner />
        <Footer />
      </body>
    </html>
  );
}
