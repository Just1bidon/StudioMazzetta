import Image from "next/image";

type EquipmentCardProps = {
  title: string;
  iconUrl: string;
  description: string;
  subDescription?: string;
};

export default function EquipmentCard({
  title,
  iconUrl,
  description,
  subDescription,
}: EquipmentCardProps) {
  return (
    <div className="w-[220px] h-[170px] bg-[#FFFFFF] shadow-lg rounded-lg py-4 px-6 flex flex-col justify-start">
      <div className="flex justify-between items-center">
        <h2 className="text-[#000000] text-lg font-bold">{title}</h2>
        <Image src={iconUrl} alt={`${title}-icon`} width={30} height={30} className="text-[#243662]" />
      </div>
      <p className="text-[#000000] mt-4 text-sm text-justify">{description}</p>
      {subDescription && (
        <p className="text-[#000000] text-xs mt-2">{subDescription}</p>
      )}
    </div>
  );
}
