import Image from "next/image";
import { amita } from "../fonts";
import LocationCard from "../component/LocationCard";
import activities from "../../data/activites.json";

interface Activite {
  categorie: string;
  nom: string;
  description: string;
  photo: string;
  urls?: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
}

interface ActivitesParCategorie {
  [key: string]: Activite[];
}

import ActiviteCard from "../component/ActiviteCard";

export default function Home() {
  const categoriesOrder = [
    "Restaurant",
    "Café / Bar",
    "Cinéma",
    "Croisière",
    "Sensations",
    "Équitation",
    "Snorkeling",
    "Office de Tourisme",
  ];

  // Grouper les activités par catégorie
  const activitesParCategorie: ActivitesParCategorie =
    activities.activites.reduce(
      (acc: ActivitesParCategorie, activite: Activite) => {
        if (!acc[activite.categorie]) {
          acc[activite.categorie] = [];
        }
        acc[activite.categorie].push(activite);
        return acc;
      },
      {}
    );

  // Ordonner les catégories selon l'ordre spécifié
  const categoriesOrdonnees = categoriesOrder.filter(
    (categorie: string) => activitesParCategorie[categorie]
  );

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
            description="Un vaste plateau avec des paysages à couper le souffle et des sentiers de randonnée."
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

      <div className="w-full max-w-[1350px] min-h-screen py-16 mt-[200px]">
        <h1 className={`${amita.className} text-4xl text-center text-black`}>
          Les activités
        </h1>
        {categoriesOrdonnees.map((categorie: string) => (
          <div key={categorie} className="mt-12">
            <div className="bg-[#243662] w-min p-2">
              <h2 className={`${amita.className} text-2xl text-white whitespace-nowrap`}>
                {categorie}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
              {activitesParCategorie[categorie].map(
                (activite: Activite, index: number) => (
                  <ActiviteCard
                    key={index}
                    url={activite.photo}
                    nom={activite.nom}
                    description={activite.description}
                    instagram={activite.urls?.instagram}
                    facebook={activite.urls?.facebook}
                    website={activite.urls?.website}
                  />
                )
              )}
              {/* Ajouter des éléments placeholder pour remplir la ligne si nécessaire */}
              {Array.from({
                length: 5 - (activitesParCategorie[categorie].length % 5),
              }).map((_, i: number) => (
                <div key={`placeholder-${i}`} className="h-0"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

// test branch