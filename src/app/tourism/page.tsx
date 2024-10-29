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
    ],
  },
  {
    title: "L'Ospedale",
    description: `Situé à une courte distance de Porto-Vecchio, l'Ospedale est un village pittoresque niché au cœur des montagnes corses. Ce lieu est célèbre pour ses forêts denses de pins laricio et de châtaigniers, offrant une oasis de fraîcheur et de tranquillité.
    Le lac de l'Ospedale, un réservoir artificiel, est entouré de sentiers de randonnée qui permettent aux visiteurs de découvrir la beauté naturelle de la région. Les chemins mènent à des points de vue spectaculaires sur la baie de Porto-Vecchio et les montagnes environnantes.
    C'est un endroit idéal pour les amoureux de la nature et les randonneurs, mais aussi pour ceux qui cherchent à se détendre dans un cadre paisible.`,
    photos: [
      "/IMG_landscape/Ospedale/Ospedale1.JPG",
      "/IMG_landscape/Ospedale/Ospedale2.JPG",
      "/IMG_landscape/Ospedale/Ospedale3.JPG",
      "/IMG_landscape/Ospedale/Ospedale4.jpg",
      "/IMG_landscape/Ospedale/Ospedale5.jpg",
      "/IMG_landscape/Ospedale/Ospedale6.jpg",
      "/IMG_landscape/Ospedale/Ospedale7.JPG",
    ],
  },
  {
    title: "Plateau du Cuscionu",
    description: `Le plateau du Cuscionu, situé dans le massif de l'Alta Rocca, est un vaste espace naturel d'une beauté sauvage et préservée. Couvrant des hectares de prairies verdoyantes, de ruisseaux clairs et de formations rocheuses étonnantes, ce plateau est une destination prisée pour les amateurs de randonnée.
    En explorant ce site, vous pourrez observer des chevaux et des vaches en liberté, ajoutant une touche authentique à votre aventure. Les sentiers bien balisés vous guideront à travers des paysages variés, allant des étendues herbeuses aux forêts de pins.
    Le plateau du Cuscionu est également un lieu de rencontre avec la culture pastorale traditionnelle corse, où les bergers mènent leurs troupeaux comme ils le font depuis des siècles.`,
    photos: [
      "/IMG_landscape/Plateau_du_Cuscionu/Cuscionu1.jpeg",
      "/IMG_landscape/Plateau_du_Cuscionu/Cuscionu2.jpeg",
      "/IMG_landscape/Plateau_du_Cuscionu/Cuscionu5.jpeg",
      "/IMG_landscape/Plateau_du_Cuscionu/Cuscionu6.jpeg",
      "/IMG_landscape/Plateau_du_Cuscionu/Cuscionu7.jpeg",
      "/IMG_landscape/Plateau_du_Cuscionu/Cuscionu8.jpeg",
      "/IMG_landscape/Plateau_du_Cuscionu/Cuscionu9.jpeg",
      "/IMG_landscape/Plateau_du_Cuscionu/Cuscionu10.jpeg",
    ],
  },
  {
    title: "Lion de Roccapina",
    description: `Le Lion de Roccapina est une formation rocheuse emblématique située près de Sartène, dans le sud de la Corse. Cette structure naturelle, façonnée par l'érosion, ressemble étonnamment à un lion couché, surveillant majestueusement la côte.
    Pour atteindre ce site spectaculaire, les visiteurs doivent emprunter un sentier de randonnée qui traverse des paysages sauvages et préservés. Une fois au sommet, la vue panoramique sur la mer Méditerranée et les plages de sable fin en contrebas est tout simplement époustouflante.
    La plage de Roccapina, avec ses eaux turquoise et son sable blanc, est une invitation à la baignade et à la détente. Le Lion de Roccapina est également entouré de légendes locales, ajoutant une dimension mystique à ce lieu déjà impressionnant.`,
    photos: [
      "/IMG_landscape/Lion_de_Roccapina/Roccapina1.jpeg",
      "/IMG_landscape/Lion_de_Roccapina/Roccapina2.jpeg",
      "/IMG_landscape/Lion_de_Roccapina/Roccapina3.jpeg",
      "/IMG_landscape/Lion_de_Roccapina/Roccapina4.jpeg",
      "/IMG_landscape/Lion_de_Roccapina/Roccapina5.jpeg",
      "/IMG_landscape/Lion_de_Roccapina/Roccapina6.jpeg",
      "/IMG_landscape/Lion_de_Roccapina/Roccapina7.HEIC",
    ],
  },
  {
    title: "Saint-Lucie",
    description: `Saint-Lucie de Porto-Vecchio, souvent appelée simplement Saint-Lucie, est un village pittoresque situé au nord de Porto-Vecchio. Ce lieu est un véritable joyau pour les visiteurs en quête de tranquillité et de beauté naturelle.
    Les plages de Pinarellu et Fautéa, situées à proximité, sont parmi les plus belles de Corse, offrant des eaux cristallines et des sables doux et dorés. Pinarellu, avec sa baie abritée et son îlot couronné d'une tour génoise, est parfait pour la baignade, le snorkeling et les sports nautiques.`,
    photos: [
      "/IMG_landscape/Saint-Lucie/SaintLucie1.HEIC",
      "/IMG_landscape/Saint-Lucie/SaintLucie2.HEIC",
      "/IMG_landscape/Saint-Lucie/SaintLucie3.jpeg",
      "/IMG_landscape/Saint-Lucie/SaintLucie4.JPG",
      "/IMG_landscape/Saint-Lucie/SaintLucie5.JPG",
      "/IMG_landscape/Saint-Lucie/SaintLucie6.JPG",
      "/IMG_landscape/Saint-Lucie/SaintLucie7.JPG",
      "/IMG_landscape/Saint-Lucie/SaintLucie8.JPG",
      "/IMG_landscape/Saint-Lucie/SaintLucie9.JPG",
    ],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
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
      <div className="bg-white w-full max-w-[1350px] min-h-screen py-16 mt-[200px]">
        <h1
          className={`${amita.className} text-4xl text-center text-black`}
        >
          Les lieux incontournables
        </h1>
        <div className="grid grid-cols-2">
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
