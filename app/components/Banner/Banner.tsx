import banner from "@/public/images/banner.png"
import Link from "next/link"
import { IoMdArrowForward } from "react-icons/io"

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${banner.src})`,
            }}
            className="h-[75vh] relative bg-cover bg-bottom bg-no-repeat"
        >
            {/* Blur Overlay */}
            <div className="absolute inset-0   bg-black/60"></div>

            <div className="relative z-10 pt-24 px-8 text-white flex justify-center items-center flex-col  h-full">
                <h1 className="text-xl md:text-6xl font-bold font-[Georgia]">Nessa's Broken World</h1>
                <p className="mt-2 text-[14px] md:text-[18px] text-center text-[#9D9A97]">
                    "In the spaces between what was and what could be, we find ourselves."
                </p>
                <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-5 mt-4">
                    <Link href={"/books"}>
                        <button className="bg-[#2B2F36] py-2 px-5 rounded-md  cursor-pointer flex items-center shadow-2xl  gap-1">Explore Books
                            <IoMdArrowForward size={20} />
                        </button>
                    </Link>
                    <Link href={"/characther"}><button className="border-[#2B2F36] border rounded-md py-2 px-2 bg-white/5 cursor-pointer">Meet the Characthers</button></Link>
  



                </div>
            </div>
        </div>
    )
}

export default Banner