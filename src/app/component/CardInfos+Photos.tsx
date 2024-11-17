import React, { useEffect, useRef, useState } from "react";
import GridPhotos from "./GridPhotos";
import { amita } from "../fonts";

type CardInfosProps = {
  title: string;
  description: string;
  photos: string[];
  shouldHighlightFirstWord: boolean;
  barHeight?: number;
};

export default function CardInfos({
  title,
  description,
  photos,
  shouldHighlightFirstWord,
  barHeight,
}: CardInfosProps) {
  const words = title.split(" ");
  const contentRef = useRef<HTMLDivElement>(null);
  const [computedHeight, setComputedHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setComputedHeight(contentRef.current.clientHeight);
    }
  }, []);

  return (
    <div
      className="relative w-min xl:w-[1225px] py-[25px] px-6 xl:px-[50px] flex flex-col lg:flex-row gap-[20px] xl:gap-[50px]"
      ref={contentRef}
    >
      <div
        className="absolute top-0 left-0 bg-[#243662] w-2 transform -translate-x-6 translate-y-2"
        style={{
          height: `${barHeight ? barHeight : computedHeight}px`,
        }}
      ></div>
      <div className="xl:w-[460px]">
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
        <p className="text-black w-full lg:w-[250px] xl:w-full">{description}</p>
      </div>
      <GridPhotos photos={photos} />
    </div>
  );
}
