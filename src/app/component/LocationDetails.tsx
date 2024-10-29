"use client";

import React from "react";
import GridPhotos from "./GridPhotos";
import { amita } from "../fonts";

type LocationDetailsProps = {
  title: string;
  description: string;
  photos: string[];
};

const LocationDetails: React.FC<LocationDetailsProps> = ({
  title,
  description,
  photos,
}) => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto my-8 p-6 rounded-lg">
      <div className="px-6 bg-[#243762] h-min inline-block max-w-max whitespace-nowrap">
        <span className={`${amita.className} text-xl text-white`}>
          {title}
        </span>
      </div>
      <p className="text-gray-700 text-justify max-w-[620px] leading-relaxed mb-auto">
        {description}
      </p>
      <div className="mt-7">
        <GridPhotos photos={photos} />
      </div>
    </div>
  );
};

export default LocationDetails;
