import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar को import करें

export const metadata: Metadata = {
  title: "Yatra Ke Saathi",
  description: "Travel with comfort and trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts & FontAwesome Links */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
      </head>
      <body>
        {/* Navbar को सबसे ऊपर रखें */}
        <Navbar />
        {/* बाकी का पेज कंटेंट इसके नीचे आएगा */}
        {children}
      </body>
    </html>
  );
}