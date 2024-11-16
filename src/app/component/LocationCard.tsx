import Image from "next/image";
import { amita } from "../fonts";

type LocationCardProps = {
  title: string;
  isFavorite: boolean;
  description: string;
  imagePath: string;
};

export default function LocationCard({
  title,
  isFavorite,
  description,
  imagePath,
}: LocationCardProps) {
  return (
    <div className="w-[360px] h-[360px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className={`text-3xl mb-10 ${amita.className}`}>{title}</h2>
        {isFavorite && (
          <div className="text-[#243662] text-[12px] absolute -mt-[36px] flex items-center italic">
            <Image
              src="/icons/heart.svg"
              alt="Coup de coeur"
              width={13}
              height={13}
              className="w-[13px] h-[13px] text-[#243662] mr-[4px]"
            />
            <span>Coup de coeur de l&apos;hôte</span>
          </div>
        )}
        <p className="text-gray-700">{description}</p>
      </div>
      <Image
        src={imagePath}
        alt={title}
        width={360}
        height={180}
        className="object-cover w-full -mt-[100px]"
      />
    </div>
  );
}

// test