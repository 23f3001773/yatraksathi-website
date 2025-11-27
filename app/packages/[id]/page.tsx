"use client";
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from 'next/link';
import { useParams } from 'next/navigation';

// ये सारा डेटा यहाँ है (बाद में डेटाबेस से भी आ सकता है)
const packagesData = [
  {
    id: 1,
    title: "Varanasi Ganga Darshan",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop",
    desc: "Experience the spiritual capital of India with our guided tour.",
    duration: "2 Days / 1 Night",
    itinerary: [
      { day: "Day 1", title: "Arrival & Ganga Aarti", details: "Pick up from Airport/Station. Check-in to hotel. Evening boat ride and magnificent Ganga Aarti viewing." },
      { day: "Day 2", title: "Temple Tour & Departure", details: "Morning Kashi Vishwanath Darshan, Kaal Bhairav, and Sarnath tour. Drop off at station/airport." }
    ]
  },
  {
    id: 2,
    title: "Ayodhya Ram Mandir Tour",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1706024976721-a3962453629f?q=80&w=2070&auto=format&fit=crop",
    desc: "Visit the holy birth place of Lord Rama and the grand Ram Mandir.",
    duration: "1 Day / Same Day",
    itinerary: [
      { day: "Day 1", title: "Darshan & Sightseeing", details: "Pickup from Ayodhya Cantt/Airport. Ram Janmabhoomi Darshan, Hanuman Garhi, and Kanak Bhawan. Evening Saryu Aarti." }
    ]
  },
  {
    id: 3,
    title: "Chardham Yatra Package",
    price: "₹25,999",
    image: "https://images.unsplash.com/photo-1605649486309-fa9a27ebdc83?q=80&w=2067&auto=format&fit=crop",
    desc: "The ultimate pilgrimage tour to Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    duration: "10 Days / 9 Nights",
    itinerary: [
      { day: "Day 1-2", title: "Haridwar to Barkot", details: "Journey begins from Haridwar. Stay at Barkot." },
      { day: "Day 3-5", title: "Yamunotri & Gangotri", details: "Trek to Yamunotri and drive to Uttarkashi/Gangotri." },
      { day: "Day 6-8", title: "Kedarnath Dham", details: "Drive to Guptkashi, trek to Kedarnath ji." },
      { day: "Day 9-10", title: "Badrinath & Return", details: "Badrinath Darshan and return journey to Rishikesh/Haridwar." }
    ]
  },
  {
    id: 4,
    title: "Goa Beach Holiday",
    price: "₹12,500",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
    desc: "Relax at the beautiful beaches of North and South Goa.",
    duration: "4 Days / 3 Nights",
    itinerary: [
      { day: "Day 1", title: "Arrival in Goa", details: "Pickup from Dabolim Airport. Check-in and leisure time at Calangute beach." },
      { day: "Day 2", title: "North Goa Tour", details: "Visit Fort Aguada, Baga Beach, and Anjuna Beach. Nightlife experience." },
      { day: "Day 3", title: "South Goa Tour", details: "Visit Old Goa Churches, Mangeshi Temple, and Colva Beach." },
      { day: "Day 4", title: "Departure", details: "Shopping and drop at Airport." }
    ]
  }
];

export default function PackageDetail() {
  const params = useParams();
  
  // ID के आधार पर सही पैकेज ढूंढेगा
  const packageId = parseInt(params.id as string);
  const pkg = packagesData.find((p) => p.id === packageId);

  // अगर पैकेज नहीं मिला (Error Handling)
  if (!pkg) {
    return (
      <main>
        <Navbar />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">Package Not Found!</h2>
          <Link href="/packages" className="text-blue-500 underline">Go Back</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* 1. Hero Image Section */}
      <div className="relative h-[400px] w-full">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">{pkg.title}</h1>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEFT: Details & Itinerary (Takes 2 columns) */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{pkg.desc}</p>
              <div className="mt-4 flex gap-4 text-sm font-semibold text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded">🕒 {pkg.duration}</span>
                <span className="bg-gray-100 px-3 py-1 rounded">📍 Guided Tour</span>
              </div>
            </div>

            {/* Itinerary (Day Wise Plan) */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-[#ea2330] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                        {index + 1}
                      </div>
                      {/* Connecting Line (except last item) */}
                      {index !== pkg.itinerary.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 mt-1"></div>
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="font-bold text-gray-900 text-lg">{item.day}: {item.title}</h3>
                      <p className="text-gray-600 mt-1 text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Booking Card (Sticky) */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
              <p className="text-gray-500 text-sm">Starting from</p>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-3xl font-bold text-[#ea2330]">{pkg.price}</span>
                <span className="text-gray-400 text-sm mb-1">/ per person</span>
              </div>

              <div className="space-y-3">
                <Link href={`https://wa.me/919876543210?text=I am interested in ${pkg.title} package.`}>
                  <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <span>Chat on WhatsApp</span>
                  </button>
                </Link>

                <Link href="/contact">
                  <button className="w-full bg-[#ea2330] hover:bg-[#d91f2c] text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                    Book Now
                  </button>
                </Link>
              </div>

              <p className="text-xs text-center text-gray-400 mt-4">
                *Prices may vary based on season and group size.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}