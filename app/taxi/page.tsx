import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features"; // फीचर्स यहाँ भी अच्छे लगेंगे

export default function TaxiPage() {
  return (
    <main>
      <Navbar />
      <div className="py-20 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Premium Taxi Services</h1>
        <p className="mt-4 text-gray-600">Book Sedans, SUVs, and Tempo Travellers at best rates.</p>
      </div>
      <Features />
      <Footer />
    </main>
  );
}
