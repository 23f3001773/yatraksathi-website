"use client";
import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaStar } from 'react-icons/fa'; // (npm install react-icons)

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. HEADER (Simple, No Links to distract) */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-black">YAत्रा</span><span className="text-[#ea2330]">kSAथी</span>
          </div>
          <a href="tel:+919876543210" className="flex items-center gap-2 font-bold text-[#ea2330]">
            <FaPhoneAlt /> Call Now: +91 98765 43210
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION (Main Offer) */}
      <section className="relative bg-gray-900 text-white py-16 md:py-24">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 overflow-hidden">
           {/* अपनी अच्छी फोटो का URL यहाँ डालें */}
           <img src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80" alt="Varanasi" className="w-full h-full object-cover opacity-40" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-block bg-[#ea2330] px-4 py-1 rounded-full text-sm font-bold animate-pulse">
              🔥 Limited Time Offer - 20% OFF
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Varanasi Kashi Darshan <br/> <span className="text-[#ea2330]">Premium Package</span>
            </h1>
            <p className="text-xl text-gray-200">
              3 Days / 2 Nights | Ganga Aarti | Temple Tour | Airport Pickup
            </p>
            <div className="flex gap-4 text-sm font-semibold">
              <span className="flex items-center gap-1"><FaStar className="text-yellow-400"/> 4.9/5 Ratings</span>
              <span className="flex items-center gap-1"><FaCheckCircle className="text-green-400"/> 500+ Happy Yatris</span>
            </div>
          </div>

          {/* Right: Lead Form (High Conversion) */}
          <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-center mb-2">Get Free Quote</h3>
            <p className="text-center text-gray-500 mb-6 text-sm">Fill details to get best price on WhatsApp</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" placeholder="Enter your name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none" />
              </div>
              
              {/* WhatsApp CTA Button */}
              <Link href="https://wa.me/919876543210?text=Hi, I am interested in Varanasi Package offer from Google Ads." target="_blank">
                <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-lg text-lg flex items-center justify-center gap-2 mt-4 transition-all shadow-lg hover:shadow-xl">
                  <FaWhatsapp className="text-2xl" /> Get Price on WhatsApp
                </button>
              </Link>
              <p className="text-xs text-center text-gray-400 mt-2">No spam guaranteed.</p>
            </form>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS INCLUDED (Trust Building) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Book With Yatra K Sathi?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "VIP Darshan Assistance (No Waiting)",
              "Private AC Cab for 3 Days",
              "Best Hotel Stay Included",
              "Pickup & Drop from Station/Airport",
              "English/Hindi Speaking Guide",
              "24/7 Support during trip"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <FaCheckCircle className="text-[#ea2330] text-xl flex-shrink-0" />
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER STRIP */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        <p>© 2025 Yatra K Sathi. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-gray-400">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </footer>
    </div>
  );
}