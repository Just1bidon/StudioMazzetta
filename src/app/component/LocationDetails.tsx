"use client";

import React from "react";
import GridPhotos from "./GridPhotos";
import { amita } from "../fonts";

type LocationDetailsProps = {
  title: string;
  description: string;
  description2?: string;
  photos: string[];
  isReverse: boolean;
};

export default function LocationDetails({
  title,
  description,
  description2,
  photos,
  isReverse,
}: LocationDetailsProps) {
  return (
    <section className="w-[300px] md:w-min flex flex-col mx-auto my-8 md:p-4 rounded-lg">
      <div className="px-6 bg-[#243762] h-min max-w-max">
        <span className={`${amita.className} text-xl text-white`}>{title}</span>
      </div>
      <div
        className={`flex ${
          isReverse
            ? "max-2xl:flex-col-reverse max-2xl:items-end 2xl:flex-col max-xl:flex-col"
            : "flex-col"
        } w-full xl:w-[560px] 2xl:w-full max-2xl:mt-6 justify-between h-full gap-2 mt-3`}
      >
        <p className="max-sm:hidden text-justify w-full xl:w-[560px] 2xl:w-full leading-relaxed mb-auto">
          {description}
        </p>
        <p className="sm:hidden text-justify w-full xl:w-[560px] 2xl:w-full leading-relaxed mb-auto">
          {description2}
        </p>
        <GridPhotos photos={photos} />
      </div>
    </section>
  );
}
