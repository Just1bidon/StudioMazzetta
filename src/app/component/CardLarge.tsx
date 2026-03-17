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
  const mobileParagraphs = (description2 ?? "")
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const desktopParagraphs = description
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section
      className={`w-full xl:w-[1225px] rounded-xl bg-white shadow-md overflow-hidden flex flex-col-reverse items-center lg:min-h-[430px] lg:flex-row lg:items-stretch lg:gap-[15px] lg:rounded-none lg:bg-transparent lg:shadow-none ${
        reverse && "lg:flex-row-reverse"
      }`}
    >
      {/* Texte */}
      <div className="w-full bg-white p-4 md:p-8 flex flex-col items-center lg:w-[560px] lg:h-auto lg:rounded-xl lg:shadow-md">
        <h2 className="font-serif text-3xl mb-4 w-full">{title}</h2>

        <div className="w-full flex flex-col gap-4 text-left lg:hidden">
          {mobileParagraphs.map((paragraph, index) => (
            <p key={`${title}-mobile-${index}`} className="leading-[20px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="hidden w-full flex-col gap-5 text-left lg:flex">
          {desktopParagraphs.map((paragraph, index) => (
            <p key={`${title}-desktop-${index}`} className="leading-[24px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 lg:mt-auto">
          <Button label={buttonLabel} url={buttonUrl} external={external} />
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full h-[400px] overflow-hidden lg:w-[650px] lg:h-auto lg:flex-1 lg:rounded-xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 1023px) 100vw, 650px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
