import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HotelsPage() {
  return (
    <main>
      <Navbar />
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Hotel Booking</h1>
        <p className="mt-4 text-gray-600">Comming Soon: Best hotels in Varanasi & Ayodhya.</p>
      </div>
      <Footer />
    </main>
  );
}