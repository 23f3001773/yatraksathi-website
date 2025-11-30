import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestModal = ({ isOpen, onClose }: ModalProps) => {
  const [result, setResult] = useState(""); // Message status ke liye

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(e.currentTarget);

    // ************************************************************
    // IMP: Neeche wali line mein apni ACCESS KEY paste karna
    // ************************************************************
    formData.append("access_key", "193942fe-328d-4ecf-9dab-0ccfc41c6b6b"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      // 2 second baad modal band ho jayega
      setTimeout(() => {
        onClose();
        setResult("");
      }, 2000);
    } else {
      console.log("Error", data);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Plan Your Trip</h2>
          <p className="text-sm text-gray-500 mt-1">Leave your number, we'll call you back!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Web3Forms settings (Hidden inputs) */}
          <input type="hidden" name="subject" value="New Callback Request - Yatraksathi" />
          <input type="hidden" name="from_name" value="Yatra Website" />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input 
              required 
              type="text" 
              name="name" // name attribute zaroori hai
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              required 
              type="tel" 
              name="phone" // name attribute zaroori hai
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Destination / Query</label>
            <input 
              type="text" 
              name="message" // name attribute zaroori hai
              placeholder="e.g. Kedarnath, Goa..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#ea2330] text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg mt-2"
          >
            {result === "Sending..." ? "Sending..." : "Request Call Back"}
          </button>

          {/* Success/Error Message display */}
          {result && (
            <p className={`text-center text-sm mt-2 ${result.includes("Success") ? "text-green-600" : "text-red-500"}`}>
              {result}
            </p>
          )}

        </form>

      </div>
    </div>
  );
};

export default RequestModal;