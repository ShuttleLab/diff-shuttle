import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-sync";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ff" },
    { media: "(prefers-color-scheme: dark)", color: "#2a2540" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Diff Shuttle",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description:
    "Compare texts, code, JSON, CSV files side by side in your browser. 100% private, no uploads, no registration.",
  url: "https://diff.shuttlelab.org",
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://diff.shuttlelab.org"),
  title: "Diff Shuttle | Free Online Text & Code Comparison Tool",
  description:
    "Compare texts, code, JSON, CSV files side by side in your browser. 100% private, no uploads, no registration. Free forever.",
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Diff Shuttle | Free Online Text & Code Comparison Tool",
    description:
      "Compare texts, code, JSON, CSV files side by side in your browser. 100% private, no uploads, no registration.",
    siteName: "Diff Shuttle",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diff Shuttle | Free Online Text & Code Comparison Tool",
    description:
      "Compare texts, code, JSON, CSV files side by side in your browser. 100% private, no uploads, no registration.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Diff Shuttle",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          {children}
          <ServiceWorkerRegister />
          <Toaster
            position="top-center"
            richColors
            closeButton
            duration={3000}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
