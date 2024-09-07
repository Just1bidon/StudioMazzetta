import Image from "next/image";
import { amiko, amita } from "../fonts";

type CardProps = {
  title: string;
  imageUrl: string;
  description: string;
};

export default function CardSmall({ title, imageUrl, description }: CardProps) {
  return (
    <div className="bg-white flex flex-col items-center rounded-lg shadow-lg p-4 w-[335px] min-h-[433px]">
      <h2 className={`${amita.className} w-full text-[28px] mb-2`}>{title}</h2>
      <div className=" rounded-lg mb-4 w-[316px] h-[178px]">
        <Image
          src={imageUrl}
          alt={title}
          width={316}
          height={178}
          className="object-cover"
        />
      </div>
      <p className={`${amiko.className}`}>{description}</p>
    </div>
  );
}
