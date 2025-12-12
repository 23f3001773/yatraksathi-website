import Link from 'next/link';
import React from 'react';

const Packages = () => {
  
  // Updated Package Data
  const packages = [
    {
      id: 1,
      title: "VARANASI-KASHI-BANARAS",
      subtitle: "Tour Package’s",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop", 
      duration: "2 Days / 1 Night",
      location: "Varanasi, UP",
      price: "₹4,999",
      link: "/packages/1" // बाकियों के लिए पुराना लिंक
    },
    {
      id: 2,
      title: "GOLDEN TRIANGLE",
      subtitle: "Varanasi Ayodhya Prayagraj Tour Package",
      image: "/Ayodhya.jpg", 
      duration: "4 Days / 3 Nights",
      location: "Ayodhya, UP",
      price: "₹8,500",
      link: "/golden-triangle" // ✅ यहाँ मैंने आपके नए पेज का लिंक डाल दिया है
    },
    {
      id: 3,
      title: "VARANASI AYODHYA",
      subtitle: "3 Days Tour Package’s",
      image: "https://images.unsplash.com/photo-1588661601662-7389c9e830e3?q=80&w=2070&auto=format&fit=crop", 
      duration: "3 Days / 2 Nights",
      location: "UP Tourism",
      price: "₹6,000",
      link: "/packages/3" // बाकियों के लिए पुराना लिंक
    },
    {
      id: 4,
      title: "DIVYA DHAM YATRA",
      subtitle: "Varanasi Ayodhya Prayagraj & Gaya Tour Packages",
      image: "/Chardham.jpg", 
      duration: "6 Days / 5 Nights",
      location: "India Spiritual",
      price: "₹12,000",
      link: "/packages/4" // बाकियों के लिए पुराना लिंक
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Best Tour Packages</h2>
          <p className="text-gray-500">Explore the best destinations with comfort and best prices</p>
          <div className="w-20 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              
              {/* Image Section */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-700">
                  {pkg.duration}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <div className="text-xs text-[#ea2330] font-bold mb-1 uppercase tracking-wider">{pkg.location}</div>
                
                {/* Main Title */}
                <h3 className="text-lg font-bold text-gray-800 leading-tight uppercase">{pkg.title}</h3>
                
                {/* Subtitle */}
                {pkg.subtitle && (
                  <p className="text-sm text-gray-500 mt-1 font-medium capitalize">
                    {pkg.subtitle}
                  </p>
                )}
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 block">Starting from</span>
                    <span className="text-xl font-bold text-[#ea2330]">{pkg.price}</span>
                  </div>
                  
                  {/* --- LINK UPDATED HERE --- */}
                  <Link href={pkg.link}>
                    <button className="bg-gray-900 hover:bg-[#ea2330] text-white text-sm font-medium py-2 px-4 rounded transition-colors duration-300">
                      View Details
                    </button>
                  </Link>
                  {/* ------------------------- */}
                  
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/packages" className="inline-block border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-2 px-8 rounded-full transition-all duration-300">
            View All Packages
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Packages;