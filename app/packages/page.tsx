import Link from "next/link";

export default function Packages() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-800">
      
      {/* --- HEADER (Navbar) --- */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-4xl">🕉️</span>
              <div>
                <h1 className="text-2xl font-bold text-orange-700 leading-tight">SHIV TRAVELS</h1>
              </div>
            </div>
            {/* Back to Home Link */}
            <Link href="/" className="text-orange-600 font-bold hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* --- PACKAGES CONTENT --- */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-orange-600 font-bold tracking-wide uppercase">All Packages</h2>
          <h3 className="text-4xl font-bold text-gray-900 mt-2">Humare Best Tour Packages</h3>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1: Kashi (Working Image) */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="h-64 overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop" 
                 alt="Kashi Ghats" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 text-xs font-bold rounded">BEST SELLER</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Kashi Darshan</h3>
              <p className="text-gray-600 text-sm mb-4">Pickup, Hotel, Ganga Aarti, Boat Ride, Vishwanath Darshan.</p>
              <div className="flex justify-between items-center border-t pt-4">
                <p className="text-2xl font-bold text-orange-600">₹4,999</p>
                <a href="https://wa.me/919876543210?text=Booking%20Kashi" target="_blank" className="border-2 border-orange-600 text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50">Book</a>
              </div>
            </div>
          </div>

          {/* Card 2: Ayodhya (New Image) */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="h-64 overflow-hidden relative">
               <img 
                 src="/Ayodhya.jpg"
                 alt="Ayodhya Temple" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Ayodhya Trip</h3>
              <p className="text-gray-600 text-sm mb-4">Varanasi to Ayodhya Ram Mandir & Hanumangarhi tour.</p>
              <div className="flex justify-between items-center border-t pt-4">
                <p className="text-2xl font-bold text-orange-600">₹8,500</p>
                <a href="https://wa.me/919876543210?text=Booking%20Ayodhya" target="_blank" className="border-2 border-orange-600 text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50">Book</a>
              </div>
            </div>
          </div>

           {/* Card 3: Prayagraj (New Image) */}
           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="h-64 overflow-hidden relative">
               <img 
                 src="/Prayagraj.jpg" 
                 alt="Prayagraj Boats" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Prayagraj Sangam</h3>
              <p className="text-gray-600 text-sm mb-4">Day tour to Triveni Sangam, Hanuman Mandir & Anand Bhawan.</p>
              <div className="flex justify-between items-center border-t pt-4">
                <p className="text-2xl font-bold text-orange-600">₹3,200</p>
                <a href="https://wa.me/919876543210?text=Booking%20Prayagraj" target="_blank" className="border-2 border-orange-600 text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50">Book</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}