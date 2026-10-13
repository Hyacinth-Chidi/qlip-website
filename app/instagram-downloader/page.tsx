import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroDownloader from "@/components/HeroDownloader";
import FeatureHighlights from "@/components/FeatureHighlights";
import AppPromotionBanner from "@/components/AppPromotionBanner";
import Footer from "@/components/Footer";
import { Film, Image as ImageIcon, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Instagram Video & Reels Downloader — Save Reels, Stories & Photos | QLIP",
  description:
    "Free Instagram downloader for Instagram Reels, feed videos, IG stories, and carousel photo posts in 1080p Full HD on iPhone, Android, and PC.",
  alternates: {
    canonical: "/instagram-downloader",
  },
  openGraph: {
    title: "Instagram Reels & Video Downloader — Fast & Free 1080p | QLIP",
    description:
      "Save Instagram Reels, IGTV, and carousel albums in full resolution with audio intact.",
    url: "https://qlip.techfamz.com/instagram-downloader",
  },
};

export default function InstagramDownloaderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "QLIP Instagram Downloader",
        url: "https://qlip.techfamz.com/instagram-downloader",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "All (iOS, Android, Windows, Mac)",
        description:
          "Free online Instagram downloader for Reels, Stories, Videos, and Carousel Photos in full resolution.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I download Instagram Reels in HD?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Open the Instagram app, tap the Share icon on any Reel, copy the link, and paste it into QLIP. Click Download to save the 1080p MP4 file.",
            },
          },
          {
            "@type": "Question",
            name: "Can I download Instagram carousel photos or multi-slide posts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. QLIP detects multi-item Instagram posts and allows you to download each slide or photo individually in original quality.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to log into my Instagram account?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. QLIP never asks for your Instagram login or credentials. It works completely anonymously.",
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
              Instagram Reels & Video{" "}
              <span className="gradient-text-blue">Downloader</span>
            </>
          }
          subtitle={
            <p>
              Download <strong className="text-slate-900 font-semibold">Instagram Reels</strong>,{" "}
              feed videos, IG stories, and carousel photo albums in crisp{" "}
              <strong className="text-slate-900 font-semibold">1080p Full HD</strong>. No login required.
            </p>
          }
          placeholder="Paste Instagram link here (e.g. https://www.instagram.com/reel/...)"
        />

        <FeatureHighlights />

        {/* SEO Deep Dive: Instagram Specific Guide */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Download Any Instagram Content in Seconds
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Save Reels, Stories, IGTV, and high-resolution photo galleries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#E1306C] flex items-center justify-center mb-4">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1080p Reels & Videos</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Preserves original bitrate, clarity, and audio synchronization for every Instagram Reel and video clip.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#E1306C] flex items-center justify-center mb-4">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Carousel Posts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Handles multi-photo and mixed video/photo carousel posts, allowing you to save all media items cleanly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#E1306C] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No Account Needed</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Download public Instagram media without logging into your personal Instagram or Meta account.
              </p>
            </div>
          </div>

          {/* How to download Instagram Reels */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              How to Download Instagram Reels & Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E1306C] text-white flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Copy Reel Link</h4>
                  <p className="text-sm text-slate-600">
                    Find the Reel or post on Instagram, tap the three dots or Share icon, and select <strong>Copy Link</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E1306C] text-white flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Paste into QLIP</h4>
                  <p className="text-sm text-slate-600">
                    Paste the copied link into the search box above and press <strong>Download</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E1306C] text-white flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Download HD MP4</h4>
                  <p className="text-sm text-slate-600">
                    Click the download button next to your desired resolution to save directly to your gallery or camera roll.
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
