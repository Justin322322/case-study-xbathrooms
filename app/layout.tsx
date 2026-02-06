import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xbathrooms-case-study.vercel.app"),
  title: {
    default: "Case Study: Automated Sales Pipeline Transformation | XBathrooms",
    template: "%s | XBathrooms Case Study",
  },
  description:
    "From zero systems to a fully automated sales pipeline. See how a $4M bathroom renovation company scaled with a CRM, ad infrastructure, and lead generation engine in just 7 weeks.",
  keywords: [
    "case study",
    "sales pipeline",
    "CRM",
    "lead generation",
    "marketing automation",
    "ad infrastructure",
    "business transformation",
    "GoHighLevel",
    "bathroom renovation marketing",
  ],
  authors: [{ name: "Carlisle Media", url: "https://www.carislemedia.com" }],
  creator: "Carlisle Media",
  publisher: "Carlisle Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "From zero systems to a fully automated sales pipeline",
    description:
      "How we built a CRM, ad infrastructure, and lead generation engine for a $4M bathroom renovation company — in just 7 weeks.",
    url: "https://xbathrooms-case-study.vercel.app",
    siteName: "XBathrooms Case Study",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "XBathrooms Case Study Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From zero systems to a fully automated sales pipeline",
    description:
      "How we built a CRM, ad infrastructure, and lead generation engine for a $4M bathroom renovation company — in just 7 weeks.",
    creator: "@carlislemedia",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://xbathrooms-case-study.vercel.app",
  },
  icons: {
    icon: "/cm-icon.png",
    shortcut: "/cm-icon.png",
    apple: "/cm-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
