import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TimelineDemo } from './components/TimelineDemo'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <div id="timeline">
        <TimelineDemo />
      </div>
    </div>
  )
}

export default App
