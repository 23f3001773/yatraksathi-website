import React from 'react';
import Link from 'next/link';
import { Car, Hotel, Map, PhoneCall } from 'lucide-react';

const Services = () => {
  
  const services = [
    {
      id: 1,
      title: "Cab Booking",
      description: "Safe & comfortable taxi service for local & outstation trips.",
      icon: <Car size={40} strokeWidth={1.5} />,
      link: "/cab", // ✅ Navbar me 'Cab' ka link yahi hona chahiye (app/cab/page.tsx)
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      title: "Hotel Booking",
      description: "Affordable and luxury stay options near Ghats & Temples.",
      icon: <Hotel size={40} strokeWidth={1.5} />,
      link: "/hotels", // ✅ Navbar me 'Hotels' ka link yahi hona chahiye (app/hotels/page.tsx)
      color: "bg-green-50 text-green-600"
    },
    {
      id: 3,
      title: "Tour Packages",
      description: "Complete spiritual tour packages for Kashi, Ayodhya & Prayagraj.",
      icon: <Map size={40} strokeWidth={1.5} />,
      link: "/packages", // ✅ Navbar me 'Packages' ka link yahi hona chahiye
      color: "bg-orange-50 text-orange-600"
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Need help planning? Call us anytime for customized plans.",
      icon: <PhoneCall size={40} strokeWidth={1.5} />,
      link: "/contact", // ✅ Navbar me 'Contact' ka link yahi hona chahiye
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Our Premium Services</h2>
          <p className="text-gray-500">Everything you need for a perfect spiritual journey</p>
          <div className="w-20 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            // Pura card click karne layak bana diya hai Link tag se
            <Link key={service.id} href={service.link} className="group block h-full">
              <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full text-center cursor-pointer">
                
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${service.color} transition-transform group-hover:scale-110`}>
                  {service.icon}
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* 'Book Now' Button Style */}
                <div className="inline-flex items-center text-[#ea2330] font-semibold text-sm group-hover:underline mt-auto">
                  Book Now <span>&rarr;</span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;