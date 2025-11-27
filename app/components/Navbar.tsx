import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    // CHANGE 1: Background Color & Shadow updated
    // bg-white की जगह bg-gradient-to-b from-white to-gray-50 (हल्का ग्रेडिएंट)
    // shadow-sm की जगह shadow-md (थोड़ी गहरी परछाई)
    <nav className="w-full bg-gradient-to-b from-white to-gray-100 shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* 1. LOGO SECTION - Improved Typography */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link href="/" className="flex items-center">
             {/* CHANGE 2: Logo Text Styling updated */}
             {/* font-extrabold, text-4xl, और drop-shadow लगाया है */}
             <span className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-900 drop-shadow-sm relative top-1">
               yatra<span className="text-[#ea2330]">ksathi</span>
               {/* एक छोटा सा डॉट (Accent) जो प्रोफेशनल लगता है (Optional) */}
               <span className="text-[#ea2330] absolute -top-1 -right-2 text-4xl leading-none">.</span>
             </span>
          </Link>
        </div>

        {/* 2. MENU ITEMS (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-[#ea2330] font-semibold text-[15px] transition-colors relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea2330] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#ea2330] font-semibold text-[15px] transition-colors relative group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea2330] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/packages" className="text-gray-700 hover:text-[#ea2330] font-semibold text-[15px] transition-colors relative group">
            Packages
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea2330] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/taxi" className="text-gray-700 hover:text-[#ea2330] font-semibold text-[15px] transition-colors relative group">
            Taxi Service
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea2330] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/hotels" className="text-gray-700 hover:text-[#ea2330] font-semibold text-[15px] transition-colors relative group">
            Hotel Booking
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea2330] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#ea2330] font-semibold text-[15px] transition-colors relative group">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ea2330] transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* 3. CTA BUTTON (Right Side) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-gradient-to-r from-[#ea2330] to-[#ff4d5a] hover:from-[#c91e29] hover:to-[#ea2330] text-white text-sm font-bold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2">
              <span>Enquiry / Book Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;