import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroDownloader from "@/components/HeroDownloader";
import FeatureHighlights from "@/components/FeatureHighlights";
import AppPromotionBanner from "@/components/AppPromotionBanner";
import Footer from "@/components/Footer";
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "TikTok Video Downloader Without Watermark — Save HD MP4 & MP3 | QLIP",
  description:
    "Free TikTok video downloader without watermark. Save TikTok videos, stories, slideshow photos, and MP3 music in original HD quality on iPhone, Android, and PC.",
  alternates: {
    canonical: "/tiktok-downloader",
  },
  openGraph: {
    title: "TikTok Video Downloader Without Watermark — Fast & Free | QLIP",
    description:
      "Save TikTok clips, slideshows, and audio tracks in crisp HD without watermark in seconds.",
    url: "https://qlip.techfamz.com/tiktok-downloader",
  },
};

export default function TikTokDownloaderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "QLIP TikTok Video Downloader",
        url: "https://qlip.techfamz.com/tiktok-downloader",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "All (iOS, Android, Windows, Mac)",
        description:
          "Free online TikTok video downloader without watermark in original HD MP4 and MP3.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I download TikTok videos without watermark?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Copy the video link from the TikTok app, paste it into the QLIP search box, and click Download. Select the 'HD Without Watermark' option to save.",
            },
          },
          {
            "@type": "Question",
            name: "Can I extract audio (MP3) from a TikTok video?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. When you paste any TikTok video URL, QLIP provides an 'Audio Only' MP3 download option.",
            },
          },
          {
            "@type": "Question",
            name: "Is QLIP TikTok downloader free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, QLIP is 100% free with unlimited downloads and no registration required.",
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
              TikTok Video Downloader{" "}
              <span className="gradient-text-blue">Without Watermark</span>
            </>
          }
          subtitle={
            <p>
              Save high-resolution{" "}
              <strong className="text-slate-900 font-semibold">TikTok videos without watermarks</strong>,{" "}
              photo slideshows, and extract original audio tracks in MP3 format. 100% free with unlimited downloads.
            </p>
          }
          placeholder="Paste TikTok link here (e.g. https://vt.tiktok.com/...)"
        />

        <FeatureHighlights />

        {/* SEO Deep Dive: TikTok Specific Guide */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Use QLIP for TikTok Downloads?
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              The fastest way to download clean TikTok videos in original HD quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0078F7] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No Watermark</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Removes the bouncing TikTok logo and user watermark completely, producing a clean, professional MP4 file.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0078F7] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lightning Fast</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Optimized server pipeline processes TikTok videos in less than 2 seconds with zero re-encoding lag.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0078F7] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">100% Free & Secure</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No sign-up, no app install required, and no tracking cookies. Works directly in your browser.
              </p>
            </div>
          </div>

          {/* How to download TikTok videos */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              How to Download TikTok Videos Without Watermark
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0078F7] text-white flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Copy Link</h4>
                  <p className="text-sm text-slate-600">
                    Open TikTok, tap the <strong>Share</strong> button on any video and choose <strong>Copy Link</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0078F7] text-white flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Paste Link</h4>
                  <p className="text-sm text-slate-600">
                    Paste the TikTok URL into the search field above and click <strong>Download</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0078F7] text-white flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Save Video</h4>
                  <p className="text-sm text-slate-600">
                    Select your preferred quality (HD Without Watermark or MP3 Audio) to save directly to your device.
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
