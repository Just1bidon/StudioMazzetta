import Image from "next/image";
import { amita } from "../fonts";
import LocationCard from "../component/LocationCard";
import LocationDetail from "../component/LocationDetails";

const locations = [
  {
    title: "Porto-Vecchio",
    description:
      'Porto-Vecchio, surnommée la "Cité du Sel", est une destination incontournable en Corse.',
    photos: [
      "/images/porto1.jpg",
      "/images/porto2.jpg",
      "/images/porto3.jpg",
      // Ajoute plus de photos ici
    ],
  },
  {
    title: "Bonifacio",
    description:
      "Bonifacio est une cité perchée au sommet de falaises spectaculaires.",
    photos: [
      "/images/bonifacio1.jpg",
      "/images/bonifacio2.jpg",
      "/images/bonifacio3.jpg",
      // Ajoute plus de photos ici
    ],
  },
  // Ajoute d'autres locations ici
];

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
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Les lieux incontournables
        </h1>
        <div className="grid grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <LocationDetail
              key={index}
              title={location.title}
              description={location.description}
              photos={location.photos}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
