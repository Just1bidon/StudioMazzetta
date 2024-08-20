'use client'

import "@/ui/globals.css";
import NavBar from "./component/Navbar";
import { amiko, amita } from "@/app/fonts";
import Footer from "./component/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={amiko.className}>
      <body className={`${amiko.className}`}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
