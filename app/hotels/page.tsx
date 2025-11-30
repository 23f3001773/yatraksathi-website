"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RequestModal from '../components/RequestModal';

const HotelsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Search Inputs States
  const [cityInput, setCityInput] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // Ye state Modal me bhejne ke liye hai (Message ko modify karenge)
  const [bookingDetails, setBookingDetails] = useState("");

  // 1. Hotel Data Database
  const allHotels = [
    {
      id: 1,
      name: "Hotel Ganges Grand",
      location: "Varanasi", // Search isi se hoga
      fullLocation: "Godowlia, Varanasi",
      price: "₹2,500",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      amenities: ["Free WiFi", "AC", "Breakfast", "Ganga View"]
    },
    {
      id: 2,
      name: "Ram Prasadam Stay",
      location: "Ayodhya",
      fullLocation: "Near Ram Mandir, Ayodhya",
      price: "₹1,800",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
      amenities: ["AC", "Pure Veg Food", "Parking", "Temple View"]
    },
    {
      id: 3,
      name: "Luxury River Palace",
      location: "Varanasi",
      fullLocation: "Assi Ghat, Varanasi",
      price: "₹4,500",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      amenities: ["Swimming Pool", "Spa", "River Facing", "Buffet"]
    },
    {
      id: 4,
      name: "Goa Beach Resort",
      location: "Goa",
      fullLocation: "Calangute Beach, Goa",
      price: "₹3,500",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      amenities: ["Pool", "Bar", "Beach Access", "Breakfast"]
    }
  ];

  // Shuru me sab hotels dikhenge
  const [filteredHotels, setFilteredHotels] = useState(allHotels);

  // 2. Search Function (Internal Filter)
  const handleSearch = () => {
    if (cityInput === "") {
      setFilteredHotels(allHotels); // Agar khali hai to sab dikhao
      return;
    }

    // Filter logic: Agar hotel ki location user ke input se match kare
    const result = allHotels.filter(hotel => 
      hotel.location.toLowerCase().includes(cityInput.toLowerCase())
    );
    setFilteredHotels(result);
  };

  // 3. Book Now Logic (Details set karke Modal kholna)
  const handleBookNow = (hotelName: string) => {
    let details = `Inquiry for Hotel: ${hotelName}`;
    
    // Agar dates select ki hai to wo bhi jod do
    if (checkIn && checkOut) {
      details += ` | Dates: ${checkIn} to ${checkOut}`;
    }

    setBookingDetails(details); // Ye state hum modal me use karenge (console log ya form pre-fill ke liye)
    
    // Yahan hum alert karte hain user ko ki dates select ho gayi hain (Optional)
    // alert(`Checking availability for ${hotelName} on your selected dates...`);
    
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gray-900 py-20 pb-32">
        <div className="absolute inset-0 overflow-hidden opacity-40">
           <img src="https://images.unsplash.com/photo-1590053315131-620f5df7e250?q=80&w=1935&auto=format&fit=crop" alt="Hotel BG" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
          <p className="text-lg opacity-90">Best Price Guarantee • 24/7 Support</p>
        </div>
      </div>

      {/* SEARCH BAR (Internal) */}
      <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end border border-gray-100">
          
          {/* City Input */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">City (Try Varanasi)</label>
            <input 
              type="text" 
              placeholder="Where are you going?" 
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              className="w-full border-b-2 border-gray-200 py-2 focus:border-[#ea2330] outline-none font-medium text-gray-700" 
            />
          </div>

          {/* Dates */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Check-In</label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full border-b-2 border-gray-200 py-2 focus:border-[#ea2330] outline-none font-medium text-gray-700" 
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Check-Out</label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full border-b-2 border-gray-200 py-2 focus:border-[#ea2330] outline-none font-medium text-gray-700" 
            />
          </div>

          {/* Search Button */}
          <button 
            onClick={handleSearch}
            className="bg-[#ea2330] hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors h-12"
          >
            Find Hotels
          </button>
        </div>
      </div>

      {/* HOTEL LISTINGS */}
      <div className="bg-slate-50 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#ea2330] rounded-full"></span>
              {cityInput ? `Hotels in ${cityInput}` : "Recommended Hotels"}
            </h2>
            <span className="text-gray-500 text-sm">{filteredHotels.length} Properties Found</span>
          </div>

          {/* Agar koi hotel nahi mila */}
          {filteredHotels.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-400">No hotels found in this city.</h3>
              <p className="text-gray-500 mt-2">Try searching for "Varanasi" or "Ayodhya"</p>
              <button onClick={() => {setCityInput(""); setFilteredHotels(allHotels)}} className="mt-4 text-[#ea2330] font-bold underline">Show All Hotels</button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
                
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-xs font-bold text-orange-600 shadow-sm">
                    ⭐ {hotel.rating} Rating
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {hotel.fullLocation}
                  </p>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 my-4">
                    {hotel.amenities.map((item, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                    <div>
                      {/* Dynamic Pricing Logic (Dikhawa) */}
                      <p className="text-xs text-gray-400">
                        {checkIn && checkOut ? "Estimated Price" : "Starting from"}
                      </p>
                      <p className="text-xl font-bold text-[#ea2330]">{hotel.price} <span className="text-sm font-normal text-gray-500">/ night</span></p>
                    </div>
                    
                    <button 
                      onClick={() => handleBookNow(hotel.name)}
                      className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-[#ea2330] transition-colors shadow-sm"
                    >
                      {checkIn ? "Check Availability" : "Book Now"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal - Note: Abhi ye simple wala hai. */}
      {/* Agar tum chahte ho ki dates bhi email me jayein, to bataana, Modal code thoda edit karna padega */}
      <RequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        // Note: Humne bookingDetails store kiya hai, par abhi modal simple hai.
        // Agle step me hum modal ko advance bana sakte hain jo ye details le le.
      />

      <Footer />
    </>
  );
};

export default HotelsPage;