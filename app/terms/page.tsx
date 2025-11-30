import React from 'react';
import Navbar from '../components/Navbar'; // Navbar import
import Footer from '../components/Footer'; // Footer import

const TermsAndConditions = () => {
  return (
    <>
      {/* 1. Header */}
      <Navbar />

      {/* 2. Main Content */}
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Page Header Banner */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-center text-white">
              <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
              <p className="opacity-90 text-sm uppercase tracking-wide">Yatraksathi • Travel Guidelines</p>
              <p className="text-xs mt-4 opacity-75">Last Updated: November 30, 2025</p>
            </div>

            {/* Terms Text Body */}
            <div className="p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed">
              
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="font-medium text-orange-900">
                  Welcome to <strong>Yatraksathi</strong>. By booking a trip with us, you agree to the following terms. Please read them carefully to avoid any confusion later.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-600 w-8 h-8 flex items-center justify-center rounded-full text-sm">1</span>
                  Booking & Payments
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Advance Payment:</strong> To confirm your booking, a minimum of 50% advance payment is required.</li>
                  <li><strong>Balance Payment:</strong> The remaining amount must be paid 2 days before the trip starts.</li>
                  <li><strong>Modes:</strong> We accept UPI, Bank Transfer, and Cash.</li>
                </ul>
              </section>

              <hr className="border-gray-100" />

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-600 w-8 h-8 flex items-center justify-center rounded-full text-sm">2</span>
                  Cancellation & Refund Policy
                </h2>
                <div className="bg-red-50 p-4 rounded-md text-sm border border-red-100">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>15 Days or more before trip:</span>
                      <span className="font-bold text-green-600">90% Refund</span>
                    </li>
                    <li className="flex justify-between">
                      <span>7 to 14 Days before trip:</span>
                      <span className="font-bold text-orange-600">50% Refund</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Less than 7 Days:</span>
                      <span className="font-bold text-red-600">No Refund</span>
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="border-gray-100" />

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-600 w-8 h-8 flex items-center justify-center rounded-full text-sm">3</span>
                  Important Guidelines
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>ID Proof:</strong> Every guest must carry a valid original Government ID (Aadhar/Voter ID) during the tour.</li>
                  <li><strong>Force Majeure:</strong> Yatraksathi is not responsible for delays caused by landslides, weather conditions, or political strikes. Any extra cost incurred due to these will be borne by the customer.</li>
                  <li><strong>Luggage:</strong> Please take care of your belongings. We are not liable for lost luggage.</li>
                </ul>
              </section>

              <div className="mt-8 pt-6 border-t border-dashed border-gray-300">
                 <h3 className="font-bold text-gray-900 mb-2">Need Help?</h3>
                 <p className="text-sm text-gray-500">
                   For any clarifications regarding these terms, contact us at <a href="mailto:support@yatraksathi.com" className="text-orange-600 font-medium hover:underline">support@yatraksathi.com</a>
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

export default TermsAndConditions;