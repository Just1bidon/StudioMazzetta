import React from "react";
import GridPhotos from "./GridPhotos";

type CardInfosProps = {
  title: string;
  description: string;
  photos: string[];
};

export default function CardInfos({ title, description, photos }: CardInfosProps) {
  return (
    <div className="w-[1225px] p-[25px] px-[50px] bg-white flex gap-[50px]">
      <div className="w-[460px]">
        <h2 className="text-black font-bold text-2xl mb-4">{title}</h2>
        <p className="text-black">{description}</p>
      </div>
      <GridPhotos photos={photos} />
    </div>
  );
}
