import CardSmall from "./component/CardSmall";
import CardLarge from "./component/CardLarge";
import { amita } from "@/app/fonts";
import Image from "next/image";
import CardQuote from "./component/CardQuote";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-[220px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/IMG_appart/IMG_3667.jpg"
          alt="image de l'appartement"
          width={1920}
          height={1080}
          className="object-cover w-full h-full filter brightness-50 blur-sm scale-110"
        />
      </div>

      <div className="mt-64 mb-20 sm:mb-48 flex flex-col items-center">
        <h1
          className={`${amita.className} text-[38px] sm:text-[64px] mb-8 sm:mb-2 text-white`}
        >
          - Studio Mazzetta -
        </h1>
        <p className="text-white">Le studio pour un été inoubliable en corse</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row justify-between items-center gap-4">
        <CardSmall
          title="Gastronomie"
          imageUrl="/Gastronomie.png"
          description="Savourez les spécialités locales de Porto-Vecchio dans nos restaurants et cafés. Dégustez des produits frais de la mer, des fromages corses, des charcuteries et des vins locaux. Chaque repas est une invitation à découvrir les saveurs uniques de la Corse."
        />
        <div className="max-lg:hidden w-[28px] xl:w-[40px] h-[4px] bg-[#243662]"></div>
        <CardSmall
          title="Culture"
          imageUrl="/Culture.png"
          description="Explorez le riche patrimoine culturel de Porto-Vecchio et ses environs. Visitez la vieille ville, ses fortifications historiques, et découvrez l'histoire fascinante de la région. Participez aux événements et festivals locaux pour une immersion totale dans la culture corse."
        />
        <div className="max-lg:hidden w-[28px] xl:w-[40px] h-[4px] bg-[#243662]"></div>
        <CardSmall
          title="Bien être"
          imageUrl="/Bien_etre.png"
          description="Profitez d'un moment de détente et de bien-être pendant votre séjour. Découvrez les spas et centres de bien-être de Porto-Vecchio, offrant des massages relaxants, des soins du corps et des moments de relaxation. Laissez-vous choyer dans un cadre idyllique, loin du stress quotidien."
        />
      </div>

      <div className="w-full h-min flex flex-col justify-betwee items-center gap-[35px] p-4 md:p-24 xl:p-0">
        <CardLarge
          title="L’appartement"
          imageUrl="/IMG_appart/IMG_3664.jpg"
          description="Découvrez ce charmant studio de 32m², classé 3 étoiles, situé à seulement 1km du centre-ville de Porto-Vecchio. Construit en décembre 2021, il offre une vue magnifique sur la montagne. 
Le logement dispose d'une pièce à vivre lumineuse avec un canapé convertible de haute qualité, une cuisine ouverte entièrement équipée, et une salle de bain moderne avec cabine de douche et lave-linge. Vous pourrez également profiter d'une grande terrasse-loggia de 36m² aménagée avec une table, des chaises, un barbecue et des transats. 
Pour votre confort, le studio est équipé d'une connexion Wifi, d'une TV HD avec Netflix, d'une climatisation réversible, et d'un espace de travail dédié. Une place de stationnement est disponible dans un garage sécurisé. 
Les plages de Santa Giulia et Palombaggia sont accessibles en quelques minutes en voiture. Les draps et le linge de maison sont fournis."
          description2="Studio de 32m², classé 3 étoiles, à 1km du centre de Porto-Vecchio, construit en décembre 2021 avec vue sur la montagne. Pièce à vivre lumineuse avec canapé convertible, cuisine équipée, salle de bain moderne avec lave-linge. Terrasse-loggia de 36m² avec mobilier et barbecue. Wifi, TV HD avec Netflix, climatisation, espace de travail, et garage sécurisé. Plages de Santa Giulia et Palombaggia à proximité. Draps et linge fournis."
          buttonLabel="Voir"
          buttonUrl="/apartement"
          external={false}
          reverse={false}
        />
        <div className="w-[80px] h-[4px] bg-[#243662]"></div>
        <CardLarge
          title="Le toursime"
          imageUrl="/PlageToursimeCard.png"
          description="Lors de votre séjour à Porto-Vecchio, profitez d'une multitude d'activités pour tous les goûts. Savourez un moment convivial dans les divers cafés et bars locaux, ou profitez d'une séance de cinéma au Complexe Galaxy. Explorez la mer avec des croisières offrant des vues imprenables sur les côtes corses. Pour les amateurs de nature, des randonnées équestres à travers des paysages magnifiques sont disponibles. Les restaurants locaux, tels que Da Rocca et Le Bellagio, vous régaleront avec leurs spécialités corses.
Les amateurs de sensations peuvent essayer le jet ski ou faire un tour en hélicoptère.
Découvrez également les magnifiques plages de Santa Giulia et Palombaggia, réputées pour leur sable fin et leurs eaux cristallines, idéales pour la baignade et le snorkeling."
          description2="À Porto-Vecchio, profitez de cafés, bars, et du cinéma Galaxy. Explorez les côtes corses en croisière, faites des randonnées équestres, ou savourez la cuisine locale chez Da Rocca et Le Bellagio. Pour les sensations fortes, essayez le jet ski ou un tour en hélicoptère. Les plages de Santa Giulia et Palombaggia vous attendent pour la baignade et le snorkeling."
          buttonLabel="Voir"
          buttonUrl="/tourism"
          external={false}
          reverse={true}
        />
        <div className="w-[80px] h-[4px] bg-[#243662]"></div>
        <CardLarge
          title="Les paysages"
          imageUrl="/IMG_landscape/Porto-Vecchio/PortoVecchio6.jpeg"
          description="Découvrez les merveilles de la région autour de Porto-Vecchio. Commencez par Bonifacio, connue pour ses falaises de calcaire blanc et ses vues spectaculaires sur la Méditerranée. Ensuite, explorez le Lion de Roccapina, une formation rocheuse unique en forme de lion couché. Pour une escapade en montagne, rendez-vous à Ospedale avec ses forêts de pins et son lac enchanteur.
Le plateau du Cuscionu offre des prairies verdoyantes et des panoramas à couper le souffle. Porto-Vecchio elle-même séduit par ses plages de sable fin et son centre-ville animé. Enfin, ne manquez pas Saint-Lucie de      Porto-Vecchio, avec ses plages idylliques comme Pinarellu.
Chaque lieu vous promet des découvertes inoubliables."
          description2="Explorez les merveilles autour de Porto-Vecchio : Bonifacio et ses falaises, le Lion de Roccapina, Ospedale et ses forêts, le plateau du Cuscionu, et Saint-Lucie de Porto-Vecchio avec Pinarellu. Plages, nature et panoramas à couper le souffle vous attendent."
          buttonLabel="Voir"
          buttonUrl="/tourism"
          external={false}
          reverse={false}
        />
      </div>
      <div className="bg-[#243662] w-full h-min py-[50px] mb-[175px] flex items-center justify-center">
        <CardQuote
          title="Goncalves Amélie"
          subtitle="Propriétaire"
          quote="C’est le temps que tu as perdu pour ta rose qui fait ta rose si importante"
          phone="06 22 54 32 81"
          email="studio.mazzetta2a@gmail.com"
          photoUrl="/Proprietaire.jpeg"
          author="Le Petit Prince"
        />
      </div>
    </main>
  );
}
