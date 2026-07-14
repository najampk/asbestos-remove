import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConditionalCTABand from "@/components/ConditionalCTABand";
import MobileActionBar from "@/components/MobileActionBar";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { localBusinessSchema } from "@/lib/schema";
import { SITE_URL, BUSINESS } from "@/lib/constants";

// Self-hosted via next/font/local from vendored woff2 files (SPEC.md §1.3 / §2).
// Files are the latin weight-axis variable fonts (Archivo, Inter) and the three
// IBM Plex Mono weights, so there are zero runtime or build-time font requests.
const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-mono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Asbestos Removal Glasgow | Surveys, Removal & Disposal",
    template: `%s | ${BUSINESS.tradingName}`,
  },
  description:
    "Safe, compliant asbestos removal, surveys, disposal and management across Glasgow. UKATA-trained team, 30+ years' experience, free quotes.",
  applicationName: BUSINESS.tradingName,
  openGraph: {
    type: "website",
    siteName: BUSINESS.tradingName,
    locale: "en_GB",
    images: [{ url: "/og-img.jpg", width: 1731, height: 909 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-img.jpg"] },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon-180x180.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-surface pb-16 text-ink antialiased lg:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-950 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <ConditionalCTABand />
        <Footer />
        <MobileActionBar />
        <Analytics />
      </body>
    </html>
  );
}
