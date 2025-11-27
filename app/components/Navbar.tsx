"use client"; // यह लाइन सबसे ऊपर ज़रूरी है

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* ---------------- LOGO SECTION ---------------- */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* यहाँ अपनी logo.png public फोल्डर में रखें */}
              <img 
                src="/logo.png" 
                alt="YatraKsathi Logo" 
                className="h-10 w-auto" 
              />
              
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-gray-900">
                yatra<span className="text-[#ea2330]">ksathi</span><span className="text-black">.</span>
              </h1>
            </Link>
          </div>

          {/* ---------------- DESKTOP MENU ---------------- */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#ea2330] font-medium transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#ea2330] font-medium transition">
              About
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-[#ea2330] font-medium transition">
              Packages
            </Link>
            <Link href="/hotels" className="text-gray-700 hover:text-[#ea2330] font-medium transition">
              Hotels
            </Link>
            <Link href="/taxi" className="text-gray-700 hover:text-[#ea2330] font-medium transition">
              Taxi
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-[#ea2330] text-white rounded-md font-medium hover:bg-red-700 transition">
              Contact Us
            </Link>
          </div>

          {/* ---------------- MOBILE MENU BUTTON ---------------- */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#ea2330] focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU (Dropdown) ---------------- */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ea2330]">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ea2330]">About</Link>
            <Link href="/packages" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ea2330]">Packages</Link>
            <Link href="/hotels" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ea2330]">Hotels</Link>
            <Link href="/taxi" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ea2330]">Taxi</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-[#ea2330] font-bold">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;