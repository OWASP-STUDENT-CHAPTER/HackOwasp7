import React from "react";
import { Navbar } from "./components/Navbar";
import { SparklesPreviewDark } from "./components/Sparkles";
import { SponsorCarousel } from "./components/SponsorCarousel";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        {/* Container for SparklesPreviewDark */}
        <div className="absolute inset-0">
          <SparklesPreviewDark />
        </div>

        {/* Navbar with higher z-index to stay on top */}
        <div className="relative z-50">
          <Navbar />
        </div>
      </div>

      {/* Sponsors Section */}
      <section className="relative z-10">
        <SponsorCarousel />
      </section>
    </div>
  );
}

export default App;
