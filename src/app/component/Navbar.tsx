"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="bg-white w-full h-[83px] flex justify-between items-center px-4 sm:px-[40px] py-[20px] sticky top-0 z-50">
      <div className="w-[165px] h-[48px]">
        <Link href={"/"}>
          <Image
            src="/Logo/4.png"
            width={165}
            height={48}
            alt="logo de studio mazzetta"
          />
        </Link>
      </div>
      <div className="hidden md:flex gap-[30px] items-center">
        <Link href={"/"}>
          <button>Accueil</button>
        </Link>
        <Link href={"/apartement"}>
          <button>Appartement</button>
        </Link>
        <Link href={"/tourism"}>
          <button>Tourisme</button>
        </Link>
        <Link href={"/contact"}>
          <button>Contact</button>
        </Link>
        <Button
          label="Réserver"
          url="https://www.airbnb.fr/rooms/560810265883629716?source_impression_id=p3_1723829287_P3xgAxwBvVUbLd2Q"
          external={true}
        />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-[83px] left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-center py-4">
            <Link href={"/"}>
              <button className="py-2" onClick={toggleMenu}>
                Accueil
              </button>
            </Link>
            <Link href={"/apartement"}>
              <button className="py-2" onClick={toggleMenu}>
                Appartement
              </button>
            </Link>
            <Link href={"/tourism"}>
              <button className="py-2" onClick={toggleMenu}>
                Tourisme
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="py-2" onClick={toggleMenu}>
                Contact
              </button>
            </Link>
            <div className="py-2">
              <Button
                label="Réserver"
                url="https://www.airbnb.fr/rooms/560810265883629716?source_impression_id=p3_1723829287_P3xgAxwBvVUbLd2Q"
                external={true}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
