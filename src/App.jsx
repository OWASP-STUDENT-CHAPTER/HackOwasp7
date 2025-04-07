import React from "react";
import { Navbar } from "./components/Navbar";
import { SparklesPreviewDark } from "./components/Sparkles";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-black">
      {/* Container for SparklesPreviewDark */}
      <div className="absolute inset-0">
        <SparklesPreviewDark />
      </div>

      {/* Navbar with higher z-index to stay on top */}
      <div className="relative z-50">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
