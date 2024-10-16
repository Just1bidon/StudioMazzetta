"use client"; // Ajoute cette ligne

import React, { useState } from 'react';
import Carousel from './Carousel';

type PhotoGroupProps = {
  photos: string[];
};

export default function PhotoGroup({ photos }: PhotoGroupProps) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index: number) => {
    setCurrentIndex(index);
    setShowCarousel(true);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="cursor-pointer object-cover"
            onClick={() => openCarousel(index)}
          />
        ))}
      </div>

      {showCarousel && (
        <Carousel photos={photos} currentIndex={currentIndex} closeCarousel={closeCarousel} />
      )}
    </div>
  );
}
