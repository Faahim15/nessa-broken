"use client";
import charImg1 from "@/public/images/char1.png";
import charImg2 from "@/public/images/char2.png";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import CharacterCard from "../../common/CharacterCard/CharacterCard";
import CharacterDetailsModal from "../../common/CharacterDetailsModal/CharacterDetailsModal";
const FeaturedCharacther = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-[#131417] ">
      {/* Main Container  */}

      <div className="container mx-auto  py-10 px-2 md:px-0">
        {/* Feature characther Header Text */}
        <div className="flex flex-col items-center">
          <h2 className="text-[28px] md:text-[40px] font-[Georgia] text-white">
            Featured Characters
          </h2>
          <p className="text-[#9D9A97]">Souls navigating the broken world</p>
        </div>

        {/* All Charecther image and title */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-10">
            <CharacterCard
              onClick={() => setOpen(true)}
              title="Nessa"
              description="The Fractured Soul"
              image={charImg1}
              height={150}
            />
            <CharacterCard
              onClick={() => setOpen(true)}
              title="Kael"
              description="The Shadow Walker"
              image={charImg2}
              height={150}
            />
          </div>
          {/* View all characther button */}
          <button className="flex items-center  justify-center w-full hover:text-[#9D9A97] duration-500">
            <Link href={"/characther"} className="flex items-center gap-1">
              View All Characters <MdOutlineArrowForward size={20} />
            </Link>
          </button>
        </div>

        <CharacterDetailsModal
          open={open}
          onClose={() => setOpen(false)}
          title="Nessa"
          description="Full character details go here..."
        />
      </div>
    </div>
  );
};

export default FeaturedCharacther;
