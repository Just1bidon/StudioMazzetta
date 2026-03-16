import Image from "next/image";
import { amita } from "../fonts";
import LocationCard from "../component/LocationCard";
import LocationDetails from "../component/LocationDetails";
import locationsData from "../../data/locations.json";
import activities from "../../data/activites.json";
import ActiviteCard from "../component/ActiviteCard";

interface Activite {
  nom: string;
  description: string;
  photo: string;
  urls?: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
}

interface CategorieActivites {
  nom: string;
  activites: Activite[];
}

export default function Home() {
  const categories = activities.categories as CategorieActivites[];

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

      <div className="mt-64 mb-10 flex flex-col items-center">
        <h1
          className={`${amita.className} text-[38px] sm:text-[64px] mb-8 sm:mb-2 text-white`}
        >
          - Tourisme -
        </h1>
        <p className="text-white max-md:hidden">
          Les lieux et activités inoubliables autour du Studio Mazzetta
        </p>
        <p className="text-white md:hidden">
          Les lieux et activités inoubliables
        </p>
        <p className="text-white md:hidden">autour du Studio Mazzetta</p>
      </div>

      <div className="w-screen overflow-scroll px-7 md:px-[100px] xl:px-[200px]">
        <div className="flex space-x-[25px] xl:space-x-[50px] items-center w-min">
          <LocationCard
            title="Porto-Vecchio"
            isFavorite={false}
            description="Porto-Vecchio, joyau corse, entre mer et montagnes, célèbre pour ses plages de rêve et son centre historique."
            description2="Ville corse, plages paradisiaques et centre historique enchanteur"
            imagePath="/IMG_landscape/PortoVecchioSansBg.png"
          />
          <div className="h-[80px] w-[4px] bg-[#243662]"></div>
          <LocationCard
            title="Bonifacio"
            isFavorite={true}
            description="Une cité perchée au sommet de falaises calcaires surplombant la mer méditerranée."
            description2="Cité sur falaises calcaires, vue imprenable sur Méditerranée"
            imagePath="/IMG_landscape/BonifacioSansBg.png"
          />
          <div className="h-[80px] w-[4px] bg-[#243662]"></div>
          <LocationCard
            title="L'Ospedale"
            isFavorite={false}
            description="Un village situé dans la montagne avec un réservoir magnifique et des forêts."
            description2="Village de montagne avec réservoir paisible et forêts denses"
            imagePath="/IMG_landscape/OspedaleSansBg.png"
          />
          <div className="h-[80px] w-[4px] bg-[#243662]"></div>
          <LocationCard
            title="Plateau du Cuscione"
            isFavorite={false}
            description="Des paysages vastes et des sentiers parfaits pour la randonnée et les amoureux de la nature."
            description2="Paysages vastes, sentiers parfaits pour randonnées et nature sauvage"
            imagePath="/IMG_landscape/CuscionuSansBg.png"
          />
          <div className="h-[80px] w-[4px] bg-[#243662]"></div>
          <LocationCard
            title="Lion de Roccapina"
            isFavorite={false}
            description="Une formation rocheuse en forme de lion offrant des vues spectaculaires."
            description2="Roche en forme de lion, vues majestueuses sur Méditerranée"
            imagePath="/IMG_landscape/RoccapinaSansBg.png"
          />
        </div>
      </div>
      <div className="bg-white max-xl:px-8 xl:w-[1270px] 2xl:w-[1350px] min-h-screen rounded-lg py-16 max-xl:pb-4 mt-[200px] sm:mt-[400px] xl:mt-[200px]">
        <h1 className={`${amita.className} text-2xl md:text-4xl text-center text-black`}>
          Les lieux incontournables
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
          {locationsData.locations.map((location, index) => (
            <LocationDetails
              key={index}
              title={location.title}
              description={location.description}
              description2={location.description2}
              photos={location.photos}
              isReverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1350px] min-h-screen px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-0 py-12 sm:py-16 mt-20 sm:mt-[140px] xl:mt-[200px]">
        <h1 className={`${amita.className} text-[34px] sm:text-4xl text-center text-black`}>
          Les activités
        </h1>
        {categories.map((categorie) => {
          const placeholders = (5 - (categorie.activites.length % 5)) % 5;

          return (
            <div key={categorie.nom} className="mt-10 sm:mt-12">
              <div className="bg-[#243662] w-min max-w-full px-3 py-2 sm:p-2">
                <h2
                  className={`${amita.className} text-[20px] sm:text-2xl text-white whitespace-nowrap`}
                >
                  {categorie.nom}
                </h2>
              </div>
              <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5 sm:gap-4 px-0 py-5 sm:px-2 sm:py-4 lg:px-3 xl:px-0 xl:py-4">
                {categorie.activites.map((activite: Activite, index: number) => (
                  <ActiviteCard
                    key={`${categorie.nom}-${activite.nom}-${index}`}
                    url={activite.photo}
                    nom={activite.nom}
                    description={activite.description}
                    instagram={activite.urls?.instagram}
                    facebook={activite.urls?.facebook}
                    website={activite.urls?.website}
                  />
                ))}
                {/* Ajouter des éléments placeholder pour remplir la ligne si nécessaire */}
                {Array.from({ length: placeholders }).map((_, i: number) => (
                  <div
                    key={`${categorie.nom}-placeholder-${i}`}
                    className="hidden 2xl:block h-0"
                  ></div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
