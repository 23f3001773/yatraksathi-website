"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Receipt Component
const ReceiptContent = () => {
  const searchParams = useSearchParams();
  
  // URL se data nikal rahe hain
  const paymentId = searchParams.get('payment_id');
  const amount = searchParams.get('amount'); // Paise me aayega
  const packageName = searchParams.get('package');

  // Print karne ka function
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      
      {/* Receipt Box */}
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-200" id="receipt-box">
        
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Payment Successful!</h1>
        <p className="text-center text-gray-500 mb-8">Thank you for booking with YatraKsathi.</p>

        {/* Details Table */}
        <div className="border-t border-b border-gray-100 py-4 mb-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">Payment ID</span>
            <span className="font-mono font-bold text-gray-800">{paymentId}</span>
          </div>
          <div className="flex justify-between">
             <span className="text-gray-500">Package Name</span>
             <span className="font-medium text-gray-800 text-right">{packageName || "Tour Package"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Date</span>
            <span className="text-gray-800">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-[#ea2330] pt-2 border-t border-dashed">
            <span>Total Paid</span>
            {/* Amount ko wapas Rupaye me dikhana hai */}
            <span>₹{(Number(amount) / 100).toFixed(2)}</span> 
          </div>
        </div>

        {/* Print Button */}
        <button 
          onClick={handlePrint}
          className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition mb-3"
        >
          Download / Print Receipt
        </button>
        
        <Link href="/" className="block text-center text-gray-500 hover:text-[#ea2330] text-sm">
          Go back to Home
        </Link>

      </div>
    </div>
  );
};

// Main Page Function
export default function PaymentSuccessPage() {
  return (
    // Suspense zaroori hai jab hum useSearchParams use karte hain
    <Suspense fallback={<div>Loading Receipt...</div>}>
      <ReceiptContent />
    </Suspense>
  );
}