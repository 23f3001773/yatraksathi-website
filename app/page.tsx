import React from "react";

// Components Imports (Dhyan rakhna path me '.' laga ho)

import Hero from "./components/Hero";
import Services from "./components/Services";
      
import Packages from "./components/Packages";
import Features from "./components/Features";    
import Testimonials from "./components/Testimonials"; 
import Contact from "./components/Contact";         
import WelcomeModal from "./components/WelcomeModal"; 
import Footer from "./components/Footer"; // ✅ Ye line add ki hai
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      <WelcomeModal />

      <Navbar/>

      <Hero />

      <Services />

      <Packages />

      <Features />

      <Testimonials />

      <Contact />

      {/* ✅ Footer wapas aa gaya */}
      <Footer />

    </main>
  );
}