"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { IoMdArrowForward } from "react-icons/io"

interface Ifeature {
    badge: string
    image: StaticImageData,
    title: string,
    description: string
    buttonLink?: string,
}


const FeatureRelease = ({ badge, image, title, description, buttonLink }: Ifeature) => {
    return (
        <div className="bg-[#0C0E0F] py-16 px-2 md:px-0">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3  max-w-6xl justify-center items-center">
                <div>
                    <Image height={500} width={500} src={image} alt='latest' />

                </div>
                <div className="space-y-3">
                    <p className="bg-[#2B2F36] text-[#9D9A97] text-xs inline-block px-2 py-1 rounded-2xl">{badge}</p>
                    <h4 className="text-[40px] font-semibold">{title}</h4>
                    <p className="text-[#9D9A97] text-sm">{description}</p>
                    <p className="text-[#9D9A97] text-sm">"A haunting exploration of identity, memory, and the stories we tell ourselves to survive."</p>
                    {
                        buttonLink && <Link href={buttonLink}>
                            <button className="bg-[#2B2F36] py-2 px-5 rounded-md  cursor-pointer flex items-center shadow-2xl  gap-1 mt-5">Read More
                                <IoMdArrowForward size={20} />
                            </button>
                        </Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default FeatureRelease