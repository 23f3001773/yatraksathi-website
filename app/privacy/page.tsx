import React from 'react';
import Navbar from '../components/Navbar'; // Navbar import kiya
import Footer from '../components/Footer'; // Footer import kiya

const PrivacyPolicy = () => {
  return (
    <>
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Main Content Area */}
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Page Header Banner */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-center text-white">
              <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
              <p className="opacity-90 text-sm uppercase tracking-wide">Yatraksathi • Travel with Trust</p>
              <p className="text-xs mt-4 opacity-75">Last Updated: November 30, 2025</p>
            </div>

            {/* Policy Text Body */}
            <div className="p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed">
              
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="font-medium text-orange-900">
                  Welcome to <strong>Yatraksathi</strong>. We value your trust. This document explains how we protect your data when you book a trip with us.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-600 w-8 h-8 flex items-center justify-center rounded-full text-sm">1</span>
                  Information We Collect
                </h2>
                <p className="mb-3">To process your bookings smoothly, we may ask for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Personal Details:</strong> Name, Phone Number, and Email Address.</li>
                  <li><strong>Identity Proof:</strong> Govt ID (Aadhar/Voter ID) for hotel check-ins.</li>
                  <li><strong>Payment Info:</strong> Processed securely via trusted gateways.</li>
                </ul>
              </section>

              <hr className="border-gray-100" />

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-600 w-8 h-8 flex items-center justify-center rounded-full text-sm">2</span>
                  How We Use Your Data
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Confirming your Hotel and Taxi bookings.</li>
                  <li>Sending trip itineraries, tickets, and updates.</li>
                  <li>Providing emergency support during your journey.</li>
                </ul>
              </section>

              <hr className="border-gray-100" />

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-600 w-8 h-8 flex items-center justify-center rounded-full text-sm">3</span>
                  Data Security
                </h2>
                <p className="text-gray-600">
                  We <strong>never</strong> sell your personal data. We only share necessary details (like your name and phone number) with our verified hotel partners and drivers to ensure your trip runs smoothly.
                </p>
              </section>

              <div className="mt-8 pt-6 border-t border-dashed border-gray-300">
                 <h3 className="font-bold text-gray-900 mb-2">Have Questions?</h3>
                 <p className="text-sm text-gray-500">
                   Contact our privacy team at <a href="mailto:privacy@yatraksathi.com" className="text-orange-600 font-medium hover:underline">privacy@yatraksathi.com</a>
                 </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 3. Footer */}
      <Footer />
    </>
  );
};

export default PrivacyPolicy;