import React from "react";

// Components Imports
import Hero from "./components/Hero";
import Features from "./components/Features";       // Screenshot se liya
import Packages from "./components/Packages";
import OffersGrid from "./components/OffersGrid";   // Screenshot se liya
import Testimonials from "./components/Testimonials"; // Screenshot se liya
import Contact from "./components/Contact";         // Screenshot se liya
import WelcomeModal from "./components/WelcomeModal"; // ✅ Ye naya wala Modal hai

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* --- 1. WELCOME MODAL (POPUP) --- */}
      {/* Ye sabse upar rahega taki page load hote hi check kare */}
      <WelcomeModal />


      {/* --- 2. HERO SECTION --- */}
      {/* Main banner aur introduction */}
      <Hero />


      {/* --- 3. FEATURES SECTION --- */}
      {/* Why choose us? */}
      <Features />


      {/* --- 4. PACKAGES SECTION --- */}
      {/* Tumhare tour packages (Varanasi, Ayodhya etc.) */}
      <Packages />


      {/* --- 5. OFFERS GRID --- */}
      {/* Special discounts ya chhota grid */}
      <OffersGrid />


      {/* --- 6. TESTIMONIALS --- */}
      {/* Customers kya kehte hain */}
      <Testimonials />


      {/* --- 7. CONTACT SECTION --- */}
      {/* Contact form aur map */}
      <Contact />

    </main>
  );
}