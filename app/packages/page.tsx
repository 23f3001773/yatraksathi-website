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
        
      </div>

      {/* Ye apke baki sare packages dikhayega */}
      <PackagesComponent />
      
      <Footer />
    </main>
  );
}