import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* 1. Header Section */}
      <div className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About <span className="text-[#ea2330]">Yatraksathi</span></h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          We are not just a travel agency; we are your companions in exploring the divine and beautiful landscapes of India.
        </p>
      </div>

      {/* 2. Story Section (Image + Text) */}
      <section className="py-16 max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop" 
              alt="Travelers in India" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#ea2330] text-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Making Every Journey Memorable</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to <strong>Yatraksathi</strong>. Founded with a vision to simplify travel in India, we specialize in spiritual tours like <strong>Varanasi, Ayodhya, and Chardham</strong>, as well as leisure trips to Goa and Manali.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We understand that travel is not just about reaching a destination; it's about the experience. That's why we provide well-maintained cars, experienced drivers, and handpicked hotels to ensure your safety and comfort.
            </p>
            
            {/* Bullet Points */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="text-green-500 text-xl">✔</span> Personalized Tour Packages
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="text-green-500 text-xl">✔</span> 24/7 Customer Support
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="text-green-500 text-xl">✔</span> Transparent Pricing (No Hidden Costs)
              </li>
            </ul>

            <Link href="/contact">
              <button className="bg-[#ea2330] hover:bg-[#d91f2c] text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-md">
                Contact Us Today
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="p-4">
            <h3 className="text-4xl font-bold text-[#ea2330] mb-2">500+</h3>
            <p className="text-gray-400">Happy Travelers</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-bold text-[#ea2330] mb-2">50+</h3>
            <p className="text-gray-400">Destinations</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-bold text-[#ea2330] mb-2">100%</h3>
            <p className="text-gray-400">Safety Record</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl font-bold text-[#ea2330] mb-2">24/7</h3>
            <p className="text-gray-400">Support Available</p>
          </div>

        </div>
      </section>

      {/* 4. Vision / Values */}
      <section className="py-20 max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-red-50 text-[#ea2330] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🤝</div>
            <h3 className="text-xl font-bold mb-3">Trust & Transparency</h3>
            <p className="text-gray-500 text-sm">We believe in building relationships. No hidden charges, just honest service.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
             <div className="w-16 h-16 bg-red-50 text-[#ea2330] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🛡️</div>
            <h3 className="text-xl font-bold mb-3">Safety First</h3>
            <p className="text-gray-500 text-sm">Your safety is our priority. Verified drivers and sanitized vehicles for every trip.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
             <div className="w-16 h-16 bg-red-50 text-[#ea2330] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">😊</div>
            <h3 className="text-xl font-bold mb-3">Customer Satisfaction</h3>
            <p className="text-gray-500 text-sm">We go the extra mile to ensure you leave with a smile and great memories.</p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}