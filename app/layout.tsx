import type { Metadata } from "next";
import "./globals.css"; // Ye line zaroori hai taki design (Tailwind) kaam kare
// 👇 1. WhatsApp Button Import kiya
import WhatsAppBtn from "./components/WhatsAppBtn";

// 👇 Yahan maine Title aur Description change kar diya hai
export const metadata: Metadata = {
  title: "Yatra K Sathi - Best Tour & Travel Agency",
  description: "Book affordable tour packages for Varanasi, Ayodhya, Goa, and Char Dham Yatra with Yatra K Sathi. Trusted & Comfort Travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Main Website Content */}
        {children}
        
        {/* 👇 2. WhatsApp Button yahan lagaya taki har page par dikhe */}
        <WhatsAppBtn />
      </body>
    </html>
  );
}