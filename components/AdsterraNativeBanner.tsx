"use client";

import { useEffect, useRef } from "react";

interface AdsterraNativeBannerProps {
  className?: string;
}

export default function AdsterraNativeBanner({
  className = "",
}: AdsterraNativeBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = bannerRef.current;
    if (!container) return;

    // Check if script already loaded in this container to prevent duplicate injections
    if (container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src =
      "https://pl31981387.profitableratecpmnetwork.com/53152f41ce0456ab1f67d3c22d8cf939/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    container.appendChild(script);

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className={`w-full flex justify-center items-center my-6 overflow-hidden min-h-[90px] ${className}`}
    >
      <div ref={bannerRef} className="w-full max-w-4xl flex justify-center">
        <div id="container-53152f41ce0456ab1f67d3c22d8cf939" className="w-full" />
      </div>
    </aside>
  );
}
