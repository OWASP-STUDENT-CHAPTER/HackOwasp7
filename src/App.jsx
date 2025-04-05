import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TimelineDemo } from './components/TimelineDemo'
import { Logos3 } from './components/logos3'
import TracksSlider from './components/tracks'
import  Sponsors  from './components/Sponsors'
import  LegoCarousel  from './components/3dCarousel' 
import figurine from '/tracks.svg'
import './App.css'
import { SparklesPreview, SparklesPreviewColorful, SparklesPreviewDark } from './components/Sparkles'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* <SparklesPreview /> */}
      {/* <SparklesPreviewColorful /> */}
      {/* <SparklesPreviewDark /> */}
      <Hero />
      <div>
        <LegoCarousel />
      </div>
      <div id="timeline">
        <TimelineDemo />
      </div>

      {/* Add Tracks section here */}
      <div
        id="tracks"
        className="flex justify-center items-center w-full mt-16"
      >
        
        {/* Add margin-top for spacing */}
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          Hackathon Tracks
        </h2>
        <img src={figurine} alt="figurine" className="w-1/2 mx-auto mb-10 rotate-y-180" />
        <TracksSlider />
      </div>
      <div id="partners" className="relative flex flex-col items-center justify-center w-full mt-16">
      {/* <img src={legoBorder} alt="Overlay" className="absolute z-10"/> */}
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          Partners
        </h2>
        <Logos3 />
      </div>
    </div>
  );
}

export default App;
