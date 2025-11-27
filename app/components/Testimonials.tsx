import React from 'react';

const Testimonials = () => {
  
  const reviews = [
    {
      id: 1,
      name: "Rohit Verma",
      location: "New Delhi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
      text: "Varanasi trip was amazing! The driver was very polite and acted like a guide. Best service at this price point. Highly recommended for families."
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
      text: "Booked a taxi for Ayodhya Darshan. The car was clean (Innova), and the journey was very comfortable. Thank you Yatraksathi team!"
    },
    {
      id: 3,
      name: "Amit Singh",
      location: "Lucknow",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
      rating: 4,
      text: "Good experience with the Chardham package. Hotels were decent and food was good. Will definitely book again next year."
    }
  ];

  // Star Icon Component for reusability
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Reviews Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col justify-between">
              
              {/* Feedback Text */}
              <div className="mb-6 relative">
                 {/* Quote Icon */}
                <span className="text-4xl text-[#ea2330] opacity-20 font-serif absolute -top-4 -left-2">“</span>
                <p className="text-gray-600 italic relative z-10 pl-4">
                  {review.text}
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto border-t border-gray-200 pt-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#ea2330]"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <span className="text-xs text-gray-500">{review.location}</span>
                  <div className="flex mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;