"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* ---------------- LOGO SECTION ---------------- */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* ध्यान दें: logo.png को public फोल्डर में ही रखें */}
              <img 
                src="/logo.png" 
                alt="YatraKsathi Logo" 
                className="h-16 w-auto" 
              />
              
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tighter flex items-center">
                <span className="text-white" style={{ fontFamily: "'Playfair Display', serif"}}>YAत्रा</span>
                <span className="text-[#ea2330] ml-1" style={{ fontFamily: "'Playfair Display', serif"}}>k SAथी</span>
              </h1>
            </Link>
          </div>

          {/* ---------------- DESKTOP MENU ---------------- */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#ea2330] font-medium transition">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#ea2330] font-medium transition">
              About
            </Link>
            <Link href="/packages" className="text-white hover:text-[#ea2330] font-medium transition">
              Packages
            </Link>
            <Link href="/hotels" className="text-white hover:text-[#ea2330] font-medium transition">
              Hotels
            </Link>
            <Link href="/taxi" className="text-white hover:text-[#ea2330] font-medium transition">
              Cab
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-[#ea2330] text-white rounded-md font-medium hover:bg-red-700 transition">
              Contact Us
            </Link>
          </div>

          {/* ---------------- MOBILE MENU BUTTON ---------------- */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#ea2330] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU (Dropdown) ---------------- */}
      {/* मोबाइल मेनू में लिंक क्लिक करने पर मेनू बंद हो जाएगा */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 top-20 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#ea2330] hover:bg-gray-50 rounded-md">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#ea2330] hover:bg-gray-50 rounded-md">About</Link>
            <Link href="/packages" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#ea2330] hover:bg-gray-50 rounded-md">Packages</Link>
            <Link href="/hotels" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#ea2330] hover:bg-gray-50 rounded-md">Hotels</Link>
            <Link href="/taxi" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#ea2330] hover:bg-gray-50 rounded-md">Taxi</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#ea2330] font-bold bg-red-50 rounded-md mt-2">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;