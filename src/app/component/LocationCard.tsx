import Image from "next/image";
import { amita } from "../fonts";

type LocationCardProps = {
  title: string;
  isFavorite: boolean;
  description: string;
  description2?: string;
  imagePath: string;
};

export default function LocationCard({
  title,
  isFavorite,
  description,
  description2,
  imagePath,
}: LocationCardProps) {
  return (
    <div className="w-[200px] h-[200px] lg:w-[360px] lg:h-[360px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-2 lg:p-6">
        <h2 className={`text-xl lg:text-3xl lg:mb-10 ${amita.className}`}>
          {title}
        </h2>
        {isFavorite && (
          <div className="text-[#243662] text-[12px] -mt-[36px] flex items-center italic max-lg:hidden">
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
        <p className="max-lg:hidden">{description}</p>
        <p className="lg:hidden text-[12px]">{description2}</p>
      </div>
      <Image
        src={imagePath}
        alt={title}
        width={360}
        height={360}
        className="max-lg:hidden object-cover w-full -mt-[100px]"
      />
      <Image
        src={imagePath}
        alt={title}
        width={200}
        height={200}
        className="lg:hidden object-cover w-full -mt-[45px]"
      />
    </div>
  );
}

// test
