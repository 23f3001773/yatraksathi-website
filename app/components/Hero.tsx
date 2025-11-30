"use client"; // <--- Ye line bahut zaroori hai popup ke liye

import Link from 'next/link';
import React, { useState } from 'react';
import RequestModal from './RequestModal'; // <--- Tumhara banaya hua Modal import kiya

const Hero = () => {
  // Popup kholne aur band karne ka control (State)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      
      {/* 1. Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')" 
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 2. Content Section */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-md">
          Travel With Comfort & Trust
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-2xl font-light mb-8 opacity-90">
          Book Taxi, Tour Packages & Hotels at Best Prices
        </p>

        {/* Trust Features (Checkmarks) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-10 text-sm md:text-base font-medium">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
            <span className="text-green-400 text-xl">✔</span> 
            <span>Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
            <span className="text-blue-400 text-xl">✔</span> 
            <span>Trusted by 500+ Customers</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Book Now Button (Page Change karega) */}
          <Link href="/contact">
            <button className="w-full sm:w-auto bg-[#ea2330] hover:bg-[#d91f2c] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Book Now
            </button>
          </Link>

          {/* Request a Call Button (Popup kholega) */}
          <button 
            onClick={() => setIsModalOpen(true)} // <--- Yahan click hone par Modal khulega
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Request a Call
          </button>

        </div>

      </div>

      {/* 3. Popup Modal Component Yahan Load Hoga */}
      <RequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
};

export default Hero;