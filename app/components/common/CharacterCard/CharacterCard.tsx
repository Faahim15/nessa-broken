"use client";
import Image, { StaticImageData } from "next/image";

interface ICard {
  title: string;
  description: string;
  image: StaticImageData;
  height: number;
  onClick: () => void;
}

const CharacterCard = ({
  image,
  title,
  description,
  height,
  onClick,
}: ICard) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-md  group overflow-hidden "
    >
      <div className="relative">
        <div className={`relative w-full h-150  `}>
          <Image
            className="object-cover rounded-md group-hover:scale-102 transition-transform duration-500  "
            src={image}
            alt="char"
            fill
          />
        </div>
        <div
          className="absolute inset-0 bg-black/15 rounded-md
        transform scale-y-0 origin-top transition-transform duration-500
         group-hover:scale-y-100"
        ></div>
        <div className="absolute bottom-4 left-4">
          <h1 className="text-[24px] font-semibold">{title}</h1>
          <p className="text-[#9D9A97]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
