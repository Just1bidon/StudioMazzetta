import Image from "next/image";
import Button from "@/app/component/Button";

type CardProps = {
  title: string;
  imageUrl: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  external?: boolean;
  reverse?: boolean;
};

export default function CardLarge({
  title,
  imageUrl,
  description,
  buttonLabel,
  buttonUrl,
  external,
  reverse = false,
}: CardProps) {
  return (
    <section
      className={`w-[1225px]  flex justify-between gap-[15px] ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-[560px] h-[450px] bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
        <h2 className="font-serif text-3xl mb-4 w-full">{title}</h2>
        <p className="mb-4 w-full h-full leading-[15px] text-justify">{description}</p>
          <Button label={buttonLabel} url={buttonUrl} external={external} />
      </div>
      <div className="w-[650px] h-[450px] rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={650}
          height={400}
          className="object-cover"
        />
      </div>
    </section>
  );
}
