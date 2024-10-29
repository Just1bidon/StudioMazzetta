"use client";

import React from 'react';
import GridPhotos from './GridPhotos';

type LocationDetailsProps = {
  title: string;
  description: string;
  photos: string[];
};

const LocationDetails: React.FC<LocationDetailsProps> = ({ title, description, photos }) => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 rounded-lg shadow-md border">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">{title}</h2>
      <p className="text-gray-700 text-justify leading-relaxed mb-6">{description}</p>
      <GridPhotos photos={photos}/>
    </div>
  );
};

export default LocationDetails;
