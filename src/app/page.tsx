import CardSmall from "./component/CardSmall";
import CardLarge from "./component/CardLarge";
import CardLargeRevert from "./component/CardLargeRevert";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-[250px]">
      <div className="w-[1225px] h-[443px] flex justify-between">
        <CardSmall
          title="Gastronomie"
          imageUrl="/Gastronomie.png"
          description="Savourez les spécialités locales de Porto-Vecchio dans nos restaurants et cafés. Dégustez des produits frais de la mer, des fromages corses, des charcuteries et des vins locaux. Chaque repas est une invitation à découvrir les saveurs uniques de la Corse."
        />
        <CardSmall
          title="Culture"
          imageUrl="/Culture.png"
          description="Savourez les spécialités locales de Porto-Vecchio dans nos restaurants et cafés. Dégustez des produits frais de la mer, des fromages corses, des charcuteries et des vins locaux. Chaque repas est une invitation à découvrir les saveurs uniques de la Corse."
        />
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
