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
                <h1
                className="text-xl mb-5 md:text-7xl font-extrabold font-[Georgia] relative inline-block
                    bg-linear-to-r from-[#9D9A97] via-white to-[#9D9A97] bg-size-[200%_100%] bg-clip-text text-transparent animate-wave">
                    Nessa's Broken World
                </h1>
                <p className=" text-[14px] md:text-[18px] text-center   bg-linear-to-r from-[#9D9A97] via-white to-[#9D9A97] bg-size-[200%_100%] bg-clip-text text-transparent animate-wave">
                    "In the spaces between what was and what could be, we find ourselves."
                </p>
                <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-5 mt-4">
                    <Link href={"/books"}>
                        <button className="bg-[#2B2F36] group transition-all duration-300  py-2 px-5 rounded-md  cursor-pointer flex items-center shadow-2xl  gap-1">Explore Books
                            <IoMdArrowForward size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
                        </button>
                    </Link>
                    <Link href={"/characther"}><button className="border-[#2B2F36] hover:bg-white/20 transition-all duration-300 border rounded-md py-2 px-2 bg-white/5 cursor-pointer">Meet the Characthers</button></Link>




                </div>
            </div>
        </div>
    )
}

export default Banner