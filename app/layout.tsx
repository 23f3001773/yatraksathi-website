import type { Metadata } from "next";
import "./globals.css"; // Ye line zaroori hai taki design (Tailwind) kaam kare
// 👇 1. WhatsApp Button Import kiya
import WhatsAppBtn from "./components/WhatsAppBtn";

export const metadata: Metadata = {
  title: "Yatra Clone",
  description: "Travel Website Clone",
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