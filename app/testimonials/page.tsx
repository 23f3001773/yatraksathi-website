import React from 'react';

// --- IMPORTS ---
// Hum '../' use kar rahe hain kyunki hum 'testimonials' folder ke andar hain
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const allReviews = [
  {
    id: 1,
    name: "Rohit Verma",
    location: "New Delhi",
    rating: 5,
    text: "Varanasi trip was amazing! The driver was very polite and acted like a guide. Best service at this price point. Highly recommended for families.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Booked a taxi for Ayodhya Darshan. The car was clean (Innova), and the journey was very comfortable. Thank you Yatraksathi team!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Amit Singh",
    location: "Lucknow",
    rating: 4,
    text: "Good experience with the Chardham package. Hotels were decent and food was good. Will definitely book again next year.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Bangalore",
    rating: 5,
    text: "Kashi Vishwanath darshan was handled very professionally. No waiting, perfect timing. The guide was very knowledgeable.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  },
  {
    id: 5,
    name: "Rahul Mehta",
    location: "Ahmedabad",
    rating: 5,
    text: "Very affordable rates for Airport pickup and drop in Varanasi. Driver was on time.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
  },
  {
    id: 6,
    name: "Anjali Deshmukh",
    location: "Pune",
    rating: 4,
    text: "Hotel booking was great near Ghats. The view was mesmerizing. Thanks for arranging everything on short notice.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* 1. Header / Navbar */}
      <Navbar />

      <div className="py-20 max-w-7xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customer Stories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our travelers have to say about their spiritual journeys with Yatraksathi.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid for All Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-orange-100"
                    />
                    <div>
                        <h3 className="font-bold text-lg text-gray-900">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                </div>
                <div className="bg-orange-50 px-2 py-1 rounded text-orange-600 font-bold text-sm">
                    {review.rating}.0 ★
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                "{review.text}"
              </p>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-orange-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Planning a Trip?</h2>
            <p className="mb-8 text-orange-100">Join our happy customers and experience the divine.</p>
            <a href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Book Now
            </a>
        </div>

      </div>

      {/* 2. Footer */}
      <Footer />

    </main>
  );
}