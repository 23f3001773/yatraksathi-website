import React from 'react';
import Link from 'next/link'; // Link import karna mat bhulna
import { Star, User } from 'lucide-react'; // Agar icons use ho rahe hain

const Testimonials = () => {
  
  // Ye sirf Home page ke liye 3 top reviews hain
  const reviews = [
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
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
          <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              
              {/* Quote Icon */}
              <div className="text-4xl text-gray-200 font-serif mb-4">“</div>
              
              <p className="text-gray-600 italic mb-6 min-h-[80px]">
                {review.text}
              </p>

              <div className="flex items-center border-t pt-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                  <div className="flex text-yellow-400 text-sm mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SEE MORE BUTTON (New) --- */}
        <div className="text-center mt-12">
          <Link href="/testimonials">
             <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-bold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300">
               See More Reviews
             </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;