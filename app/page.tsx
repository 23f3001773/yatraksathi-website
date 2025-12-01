import React from "react";

// Components Imports (Dhyan rakhna path me '.' laga ho)
import Hero from "./components/Hero";
      
import Packages from "./components/Packages";
import Features from "./components/Features";    
import Testimonials from "./components/Testimonials"; 
import Contact from "./components/Contact";         
import WelcomeModal from "./components/WelcomeModal"; 
import Footer from "./components/Footer"; // ✅ Ye line add ki hai

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      <WelcomeModal />

      <Hero />

      

      <Packages />

      <Features />

      <Testimonials />

      <Contact />

      {/* ✅ Footer wapas aa gaya */}
      <Footer />

    </main>
  );
}