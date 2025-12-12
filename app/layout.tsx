import type { Metadata } from "next";
import "./globals.css"; 
// 👇 Tumhara WhatsApp Button
import WhatsAppBtn from "./components/WhatsAppBtn";

// 👇 1. Yahan maine SEO aur Social Media ki settings perfect kar di hain
export const metadata: Metadata = {
  title: "Yatra K Sathi - Best Tour & Travel Agency",
  description: "Book affordable tour packages for Varanasi, Ayodhya, Goa, and Char Dham Yatra with Yatra K Sathi. Trusted & Comfort Travel.",
  
  // 👇 Jab WhatsApp/FB par link share karoge to ye dikhega
  openGraph: {
    title: "Yatra K Sathi - Best Tour & Travel Agency",
    description: "Plan your dream yatra to Varanasi, Ayodhya & more with best deals.",
    siteName: "Yatra K Sathi",
    type: "website",
    locale: "en_IN", // Indian English settings
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Main Website Content (Pages) */}
        {children}
        
        {/* 👇 WhatsApp Button har page par dikhega */}
        <WhatsAppBtn />
      </body>
    </html>
  );
}