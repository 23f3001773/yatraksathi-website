"use client"; // यह ज़रुरी है क्योंकि इसमें इंटरैक्शन हो सकते हैं

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50 font-medium">
      {/* --- LEFT: Logo & Brand Name --- */}
      <div className="flex items-center gap-2">
        {/* आप यहाँ अपनी इमेज लगा सकते हैं, अभी मैंने एक आइकन लगाया है */}
        <div className="text-orange-500 text-4xl">
          <i className="fas fa-route"></i>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#1E4A76] leading-tight">
            Yatra Ke Saathi
          </h1>
          <p className="text-xs text-gray-500 font-normal">
            Tours • Taxi • Hotels
          </p>
        </div>
      </div>

      {/* --- CENTER: Navigation Links --- */}
      <div className="hidden md:flex gap-8 text-[#1E4A76] uppercase text-sm tracking-wide">
        <Link href="/" className="hover:text-orange-500 transition">Home</Link>
        <Link href="/about" className="hover:text-orange-500 transition">About Us</Link>
        <Link href="/packages" className="hover:text-orange-500 transition">Packages</Link>
        <Link href="/taxi" className="hover:text-orange-500 transition">Taxi Service</Link>
        <Link href="/gallery" className="hover:text-orange-500 transition">Gallery</Link>
        <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
      </div>

      {/* --- RIGHT: Contact & Button --- */}
      <div className="flex items-center gap-6">
        <div className="hidden lg:block text-right text-[#1E4A76]">
          <p className="text-sm font-semibold">Call / WhatsApp</p>
          <p className="font-bold text-lg">+91 98765 43210</p>
        </div>
        <button className="border-2 border-[#1E4A76] text-[#1E4A76] px-6 py-2 rounded-lg hover:bg-[#1E4A76] hover:text-white transition font-semibold">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;