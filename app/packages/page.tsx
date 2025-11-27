import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackagesComponent from "../components/Packages"; // आपने जो component बनाया था

export default function PackagesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-10">
        <h1 className="text-center text-4xl font-bold text-[#ea2330]">All Tour Packages</h1>
      </div>
      {/* यहाँ हम वही पैकेज वाला कॉम्पोनेंट दिखा रहे हैं */}
      <PackagesComponent />
      <Footer />
    </main>
  );
}