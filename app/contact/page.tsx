import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactComponent from "../components/Contact"; // आपने जो component बनाया था

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-10">
         {/* थोड़ा स्पेस देकर कांटेक्ट फॉर्म दिखाएंगे */}
      </div>
      <ContactComponent />
      <Footer />
    </main>
  );
}