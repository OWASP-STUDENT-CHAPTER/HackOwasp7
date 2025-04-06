import React from 'react';

export default function Footer() {
  return (
    <div className="relative max-w-screen h-screen bg-black text-white flex flex-col justify-end items-center overflow-hidden" style={{
      backgroundImage: "url('./SmallGroup.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* LEGO overlay image */}
      {/* <div
        className="absolute inset-0 w-full h-full opacity-50 z-0"
        style={{
          backgroundImage: "/lego-footer.png",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div> */}

      {/* Content - positioned above the overlay */}
      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 mb-[25vh] lg:px-8">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Footer Links */}
          <div className="flex flex-wrap gap-16 md:gap-x-20">
            {/* Company Section */}
            <div className="footer-section">
              <h4 className="text-lg font-semibold mb-6 text-gray-800">Companys</h4>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
                <li><a href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Products Section */}
            <div className="footer-section">
              <h4 className="text-lg font-semibold mb-6 text-gray-800">Products</h4>
              <ul className="space-y-3">
                <li><a href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">All Products</a></li>
                <li><a href="/new" className="text-gray-700 hover:text-blue-600 transition-colors">New Arrivals</a></li>
                <li><a href="/popular" className="text-gray-700 hover:text-blue-600 transition-colors">Popular Items</a></li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="footer-section">
              <h4 className="text-lg font-semibold mb-6 text-gray-800">Support</h4>
              <ul className="space-y-3">
                <li><a href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a></li>
                <li><a href="/help" className="text-gray-700 hover:text-blue-600 transition-colors">Help Center</a></li>
                <li><a href="/shipping" className="text-gray-700 hover:text-blue-600 transition-colors">Shipping Info</a></li>
              </ul>
            </div>
          </div>

          {/* Contact/Newsletter Section */}
          <div className="min-w-[280px] flex-1">
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Stay Connected</h4>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all">
                <i className="fab fa-faceboo  k"></i>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Counter Section */}
        {/* <div className="flex flex-wrap justify-center gap-16 mt-16">
          <div className="text-center">
            <span className="counter block text-4xl font-bold text-blue-600" data-count="250">0</span>
            <p className="text-gray-700">Products</p>
          </div>
          <div className="text-center">
            <span className="counter block text-4xl font-bold text-blue-600" data-count="10000">0</span>
            <p className="text-gray-700">Happy Customers</p>
          </div>
          <div className="text-center">
            <span className="counter block text-4xl font-bold text-blue-600" data-count="15">0</span>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div> */}

        {/* Copyright Section */}
        <div className="mt-16 pt-6 border-t border-gray-300 flex flex-wrap justify-between text-sm text-gray-600">
          <p>&copy; 2025 Your Company Name. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Use</a>
          </div>
        </div>
      </div>


      {/* Foreground image */}
      <img
        src="./legos-rbg.png"
        alt="Foreground Art"
        className="absolute w-screen bottom-0 max-h-[130vh] object-cover z-0 opacity-80"
      />
    </div>
  );
}



