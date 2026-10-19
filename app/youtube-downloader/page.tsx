import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroDownloader from "@/components/HeroDownloader";
import FeatureHighlights from "@/components/FeatureHighlights";
import AppPromotionBanner from "@/components/AppPromotionBanner";
import Footer from "@/components/Footer";
import { Music, MonitorPlay, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "YouTube Video & Shorts Downloader — 1080p, 4K & MP3 Audio | QLIP",
  description:
    "Free YouTube downloader for YouTube videos, Shorts, and music tracks in 1080p Full HD, 4K, and 320kbps MP3 on PC, Android, and iPhone.",
  alternates: {
    canonical: "/youtube-downloader",
  },
  openGraph: {
    title: "YouTube Video & Shorts Downloader — Fast & Free 1080p/4K | QLIP",
    description:
      "Save YouTube videos, Shorts clips, and convert YouTube to MP3 audio in seconds without software.",
    url: "https://qlip.techfamz.com/youtube-downloader",
    // A page-level openGraph block replaces the root one outright rather than
    // merging, so the shared image has to be restated or the page ships with
    // no preview image at all.
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QLIP — YouTube Video & Shorts Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Video & Shorts Downloader — Fast & Free 1080p/4K | QLIP",
    description:
      "Save YouTube videos, Shorts clips, and convert YouTube to MP3 audio in seconds without software.",
    images: ["/og-image.png"],
  },
};

export default function YouTubeDownloaderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "QLIP YouTube Downloader",
        url: "https://qlip.techfamz.com/youtube-downloader",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "All (iOS, Android, Windows, Mac)",
        description:
          "Free online YouTube video downloader for Full HD, 4K videos, YouTube Shorts, and MP3 audio.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I download YouTube Shorts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Copy the YouTube Shorts URL from the YouTube app or browser, paste it into QLIP, and select your preferred quality to download immediately.",
            },
          },
          {
            "@type": "Question",
            name: "Does QLIP support 1080p Full HD and 4K YouTube videos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. QLIP detects all available resolution formats from 360p up to 1080p Full HD and 4K, automatically merging high-definition video and audio.",
            },
          },
          {
            "@type": "Question",
            name: "Can I convert YouTube videos to MP3 audio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Simply paste the YouTube link and click the 'Audio Only' format option to download the pure sound track.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1">
        <HeroDownloader
          heading={
            <>
              YouTube Video & Shorts{" "}
              <span className="gradient-text-blue">Downloader</span>
            </>
          }
          subtitle={
            <p>
              Download <strong className="text-slate-900 font-semibold">YouTube videos and Shorts</strong> in{" "}
              <strong className="text-slate-900 font-semibold">1080p Full HD, 4K</strong>, or convert to{" "}
              <strong className="text-slate-900 font-semibold">MP3 audio</strong> with fast server speeds.
            </p>
          }
          placeholder="Paste YouTube link here (e.g. https://youtu.be/...)"
        />

        <FeatureHighlights />

        {/* SEO Deep Dive: YouTube Specific Guide */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              High-Speed YouTube Video & Audio Downloads
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Download standard videos, YouTube Shorts, and podcasts in premium quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#FF0000] flex items-center justify-center mb-4">
                <MonitorPlay className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1080p & 4K Ultra HD</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Download crisp YouTube content in Full HD and 4K with audio merged using high-compatibility H.264 video.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#FF0000] flex items-center justify-center mb-4">
                <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">YouTube Shorts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fast extraction for vertical YouTube Shorts. Save clips to your phone or computer with a single tap.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#FF0000] flex items-center justify-center mb-4">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Audio Only MP3</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Extract high-bitrate audio from songs, speeches, background music, or podcast episodes effortlessly.
              </p>
            </div>
          </div>

          {/* How to download YouTube videos */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              How to Download YouTube Videos & Shorts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Copy Video URL</h4>
                  <p className="text-sm text-slate-600">
                    Navigate to the YouTube video or Short, click <strong>Share</strong> and choose <strong>Copy Link</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Paste into QLIP</h4>
                  <p className="text-sm text-slate-600">
                    Paste the link into the search bar at the top of the page and click <strong>Download</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Select Quality</h4>
                  <p className="text-sm text-slate-600">
                    Select your preferred video quality (1080p, 720p, or Audio MP3) to download directly to your storage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AppPromotionBanner />
      </main>

      <Footer />
    </div>
  );
}
