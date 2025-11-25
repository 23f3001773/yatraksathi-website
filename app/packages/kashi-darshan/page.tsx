import Link from "next/link";

export default function KashiPackage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] font-sans text-gray-900 pb-20">
      
      {/* --- 1. PREMIUM TOP BAR --- */}
      <div className="bg-[#8B3A00] text-amber-100 text-center py-2 text-xs font-bold tracking-[0.2em] uppercase">
        ✨ The Soul of India • Varanasi ✨
      </div>

      {/* --- 2. GLASS NAVBAR --- */}
      <nav className="absolute top-10 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/packages" className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-lg text-[#8B3A00] font-bold hover:bg-white transition shadow-xl border border-white/50 flex items-center gap-2">
            <span>⬅</span> Back
          </Link>
          <div className="hidden md:block bg-white/90 backdrop-blur-md px-6 py-2 rounded-lg text-[#8B3A00] font-bold shadow-xl border border-white/50 tracking-wider">
             SHIV TRAVELS
          </div>
        </div>
      </nav>

      {/* --- 3. IMMERSIVE HERO SECTION --- */}
      <div className="relative h-[80vh] w-full">
        <img 
          src="/kashi.jpg" 
          alt="Kashi Vishwanath" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1510] via-black/20 to-transparent"></div>
        
        {/* Main Title Area */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 pb-16">
          <div className="max-w-7xl mx-auto">
            <span className="bg-[#ECB159] text-[#422006] px-4 py-1.5 rounded-md text-xs font-extrabold uppercase tracking-wider shadow-lg mb-6 inline-block">
              ★ Best Seller Package
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-4 drop-shadow-2xl leading-none">
              Divya Kashi
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl font-light tracking-wide border-l-4 border-[#ECB159] pl-6 mt-6">
              Moksha ki nagri mein ek sukoon bhari yatra. <br/>
              <span className="text-[#ECB159]">Baba Vishwanath</span> ke darshan aur Ganga Aarti ka anubhav.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* --- LEFT SIDE: PREMIUM CONTENT --- */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Highlights Cards (Floating) */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] text-center border-b-4 border-[#8B3A00]">
              <div className="text-2xl mb-1">⏳</div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Duration</p>
              <p className="text-lg font-bold text-[#8B3A00]">2 Days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] text-center border-b-4 border-[#8B3A00]">
              <div className="text-2xl mb-1">🏨</div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Stay</p>
              <p className="text-lg font-bold text-[#8B3A00]">Premium AC</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] text-center border-b-4 border-[#8B3A00]">
              <div className="text-2xl mb-1">🚘</div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Ride</p>
              <p className="text-lg font-bold text-[#8B3A00]">Private Cab</p>
            </div>
          </div>

          {/* Clean Itinerary */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-[#422006] mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#ECB159] rounded-full"></span>
              Yatra Itinerary
            </h2>
            
            <div className="space-y-6">
              
              {/* Day 1 */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#8B3A00] text-[#ECB159] flex items-center justify-center font-bold text-xl shadow-lg z-10">1</div>
                  <div className="w-0.5 h-full bg-gray-200 -mt-2 group-last:hidden"></div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <h3 className="text-xl font-bold text-[#422006] mb-2">Arrival & Ganga Aarti</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Varanasi pahunchne par humara driver aapko receive karega. Hotel mein aaram karne ke baad, shaam ko hum chalenge duniya ki sabse adbhut <strong>Ganga Aarti</strong> dekhne.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 bg-[#FFFBF0] p-4 rounded-lg">
                    <li className="flex gap-2">📍 Pickup from Airport/Station</li>
                    <li className="flex gap-2">⛵ <strong>Private Boat Ride</strong></li>
                    <li className="flex gap-2">🏨 Hotel Check-in</li>
                    <li className="flex gap-2">🍽️ Dinner at Hotel</li>
                  </ul>
                </div>
              </div>

              {/* Day 2 */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#8B3A00] text-[#ECB159] flex items-center justify-center font-bold text-xl shadow-lg z-10">2</div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <h3 className="text-xl font-bold text-[#422006] mb-2">Vishwanath Darshan & Departure</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Subah ki shuruwat <strong>Subah-e-Banaras</strong> boat ride se hogi. Phir hum Kashi Vishwanath Corridor aur Annapurna Mandir ke darshan karenge.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 bg-[#FFFBF0] p-4 rounded-lg">
                    <li className="flex gap-2">🌅 Morning Boat Ride</li>
                    <li className="flex gap-2">🛍️ Local Shopping</li>
                    <li className="flex gap-2">🙏 <strong>VIP Darshan Assistance</strong></li>
                    <li className="flex gap-2">✈️ Drop at Airport/Station</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Inclusions */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-[#422006] mb-6 text-lg uppercase tracking-wide">Package Inclusions</h3>
             <div className="grid grid-cols-2 gap-4">
               <div className="flex items-center gap-3 text-sm text-gray-700">
                 <span className="text-green-600 text-xl">✓</span> AC Hotel (Double Sharing)
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-700">
                 <span className="text-green-600 text-xl">✓</span> Sedan Cab (Dzire/Etios)
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-700">
                 <span className="text-green-600 text-xl">✓</span> Breakfast
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-700">
                 <span className="text-green-600 text-xl">✓</span> All Parking & Tolls
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-700">
                 <span className="text-green-600 text-xl">✓</span> Boat Ride Charges
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-700">
                 <span className="text-green-600 text-xl">✓</span> Driver Allowance
               </div>
             </div>
          </section>

        </div>

        {/* --- RIGHT SIDE: STICKY BOOKING CARD --- */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] sticky top-28 border border-gray-100">
            
            <div className="text-center mb-6">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Total Price Per Person</p>
              <div className="flex justify-center items-end gap-3 text-[#8B3A00]">
                 <span className="text-5xl font-serif font-bold">₹4,999</span>
              </div>
              <p className="text-green-600 text-xs font-bold mt-2 bg-green-50 inline-block px-2 py-1 rounded">All Inclusive</p>
            </div>
            
            <hr className="border-gray-100 my-6" />

            <div className="space-y-4">
              <a 
                href="https://wa.me/919876543210?text=I%20am%20interested%20in%20Kashi%20Package"
                target="_blank"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition shadow-lg shadow-green-200"
              >
                <span>💬</span> WhatsApp Booking
              </a>
              
              <button className="w-full flex items-center justify-center gap-3 bg-[#1a1510] text-white py-4 rounded-xl font-bold hover:bg-black transition shadow-lg">
                <span>📞</span> Call Now
              </button>
            </div>

            <div className="mt-6 bg-[#FFFBF0] p-4 rounded-lg text-center">
              <p className="text-[#8B3A00] text-xs font-bold mb-1">Need Customization?</p>
              <p className="text-gray-600 text-xs">Hum aapke hisaab se plan badal sakte hain.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}