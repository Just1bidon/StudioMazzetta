import Image from "next/image";

type EquipmentCardProps = {
  title: string;
  iconUrl: string;
  description: string;
  subDescription?: string;
  align: "left" | "right";
};

export default function EquipmentCard({
  title,
  iconUrl,
  description,
  subDescription,
  align,
}: EquipmentCardProps) {
  return (
    <section className="w-full flex flex-col items-center sm:flex-row">
      <div
        className={`sm:hidden w-full flex justify-around ${align === "left" ? "flex-row" : "flex-row-reverse"}`}
      >
        {/* Icon à gauche ou droite au format téléphone */}
        <div className="bg-[#243662] p-2 rounded-full my-auto">
          <Image
            src={iconUrl}
            alt={`${title}-icon`}
            width={30}
            height={30}
            className=""
          />
        </div>
        {/* Card */}
        <div className="w-[220px] h-[145px] sm:h-[170px] bg-white shadow-lg rounded-lg py-4 px-6 flex flex-col justify-start">
          <div className="flex justify-between items-start">
            <h2 className="text-black text-lg font-bold">{title}</h2>
            <div className="hidden sm:block">
              <Image
                src={iconUrl}
                alt={`${title}-icon`}
                width={30}
                height={30}
              />
            </div>
          </div>
          <p className="text-black mt-4 text-sm text-justify">{description}</p>
          {subDescription && (
            <p className="text-black text-xs mt-2">{subDescription}</p>
          )}
        </div>
      </div>
      {/* Separator */}
      {/* <div className="block sm:hidden bg-[#243662] w-24 h-[2px] mx-auto mt-5"></div> */}
    </section>
  );
}
