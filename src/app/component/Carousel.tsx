import React, { useState, useEffect } from 'react';

type CarouselProps = {
  photos: string[];
  currentIndex: number;
  closeCarousel: () => void;
};

export default function Carousel({ photos, currentIndex, closeCarousel }: CarouselProps) {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrev();
      } else if (event.key === 'Escape') {
        closeCarousel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index]);

  if (!photos || photos.length === 0) {
    return <div>Aucune image disponible.</div>;
  }

  const goToNext = () => {
    if (index < photos.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrev = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
      {/* Croix pour fermer */}
      <button
        className="absolute top-4 left-4 text-2xl text-black hover:bg-blue-900 hover:text-white p-3 rounded-full transition-all duration-200"
        onClick={closeCarousel}
      >
        &times;
      </button>

      {/* Image actuelle */}
      <div className="relative w-4/5 max-w-5xl max-h-4/5 flex justify-center items-center">
        <img
          src={photos[index]}
          alt={`Photo ${index + 1}`}
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Flèche gauche - visible seulement si on n'est pas à la première image */}
      {index > 0 && (
        <button
          className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-blue-900 transition-colors duration-200"
          onClick={goToPrev}
        >
          &#8592;
        </button>
      )}

      {/* Flèche droite - visible seulement si on n'est pas à la dernière image */}
      {index < photos.length - 1 && (
        <button
          className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-blue-900 transition-colors duration-200"
          onClick={goToNext}
        >
          &#8594;
        </button>
      )}
    </div>
  );
}
