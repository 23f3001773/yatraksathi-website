import type { Metadata } from "next";
import "./globals.css";  // <-- यह लाइन सबसे ज़रूरी है!

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
      <body>{children}</body>
    </html>
  );
}