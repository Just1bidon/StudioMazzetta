import Image from "next/image";
import { useState } from "react";

type CardProps = {
  valor: boolean;
};

export default function Footer({ valor }: CardProps) {
  const [isInstaHovered, setIsInstaHovered] = useState(false);
  const [isAirbnbHovered, setIsAirbnbHovered] = useState(false);

  return (
    <section
      className="bg-white w-full ${
        valor ? 'h-[260px]' : 'h-min'
      }  flex flex-col justify-content items-center px-[10px] py-[30px] gap-[30px] bottom-0 z-10"
    >
      {valor && (
        <div className="w-[300px] h-[77px]">
          <Image
            src="/4.png"
            width={300}
            height={77}
            alt="Logo du studio mazzetta"
          />
        </div>
      )}
      <section className="flex gap-[20px] items-end">
        <div
          className="w-[25px] h-[25px]"
          onMouseEnter={() => setIsInstaHovered(true)}
          onMouseLeave={() => setIsInstaHovered(false)}
        >
          <Image
            src={
              isInstaHovered ? "/Icons_Insta_Colors.svg" : "/Icons_Insta.svg"
            }
            width={25}
            height={25}
            alt="Lien vers le instagram du Studio Mazzetta"
          />
        </div>
        <div
          className="w-[25px] h-[25px]"
          onMouseEnter={() => setIsAirbnbHovered(true)}
          onMouseLeave={() => setIsAirbnbHovered(false)}
        >
          <Image
            src={
              isAirbnbHovered ? "/Icons_AirBnb_Color.svg" : "/Icons_AirBnb.svg"
            }
            width={25}
            height={25}
            alt="Lien vers le Airbnb du Studio Mazzetta"
          />
        </div>
      </section>
      <p>Studio Mazzetta - Conception Goncalves Baptiste</p>
    </section>
  );
}
