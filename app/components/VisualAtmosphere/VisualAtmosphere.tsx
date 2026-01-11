import img1 from "@/public/images/latest.png"
import img2 from "@/public/images/world.png"
import img3 from "@/public/images/char3.png"
import img4 from "@/public/images/char1.png"
import img5 from "@/public/images/char2.png"
import img6 from "@/public/images/book2.png"
import Image from "next/image"

const VisualAtmosphere = () => {
    return (
        <div className='bg-[#0C0E0F] py-12 '>
            <div className='max-w-7xl mx-auto '>
                {/* Visual Atmosphere heading */}
                <div className='text-center'>
                    <p className='font-[georgia]  text-[40px]'>Visual Atmosphere</p>
                    <p className='text-[#9D9A97]'>The mood and essence of our world</p>
                </div>

                {/* Images grid  */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className='relative w-full h-50 xl:h-108.75'>
                        <Image src={img1} fill alt='img' className='object-cover rounded-xl' />
                    </div>
                    <div className='relative w-full h-50 xl:h-108.75'>
                        <Image src={img2} fill alt='img' className='object-cover rounded-xl' />
                    </div>
                    <div className='relative w-full h-50 xl:h-108.75'>
                        <Image src={img3} fill alt='img' className='object-cover rounded-xl' />
                    </div>
                    <div className='relative w-full h-50 xl:h-108.75'>
                        <Image src={img4} fill alt='img' className='object-cover rounded-xl' />
                    </div>
                    <div className='relative w-full h-50 xl:h-108.75'>
                        <Image src={img5} fill alt='img' className='object-cover rounded-xl' />
                    </div>
                    <div className='relative w-full h-50 xl:h-108.75'>
                        <Image src={img6} fill alt='img' className='object-cover rounded-xl' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VisualAtmosphere