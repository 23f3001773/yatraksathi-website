"use client";
import { useState } from "react";
// Agar aapke folder structure me firebase src ke bahar hai to '../firebase' use karein
// Agar ye line error de, to path adjust karein (e.g. '@/firebase')
import { db } from "../firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const WelcomeModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true); // Modal dikhana hai ya nahi
  const [status, setStatus] = useState("");   // Success/Error msg ke liye
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Processing...");

    const formData = new FormData(e.target);
    
    // Data jo save hoga
    const enquiryData = {
      fullname: formData.get("fullname"),
      mobile: formData.get("mobile"),
      destination: formData.get("destination"),
      source: "Popup Form",
      timestamp: serverTimestamp(),
    };

    try {
      // 1. Firebase me save karein
      await addDoc(collection(db, "enquiries"), enquiryData);
      console.log("Firebase Saved!");

      // 2. Email bhejein (Web3Forms)
      formData.append("access_key", "193942fe-328d-4ecf-9dab-0ccfc41c6b6b"); 
      formData.append("subject", "New Lead from Popup!");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("Success! We will call you.");
        setTimeout(() => {
          handleClose(); // 2 second baad popup band
        }, 2000);
      } else {
        setStatus("Data Saved, but Email error.");
      }

    } catch (error) {
      console.error("Error:", error);
      setStatus("Error: Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-orange-600 p-6 text-center">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl font-bold leading-none"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold text-white mb-1">Plan Your Dream Yatra!</h2>
          <p className="text-orange-100 text-sm">Get Exclusive Deals on Kashi & Ayodhya</p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                type="number"
                name="mobile"
                placeholder="+91 98765 43210"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination (Optional)</label>
              <input
                type="text"
                name="destination"
                placeholder="e.g. Varanasi, Ayodhya"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 active:scale-95 transition-all shadow-md disabled:bg-gray-400"
            >
              {isSubmitting ? "Sending..." : "Get Free Quote Now"}
            </button>

            {status && (
              <p className={`text-center text-sm font-medium mt-2 ${status.includes("Success") ? "text-green-600" : "text-red-500"}`}>
                {status}
              </p>
            )}
          </form>
          
          <p className="text-xs text-gray-400 text-center mt-4">
            We respect your privacy. No spam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;