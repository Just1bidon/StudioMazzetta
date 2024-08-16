import CardSmall from "./component/CardSmall";
import CardLarge from "./component/CardLarge";
import { amita } from "@/app/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-[250px]">
      <div className="absolute -z-10">
        <Image
          src="/IMG_3667.jpg"
          alt="image de l'appartement"
          width={1920}
          height={1080}
          className="object-cover"
        />
      </div>
      <div className="mt-24 flex flex-col items-center">
        <h1 className={`${amita.className} text-7xl mb-12 text-white`}>
          - Studio Mazzetta -
        </h1>
        <p>Le studio pour un été inoubliable en corse</p>
      </div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="w-full max-w-[1225px] h-[443px] flex justify-between items-center">
        <CardSmall
          title="Gastronomie"
          imageUrl="/Gastronomie.png"
          description="Savourez les spécialités locales de Porto-Vecchio dans nos restaurants et cafés. Dégustez des produits frais de la mer, des fromages corses, des charcuteries et des vins locaux. Chaque repas est une invitation à découvrir les saveurs uniques de la Corse."
        />
        <div className="w-[40px] h-[4px] bg-[#243662]"></div>
        <CardSmall
          title="Culture"
          imageUrl="/Culture.png"
          description="Savourez les spécialités locales de Porto-Vecchio dans nos restaurants et cafés. Dégustez des produits frais de la mer, des fromages corses, des charcuteries et des vins locaux. Chaque repas est une invitation à découvrir les saveurs uniques de la Corse."
        />
        <div className="w-[40px] h-[4px] bg-[#243662]"></div>
        <CardSmall
          title="Bien être"
          imageUrl="/Bien_etre.png"
          description="Savourez les spécialités locales de Porto-Vecchio dans nos restaurants et cafés. Dégustez des produits frais de la mer, des fromages corses, des charcuteries et des vins locaux. Chaque repas est une invitation à découvrir les saveurs uniques de la Corse."
        />
      </div>

      <div className="w-[1225px] h-min flex flex-col justify-betwee items-center gap-[35px]">
        <CardLarge
          title="L’appartement"
          imageUrl="/IMG_3664.jpg"
          description="Découvrez ce charmant studio de 32m², classé 3 étoiles..."
          buttonLabel="Voir"
          buttonUrl="/apartement"
          external={false}
          reverse={false}
        />
        <div className="w-[80px] h-[4px] bg-[#243662]"></div>
        <CardLarge
          title="Le toursime"
          imageUrl="/PlageToursimeCard.png"
          description="Découvrez ce charmant studio de 32m², classé 3 étoiles..."
          buttonLabel="Voir"
          buttonUrl="/toursim"
          external={false}
          reverse={true}
        />
        <div className="w-[80px] h-[4px] bg-[#243662]"></div>
        <CardLarge
          title="Les paysages"
          imageUrl="/image00056.jpeg"
          description="Découvrez ce charmant studio de 32m², classé 3 étoiles..."
          buttonLabel="Voir"
          buttonUrl="/toursim"
          external={false}
          reverse={false}
        />
      </div>
    </main>
  );
}
