import Image from "next/image";
import { amita } from "../fonts";
import LocationCard from "../component/LocationCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/IMG_landscape/image00056.jpeg"
          alt="image de l'appartement"
          width={1920}
          height={1080}
          className="object-cover w-full h-full filter brightness-50 blur-sm scale-110"
        />
      </div>

      <div className="mt-64 mb-12 h-min flex flex-col items-center">
        <h1 className={`${amita.className} text-[64px] mb-2 text-white`}>
          - Tourisme -
        </h1>
        <p className="text-white">
          Les lieux et activités inoubliables du Studio Mazzetta
        </p>
      </div>
      <div className="w-screen overflow-scroll px-[200px]">
        <div className="flex space-x-[50px] items-center w-min">
          <LocationCard
            title="Porto-Vecchio"
            isFavorite={false}
            description="La ville La villle La villle La villle La villle La villle La villle La villle La villle La villle."
            imagePath="/IMG_landscape/PortoVecchioSansBg.png"
          />
          <div className="h-[80px] w-[4px] bg-[#243662]"></div>
          <LocationCard
            title="Bonifacio"
            isFavorite={true}
            description="Une cité perchée au sommet de falaises calcaires surplombant la mer méditerranée."
            imagePath="/IMG_landscape/BonifacioSansBg.png"
          />
          <div className="h-[80px] w-[4px] bg-[#243662]"></div>
          <LocationCard
            title="L'Ospedale"
            isFavorite={false}
            description="Un village situé dans la montagne avec un réservoir magnifique et des forêts."
            imagePath="/IMG_landscape/OspedaleSansBg.png"
          />
          <div className="h-[80px] w-[4px] bg-[#243662]"></div>
          <LocationCard
            title="Plateau du Cuscione"
            isFavorite={false}
            description="Des paysages vastes et des sentiers parfaits pour la randonnée et les amoureux de la nature."
            imagePath="/IMG_landscape/CuscionuSansBg.png"
          />
          <div className="h-[80px] w-[4px] bg-[#243662]"></div>
          <LocationCard
            title="Lion de Roccapina"
            isFavorite={false}
            description="Une formation rocheuse en forme de lion offrant des vues spectaculaires."
            imagePath="/IMG_landscape/RoccapinaSansBg.png"
          />
        </div>
      </div>
    </main>
  );
}
