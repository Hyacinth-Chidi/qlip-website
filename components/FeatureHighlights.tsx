import React from "react";
import { Zap, ShieldCheck, LayoutGrid, Infinity } from "lucide-react";

export default function FeatureHighlights() {
  const features = [
    {
      icon: Zap,
      title: "Fast & Reliable",
      description:
        "Instant cloud parsing. Get your TikTok videos and Instagram Reels in seconds with zero delay.",
      color: "text-[#0078F7]",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      icon: ShieldCheck,
      title: "High Quality 1080p",
      description:
        "Download in pristine 1080p Full HD without compression. Crisp video and original studio-quality audio.",
      color: "text-[#0078F7]",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      icon: LayoutGrid,
      title: "All Platforms Supported",
      description:
        "Optimized for TikTok & Instagram, plus full support for YouTube, Facebook, X, Pinterest, and Vimeo.",
      color: "text-[#0078F7]",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      icon: Infinity,
      title: "No Registration",
      description:
        "100% free and unlimited. No login, no software installation, and no hidden fees required.",
      color: "text-[#0078F7]",
      bg: "bg-blue-50 border-blue-100",
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 border-y border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group flex flex-col items-start rounded-2xl p-4 transition-all duration-200 hover:bg-slate-50"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${f.bg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`h-6 w-6 ${f.color}`} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
