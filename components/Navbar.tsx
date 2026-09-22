"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Smartphone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/qliplogo.png"
              alt="QLIP Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-slate-900">
              QLIP
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#0078F7]"
          >
            Home
          </Link>
          <Link
            href="#tiktok"
            className="group flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-black"
          >
            <span className="relative h-4 w-4">
              <Image src="/icons/tiktok.svg" alt="TikTok" width={16} height={16} />
            </span>
            <span>TikTok Downloader</span>
          </Link>
          <Link
            href="#instagram"
            className="group flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#E1306C]"
          >
            <span className="relative h-4 w-4">
              <Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} />
            </span>
            <span>Instagram Downloader</span>
          </Link>
          <Link
            href="#features"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#0078F7]"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#0078F7]"
          >
            How It Works
          </Link>
          <Link
            href="#faq"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#0078F7]"
          >
            FAQ
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.dropbox.com/scl/fi/ym6xyz7g0dp5us3xlgn2q/qlip.apk?rlkey=1r2qxayu504uv1vy9qk946svw&st=ieaqumgf&raw=1"
            target="_blank"
            rel="noopener noreferrer"
            download="qlip.apk"
            className="inline-flex items-center gap-2 rounded-full bg-[#0078F7] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0063D1] hover:shadow-md active:scale-95"
          >
            <Smartphone className="h-4 w-4" />
            <span className="hidden sm:inline">Get Mobile App</span>
            <span className="sm:hidden">App</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0078F7]"
            >
              Home
            </Link>
            <Link
              href="#tiktok"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-100"
            >
              <Image src="/icons/tiktok.svg" alt="TikTok" width={18} height={18} />
              <span>TikTok Video Downloader</span>
            </Link>
            <Link
              href="#instagram"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-100 text-[#E1306C]"
            >
              <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} />
              <span>Instagram Reels & Stories</span>
            </Link>
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0078F7]"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0078F7]"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0078F7]"
            >
              FAQ
            </Link>
            <a
              href="https://www.dropbox.com/scl/fi/ym6xyz7g0dp5us3xlgn2q/qlip.apk?rlkey=1r2qxayu504uv1vy9qk946svw&st=ieaqumgf&raw=1"
              target="_blank"
              rel="noopener noreferrer"
              download="qlip.apk"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-2.5 font-semibold text-[#0078F7] border border-blue-200"
            >
              <Smartphone className="h-4 w-4" />
              Download QLIP Android App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
