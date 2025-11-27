import React from 'react';

const Features = () => {
  
  const features = [
    {
      id: 1,
      title: "Experienced Drivers",
      desc: "Professional and verified drivers for a safe journey.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#ea2330]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Affordable Pricing",
      desc: "Best market rates with no hidden charges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#ea2330]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "24/7 Support",
      desc: "We are always here to help you, anytime.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#ea2330]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Safe & Comfortable",
      desc: "Clean cars and safety protocols followed strictly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#ea2330]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Verified Hotels",
      desc: "Handpicked hotels for a premium stay experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#ea2330]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="w-16 h-1 bg-[#ea2330] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100 flex flex-col items-center">
              
              <div className="mb-4 bg-red-50 p-3 rounded-full">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;