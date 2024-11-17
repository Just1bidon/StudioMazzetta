import React, { useState } from "react";
import Carousel from "./Carousel";

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
    return (
      <>
        <div
          className="w-[305px] md:w-[620px] h-[305px] bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${photos[0]})` }}
          onClick={() => openCarousel(0)}
        />
        {showCarousel && (
          <Carousel
            photos={photos}
            currentIndex={currentIndex}
            closeCarousel={closeCarousel}
          />
        )}
      </>
    );
  }

  if (photos.length === 2) {
    return (
      <>
        <div className="grid max-md:grid-rows-2 md:grid-cols-2 gap-[10px] w-[300px] md:w-[620px]">
          {photos.map((photoUrl, index) => (
            <div
              key={index}
              className="w-[300px] h-[145px] max-md:first:h-[150px] md:w-[305px] md:h-[305px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${photoUrl})` }}
              onClick={() => openCarousel(index)}
            />
          ))}
        </div>
        {showCarousel && (
          <Carousel
            photos={photos}
            currentIndex={currentIndex}
            closeCarousel={closeCarousel}
          />
        )}
      </>
    );
  }

  if (photos.length === 3) {
    return (
      <>
        <div className="grid grid-cols-2 gap-[10px] w-[300px] md:w-[620px] max-md:grid-cols-1">
          <div
            className="max-md:hidden w-[305px] h-[305px] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${photos[0]})` }}
            onClick={() => openCarousel(0)}
          />
          <div className="grid grid-rows-2 gap-[10px] max-md:hidden">
            <div
              className="w-[300px] h-[145px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${photos[1]})` }}
              onClick={() => openCarousel(1)}
            />
            <div
              className="w-[300px] h-[150px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${photos[2]})` }}
              onClick={() => openCarousel(2)}
            />
          </div>
          <div className="grid grid-rows-2 gap-[10px] md:hidden">
            <div
              className="w-[300px] h-[145px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${photos[1]})` }}
              onClick={() => openCarousel(1)}
            />
            <div className="grid grid-cols-2 gap-[10px] w-[300px]">
              <div
                className="w-[145px] h-[145px] bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: `url(${photos[2]})` }}
                onClick={() => openCarousel(2)}
              />
              <div
                className="w-[145px] h-[145px] flex items-center justify-center bg-[#243662] text-[#FFFFFF] text-[38px] font-medium cursor-pointer"
                onClick={() => openCarousel(2)}
              >
                +{photos.length - 2}
              </div>
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
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-[10px] w-[300px] md:w-[620px]">
        <div
          className="max-md:hidden w-[305px] h-[305px] bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${photos[0]})` }}
          onClick={() => openCarousel(0)}
        />
        <div className="grid grid-rows-2 gap-[10px]">
          <div
            className="w-[300px] h-[145px] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${photos[1]})` }}
            onClick={() => openCarousel(1)}
          />
          <div className="grid grid-cols-2 gap-[10px] w-[300px]">
            <div
              className="w-[145px] h-[145px] bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${photos[2]})` }}
              onClick={() => openCarousel(2)}
            />
            <div
              className="w-[145px] h-[145px] flex items-center justify-center bg-[#243662] text-[#FFFFFF] text-[38px] font-medium cursor-pointer"
              onClick={() => openCarousel(3)}
            >
              +{photos.length - (window.innerWidth < 768 ? 2 : 3)}
            </div>
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
    </>
  );
}
