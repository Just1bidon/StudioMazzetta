import React from "react";

type CheckItemProps = {
  text: React.ReactNode; // Acceptation des éléments React, permettant d'inclure du texte avec balises
};

export default function CheckItem(props: CheckItemProps) {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="bg-[#243662] rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-black font-medium leading-5">{props.text}</p>
    </div>
  );
}
