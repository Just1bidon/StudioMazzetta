"use client";

import Image from "next/image";
import NavBar from "@/app/component/Navbar";
import { amita } from "../fonts";
import CardQuote from "../component/CardQuote";
import EquipmentCard from "../component/CardEquipement";
import CardInfos from "../component/CardInfos+Photos";

export default function Home() {
  // definition des variables
  const equipmentList = [
    {
      title: "WIFI",
      iconUrl: "/email.svg", // Remplacer par l'icône correcte
      description: "Vitesse du réseau wifi : 12 Mbps",
      subDescription: "(Vérifié par un test de débit)",
    },
    {
      title: "Sèche-cheveux",
      iconUrl: "/email.svg", // Remplacer par l'icône correcte
      description: "Sèche-cheveux dans la salle de bain",
    },
    {
      title: "Lave-linge",
      iconUrl: "/email.svg", // Remplacer par l'icône correcte
      description: "Lave-linge (Gratuit) dans le logement",
    },
    {
      title: "Parking",
      iconUrl: "/email.svg", // Remplacer par l'icône correcte
      description: "Stationnement gratuit dans un garage sur place : 1 place",
    },
    {
      title: "Cuisine",
      iconUrl: "/email.svg", // Remplacer par l'icône correcte
      description: "Réfrigérateur, congélateur, micro-ondes, et autre ...",
    },
    {
      title: "Climatisation",
      iconUrl: "/email.svg", // Remplacer par l'icône correcte
      description: "Climatisation centrale dans tout l’appartement",
    },
    {
      title: "TV",
      iconUrl: "/email.svg", // Remplacer par l'icône correcte
      description: "TV HD avec Netflix et autres chaines",
    },
    {
      title: "Espace de travail",
      iconUrl: "/email.svg", // Remplacer par l'icône correcte
      description: "Espace de travail dédié",
      subDescription: "(Dans un espace commun)",
    },
    {
      title: "Montagne",
      iconUrl: "/email.svg", // Remplacer par l'icône correcte
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

  const salleDeBainPhotos = [
    "/IMG_appart/IMG_3691.jpg",
  ];

  const exterieurPhotos = [
    "/IMG_appart/IMG_4196.jpg",
    "/IMG_appart/IMG_4197.jpg",
    "/IMG_appart/IMG_4198.jpg",
    "/IMG_appart/IMG_3679.jpg",
    "/IMG_appart/IMG_3673.jpg",
    "/IMG_appart/IMG_4199.jpg",
  ];

  const espaceChambrePhotos = ["/IMG_appart/IMG_3686.jpg", "/IMG_appart/IMG_3686.jpg"];


  return (
    <main className="flex flex-col items-center min-h-screen gap-[220px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/IMG_appart/IMG_3666.jpg"
          alt="image de l'appartement"
          width={1920}
          height={1080}
          className="object-cover w-full h-full filter brightness-50 blur-sm scale-110"
        />
      </div>

      <div className="mt-64 mb-[130px] flex flex-col items-center">
        <h1 className={`${amita.className} text-[64px] mb-2 text-white`}>
          - L’appartement -
        </h1>
        <p className="text-white">Studio Mazzetta</p>
      </div>

      <div className="bg-[#243662] w-full h-min py-[50px] flex items-center justify-center -z-10">
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
      <div className="flex flex-col gap-[50px]">
        {/* Espace de vie */}
        <CardInfos
          title="Espace de vie"
          description="Climatisation - Chauffage - Livres et de quoi lire - Système audio - Télévision"
          photos={espaceDeViePhotos}
        />

        {/* Cuisine */}
        <CardInfos
          title="Cuisine"
          description="Bouilloire électrique - Café - Cafetière - Congélateur - Équipements de cuisine de base - Four - Four à micro-ondes - Grille-pain - Lave-vaisselle - Plaques de cuisson - Réfrigérateur - Ustensiles de barbecue - Vaisselle et couverts - Verres à vin"
          photos={cuisinePhotos}
        />

        {/* Salle de bain */}
        <CardInfos
          title="Salle de bain"
          description="Chauffage - Eau chaude - Sèche-cheveux"
          photos={salleDeBainPhotos}
        />

        {/* Extérieur */}
        <CardInfos
          title="Extérieur"
          description="Barbecue - Chaises longues - Espace repas en plein air - Ustensiles de barbecue - Mobilier d'extérieur - Étendoir à linge"
          photos={exterieurPhotos}
        />

        {/* Espace chambre */}
        <CardInfos
          title="Espace chambre"
          description="Canapé-lit - Chauffage - Climatisation - Draps"
          photos={espaceChambrePhotos}
        />
      </div>
    </main>
  );
}
