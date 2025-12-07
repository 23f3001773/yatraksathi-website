import React from 'react';
// Imports (रास्ता सही कर दिया है)
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppBtn from '../components/WhatsAppBtn';

const GoldenTriangle = () => {
  return (
    <>
      <Navbar />

      {/* --- Main Background Container --- */}
      <div className="bg-gray-50 min-h-screen font-sans">
        
        {/* --- Header / Breadcrumb Section --- */}
        <div className="bg-white shadow-sm py-4">
          <div className="max-w-[1200px] mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Golden Triangle: Varanasi, Ayodhya & Prayagraj
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Home <span className="mx-1">/</span> Tour Packages <span className="mx-1">/</span> Golden Triangle
            </p>
          </div>
        </div>

        {/* --- Main Content Grid (Left Content + Right Sidebar) --- */}
        <div className="max-w-[1200px] mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ================= LEFT COLUMN (Details) ================= */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Hero Image */}
            <div className="rounded-xl overflow-hidden shadow-md h-[300px] md:h-[400px] relative">
              <img 
                src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop" 
                alt="Varanasi Ayodhya Tour" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-6">
                <span className="bg-[#ff9933] text-white px-3 py-1 rounded text-sm font-bold">
                  4 Nights / 5 Days
                </span>
              </div>
            </div>

            {/* 2. Overview Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200">
                Tour Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Experience the spiritual essence of India with our <strong>Golden Triangle Pilgrimage</strong>. 
                This journey takes you to the oldest living city <strong>Varanasi (Kashi)</strong>, the holy confluence of rivers in <strong>Prayagraj</strong>, 
                and the birthplace of Lord Rama, <strong>Ayodhya</strong>.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Badge icon="📍" text="Varanasi Start" />
                <Badge icon="🏁" text="Ayodhya/Varanasi End" />
                <Badge icon="🚗" text="Private Car" />
                <Badge icon="🏨" text="3/4 Star Hotels" />
              </div>
            </div>

            {/* 3. Itinerary Section (Timeline Style) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2 border-gray-200">
                Itinerary (Day by Day)
              </h2>
              
              <div className="space-y-6 border-l-2 border-[#ff9933] ml-3 pl-6 relative">
                <TimelineItem day="Day 01" title="Arrival in Varanasi - Ganga Aarti">
                  Pick up from Varanasi Airport/Station. Check-in to hotel. Evening witness the mesmerizing **Ganga Aarti** at Dashashwamedh Ghat. Night stay in Varanasi.
                </TimelineItem>
                
                <TimelineItem day="Day 02" title="Kashi Vishwanath & Sarnath">
                  Early morning boat ride (Subah-e-Banaras). Visit **Kashi Vishwanath Temple**, Annapurna, Vishalakshi. Later visit **Sarnath** (Buddha's first sermon). Night stay in Varanasi.
                </TimelineItem>

                <TimelineItem day="Day 03" title="Varanasi to Prayagraj to Ayodhya">
                  Drive to Prayagraj (3 hrs). Holy dip at **Triveni Sangam**. Visit Hanuman Temple & Anand Bhawan. Drive to Ayodhya. Check-in.
                </TimelineItem>

                <TimelineItem day="Day 04" title="Ayodhya Ram Janmabhoomi">
                  Darshan at the grand **Ram Mandir**. Visit Hanuman Garhi, Kanak Bhawan, and Saryu River. Evening free for leisure.
                </TimelineItem>

                <TimelineItem day="Day 05" title="Departure">
                  Breakfast and Check-out. Drop at Ayodhya Airport/Railway Station OR drive back to Varanasi for drop. Tour Ends.
                </TimelineItem>
              </div>
            </div>

            {/* 4. Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Included */}
               <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                  <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                    <span className="bg-green-100 p-1 rounded-full text-xs">✔</span> Inclusions
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2"><span>✅</span> AC Vehicle for transfers</li>
                    <li className="flex gap-2"><span>✅</span> Hotel (Twin Sharing)</li>
                    <li className="flex gap-2"><span>✅</span> Daily Breakfast</li>
                    <li className="flex gap-2"><span>✅</span> Toll, Parking, Driver</li>
                  </ul>
               </div>

               {/* Excluded */}
               <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                  <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                    <span className="bg-red-100 p-1 rounded-full text-xs">✖</span> Exclusions
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2"><span>❌</span> Flight/Train Tickets</li>
                    <li className="flex gap-2"><span>❌</span> Lunch & Dinner</li>
                    <li className="flex gap-2"><span>❌</span> Monument Entry Fees</li>
                    <li className="flex gap-2"><span>❌</span> 5% GST</li>
                  </ul>
               </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (Sticky Sidebar) ================= */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 sticky top-24">
              
              {/* Price Tag */}
              <div className="text-center mb-6">
                <p className="text-gray-500 text-sm">Starting from</p>
                <p className="text-3xl font-bold text-[#ea2330]">₹8,500 <span className="text-sm text-gray-500 font-normal">/person</span></p>
              </div>

              {/* Enquiry Form */}
              <h3 className="font-bold text-lg mb-4 text-center">Book This Tour</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Name</label>
                  <input type="text" placeholder="Enter Full Name" className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#ea2330]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#ea2330]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Travel Date</label>
                  <input type="date" className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#ea2330]" />
                </div>
                <button className="w-full bg-[#ea2330] hover:bg-red-700 text-white font-bold py-3 rounded transition-colors">
                  Send Enquiry
                </button>
              </form>

              {/* Direct Contact Buttons */}
              <div className="mt-6 space-y-3">
                 <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-xs">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                 </div>
                 
                 <a href="tel:+919999999999" className="flex items-center justify-center gap-2 w-full border border-gray-800 text-gray-800 py-2 rounded font-medium hover:bg-gray-50">
                    📞 Call Now
                 </a>
                 <a href="https://wa.me/919999999999" className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-2 rounded font-medium hover:bg-green-600">
                    💬 WhatsApp
                 </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      <WhatsAppBtn />
      <Footer />
    </>
  );
};

// --- Helper Components for Clean Code ---

// 1. Badge Component (Overview icons)
const Badge = ({ icon, text }: { icon: string, text: string }) => (
  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 flex items-center gap-1">
    {icon} {text}
  </span>
);

// 2. Timeline Item Component (For Itinerary)
const TimelineItem = ({ day, title, children }: { day: string, title: string, children: React.ReactNode }) => (
  <div className="relative mb-8 last:mb-0">
    {/* Dot on the line */}
    <div className="absolute -left-[33px] top-1 bg-[#ff9933] w-4 h-4 rounded-full border-2 border-white shadow-sm"></div>
    
    <div className="bg-gray-50 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
      <h4 className="text-[#ff9933] font-bold text-sm uppercase mb-1">{day}</h4>
      <h3 className="font-bold text-gray-800 text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {children}
      </p>
    </div>
  </div>
);

export default GoldenTriangle;