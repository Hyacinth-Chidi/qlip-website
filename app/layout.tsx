import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QLIP — Free TikTok & Instagram Video Downloader (No Watermark, HD)",
  description:
    "Download TikTok videos without watermark in Full HD 1080p and save Instagram Reels, Stories, audio MP3, and carousel photo galleries. 100% free, fast, and works with all major platforms.",
  keywords: [
    "TikTok video downloader",
    "TikTok downloader without watermark",
    "Instagram reels downloader",
    "Instagram video saver",
    "download Instagram carousel photos",
    "TikTok to MP3 audio",
    "free video downloader",
    "QLIP video downloader",
  ],
  authors: [{ name: "QLIP Team" }],
  creator: "QLIP",
  publisher: "QLIP",
  applicationName: "QLIP Web",
  metadataBase: new URL("https://qlip.techfamz.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/qliplogo.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qlip.techfamz.com",
    siteName: "QLIP Video Downloader",
    title: "QLIP — Free TikTok & Instagram Video Downloader Without Watermark",
    description:
      "Save TikTok videos without watermark and download Instagram Reels, Stories, and carousel photos in 1080p Full HD.",
    images: [
      {
        url: "/appicon.png",
        width: 1024,
        height: 1024,
        alt: "QLIP Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QLIP — Free TikTok & Instagram Video Downloader (No Watermark)",
    description:
      "Save TikTok videos without watermark and download Instagram Reels, Stories, and carousel photos in HD.",
    images: ["/appicon.png"],
    creator: "@qlipapp",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "QLIP Video Downloader",
    url: "https://qlip.techfamz.com",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All (Web, Android, iOS, Windows, Mac)",
    description:
      "Online video downloader tailored for TikTok without watermark, Instagram Reels, Stories, and Carousels in Full HD.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "TikTok Video Downloader Without Watermark",
      "Instagram Reels and Stories Downloader",
      "Multi-slide Carousel Photo Downloader",
      "High-speed MP3 Audio Extraction",
      "1080p Full HD Video Quality",
      "All-Platform Video Support",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
