"use client";

import img1 from "@/public/images/char1.png";
import { Modal } from "antd";
import Image from "next/image";

interface IModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const CharacterDetailsModal = ({
  open,
  onClose,
  title,
  description,
}: IModalProps) => {
  return (
    <>
      <Modal
        footer={null}
        open={open}
        onCancel={onClose}
        getContainer={false}
        className="custom-modal"
        centered
        width={800}
      >
        <div className="bg-[#131417] xl:flex gap-5 p-3 xl:p-0">
          <div className="relative w-full h-50 xl:h-110.75">
            <Image
              src={img1}
              fill
              alt="img"
              className="object-cover rounded-xl"
            />
          </div>
          <div className=" w-[90%]">
            <p className="text-[32px] text-white font-semibold">Nessa</p>
            <p className="text-[#9D9A97] text-[16px]">The Fractured Soul</p>

            <p className="text-[20px] text-white my-5 font-semibold">
              Background
            </p>
            <p className="text-[#9D9A97]">
              Nessa carries the weight of two worlds within her—the one she
              remembers and the one that never was. Torn between fractured
              memories and an uncertain future, she navigates a reality that
              bends to her deepest fears and hidden desires. Her journey is one
              of self-discovery, loss, and the courage to confront the pieces of
              herself she buried long ago.
            </p>

            <div className="border-l-2 border-white mt-5">
              <p className="text-[#9D9A97] ml-5">
                &quot;I am not broken. I am a mosaic of all the things I thought I
                lost.&quot;
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CharacterDetailsModal;
