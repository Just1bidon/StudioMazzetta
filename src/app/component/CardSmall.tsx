import Image from "next/image";
import localFont from "next/font/local";

export const amita = localFont({
  src: [
    {
      path: "../../../public/fonts/Amita/Amita-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Amita/Amita-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-amita",
});
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
      <p>{description}</p>
    </div>
  );
}
