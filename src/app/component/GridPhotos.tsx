import React, { useState } from "react";
import Carousel from "./Carousel"; // Assure-toi que le chemin est correct

type GridPhotosProps = {
  photos: string[];
};

export default function GridPhotos({ photos }: GridPhotosProps) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index: number) => {
    setCurrentIndex(index);
    setShowCarousel(true);
  };

  const closeCarousel = () => setShowCarousel(false);

  if (photos.length === 1) {
    // Disposition pour une photo
    return (
      <div className="w-[620px] h-[305px] bg-cover bg-center" style={{ backgroundImage: `url(${photos[0]})` }} onClick={() => openCarousel(0)}>
      </div>
    );
  }

  if (photos.length === 2) {
    // Disposition pour deux photos
    return (
      <div className="grid grid-cols-2 gap-[10px] w-[620px]">
        {photos.slice(0, 2).map((photoUrl, index) => (
          <div key={index} className="w-[305px] h-[305px] bg-cover bg-center" style={{ backgroundImage: `url(${photoUrl})` }} onClick={() => openCarousel(index)}>
          </div>
        ))}
      </div>
    );
  }

  if (photos.length === 3) {
    // Disposition pour trois photos
    return (
      <div className="grid grid-cols-2 gap-[10px] w-[620px]">
        <div className="w-[305px] h-[305px] bg-cover bg-center" style={{ backgroundImage: `url(${photos[0]})` }} onClick={() => openCarousel(0)}>
        </div>
        <div className="grid grid-rows-2 gap-[10px]">
          <div className="w-[300px] h-[145px] bg-cover bg-center" style={{ backgroundImage: `url(${photos[1]})` }} onClick={() => openCarousel(1)}>
          </div>
          <div className="w-[300px] h-[150px] bg-cover bg-center" style={{ backgroundImage: `url(${photos[2]})` }} onClick={() => openCarousel(2)}>
          </div>
        </div>
      </div>
    );
  }

  // Disposition pour plus de trois photos
  return (
    <div className="grid grid-cols-2 gap-[10px] w-[620px]">
      <div className="w-[305px] h-[305px] bg-cover bg-center" style={{ backgroundImage: `url(${photos[0]})` }} onClick={() => openCarousel(0)}>
      </div>
      <div className="grid grid-rows-2 gap-[10px]">
        <div className="w-[300px] h-[145px] bg-cover bg-center" style={{ backgroundImage: `url(${photos[1]})` }} onClick={() => openCarousel(1)}>
        </div>
        <div className="grid grid-cols-2 gap-[10px] w-[300px]">
          <div className="w-[145px] h-[145px] bg-cover bg-center" style={{ backgroundImage: `url(${photos[2]})` }} onClick={() => openCarousel(2)}>
          </div>
          <div className="w-[145px] h-[145px] flex items-center justify-center bg-[#243662] text-[#FFFFFF] text-xl font-bold cursor-pointer" onClick={() => openCarousel(3)}>
            +{photos.length - 3}
          </div>
        </div>
      </div>
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
