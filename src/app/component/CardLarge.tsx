import Image from "next/image";
import Button from "@/app/component/Button";

type CardProps = {
  title: string;
  imageUrl: string;
  description: string;
  description2?: string;
  buttonLabel: string;
  buttonUrl: string;
  external?: boolean;
  reverse?: boolean;
};

export default function CardLarge({
  title,
  imageUrl,
  description,
  description2,
  buttonLabel,
  buttonUrl,
  external,
  reverse = false,
}: CardProps) {
  return (
    <section
      className={`overflow-hidden w-full xl:w-[1225px] h-min rounded-xl xl:rounded-none flex flex-col-reverse xl:flex-row justify-between items-center xl:gap-[15px] ${
        reverse && "xl:flex-row-reverse"
      }`}
    >
      {/* Texte */}
      <div className="xl:w-[560px] h-full bg-white xl:rounded-xl xl:shadow-md p-4 md:p-8 flex flex-col items-center">
        <h2 className="font-serif text-3xl mb-4 w-full">{title}</h2>
        <p className="mb-4 leading-[20px] block md:hidden">{description2}</p>
        <p className="mb-4 leading-[20px] hidden md:block">{description}</p>
        <Button label={buttonLabel} url={buttonUrl} external={external} />
      </div>
      {/* Image */}
      <div className="w-full xl:w-[650px] h-[400px] xl:h-full xl:rounded-xl overflow-hidden flex justify-center">
        <Image
          src={imageUrl}
          alt={title}
          width={650}
          height={400}
          layout="responsive"
          className="object-cover"
        />
      </div>
    </section>
  );
}
