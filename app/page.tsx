import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // <-- Import करें

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Packages />
      <Features />
      <Testimonials />
      <Contact />
      
      {/* Footer Section - End of Page */}
      <Footer />

    </main>
  );
}