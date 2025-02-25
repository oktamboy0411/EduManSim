"use client";

import languageData from "@/static/language-data";
import React, { useState } from "react";
import languageIconUrl from "@/public/icons/language.svg";
import Image from "next/image";
import { languageDataType } from "@/type";

function Language() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<languageDataType>(languageData[1]);

  const handleClick = (item: languageDataType) => {
    setData(item);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" py-[10px] px-4 border-2 border-main-color-500 flex items-center justify-center gap-1 rounded-lg"
      >
        <Image src={languageIconUrl} alt="icon" width={24} height={24} />
        <p className=" font-public-sans font-normal text-base text-main-color-500  ">
          {data.title}
        </p>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-main-color-500 overflow-hidden rounded-lg shadow-lg flex flex-col">
          {languageData.map((data) => (
            <button
              key={data.id}
              onClick={() => handleClick(data)}
              className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <Image src={languageIconUrl} alt="icon" width={24} height={24} />
              <p className=" font-public-sans font-normal text-base text-main-color-500  ">
                {data.title}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Language;
