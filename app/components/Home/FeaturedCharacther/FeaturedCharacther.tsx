import charImg1 from "@/public/images/char1.png"
import charImg2 from "@/public/images/char2.png"
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowForward } from 'react-icons/md'
const FeaturedCharacther = () => {
    return (
        <div className=' bg-[#131417] '>
            {/* Main Container  */}

            <div className='container mx-auto  py-10'>

                {/* Feature characther Header Text */}
                <div className='flex flex-col items-center'>
                    <h2 className='text-[40px] font-[Georgia]'>Featured Characters</h2>
                    <p className='text-[#9D9A97]'>Souls navigating the broken world</p>
                </div>

                {/* All Charecther image and title */}
                <div className='max-w-5xl mx-auto' >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-10'>
                        <div className='relative'>
                            <Image height={500} width={500} src={charImg1} alt='char' />
                            <div className='absolute bottom-4 left-4'>
                                <h1 className='text-[24px] font-semibold'>Nessa</h1>
                                <p className='text-[#9D9A97]'>The Fractured Soul</p>
                            </div>

                        </div>
                        <div className='relative'>
                            <Image height={500} width={500} src={charImg2} alt='char' />
                            <div className='absolute bottom-4 left-4'>
                                <h1 className='text-[24px] font-semibold'>Kael</h1>
                                <p className='text-[#9D9A97]'>The Shadow Walker</p>
                            </div>

                        </div>
                    </div>
                    {/* View all characther button */}
                    <button className='flex items-center  justify-center w-full hover:text-[#9D9A97] duration-500'><Link href={"/all-characther"} className='flex items-center gap-1'>View All Characters <MdOutlineArrowForward size={20} /></Link></button>

                </div>



            </div>
        </div>
    )
}

export default FeaturedCharacther