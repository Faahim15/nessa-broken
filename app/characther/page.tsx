"use client";
import img1 from "@/public/images/char1.png";
import img2 from "@/public/images/char2.png";
import img3 from "@/public/images/char3.png";
import img4 from "@/public/images/char4.png";
import { useState } from "react";
import CharacterCard from "../components/common/CharacterCard/CharacterCard";
import CharacterDetailsModal from "../components/common/CharacterDetailsModal/CharacterDetailsModal";
import PageHeading from "../components/common/PageHeading/PageHeading";

const CharacterPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <PageHeading
        title="Characters"
        description="Meet the people of Nessa Broken World"
      />
      <div className="container mx-auto py-10 px-6 lg:px-0 sm:py-16 md:py-24">
        <div className="container mx-auto py-14 grid grid-cols-1 md:grid-cols-4 gap-10 px-2 md:px-0">
          <CharacterCard
            onClick={() => setOpen(true)}
            title="Nessa"
            description="The Fractured Soul"
            image={img1}
            height={150}
          />
          <CharacterCard
            onClick={() => setOpen(true)}
            title="Kael"
            description="The Shadow Walker"
            image={img2}
            height={150}
          />
          <CharacterCard
            onClick={() => setOpen(true)}
            title="Lyra"
            description="The Memory Keeper "
            image={img3}
            height={150}
          />
          <CharacterCard
            onClick={() => setOpen(true)}
            title="Thorne"
            description="The Oath Breaker"
            image={img4}
            height={150}
          />
        </div>
      </div>

      <CharacterDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        title="Nessa"
        description="Full character details go here..."
      />
    </section>
  );
};

export default CharacterPage;
