import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";
import { cn } from "@/lib/utils";
import DevfolioLogo from "/logos/Devfolio_Logo-White.svg";
import EthIndia from "/logos/ethindia-light.svg";
import Archies from "/logos/archies.png";
import ICP from "/logos/icp.png";
import Meghs from "/logos/meghs.jpeg";
import TimHortans from "/logos/tim-hortans.png";
import Bsep from "/logos/bsep.png";
import Polygon from "/logos/polygon.png";
import SwapSo from "/logos/swapso.png";
import TiffinWala from "/logos/tiffinwala.png";

// Define which logos should preserve their original colors (not be converted to grayscale)
const PRESERVE_COLORS = [
  "MEGHS LOGO", 
  "ARCHIES LOGO",
  "TIFFIN WALA LOGO",
  "SWAPSO LOGO",
];

// Define which logos need a white background for better visibility


const sponsors = {
  tier1: [ // Title
    { name: "DEVFOLIO LOGO", logo: DevfolioLogo },
    { name: "ETHINDIA LOGO", logo: EthIndia },
    { name: "TIM HORTANS LOGO", logo: TimHortans },
    { name: "POLYGON LOGO", logo: Polygon },
  ],
  tier2: [ // Partners
    { name: "ARCHIES LOGO", logo: Archies },
    { name: "SWAPSO LOGO", logo: SwapSo },
    { name: "TIFFIN WALA LOGO", logo: TiffinWala },
    { name: "MEGHS LOGO", logo: Meghs },
  ],
  // tier3: [ // 
  //   { name: "BSEP LOGO", logo: Bsep },
  // ],
};

export function SponsorCarousel() {
  return (
    <div className="w-full bg-black/80 py-12 md:py-16 relative overflow-hidden flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Sponsors</h2>
        <p className="text-gray-300 text-sm md:text-base">Proudly supported by industry leaders</p>
      </div>

      {/* Carousels Container - Using flex column to stack them */}
      <div className="w-full flex flex-col space-y-6 md:space-y-8">

        {/* Tier 1 - Title Sponsors */}
        <div className="relative">
          {/* <h3 className="text-center text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 opacity-90">Title Sponsor</h3> */}
          <InfiniteSlider
            duration={45} // Slower for emphasis
            reverse={false}
            className="py-2"
          >
            {[...sponsors.tier1, ...sponsors.tier1].map((sponsor, idx) => (
              <SponsorCard
                key={`title-${idx}`}
                {...sponsor}
                preserveColors={PRESERVE_COLORS.includes(sponsor.name)}
                // needsWhiteBg={NEEDS_WHITE_BG.includes(sponsor.name)}
                className="bg-white/10 border-slate-300/60 hover:border-slate-100 h-44 w-80 p-10 mx-5"
              />
            ))}
          </InfiniteSlider>
        </div>

        {/* Tier 2 - Power Sponsors */}
        <div className="relative">
          {/* <h3 className="text-center text-lg md:text-xl font-semibold text-yellow-400 mb-3 md:mb-4 opacity-85">Power Sponsor</h3> */}
          <InfiniteSlider
            duration={35} // Medium speed
            reverse={true}
            className="py-2"
          >
            {[...sponsors.tier2, ...sponsors.tier2].map((sponsor, idx) => (
              <SponsorCard
                key={`power-${idx}`}
                {...sponsor}
                preserveColors={PRESERVE_COLORS.includes(sponsor.name)}
                // needsWhiteBg={NEEDS_WHITE_BG.includes(sponsor.name)}
                className="bg-white/5 border-yellow-500/60 hover:border-yellow-400 h-40 w-72 p-8 mx-4"
              />
            ))}
          </InfiniteSlider>
        </div>

        {/* Tier 3 - Associate Sponsors */}
        {/* <div className="relative">
          <h3 className="text-center text-base md:text-lg font-semibold text-gray-400 mb-3 md:mb-4 opacity-80">Associate Sponsor</h3>
          <InfiniteSlider
            duration={30} // Faster speed
            reverse={false}
            className="py-2"
          >
            {[...sponsors.tier3, ...sponsors.tier3].map((sponsor, idx) => (
              <SponsorCard
                key={`associate-${idx}`}
                {...sponsor}
                preserveColors={PRESERVE_COLORS.includes(sponsor.name)}
                needsWhiteBg={NEEDS_WHITE_BG.includes(sponsor.name)}
                className="bg-black/30 border-gray-500/60 hover:border-gray-400 h-36 w-64 p-6 mx-3"
              />
            ))}
          </InfiniteSlider>
        </div> */}

      </div>

      {/* Background Effects - Adjusted gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 pointer-events-none" />
    </div>
  );
}

function SponsorCard({ name, logo, className, preserveColors = false, needsWhiteBg = false }) {
  return (
    <div
      className={cn(
        "relative rounded-xl border backdrop-blur-sm",
        "transition-all duration-300 hover:scale-105",
        "flex items-center justify-center",
        className
      )}
    >
      <div 
        className={cn(
          "w-full h-full flex items-center justify-center rounded-xl p-3",
          needsWhiteBg ? "bg-white" : "bg-transparent"
        )}
      >
        <img
          src={logo}
          alt={name}
          className={cn(
            "max-w-full max-h-full object-contain transition-opacity",
            preserveColors 
              ? "opacity-90 hover:opacity-100" 
              : "filter brightness-0 invert opacity-85 hover:opacity-100"
          )}
        />
      </div>
    </div>
  );
}
