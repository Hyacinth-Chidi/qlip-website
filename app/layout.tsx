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
    "qlip downloader",
    "qlip",
    "TikTok downloader",
    "Instagram Video Downloader",
    "TikTok downloader without watermark",
    "Instagram reels downloader",
    "Instagram video saver",
    "download Instagram carousel photos",
    "Video Downloader",
    "Video Saver",
    "TikTok to MP3 audio",
    "free video downloader",
    "QLIP video downloader",
  ],
  authors: [{ name: "QLIP Team" }],
  creator: "QLIP",
  publisher: "QLIP",
  applicationName: "QLIP Web",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://qlip-downloader.vercel.app"
  ),
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
    url: "https://qlip-downloader.vercel.app",
    siteName: "QLIP Video Downloader",
    title: "QLIP — Free TikTok & Instagram Video Downloader Without Watermark",
    description:
      "Save TikTok videos without watermark and download Instagram Reels, Stories, and carousel photos in 1080p Full HD.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QLIP — Free TikTok & Instagram Video Downloader Without Watermark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QLIP — Free TikTok & Instagram Video Downloader (No Watermark)",
    description:
      "Save TikTok videos without watermark and download Instagram Reels, Stories, and carousel photos in HD.",
    images: ["/og-image.png"],
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
  verification: {
    google: "2h8jcwiIfriWqwvghvVl4_tUTNJG-XM0v5OXRMfm7t0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://qlip-downloader.vercel.app/#webapp",
        name: "QLIP Video Downloader",
        url: "https://qlip-downloader.vercel.app",
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
          "Facebook Video Downloader",
          "Instagram Video Downloader",
          "YouTube Video Downloader",
          "X Video Downloader",
          "qlip downloader",
          "Pinterest Video Downloader",
          "Vimeo Video Downloader",
          "Multi-slide Carousel Photo Downloader",
          "High-speed MP3 Audio Extraction",
          "1080p Full HD Video Quality",
          "All-Platform Video Support",
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Download TikTok Videos Without Watermark",
        description:
          "Step-by-step guide to download high-definition TikTok videos and Instagram Reels using QLIP.",
        step: [
          {
            "@type": "HowToStep",
            name: "Copy Video Link",
            text: "Open TikTok or Instagram, find the video you want to save, tap Share, and copy the link.",
            position: 1,
          },
          {
            "@type": "HowToStep",
            name: "Paste Link in QLIP",
            text: "Paste the URL into the QLIP search box on qlip-downloader.vercel.app and click 'Download'.",
            position: 2,
          },
          {
            "@type": "HowToStep",
            name: "Choose Quality and Download",
            text: "Choose your preferred video resolution (1080p, 720p, or MP3 audio) and click download.",
            position: 3,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I download TikTok videos without watermark?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Copy the link of the TikTok video from the TikTok app or browser, paste it into QLIP, and click 'Download'. QLIP automatically removes the TikTok watermark and gives you a direct link to the original Full HD MP4 file.",
            },
          },
          {
            "@type": "Question",
            name: "Can I download Instagram Reels, Stories and multi-slide Carousel photos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! QLIP supports Instagram Reels, video posts, Stories, and multi-slide carousel photo galleries at original resolution.",
            },
          },
          {
            "@type": "Question",
            name: "Is QLIP 100% free? Do I need to create an account?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "QLIP is completely free with no limits and no account registration or passwords required.",
            },
          },
          {
            "@type": "Question",
            name: "Does QLIP support other platforms besides TikTok and Instagram?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! QLIP also supports YouTube, Facebook Watch & Reels, X (Twitter), Pinterest, Vimeo, and over 100+ other video sites.",
            },
          },
          {
            "@type": "Question",
            name: "Can I extract and download only the audio (MP3) from a video?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, when you fetch a video, QLIP provides an 'Audio Only' option to download the audio track in high-bitrate MP3 format.",
            },
          },
        ],
      },
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
