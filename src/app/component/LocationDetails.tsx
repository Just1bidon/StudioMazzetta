import React from 'react';
import PhotoGroup from './PhotoGroup';

type LocationDetailProps = {
  title: string;
  description: string;
  photos: string[];
};

export default function LocationDetail({ title, description, photos }: LocationDetailProps) {
  return (
    <div className="grid grid-cols-2 gap-10 mb-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <PhotoGroup photos={photos} />
    </div>
  );
}
