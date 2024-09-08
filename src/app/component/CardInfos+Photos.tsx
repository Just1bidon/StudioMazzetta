import React, { useEffect, useRef, useState } from "react";
import GridPhotos from "./GridPhotos";
import { amita } from "../fonts";

type CardInfosProps = {
  title: string;
  description: string;
  photos: string[];
  shouldHighlightFirstWord: boolean;
  barHeight?: number; // Ajoute une propriété optionnelle pour spécifier la hauteur
};

export default function CardInfos({
  title,
  description,
  photos,
  shouldHighlightFirstWord,
  barHeight, // Optionnel, si passé il écrasera la valeur par défaut
}: CardInfosProps) {
  const words = title.split(" ");
  const contentRef = useRef<HTMLDivElement>(null); // Ref pour mesurer la hauteur
  const [computedHeight, setComputedHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      // On récupère la hauteur de la carte si aucune hauteur n'est passée
      setComputedHeight(contentRef.current.clientHeight);
    }
  }, []);

  return (
    <div
      className="relative w-[1225px] p-[25px] px-[50px] flex gap-[50px]"
      ref={contentRef} // Attacher le ref ici pour mesurer la hauteur
    >
      <div
        className="absolute top-0 left-0 bg-[#243662] w-2 transform -translate-x-6 translate-y-2"
        style={{
          height: `${barHeight ? barHeight : computedHeight}px`, // Hauteur par défaut ou personnalisée
        }}
      ></div>
      <div className="w-[460px]">
        <h2 className={`${amita.className} text-black font-light text-3xl mb-4`}>
          {shouldHighlightFirstWord ? (
            <>
              <span className="bg-[#243662] text-white p-1">{words[0]}</span>{" "}
              {words.slice(1).join(" ")}
            </>
          ) : (
            title
          )}
        </h2>
        <p className="text-black">{description}</p>
      </div>
      <GridPhotos photos={photos} />
    </div>
  );
}
