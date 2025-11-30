// components/WelcomeModal.tsx
"use client"; // Ye zaroori hai kyunki hum useState aur useEffect use kar rahe hain

import { useState, useEffect } from "react";
import { X } from "lucide-react"; // Agar lucide-react nahi hai to niche bataunga kya karein

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Form ka data store karne ke liye
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: ""
  });

  useEffect(() => {
    // Check karo ki user ne pehle form bhara hai ya cut kiya hai
    // Session storage use kar rahe hain taki browser band hone tak dubara na dikhe
    const hasVisited = sessionStorage.getItem("travelModalSeen");
    
    if (!hasVisited) {
      // Thoda delay dekar open karte hain taki animation smooth lage
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("travelModalSeen", "true"); // Cut karne par bhi save kar lo
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Yaha tum API call karke data database me bhej sakte ho
    console.log("Lead Received:", formData);
    
    alert(`Thank you ${formData.name}! Hamari team aapse jaldi sampark karegi.`);
    
    setIsOpen(false);
    sessionStorage.setItem("travelModalSeen", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header Section with Image Background */}
        <div className="relative h-32 bg-orange-500 flex items-center justify-center">
            {/* Cut Button */}
            <button 
                onClick={handleClose}
                className="absolute top-3 right-3 p-1 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
            >
                {/* Agar Lucide icon nahi hai to simple 'X' likh do */}
                <span className="font-bold text-xl px-2">✕</span> 
            </button>
            
            <div className="text-center text-white z-10 px-4">
                <h2 className="text-2xl font-bold">Plan Your Dream Yatra!</h2>
                <p className="text-sm text-orange-100">Get Exclusive Deals on Kashi & Ayodhya Packages</p>
            </div>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                required
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                required
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interested Destination (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Varanasi, Ayodhya"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow-lg transform active:scale-95 transition-all duration-200"
            >
              Get Free Quote Now
            </button>
            
            <p className="text-xs text-center text-gray-400 mt-4">
              We respect your privacy. No spam.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}