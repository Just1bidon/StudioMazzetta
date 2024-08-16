import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <section className="bg-white w-full h-[83px] flex justify-between items-center px-[40px] py-[20px]">
      <div className="w-[165px] h-[48px]">
        <Image src="/4.png" width={165} height={48} alt="logo de rate" />
      </div>
      <div className=" flex gap-[30px]">
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
      </div>
    </section>
  );
}
