"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Link as LinkIcon,
  Download,
  AlertCircle,
  Play,
  Music,
} from "lucide-react";

interface QualityOption {
  id: string;
  label: string;
  ext: string;
  approxSizeBytes: number | null;
  kind: "video" | "audio" | "image";
}

interface SingleExtractResult {
  type: "single";
  title: string;
  thumbnail: string | null;
  duration: number | null;
  sourceExtractor: string;
  sourceUrl: string;
  qualities: QualityOption[];
}

interface MediaItem {
  index: number;
  title: string;
  thumbnail: string | null;
  duration: number | null;
  kind: "video" | "image";
  qualities: QualityOption[];
}

interface MultiExtractResult {
  type: "multi";
  title: string;
  sourceExtractor: string;
  sourceUrl: string;
  items: MediaItem[];
}

type ExtractResult = SingleExtractResult | MultiExtractResult;

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://qlip-api.techfamz.com";

export default function HeroDownloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ExtractResult | null>(null);
  const [downloadingFormat, setDownloadingFormat] = useState<string | null>(null);

  // Auto-detect platform icon cleanly
  const detectedPlatform = useMemo(() => {
    const trimmed = url.trim().toLowerCase();
    if (trimmed.includes("tiktok.com")) return { name: "TikTok", icon: "/icons/tiktok.svg" };
    if (trimmed.includes("instagram.com")) return { name: "Instagram", icon: "/icons/instagram.svg" };
    if (trimmed.includes("youtube.com") || trimmed.includes("youtu.be")) return { name: "YouTube", icon: "/icons/youtube.svg" };
    if (trimmed.includes("facebook.com") || trimmed.includes("fb.watch") || trimmed.includes("fb.com")) return { name: "Facebook", icon: "/icons/facebook.svg" };
    if (trimmed.includes("twitter.com") || trimmed.includes("x.com")) return { name: "X", icon: "/icons/x.svg" };
    if (trimmed.includes("pinterest.com") || trimmed.includes("pin.it")) return { name: "Pinterest", icon: "/icons/pinterest.svg" };
    if (trimmed.includes("vimeo.com")) return { name: "Vimeo", icon: "/icons/vimeo.svg" };
    return null;
  }, [url]);

  const handleExtract = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const targetUrl = url.trim();
    if (!targetUrl) {
      setError("Please enter or paste a valid video URL.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/extract`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: targetUrl }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          data?.error || "Could not extract video. Check the link and try again."
        );
      }

      const data: ExtractResult = await res.json();
      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to connect to extraction server."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (formatId: string, itemIndex?: number) => {
    setDownloadingFormat(formatId);
    const params = new URLSearchParams({ url: url.trim(), format: formatId });
    if (itemIndex !== undefined) {
      params.set("item", String(itemIndex));
    }
    const downloadUrl = `${API_BASE_URL}/api/download?${params.toString()}`;

    const a = document.createElement("a");
    a.href = downloadUrl;
    a.setAttribute("download", "");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      setDownloadingFormat(null);
    }, 4000);
  };

  const formatDuration = (seconds?: number | null) => {
    if (!seconds) return "";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const formatSize = (bytes?: number | null) => {
    if (!bytes) return "";
    const mb = bytes / (1024 * 1024);
    return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`;
  };

  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-24 sm:pb-32">
      {/* Background Floating Watermark Icons (Vibrant colors visible as ambient watermarks) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* TikTok Watermark (Upper Left) */}
        <div className="absolute -left-6 sm:-left-6 top-3 sm:top-8 h-28 w-28 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 opacity-20 sm:opacity-25 transform -rotate-12 animate-float-slow">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl sm:blur-3xl" />
          <Image src="/icons/tiktok.svg" alt="" fill className="object-contain drop-shadow-md" />
        </div>

        {/* Instagram Watermark (Upper Right) */}
        <div className="absolute -right-6 sm:-right-8 top-4 sm:top-10 h-28 w-28 sm:h-60 sm:w-60 md:h-76 md:w-76 lg:h-84 lg:w-84 opacity-20 sm:opacity-25 transform rotate-12 animate-float-delayed">
          <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-xl sm:blur-3xl" />
          <Image src="/icons/instagram.svg" alt="" fill className="object-contain drop-shadow-md" />
        </div>

        {/* YouTube Watermark (Lower Left) */}
        <div className="absolute left-2 sm:left-[8%] md:left-[12%] bottom-2 sm:bottom-6 h-16 w-16 sm:h-32 sm:w-32 md:h-44 md:w-44 opacity-15 sm:opacity-20 transform rotate-6 animate-float-delayed">
          <div className="absolute inset-0 rounded-full bg-red-500/15 blur-lg sm:blur-2xl" />
          <Image src="/icons/youtube.svg" alt="" fill className="object-contain drop-shadow-sm" />
        </div>

        {/* Facebook Watermark (Lower Right) */}
        <div className="absolute right-2 sm:right-[8%] md:right-[12%] bottom-3 sm:bottom-8 h-16 w-16 sm:h-32 sm:w-32 md:h-44 md:w-44 opacity-15 sm:opacity-20 transform -rotate-6 animate-float-slow">
          <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-lg sm:blur-2xl" />
          <Image src="/icons/facebook.svg" alt="" fill className="object-contain drop-shadow-sm" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Headline (Strictly Center-Aligned) */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.12] max-w-3xl">
          Download TikTok{" "}
          <span className="gradient-text-blue">Videos</span>
        </h1>

        {/* Subtitle (Strictly Center-Aligned) */}
        <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg leading-relaxed text-center">
          QLIP is a Free video downloader. Download high-quality{" "}
          <strong className="text-slate-900 font-semibold">TikTok videos without watermarks</strong> and{" "}
          <strong className="text-slate-900 font-semibold">Instagram Reels, Stories & Carousel photos</strong>{" "}
          — with instant support for Facebook, X, and more.
        </p>

        {/* Centered Input Card */}
        <div className="mt-8 w-full max-w-2xl">
          <form
            onSubmit={handleExtract}
            className="relative flex flex-col gap-2 rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-xl shadow-blue-500/5 sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-3 px-3 py-1.5">
              {detectedPlatform ? (
                <div className="relative h-6 w-6 shrink-0 transition-transform duration-200 scale-110">
                  <Image src={detectedPlatform.icon} alt={detectedPlatform.name} fill className="object-contain" />
                </div>
              ) : (
                <LinkIcon className="h-5 w-5 text-slate-400 shrink-0" />
              )}

              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste video link here..."
                className="w-full bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none sm:text-base"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading || !url.trim()}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0078F7] px-6 text-sm font-bold text-white shadow-md transition hover:bg-[#0063D1] disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto active:scale-95 shrink-0"
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Fetching...</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </>
              )}
            </button>
          </form>

          {/* Sub-label matching design mockup */}
          <div className="mt-3.5 flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 text-xs text-slate-500 text-center">
            <span>Just paste the link, choose your resolution, and download — it&apos;s that simple!</span>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50/90 p-3 text-sm text-rose-700 max-w-xl">
            <AlertCircle className="h-5 w-5 shrink-0 text-rose-500" />
            <span>{error}</span>
          </div>
        )}

        {/* Extraction Results Preview Card (Centered) */}
        {result && (
          <div className="mt-8 w-full max-w-2xl rounded-2xl border border-blue-200 bg-white p-5 shadow-xl shadow-blue-500/5 text-left animate-in fade-in slide-in-from-bottom-3 duration-300">
            {result.type === "single" ? (
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                {/* Thumbnail */}
                {result.thumbnail && (
                  <div className="relative h-28 w-44 shrink-0 overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
                    <Image
                      src={result.thumbnail}
                      alt={result.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {result.duration ? (
                      <span className="absolute bottom-1.5 right-1.5 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-bold text-white">
                        {formatDuration(result.duration)}
                      </span>
                    ) : null}
                  </div>
                )}

                {/* Info and Quality Buttons */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-900 truncate">
                    {result.title}
                  </h3>

                  {/* Quality Buttons Grid */}
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {result.qualities.map((q) => (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => handleDownload(q.id)}
                        disabled={downloadingFormat === q.id}
                        className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold transition active:scale-95 ${
                          q.kind === "audio"
                            ? "bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100"
                            : "bg-[#0078F7] text-white hover:bg-[#0063D1]"
                        }`}
                      >
                        {downloadingFormat === q.id ? (
                          <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        ) : q.kind === "audio" ? (
                          <Music className="h-3.5 w-3.5" />
                        ) : (
                          <Download className="h-3.5 w-3.5" />
                        )}
                        <span>{q.label}</span>
                        {q.approxSizeBytes ? (
                          <span className="opacity-80">
                            ({formatSize(q.approxSizeBytes)})
                          </span>
                        ) : null}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Multi-slide Carousel (e.g. Instagram Carousels) */
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">
                    {result.title} ({result.items.length} items)
                  </h3>
                </div>

                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {result.items.map((item) => (
                    <div
                      key={item.index}
                      className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-2 overflow-hidden"
                    >
                      {item.thumbnail ? (
                        <div className="relative h-24 w-full overflow-hidden rounded-lg bg-slate-200">
                          <Image
                            src={item.thumbnail}
                            alt={`Item ${item.index}`}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      ) : null}
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700">
                          #{item.index} {item.kind === "video" ? "Video" : "Photo"}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleDownload(item.qualities[0]?.id || "", item.index)
                          }
                          className="rounded bg-[#0078F7] p-1 text-white hover:bg-[#0063D1]"
                          title="Download this item"
                        >
                          <Download className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
