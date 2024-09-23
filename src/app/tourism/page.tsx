import Image from "next/image";
import NavBar from "@/app/component/Navbar";
import { amita } from "../fonts";

export default function Home() {
  return (
    <main className="h-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/IMG_landscape/image00056.jpeg"
          alt="image de l'appartement"
          width={1920}
          height={1080}
          className="object-cover w-full h-full filter brightness-50 blur-sm scale-110"
        />
      </div>

      <div className="mt-64 mb-[150px] flex flex-col items-center">
        <h1 className={`${amita.className} text-[64px] mb-2 text-white`}>
          - Toursime -
        </h1>
        <p className="text-white">Les lieux et activités inoubliables du Studio Mazzetta</p>
      </div>
    </main>
  );
}
