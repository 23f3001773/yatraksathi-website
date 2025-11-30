"use client";
import React from 'react';

const PaymentButton = () => {

  // 1. Script Load karne ka function
  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // 2. Payment Handle karne ka function
  const handlePayment = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    // Yaha payment ke options set karo
    const options = {
      key: "rzp_test_RlYzzHnL7252Cb", // Yaha apni Test Key ID daalo (Ex: rzp_test_...)
      amount: 50, // Amount paise me hota hai (50000 paise = 500 Rupaye)
      currency: "INR",
      name: "YatraKsathi",
      description: "Test Transaction",
      image: "/logo.png", // Tumhari company ka logo
      handler: function (response: any) {
        // Payment success hone par kya karna hai
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        console.log(response);
      },
      prefill: {
        name: "Rohit User", // User ka naam (Form se le sakte ho)
        email: "rohit@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#ea2330", // Tumhari website ka Lal rang
      },
    };

    // Payment Window open karna
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <button 
      onClick={handlePayment}
      className="bg-[#ea2330] text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition"
    >
      Book Now (₹500)
    </button>
  );
};

export default PaymentButton;