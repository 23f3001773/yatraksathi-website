"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; // ✅ Ye Import zaroori hai

interface PaymentProps {
  amount: number;
  packageName: string;
  userDetails?: {
    name: string;
    email: string;
    phone: string;
  };
}

const PaymentButton: React.FC<PaymentProps> = ({ amount, packageName, userDetails }) => {
  const router = useRouter(); // ✅ Router initialize karo

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay load nahi hua.');
      return;
    }

    const options = {
      key: "rzp_live_RmehcR6TekB2w9", // Aapki Key
      amount: amount * 100,
      currency: "INR",
      name: "YatraKsathi",
      description: `Booking for ${packageName}`,
      image: "/logo.png",
      
      // ✅ SUCCESS HANDLE KARNE KA NAYA TARIKA
      handler: function (response: any) {
        // Alert hata diya, ab hum redirect karenge
        // Hum data ko URL me bhej rahe hain taaki receipt page usko padh sake
        router.push(`/payment-success?payment_id=${response.razorpay_payment_id}&amount=${amount * 100}&package=${packageName}`);
      },
      
      prefill: {
        name: userDetails?.name || "",
        email: userDetails?.email || "",
        contact: userDetails?.phone || "",
      },
      theme: {
        color: "#ea2330",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <button 
      onClick={handlePayment}
      className="bg-[#ea2330] text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition transform hover:scale-105 shadow-lg"
    >
      Book Now (₹{amount})
    </button>
  );
};

export default PaymentButton;