import Image from "next/image";
import { amita } from "../fonts";

type ActiviteCardProps = {
  url: string;
  nom: string;
  description: string;
  instagram?: string;
  facebook?: string;
  website?: string;
};

export default function ActiviteCard({
  url,
  nom,
  description,
  instagram,
  facebook,
  website,
}: ActiviteCardProps) {
  return (
    <div className="bg-white w-[239px] h-[316px] overflow-hidden rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="relative w-full h-[141px] overflow-hidden">
        <Image
          src={url}
          alt={nom}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div>
        {/* Name and Description Section */}
        <div className="text-center mt-4">
          <h2 className={`${amita.className} text-[20px] font-semibold`}>
            {nom}
          </h2>
          <p className="text-sm text-[#243762]">{description}</p>
        </div>

        {/* Contacts Section */}
        <div className="mt-4 text-center">
          <p className="font-medium">Contacts :</p>
          <div className="flex justify-center space-x-4 mt-2">
            <div className={instagram ? "" : "opacity-25 scale-90"}>
              {instagram ? (
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="hover:opacity-90 hover:scale-105 transition-transform"
                  />
                </a>
              ) : (
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram Inactif"
                  width={32}
                  height={32}
                />
              )}
            </div>
            <div className={facebook ? "" : "opacity-25 scale-90"}>
              {facebook ? (
                <a href={facebook} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="hover:opacity-90 hover:scale-105 transition-transform"
                  />
                </a>
              ) : (
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook Inactif"
                  width={32}
                  height={32}
                />
              )}
            </div>
            <div className={website ? "" : "opacity-25 scale-90"}>
              {website ? (
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/website.svg"
                    alt="Website"
                    width={32}
                    height={32}
                    className="hover:opacity-90 hover:scale-105 transition-transform"
                  />
                </a>
              ) : (
                <Image
                  src="/icons/website.svg"
                  alt="Website Inactif"
                  width={32}
                  height={32}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
