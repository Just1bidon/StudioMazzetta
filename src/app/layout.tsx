'use client';

import "@/ui/globals.css";
import NavBar from "./component/Navbar";
import { amiko } from "@/app/fonts";
import Footer from "./component/Footer";
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';
  const footerValor = !isContactPage;

  return (
    <html lang="fr" className={amiko.className}>
      <body className={`min-h-screen flex flex-col ${amiko.className}`}>
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer valor={footerValor} />
      </body>
    </html>
  );
}
