import Image from "next/image";
import { useState } from "react";

type CardProps = {
  valor: boolean;
};

export default function Footer({ valor }: CardProps) {
  const [isInstaHovered, setIsInstaHovered] = useState(false);
  const [isAirbnbHovered, setIsAirbnbHovered] = useState(false);

  const handleIconClick = (url: string) => {
    window.open(url, "_blank"); // Ouvre l'URL dans un nouvel onglet
  };

  return (
    <section
      className={`bg-white w-full ${
        valor ? "h-[260px]" : "h-min"
      } flex flex-col justify-content items-center px-[10px] py-[30px] gap-[30px] bottom-0 z-10`}
    >
      {valor && (
        <div className="w-[300px] h-[77px]">
          <Image
            src="/Logo/4.png"
            width={300}
            height={77}
            alt="Logo du studio mazzetta"
          />
        </div>
      )}
      <section className="flex gap-[20px] items-end">
        <div
          className="w-[25px] h-[25px] cursor-pointer"
          onMouseEnter={() => setIsInstaHovered(true)}
          onMouseLeave={() => setIsInstaHovered(false)}
          onClick={() =>
            handleIconClick("https://www.instagram.com/studio_mazzetta2a/")
          }
        >
          <Image
            src={
              isInstaHovered ? "/icons/Icons_Insta_Colors.svg" : "/icons/Icons_Insta.svg"
            }
            width={25}
            height={25}
            alt="Lien vers le instagram du Studio Mazzetta"
          />
        </div>
        <div
          className="w-[25px] h-[25px] cursor-pointer"
          onMouseEnter={() => setIsAirbnbHovered(true)}
          onMouseLeave={() => setIsAirbnbHovered(false)}
          onClick={() =>
            handleIconClick(
              "https://www.airbnb.fr/rooms/560810265883629716?source_impression_id=p3_1723829287_P3xgAxwBvVUbLd2Q"
            )
          }
        >
          <Image
            src={
              isAirbnbHovered ? "/icons/Icons_AirBnb_Color.svg" : "/icons/Icons_AirBnb.svg"
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
