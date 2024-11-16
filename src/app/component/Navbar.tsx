import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function NavBar() {
  return (
    <section className="bg-white w-full h-[83px] flex justify-between items-center px-[40px] py-[20px] sticky top-0 z-50">
      <div className="w-[165px] h-[48px]">
        <Image src="/Logo/4.png" width={165} height={48} alt="logo de studio mazzetta" />
      </div>
      <div className="flex gap-[30px] items-center">
        <Link href={"/"}>
          <button>Accueil</button>
        </Link>
        <Link href={"/apartement"}>
          <button>Appartement</button>
        </Link>
        <Link href={"/tourism"}>
          <button>Toursime</button>
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
    </section>
  );
}
