import "@/app/globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '367591980504934');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=367591980504934&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

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
