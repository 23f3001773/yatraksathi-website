import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackagesComponent from "../components/Packages"; 
// 1. PaymentButton ko yaha import karein
import PaymentButton from '../components/PaymentButton';

export default function PackagesPage() {
  return (
    <main>
      <Navbar />
      
      <div className="pt-10 text-center">
        <h1 className="text-4xl font-bold text-[#ea2330]">All Tour Packages</h1>
        
        {/* 2. Agar test karna hai to Payment Button yaha laga sakte ho */}
        <div className="mt-4 p-4 border rounded-lg inline-block shadow-md">
            <h2 className="text-xl font-bold">Test Booking (Manali)</h2>
            <p className="mb-2">Price: ₹500</p>
            <PaymentButton />
        </div>
      </div>

      {/* Ye apke baki sare packages dikhayega */}
      <PackagesComponent />
      
      <Footer />
    </main>
  );
}