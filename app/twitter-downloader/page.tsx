import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroDownloader from "@/components/HeroDownloader";
import AdsterraNativeBanner from "@/components/AdsterraNativeBanner";
import FeatureHighlights from "@/components/FeatureHighlights";
import AppPromotionBanner from "@/components/AppPromotionBanner";
import Footer from "@/components/Footer";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Twitter (X) Video Downloader — Download X Videos & GIFs in HD MP4 | QLIP",
  description:
    "Free Twitter / X video downloader. Save X videos, GIFs, and clips in 1080p, 720p HD MP4 on iPhone, Android, and PC with audio intact.",
  alternates: {
    canonical: "/twitter-downloader",
  },
  openGraph: {
    title: "Twitter (X) Video Downloader — Fast & Free HD MP4 | QLIP",
    description:
      "Download X (Twitter) videos and animated GIFs in original high resolution with sound in seconds.",
    url: "https://qlip.techfamz.com/twitter-downloader",
    // A page-level openGraph block replaces the root one outright rather than
    // merging, so the shared image has to be restated or the page ships with
    // no preview image at all.
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QLIP — Twitter (X) Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter (X) Video Downloader — Fast & Free HD MP4 | QLIP",
    description:
      "Download X (Twitter) videos and animated GIFs in original high resolution with sound in seconds.",
    images: ["/og-image.png"],
  },
};

export default function TwitterDownloaderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "QLIP Twitter (X) Video Downloader",
        url: "https://qlip.techfamz.com/twitter-downloader",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "All (iOS, Android, Windows, Mac)",
        description:
          "Free online Twitter / X video downloader for HD MP4 videos and animated GIFs.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I download a video from Twitter (X)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Click the Share icon beneath the tweet on Twitter/X, select 'Copy link', paste it into QLIP, and choose your preferred resolution to download.",
            },
          },
          {
            "@type": "Question",
            name: "Can I download Twitter animated GIFs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Twitter encodes GIFs as looping MP4 files. QLIP extracts them in original resolution so they play smoothly anywhere.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to sign into my X account?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. QLIP operates 100% anonymously. You never need to enter your X credentials.",
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
              Twitter (X) Video{" "}
              <span className="gradient-text-blue">Downloader</span>
            </>
          }
          subtitle={
            <p>
              Download <strong className="text-slate-900 font-semibold">Twitter (X) videos and GIFs</strong> in crisp{" "}
              <strong className="text-slate-900 font-semibold">1080p, 720p HD MP4</strong> with audio intact. Fast, free, and unlimited.
            </p>
          }
          placeholder="Paste Twitter / X link here (e.g. https://x.com/...)"
        />

        {/* Adsterra Native Banner */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AdsterraNativeBanner />
        </div>

        <FeatureHighlights />

        {/* SEO Deep Dive: Twitter Specific Guide */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Download Twitter / X Videos & GIFs in Original HD
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              The simplest way to save viral clips, sports highlights, and memes from X.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <Image src="/icons/x.svg" alt="X" width={22} height={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Original Bitrate & HD</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Extracts the highest available bitrate stream directly from X servers without compression loss.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">GIF to MP4 Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Seamlessly extracts animated Twitter GIFs in universally playable MP4 video format.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Private & Secure</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No sign-in or personal permissions required. We do not store downloaded files or personal search history.
              </p>
            </div>
          </div>

          {/* How to download Twitter videos */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              How to Download Videos from Twitter (X)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Copy Post Link</h4>
                  <p className="text-sm text-slate-600">
                    Find the tweet on X/Twitter containing the video or GIF. Tap the <strong>Share</strong> button and click <strong>Copy link</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Paste into QLIP</h4>
                  <p className="text-sm text-slate-600">
                    Paste the link into the search box at the top of the page and click <strong>Download</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Save MP4 Video</h4>
                  <p className="text-sm text-slate-600">
                    Select your preferred resolution (1080p, 720p, or 480p) to save the video directly to your gallery or downloads folder.
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
