import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TimelineDemo } from './components/TimelineDemo'
import { Logos3 } from './components/logos3'
import TracksSlider from './components/tracks'

import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#333]">
      <Navbar />
      <Hero />
      <div id="timeline">
        <TimelineDemo />
      </div>

      {/* Add Tracks section here */}
      <div id="tracks" className="flex justify-center items-center w-full mt-16"> {/* Add margin-top for spacing */}
        <h2 className="text-center text-3xl font-bold text-white mb-10">Hackathon Tracks</h2>
        <TracksSlider />
      </div>
      <div className="">
        <h2 className="text-center text-3xl font-bold text-white mb-10">Partners</h2>
        <Logos3 />
      </div>
    </div>
  )
}

export default App

