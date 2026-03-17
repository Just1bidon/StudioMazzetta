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
        <p className="text-white">Le studio pour votre été en corse</p>
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
          description={`Un studio 3 étoiles de 32 m², à seulement 1 km du centre de Porto-Vecchio, pensé pour un séjour simple, élégant et confortable.\n\nProfitez d'une pièce de vie lumineuse, d'une cuisine ouverte toute équipée, d'une salle de bain moderne et d'une grande terrasse de 36 m² pour vos apéritifs et vos soirées d'été.\n\nWifi, Netflix, climatisation réversible, espace de travail et garage sécurisé complètent l'expérience, avec Santa Giulia et Palombaggia à quelques minutes seulement.`}
          description2={`Un studio 3 étoiles à 1 km du centre de Porto-Vecchio, avec vue montagne et ambiance soignée.\n\nGrande terrasse-loggia, cuisine équipée, climatisation, Wifi et plages mythiques à quelques minutes.`}
          buttonLabel="Voir"
          buttonUrl="/apartement"
          external={false}
          reverse={false}
        />
        <div className="w-[80px] h-[4px] bg-[#243662]"></div>
        <CardLarge
          title="Le tourisme"
          imageUrl="/PlageToursimeCard.png"
          description={`Autour de Porto-Vecchio, chaque journée peut changer de rythme : plages iconiques, bonnes adresses, sorties en mer et activités pour tous les styles de séjour.\n\nOffrez-vous un déjeuner en terrasse, une croisière sur les côtes corses, une parenthèse nature à cheval ou une dose d'adrénaline en jet ski.\n\nEntre Santa Giulia, Palombaggia et les meilleures tables locales, tout est réuni pour un séjour vivant, solaire et mémorable.`}
          description2={`À Porto-Vecchio, alternez plages de rêve, sorties en mer, bonnes tables et activités nature.\n\nSanta Giulia, Palombaggia et les meilleures adresses locales vous attendent à quelques minutes.`}
          buttonLabel="Voir"
          buttonUrl="/tourism"
          external={false}
          reverse={true}
        />
        <div className="w-[80px] h-[4px] bg-[#243662]"></div>
        <CardLarge
          title="Les paysages"
          imageUrl="/IMG_landscape/Porto-Vecchio/PortoVecchio6.jpeg"
          description={`Autour de Porto-Vecchio, la Corse du Sud dévoile des décors spectaculaires entre mer turquoise, reliefs sauvages et villages de caractère.\n\nAdmirez les falaises de Bonifacio, le Lion de Roccapina, les forêts de l'Ospedale et les grands panoramas du plateau du Cuscionu.\n\nAjoutez Saint-Lucie, Pinarellu et les plus belles plages du secteur, et vous obtenez un terrain de découvertes aussi apaisant qu'impressionnant.`}
          description2={`Entre Bonifacio, Roccapina, l'Ospedale, le Cuscionu et Saint-Lucie, les plus beaux paysages du sud se découvrent tout autour de Porto-Vecchio.\n\nMer, montagne et plages iconiques composent un décor inoubliable.`}
          buttonLabel="Voir"
          buttonUrl="/tourism"
          external={false}
          reverse={false}
        />
      </div>
      <div className="bg-[#243662] w-full h-min py-[50px] mb-[175px] flex items-center justify-center">
        <CardQuote
          title="Lagny Amélie"
          subtitle="Propriétaire"
          quote="C’est le temps que tu as perdu pour ta rose qui fait ta rose si importante"
          quote2="C’est le temps que tu as perdu pour ta rose qui fait ta rose si importante"
          phone="06 22 54 32 81"
          email="studio.mazzetta2a@gmail.com"
          photoUrl="/Proprietaire.jpeg"
          author="Le Petit Prince"
        />
      </div>
    </main>
  );
}
