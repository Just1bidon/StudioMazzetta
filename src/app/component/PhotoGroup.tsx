"use client";

import React, { useState } from "react";
import Image from "next/image";
import Carousel from "./Carousel";

type PhotoGroupProps = {
  photos: string[];
  layout: 1 | 2 | 3;
};

export default function PhotoGroup({ photos, layout }: PhotoGroupProps) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index: number) => {
    setCurrentIndex(index);
    setShowCarousel(true);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  // Limiter le nombre de photos en fonction du modèle
  const getLimitedPhotos = () => {
    if (layout === 1) return photos.slice(0, 7); // Limite à 7 photos pour le modèle 1
    if (layout === 2) return photos.slice(0, 7); // Limite à 7 photos pour le modèle 2
    return photos.slice(0, 6); // Limite à 6 photos pour le modèle 3
  };

  const limitedPhotos = getLimitedPhotos();

  // Rendu des différents modèles
  return (
    <div className="my-8">
      {layout === 1 && (
        <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4">
          <div className="col-span-2 row-span-2 relative w-full h-[300px] md:h-[250px] lg:h-[350px]">
            <Image
              src={limitedPhotos[0]}
              alt="Photo 1"
              layout="fill"
              className="object-cover rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => openCarousel(0)}
            />
          </div>
          {limitedPhotos.slice(1, 4).map((photo, index) => (
            <div
              key={index + 1}
              className="relative w-full h-[150px] md:h-[200px] lg:h-[250px]"
            >
              <Image
                src={photo}
                alt={`Photo ${index + 2}`}
                layout="fill"
                className="object-cover rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => openCarousel(index + 1)}
              />
            </div>
          ))}
          {limitedPhotos.slice(4).map((photo, index) => (
            <div
              key={index + 4}
              className="relative w-full h-[150px] md:h-[200px] lg:h-[250px]"
            >
              <Image
                src={photo}
                alt={`Photo ${index + 5}`}
                layout="fill"
                className="object-cover rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => openCarousel(index + 4)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Layouts 2 et 3 restent inchangés, à adapter si besoin */}

      {showCarousel && (
        <Carousel
          photos={photos}
          currentIndex={currentIndex}
          closeCarousel={closeCarousel}
        />
      )}
    </div>
  );
}
