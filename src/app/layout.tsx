"use client";

import "@/ui/globals.css";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";
import localFont from "next/font/local";

const amiko = localFont({
  src: [
    {
      path: "../../public/fonts/Amiko/Amiko-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Amiko/Amiko-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Amiko/Amiko-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-amiko",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={amiko.className}>
      <body className={`${amiko.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
