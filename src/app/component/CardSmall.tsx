import Image from "next/image";
import { amiko, amita } from "../fonts";

type CardProps = {
  title: string;
  imageUrl: string;
  description: string;
};

export default function CardSmall({ title, imageUrl, description }: CardProps) {
  const paragraphs = description
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="bg-white flex flex-col items-center rounded-lg shadow-lg p-4 m-4 md:m-0 w-[calc(100%-2rem)] md:w-[335px] h-[430px] md:h-[470px] xl:h-[430px]">
    <h2 className={`${amita.className} w-full text-[28px] mb-2`}>{title}</h2>
      <div className=" rounded-lg mb-4 xl:w-[316px] h-[178px] transform">
        <Image
          src={imageUrl}
          alt={title}
          width={316}
          height={178}
          className="object-cover"
        />
      </div>
      <div className={`${amiko.className} w-full flex flex-col gap-3 text-left`}>
        {paragraphs.map((paragraph, index) => (
          <p key={`${title}-${index}`} className="leading-[22px]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
