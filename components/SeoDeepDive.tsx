import React from "react";
import Image from "next/image";
import {
  Link as LinkIcon,
  SlidersHorizontal,
  Download,
  CheckCircle2,
} from "lucide-react";

export default function SeoDeepDive() {
  const platforms = [
    { name: "YouTube", icon: "/icons/youtube.svg" },
    { name: "TikTok", icon: "/icons/tiktok.svg" },
    { name: "Instagram", icon: "/icons/instagram.svg" },
    { name: "Facebook", icon: "/icons/facebook.svg" },
    { name: "X (Twitter)", icon: "/icons/x.svg" },
    { name: "Pinterest", icon: "/icons/pinterest.svg" },
    { name: "Vimeo", icon: "/icons/vimeo.svg" },
    { name: "Dailymotion", icon: "/icons/dailymotion.svg" },
    { name: "WhatsApp", icon: "/icons/whatsapp.svg" },
    { name: "Twitch", icon: "/icons/twitch.png" },
  ];

  return (
    <div id="supported-platforms" className="py-16 sm:py-24 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mockup Middle Section: Supported Platforms (Left) vs 3 Steps (Right) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Supported Platforms */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0078F7]">
              Supported Platforms
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Download from Your Favorite{" "}
              <span className="text-[#0078F7]">Platforms</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              QLIP supports all popular social media and video websites. Just copy the link,
              paste it in QLIP, and download your video in seconds.
            </p>

            {/* Platform Badges Grid matching original mockup */}
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 gap-3.5">
              {platforms.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-3.5 transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="relative h-8 w-8">
                    <Image src={p.icon} alt={p.name} fill className="object-contain" />
                  </div>
                  <span className="mt-2 text-xs font-bold text-slate-800 text-center truncate w-full">
                    {p.name}
                  </span>
                </div>
              ))}

              {/* + More Card */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 p-3.5 text-center">
                <span className="text-sm font-bold text-[#0078F7]">+ More</span>
              </div>
            </div>
          </div>

          {/* Right Column: How It Works 3 Simple Steps */}
          <div id="how-it-works" className="lg:col-span-6 flex flex-col justify-start">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0078F7]">
              How It Works
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              3 Simple <span className="text-[#0078F7]">Steps</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Downloading your favorite videos is easier than you think.
              Just follow these 3 simple steps:
            </p>

            {/* Steps List */}
            <div className="mt-8 flex flex-col gap-5">
              {/* Step 1 */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0078F7] border border-blue-100 font-black text-base">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4 text-[#0078F7]" />
                    <h3 className="text-base font-bold text-slate-900">Paste the Link</h3>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Copy the video link from your favorite platform and paste it in QLIP.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0078F7] border border-blue-100 font-black text-base">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4 text-[#0078F7]" />
                    <h3 className="text-base font-bold text-slate-900">Choose Resolution</h3>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Select your preferred quality (e.g. 1080p, 720p, 480p, etc.).
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0078F7] border border-blue-100 font-black text-base">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-[#0078F7]" />
                    <h3 className="text-base font-bold text-slate-900">Download</h3>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Tap the download button and enjoy your video offline!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated SEO Highlight Cards for TikTok & Instagram */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* TikTok Deep Dive SEO Card */}
          <div id="tiktok" className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 shrink-0">
                <Image src="/icons/tiktok.svg" alt="TikTok" fill className="object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  TikTok Video Downloader Without Watermark
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Save TikTok videos in clean MP4 format without the annoying bouncing TikTok watermark or username logo. 
              QLIP streams the original creator file directly from TikTok servers, guaranteeing original resolution 
              and crisp fidelity.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Remove TikTok watermark completely in one click</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Extract TikTok background music & sounds to MP3</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Works with TikTok web links, short links, and mobile shares</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Compatible with iOS, Android, Windows, Mac, and Linux</span>
              </li>
            </ul>
          </div>

          {/* Instagram Deep Dive SEO Card */}
          <div id="instagram" className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 shrink-0">
                <Image src="/icons/instagram.svg" alt="Instagram" fill className="object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  Instagram Reels & Carousel Photo Downloader
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Download trending Instagram Reels, video posts, Stories, and multi-image photo carousels in 
              high definition. QLIP automatically detects multi-slide carousel posts and lets you download 
              individual slides or the complete album at full original resolution.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-pink-500 shrink-0" />
                <span>Download Instagram Reels with audio in Full HD 1080p</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-pink-500 shrink-0" />
                <span>Save multi-slide Instagram carousel photo galleries</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-pink-500 shrink-0" />
                <span>No Instagram account login or credential entry required</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-pink-500 shrink-0" />
                <span>Fast zero-compression download straight to your camera roll</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
