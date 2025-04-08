import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";
import { cn } from "@/lib/utils";
import DevfolioLogo from "../assets/Devfolio_Logo-White.svg"; 
import EthIndia from "../assets/ethindia-light.svg"

const sponsors = {
  tier2: [
    {
      name: "DEVFOLIO LOGO",
      logo: DevfolioLogo, 
    },
    {
      name: "ETHINDIA LOGO",
      logo: EthIndia,
    },
  ],
};

export function SponsorCarousel() {
  return (
    <div className="w-full bg-black/80 py-20 relative overflow-hidden">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Our Sponsors</h2>
        <p className="text-gray-300">Proudly supported by industry leaders</p>
      </div>

      {/* Tier 2 - Gold Sponsors */}
      <div className="mb-16">
        <div className="relative">
          <InfiniteSlider 
            duration={25} 
            reverse 
            className="py-4"
          >
            {sponsors.tier2.map((sponsor, idx) => (
              <SponsorCard 
                key={idx} 
                {...sponsor} 
                className="bg-white/5 border-yellow-500/50"
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
    </div>
  );
}

function SponsorCard({ name, logo, className }) {
  return (
    <div
      className={cn(
        "relative h-40 w-72 rounded-xl border backdrop-blur-sm", // Increased from h-32 w-64
        "transition-all duration-300 hover:scale-105",
        "flex items-center justify-center p-8 mx-4", // Increased padding from p-6
        className
      )}
    >
      <img
        src={logo}
        alt={name}
        className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-85 hover:opacity-100 transition-opacity" // Increased base opacity
      />
    </div>
  );
}