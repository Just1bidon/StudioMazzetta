import Image from "next/image";
import { amita } from "../fonts";
import LocationCard from "../component/LocationCard";
import LocationDetails from "../component/LocationDetails";

const locations: { title: string; description: string; photos: string[] }[] = [
  {
    title: "Porto-Vecchio",
    description: `Porto-Vecchio, surnommée la "Cité du Sel" en raison de ses marais salants historiques, est une destination touristique incontournable en Corse du Sud. Cette ville allie à merveille tradition et modernité, avec son centre historique pittoresque et ses infrastructures touristiques modernes.
La vieille ville, perchée sur une colline, est un labyrinthe de ruelles étroites bordées de maisons en pierre, de boutiques artisanales et de cafés animés. Les fortifications génoises offrent des vues panoramiques spectaculaires sur la baie et les montagnes environnantes.
Porto-Vecchio est également renommée pour ses plages paradisiaques, comme Santa Giulia et Palombaggia, qui figurent parmi les plus belles de la Méditerranée. Le port de plaisance, animé de jour comme de nuit, est le point de départ idéal pour des excursions en bateau vers les îles Lavezzi et d'autres sites côtiers magnifiques.`,
    photos: [
      "/IMG_landscape/Porto-Vecchio/PortoVecchio1.jpeg",
      "/IMG_landscape/Porto-Vecchio/PortoVecchio2.jpeg",
      "/IMG_landscape/Porto-Vecchio/PortoVecchio3.jpeg",
      "/IMG_landscape/Porto-Vecchio/PortoVecchio4.jpeg",
      "/IMG_landscape/Porto-Vecchio/PortoVecchio5.jpeg",
      "/IMG_landscape/Porto-Vecchio/PortoVecchio6.jpeg",
      "/IMG_landscape/Porto-Vecchio/PortoVecchio7.jpeg",
      "/IMG_landscape/Porto-Vecchio/PortoVecchio8.jpeg",
      "/IMG_landscape/Porto-Vecchio/PortoVecchio9.jpg",
      "/IMG_landscape/Porto-Vecchio/PortoVecchio10.JPG",
      "/IMG_landscape/Porto-Vecchio/PortoVecchio11.JPG",
    ],
  },
  {
    title: "Bonifacio",
    description: `Perchée sur des falaises de calcaire blanc, Bonifacio est l'une des villes les plus spectaculaires de Corse. Sa citadelle médiévale, avec ses remparts imposants et ses ruelles étroites, semble flotter au-dessus de la mer Méditerranée.
En vous promenant dans la vieille ville, vous découvrirez des églises historiques, des maisons anciennes et des points de vue époustouflants sur les falaises et les eaux turquoise en contrebas. Le port de Bonifacio, situé dans une profonde crique naturelle, est un lieu animé où les yachts de luxe côtoient les bateaux de pêche traditionnels.
Depuis le port, vous pouvez partir en excursion vers les grottes marines et les falaises, qui offrent des paysages à couper le souffle. Bonifacio est également un point de départ idéal pour explorer les îles Lavezzi, un archipel de petites îles granitiques aux plages idylliques et aux eaux cristallines.
Avec son patrimoine historique riche et ses paysages naturels époustouflants, Bonifacio est une destination incontournable pour les voyageurs en Corse.`,
    photos: [
      "/IMG_landscape/Bonifacio/Bonifacio1.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio2.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio3.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio4.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio5.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio6.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio7.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio8.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio9.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio10.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio11.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio12.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio13.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio14.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio15.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio16.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio17.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio18.jpeg",
      "/IMG_landscape/Bonifacio/Bonifacio19.jpeg",
    ],
  },
  // Ajoute d'autres locations ici
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/IMG_landscape/Porto-Vecchio/PortoVecchio6.jpeg"
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
      <div className="bg-white w-full max-w-[1350px] min-h-screen py-12 mt-[200px]">
        <h1 className="text-4xl font-extrabold text-center mb-16 text-gray-800">
          Les lieux incontournables
        </h1>
        <div className="grid-cols-2">
          {locations.map((location, index) => (
            <LocationDetails
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
