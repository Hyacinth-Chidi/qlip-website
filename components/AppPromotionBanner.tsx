import React from "react";
import Image from "next/image";
import { CheckCircle2, Smartphone } from "lucide-react";

export default function AppPromotionBanner() {
  return (
    <section id="mobile-app" className="py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-r from-[#EBF4FF] via-[#F0F7FF] to-[#FFF6F0] p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left: App Icon & Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:col-span-8 text-center sm:text-left">
              {/* App Icon */}
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-3xl bg-white p-2 shadow-xl border border-blue-100 transition-transform hover:scale-105">
                <Image
                  src="/appicon.png"
                  alt="QLIP Mobile App Icon"
                  fill
                  className="object-contain p-1"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0078F7]">
                  Mobile App
                </span>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  Take <span className="text-[#0078F7]">QLIP</span> with You
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
                  Get the Android mobile app for an even faster, smoother download experience with automatic clipboard link detection and built-in offline video player.
                </p>

                {/* Download Buttons */}
                <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <a
                    href="https://www.dropbox.com/scl/fi/ym6xyz7g0dp5us3xlgn2q/qlip.apk?rlkey=1r2qxayu504uv1vy9qk946svw&st=ieaqumgf&raw=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="qlip.apk"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-black active:scale-95"
                  >
                    <Smartphone className="h-5 w-5 text-emerald-400" />
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-[10px] text-slate-400 font-normal uppercase">Direct Install</span>
                      <span className="text-xs font-bold">Download Android APK</span>
                    </div>
                  </a>

                </div>
              </div>
            </div>

            {/* Right: Benefits Bullets matching mockup */}
            <div className="flex flex-col items-center lg:items-start justify-center gap-4 lg:col-span-4 border-t border-blue-200/60 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0078F7] text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="text-base font-bold text-slate-800">
                  Faster downloads
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0078F7] text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="text-base font-bold text-slate-800">
                  Offline library & player
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0078F7] text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="text-base font-bold text-slate-800">
                  Works on all your devices
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
