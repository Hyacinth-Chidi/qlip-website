import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8">
              <Image
                src="/qliplogo.png"
                alt="QLIP Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              QLIP
            </span>
          </Link>

          {/* Navigation Links matching mockup */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
            <Link href="/" className="hover:text-[#0078F7] transition">
              Home
            </Link>
            <Link href="#features" className="hover:text-[#0078F7] transition">
              Features
            </Link>
            <Link href="#tiktok" className="hover:text-[#0078F7] transition">
              TikTok Downloader
            </Link>
            <Link href="#instagram" className="hover:text-[#0078F7] transition">
              Instagram Downloader
            </Link>
            <Link href="#how-it-works" className="hover:text-[#0078F7] transition">
              How It Works
            </Link>
            <Link href="#faq" className="hover:text-[#0078F7] transition">
              FAQ
            </Link>
          </div>

          {/* Social Icons matching mockup */}
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full p-1.5 hover:bg-slate-100 transition"
              title="YouTube"
            >
              <Image src="/icons/youtube.svg" alt="YouTube" width={20} height={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full p-1.5 hover:bg-slate-100 transition"
              title="Instagram"
            >
              <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full p-1.5 hover:bg-slate-100 transition"
              title="TikTok"
            >
              <Image src="/icons/tiktok.svg" alt="TikTok" width={20} height={20} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full p-1.5 hover:bg-slate-100 transition"
              title="X"
            >
              <Image src="/icons/x.svg" alt="X" width={20} height={20} />
            </a>
          </div>
        </div>

        {/* SEO Keyword Links Row */}
        <div className="mt-8 border-t border-slate-100 pt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <Link href="#tiktok" className="hover:text-slate-800">
            TikTok Video Downloader Without Watermark
          </Link>
          <span>·</span>
          <Link href="#instagram" className="hover:text-slate-800">
            Instagram Reels Downloader HD
          </Link>
          <span>·</span>
          <Link href="#instagram" className="hover:text-slate-800">
            Instagram Carousel Photo Downloader
          </Link>
          <span>·</span>
          <Link href="#tiktok" className="hover:text-slate-800">
            TikTok Audio MP3 Extractor
          </Link>
          <span>·</span>
          <a
            href="https://www.dropbox.com/scl/fi/ym6xyz7g0dp5us3xlgn2q/qlip.apk?rlkey=1r2qxayu504uv1vy9qk946svw&st=ieaqumgf&raw=1"
            target="_blank"
            rel="noopener noreferrer"
            download="qlip.apk"
            className="hover:text-slate-800"
          >
            QLIP for Android APK
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} QLIP. All rights reserved. Disclaimer: QLIP is not affiliated with TikTok, Instagram, or any social media platform.</p>
        </div>
      </div>
    </footer>
  );
}
