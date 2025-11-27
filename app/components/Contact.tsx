"use client";
import React, { useState } from 'react';
import { db } from '../firebase'; // Firebase Import किया
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // डेटा सेव करने के फंक्शन्स

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Saving Data & Sending Email...");

    const formData = new FormData(event.target);
    
    // फॉर्म का डेटा निकाल रहे हैं
    const enquiryData = {
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      date: formData.get("date"),
      service: formData.get("service"),
      timestamp: serverTimestamp(), // किस टाइम फॉर्म भरा गया
    };

    try {
      // 1. डेटा को Firebase Database में सेव करें
      await addDoc(collection(db, "enquiries"), enquiryData);
      console.log("Data Saved to Firebase!");

      // 2. अब ईमेल भेजें (Web3Forms)
      formData.append("access_key", "193942fe-328d-4ecf-9dab-0ccfc41c6b6b"); // अपनी Key यहाँ डालें

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Success! Your enquiry has been saved and sent.");
        event.target.reset();
      } else {
        setResult("Email failed, but data saved.");
      }

    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-[#ea2330] text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side (Same as before) */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to Plan Your Dream Yatra?</h2>
            <p className="text-lg text-red-100 opacity-90">Get the best quotes instantly!</p>
            {/* ... बाकी कांटेक्ट इन्फो ... */}
             <div className="flex flex-col space-y-4 mt-8">
              <div className="flex items-center gap-4">
                 <p className="text-2xl font-bold">+91 63881 62419</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Free Quotation</h3>
            
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" name="name" required placeholder="Enter name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ea2330]" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input type="tel" name="mobile" required placeholder="Enter mobile" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ea2330]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                  <input type="date" name="date" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ea2330]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <select name="service" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ea2330] bg-white">
                    <option>Tour Package</option>
                    <option>Taxi Service</option>
                    <option>Hotel Booking</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#ea2330] hover:bg-[#d91f2c] text-white font-bold py-3 rounded-lg shadow-md transition-all mt-2 disabled:bg-gray-400"
              >
                {isSubmitting ? "Processing..." : "Send Enquiry Now"}
              </button>
            </form>

            {result && (
              <p className={`text-center mt-4 font-semibold ${result.includes("Success") ? "text-green-600" : "text-red-600"}`}>
                {result}
              </p>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;