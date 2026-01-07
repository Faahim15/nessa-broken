import latest from "@/public/images/latest.png"
import Image from "next/image"
import Button from "../../common/Button/Button"
import { IoMdArrowForward } from "react-icons/io"


const LatestRelease = () => {
    return (
        <div className="bg-[#0C0E0F] py-16 px-2 md:px-0">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3  max-w-6xl justify-center items-center">
                <div>
                    <Image height={500} width={500} src={latest} alt='latest' />

                </div>
                <div className="space-y-3">
                    <p className="bg-[#2B2F36] text-[#9D9A97] text-xs inline-block px-2 py-1 rounded-2xl">Latest Release</p>
                    <h4 className="text-[40px] font-semibold">The Fracture</h4>
                    <p className="text-[#9D9A97] text-sm">In a world where reality itself is coming undone, Nessa must confront the memories she's tried to forget and the future she never imagined. As the fractures in her world deepen, she discovers that the only way forward is through the broken pieces of her past.</p>
                    <p className="text-[#9D9A97] text-sm">"A haunting exploration of identity, memory, and the stories we tell ourselves to survive."</p>
                    <button className="bg-[#2B2F36] py-2 px-5 rounded-md  cursor-pointer flex items-center shadow-2xl  gap-1 mt-5">Read More
                        <IoMdArrowForward size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LatestRelease