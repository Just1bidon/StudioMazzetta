"use client";

import Image from "next/image";
import { amita } from "../fonts";
import CardQuote from "../component/CardQuote";
import EquipmentCard from "../component/CardEquipement";
import CardInfos from "../component/CardInfos+Photos";
import CheckItem from "../component/CheckItem";
import Button from "../component/Button";

export default function Home() {
  // definition des variables
  const equipmentList = [
    {
      title: "WIFI",
      iconUrl: "/icons/wifi-svgrepo-com.svg", // Icône Wi-Fi
      description: "Vitesse du réseau wifi : 12 Mbps",
      subDescription: "(Vérifié par un test de débit)",
    },
    {
      title: "Sèche-cheveux",
      iconUrl: "/icons/hair-dryer-dryer-svgrepo-com.svg", // Icône sèche-cheveux
      description: "Sèche-cheveux dans la salle de bain",
    },
    {
      title: "Lave-linge",
      iconUrl: "/icons/laundry-svgrepo-com.svg", // Icône lave-linge
      description: "Lave-linge (Gratuit) dans le logement",
    },
    {
      title: "Parking",
      iconUrl: "/icons/parking-svgrepo-com.svg", // Icône parking
      description: "Stationnement gratuit dans un garage sur place : 1 place",
    },
    {
      title: "Cuisine",
      iconUrl: "/icons/meal-svgrepo-com.svg", // Icône cuisine
      description: "Réfrigérateur, congélateur, micro-ondes, et autre ...",
    },
    {
      title: "Climatisation",
      iconUrl: "/icons/ice-svgrepo-com.svg", // Icône climatisation
      description: "Climatisation centrale dans tout l’appartement",
    },
    {
      title: "TV",
      iconUrl: "/icons/tv-svgrepo-com.svg", // Icône TV
      description: "TV HD avec Netflix et autres chaînes",
    },
    {
      title: "Espace de travail",
      iconUrl: "/icons/pc3-o-svgrepo-com.svg", // Icône espace de travail
      description: "Espace de travail dédié",
      subDescription: "(Dans un espace commun)",
    },
    {
      title: "Montagne",
      iconUrl: "/icons/mountain-outdoor-landscape-svgrepo-com.svg", // Icône vue sur la montagne
      description: "Vue sur la montagne depuis la terrasse",
    },
  ];

  const espaceDeViePhotos = [
    "/IMG_appart/IMG_3664.jpg",
    "/IMG_appart/IMG_3666.jpg",
    "/IMG_appart/IMG_3671.jpg",
    "/IMG_appart/IMG_3667.jpg",
    "/IMG_appart/IMG_3675.jpg",
    "/IMG_appart/IMG_3674.jpg",
    "/IMG_appart/IMG_3670.jpg",
    "/IMG_appart/IMG_3673.jpg",
  ];

  const cuisinePhotos = [
    "/IMG_appart/IMG_3669.jpg",
    "/IMG_appart/IMG_3677.jpg",
    "/IMG_appart/IMG_3676.jpg",
  ];

  const salleDeBainPhotos = ["/IMG_appart/IMG_3691.jpg"];

  const exterieurPhotos = [
    "/IMG_appart/IMG_4196.jpg",
    "/IMG_appart/IMG_4197.jpg",
    "/IMG_appart/IMG_4198.jpg",
    "/IMG_appart/IMG_3679.jpg",
    "/IMG_appart/IMG_3673.jpg",
    "/IMG_appart/IMG_4199.jpg",
  ];

  const espaceChambrePhotos = [
    "/IMG_appart/IMG_3686.jpg",
    "/IMG_appart/IMG_3686.jpg",
  ];

  const items = [
    <>
      Capacités maximales de <strong>2 personnes</strong>.
    </>,
    <>
      <strong>Forfait ménage</strong> obligatoire de 50€, à régler en espèce le
      jour de votre arrivée.
    </>,
    <>
      <strong>Véhicule</strong> recommandé, mais possibilité de rayonner à pied
      ou en <strong>navette</strong> électrique et <strong>gratuite</strong>{" "}
      dans le cœur de ville de <strong>Porto-Vecchio</strong>, le port de
      plaisance et la partie basse de la ville.
    </>,
    <>
      À votre disposition : étendoir à linge, aspirateur balai, glacière, pains
      de glaces, défroisseur vapeur et cabas pour les courses.
    </>,
    <>
      Prestations Incluses : <strong>linge de maison</strong> (draps, 1 grande +
      1 petite serviette par personne, tapis de bain et torchons) et taxes de
      séjour.
    </>,
    <>
      Puis un <strong>sac de plage</strong> contenant 2 serviettes et un
      parasol.
    </>,
    <>
      Prestation Optionnelle : (sur pre-réservation à régler sur place 10€){" "}
      <strong>2 masques Easybreath</strong>.
    </>,
  ];

  return (
    <main className="flex flex-col items-center min-h-screen gap-[190px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/IMG_appart/IMG_3666.jpg"
          alt="image de l'appartement"
          width={1920}
          height={1080}
          className="object-cover w-full h-full filter brightness-50 blur-sm scale-110"
        />
      </div>

      <div className="mt-64 mb-[150px] flex flex-col items-center">
        <h1 className={`${amita.className} text-[64px] mb-2 text-white`}>
          - L’appartement -
        </h1>
        <p className="text-white">Studio Mazzetta</p>
      </div>

      <div className="bg-[#243662] w-full h-min py-[50px] flex items-center justify-center">
        <CardQuote
          title="Le Studio Mazzetta"
          subtitle="Le studio de vos vacances"
          quote="Bienvenue dans notre charmant studio de 32m², classé 3 étoiles, idéalement situé à seulement 1 km du centre-ville de Porto-Vecchio.
Construit en décembre 2021, ce logement moderne et climatisé offre tout le confort nécessaire pour un séjour agréable. Vous profiterez d'une vue imprenable sur les montagnes environnantes et serez à proximité des magnifiques plages de Santa Giulia et Palombaggia, accessibles en quelques minutes en voiture.
Avec un emplacement pratique à 2,2 km du port de commerce, 21 km de l'aéroport de Figari et 27 km de Bonifacio, notre studio est le point de départ parfait pour explorer la beauté de la Corse."
          // phone="06 22 54 32 81"
          // email="studio.mazzetta2a@gmail.com"
          // photoUrl="/Proprietaire.jpeg"
          // author="Le Petit Prince"
        />
      </div>
      <div>
        <p className={`${amita.className} text-[32px] mb-8 p-4`}>
          Equipement de l’appartement
        </p>
        <div className="max-w-[1225px] flex flex-wrap justify-center gap-6">
          {equipmentList.map((equipment, index) => (
            <EquipmentCard
              key={index}
              title={equipment.title}
              iconUrl={equipment.iconUrl}
              description={equipment.description}
              subDescription={equipment.subDescription}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center bg-white shadow-md w-[1225px] gap-[35px] py-[30px] rounded-[8px]">
        {/* Espace de vie */}
        <CardInfos
          title="Espace de vie"
          description="Climatisation - Chauffage - Livres et de quoi lire - Système audio - Télévision"
          photos={espaceDeViePhotos}
          shouldHighlightFirstWord={true}
          barHeight={130}
        />
        <div className="w-[593px] h-[3px] bg-[#243662]"></div>
        {/* Cuisine */}
        <CardInfos
          title="Cuisine"
          description="Bouilloire électrique - Café - Cafetière - Congélateur - Équipements de cuisine de base - Four - Four à micro-ondes - Grille-pain - Lave-vaisselle - Plaques de cuisson - Réfrigérateur - Ustensiles de barbecue - Vaisselle et couverts - Verres à vin"
          photos={cuisinePhotos}
          shouldHighlightFirstWord={false}
          barHeight={200}
        />
        <div className="w-[593px] h-[3px] bg-[#243662]"></div>

        {/* Salle de bain */}
        <CardInfos
          title="Salle de bain"
          description="Chauffage - Eau chaude - Sèche-cheveux"
          photos={salleDeBainPhotos}
          shouldHighlightFirstWord={true}
          barHeight={110}
        />
        <div className="w-[593px] h-[3px] bg-[#243662]"></div>

        {/* Extérieur */}
        <CardInfos
          title="Extérieur"
          description="Barbecue - Chaises longues - Espace repas en plein air - Ustensiles de barbecue - Mobilier d'extérieur - Étendoir à linge"
          photos={exterieurPhotos}
          shouldHighlightFirstWord={false}
          barHeight={150}
        />
        <div className="w-[593px] h-[3px] bg-[#243662]"></div>

        {/* Espace chambre */}
        <CardInfos
          title="Espace chambre"
          description="Canapé-lit - Chauffage - Climatisation - Draps"
          photos={espaceChambrePhotos}
          shouldHighlightFirstWord={true}
          barHeight={100}
        />
      </div>
      <div>
        <h2 className={`${amita.className} text-3xl mb-6`}>
          Informations supplémentaires
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-[1225px] mx-auto">
          {items.map((item, index) => (
            <CheckItem key={index} text={item} />
          ))}
        </div>
        <div className="h-16"></div>
        <div className="w-full flex justify-center">
          <Button
            label="Réserver"
            url="https://www.airbnb.fr/rooms/560810265883629716?source_impression_id=p3_1723829287_P3xgAxwBvVUbLd2Q"
            external={true}
          />
        </div>
      </div>
      <div></div>
    </main>
  );
}
