import type { Metadata, Viewport } from "next";
import { getSiteUrl, seoKeywords } from "@/data/site";
import "./globals.css";

const siteUrl = getSiteUrl();
const title =
  "Jawad Shaikh | Senior Software Developer & AI Engineer in Abu Dhabi";
const description =
  "Senior Software Developer in Abu Dhabi, UAE specializing in Python, Django, React, Next.js, GenAI, LLMs, RAG, document intelligence, Banking, and FinTech solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Jawad Shaikh",
  },
  description,
  keywords: seoKeywords,
  applicationName: "Jawad Shaikh Portfolio",
  authors: [{ name: "Jawad Shaikh" }],
  creator: "Jawad Shaikh",
  publisher: "Jawad Shaikh",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "en-AE": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "/",
    siteName: "Jawad Shaikh - Senior Software Developer",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi",
    "geo.position": "24.4539;54.3773",
    ICBM: "24.4539, 54.3773",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070a10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
