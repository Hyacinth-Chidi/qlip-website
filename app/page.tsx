import React from "react";
import Navbar from "@/components/Navbar";
import HeroDownloader from "@/components/HeroDownloader";
import FeatureHighlights from "@/components/FeatureHighlights";
import SeoDeepDive from "@/components/SeoDeepDive";
import AppPromotionBanner from "@/components/AppPromotionBanner";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Hero & Downloader Input */}
      <main className="flex-1">
        <HeroDownloader />

        {/* 4 Feature Cards Row */}


        {/* Supported Platforms + 3 Steps + SEO Deep Dive Cards */}
        <SeoDeepDive />

        {/* Mobile App Promotion Card */}
        <AppPromotionBanner />

        {/* Accordion FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
