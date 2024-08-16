import Image from "next/image";

type CardProps = {
  title: string;
  imageUrl: string;
  description: string;
};

export default function CardSmall({ title, imageUrl, description }: CardProps) {
  return (
    <div className="bg-white flex flex-col items-center rounded-lg shadow-lg p-4 w-[335px] h-[443px]">
      <h2 className="w-full text-2xl font-semibold mb-2">{title}</h2>
      <div className="overflow-hidden rounded-lg mb-4 w-[316px] h-[178px]">
        <Image
          src={imageUrl}
          alt={title}
          width={316}
          height={78}
          className="object-cover"
        />
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
