import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 650);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    // { name: 'About', href: '#about' },
    // { name: 'Timeline', href: '#timeline' },
    // { name: 'Tracks', href: '#tracks' },
    // { name: 'Partners', href: '#partners' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-800 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20' 
          : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }`}

    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <span className="text-white text-xl font-bold">HackOwasp 7.0</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Register Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'mt-4' : ''}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-purple-600/20 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#register"
              className="block w-full text-center bg-purple-600 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Register Now
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
