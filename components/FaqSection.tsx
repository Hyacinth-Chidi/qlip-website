"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I download TikTok videos without watermark?",
      a: "Copy the link of the TikTok video from the TikTok app (by tapping Share -> Copy Link) or your browser. Paste the link into the QLIP search box above and click 'Get Video'. QLIP automatically removes the TikTok watermark and gives you a direct download link for the original Full HD MP4 file.",
    },
    {
      q: "Can I download Instagram Reels, Stories and multi-slide Carousel photos?",
      a: "Yes! QLIP supports Instagram Reels, standard video posts, and multi-slide carousel galleries. When you paste an Instagram link containing multiple photos or videos, QLIP detects all slides and lets you download individual items or the entire collection.",
    },
    {
      q: "Is QLIP 100% free? Do I need to create an account?",
      a: "QLIP is completely free with no limits and no account registration required. You do not need to share passwords, login tokens, or install suspicious browser extensions.",
    },
    {
      q: "Does QLIP support other platforms besides TikTok and Instagram?",
      a: "Yes! Even though QLIP Web is optimized for TikTok and Instagram, our cloud engine supports over 100+ platforms including YouTube (Videos & Shorts), Facebook Watch & Reels, X (Twitter), Pinterest Pins, Vimeo, Dailymotion, and Twitch clips.",
    },
    {
      q: "Can I extract and download only the audio (MP3) from a video?",
      a: "Yes. When you fetch a video, QLIP provides an 'Audio Only' option. You can download just the background sound or music track in high-bitrate audio format.",
    },
    {
      q: "Where are the downloaded videos saved on my phone or PC?",
      a: "On Android and PC/Mac, files automatically download into your device's standard 'Downloads' folder. On iPhone/iPad (iOS), the video downloads into Safari's Downloads manager, where you can tap 'Save Video' to place it directly in your Photos Camera Roll.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0078F7]">
            Frequently Asked Questions
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Got <span className="text-[#0078F7]">Questions?</span> We&apos;ve Got Answers
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about downloading TikTok videos and Instagram Reels with QLIP.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#0078F7] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
