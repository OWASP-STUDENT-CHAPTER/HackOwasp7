import React, { useEffect, useState } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 650);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-800 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20' 
          : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold">HackOwasp 7.0</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About us</a>
              <a href="#timeline" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Timeline</a>
              <a href="#tracks" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tracks</a>
              <a href="#partners" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Partners</a>
              <a href="#register" className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
