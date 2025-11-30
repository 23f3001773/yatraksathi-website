import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* 1. Hero Section - Introduction */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              More Than Just A Travel Agency, <br />
              <span className="text-[#ea2330]">We Are Your Travel Companions</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <strong>Yatraksathi</strong>, we believe travel is not just about reaching a destination; 
              it's about the stories you create along the way. Born in the spiritual capital of India, 
              Varanasi, we are dedicated to showing you the true soul of India.
            </p>
          </div>

          {/* Image & Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Side */}
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Note: Apni Taj Mahal ya Varanasi ki photo yahan lagana */}
              <img 
                              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop" 

                alt="Travel Experience" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 bg-[#ea2330] text-white px-8 py-4 rounded-tr-2xl">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Our Journey & Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to simplify travel in India, we started as a small team in Varanasi. 
                Today, we specialize in spiritual tours like <strong>Kashi, Ayodhya, and Chardham</strong>, 
                as well as leisure trips to <strong>Goa, Manali, and Kerala</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our name <strong>'Yatraksathi'</strong> means 'Journey Companion'. We don't just book your hotels 
                and cabs; we ensure you feel safe, comfortable, and cared for, just like a family member would 
                take care of you.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-xl text-[#ea2330]">1000+</h3>
                  <p className="text-sm text-gray-500">Happy Travelers</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-xl text-[#ea2330]">50+</h3>
                  <p className="text-sm text-gray-500">Destinations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Why Choose Us (Features) */}
      <div className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Travel With Us?</h2>
            <p className="text-gray-500 mt-2">We don't cut corners when it comes to your experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-[#ea2330]">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">No Hidden Costs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transparency is our core value. The price we quote is the price you pay. No last-minute surprises during your trip.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-[#ea2330]">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are always just a phone call away. Whether it's midnight or early morning, our team is awake to assist you.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-[#ea2330]">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Being locals of Varanasi, we know the hidden gems, the best food spots, and the right time to visit temples to avoid crowds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Call to Action Banner */}
      <div className="bg-[#ea2330] py-16 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Next Yatra?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Let us handle the planning while you enjoy the journey. Custom packages available for families, couples, and groups.
        </p>
        <Link href="/contact" className="inline-block bg-white text-[#ea2330] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
          Contact Us Today
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;