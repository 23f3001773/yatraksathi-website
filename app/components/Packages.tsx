import Link from 'next/link';
import React from 'react';

const Packages = () => {
  
  // पैकेज डेटा (बाद में यह डेटाबेस से आ सकता है)
  const packages = [
    {
      id: 1,
      title: "Varanasi Ganga Darshan",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop",
      duration: "2 Days / 1 Night",
      price: "₹2,999",
      location: "Varanasi, UP"
    },
    {
      id: 2,
      title: "Ayodhya Ram Mandir Tour",
      image: "/Ayodhya.jpg", // Ayodhya theme
      duration: "1 Day / Same Day",
      price: "₹1,499",
      location: "Ayodhya, UP"
    },
    {
      id: 3,
      title: "Chardham Yatra Package",
      image: "Chardham.jpg", // Himalayas
      duration: "10 Days / 9 Nights",
      price: "₹25,999",
      location: "Uttarakhand"
    },
    {
      id: 4,
      title: "Goa Beach Holiday",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
      duration: "4 Days / 3 Nights",
      price: "₹12,500",
      location: "Goa, India"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Popular Tour Packages</h2>
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
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-1">{pkg.title}</h3>
                
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <span className="text-xs text-gray-500 block">Starting from</span>
                    <span className="text-xl font-bold text-[#ea2330]">{pkg.price}</span>
                  </div>
                  
                  {/* ID के हिसाब से अलग पेज खुलेगा */}
<Link href={`/packages/${pkg.id}`}>
                    <button className="bg-gray-900 hover:bg-[#ea2330] text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/packages" className="inline-block border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-2 px-8 rounded-full transition-all">
            View All Packages
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Packages;