import charImg1 from "@/public/images/char1.png"
import charImg2 from "@/public/images/char2.png"
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowForward } from 'react-icons/md'
import CharactherCard from "../../common/CharactherCard/CharactherCard"
const FeaturedCharacther = () => {
    return (
        <div className=' bg-[#131417] '>
            {/* Main Container  */}

            <div className='container mx-auto  py-10 px-2 md:px-0'>

                {/* Feature characther Header Text */}
                <div className='flex flex-col items-center'>
                    <h2 className='text-[28px] md:text-[40px] font-[Georgia]'>Featured Characters</h2>
                    <p className='text-[#9D9A97]'>Souls navigating the broken world</p>
                </div>

                {/* All Charecther image and title */}
                <div className='max-w-5xl mx-auto' >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-10'>
                        <CharactherCard title="Nessa" description="The Fractured Soul" image={charImg1} height={150} />
                        <CharactherCard title="Kael" description="The Shadow Walker" image={charImg2}  height={150} />
                       
                    
                    </div>
                    {/* View all characther button */}
                    <button className='flex items-center  justify-center w-full hover:text-[#9D9A97] duration-500'><Link href={"/all-characther"} className='flex items-center gap-1'>View All Characters <MdOutlineArrowForward size={20} /></Link></button>

                </div>



            </div>
        </div>
    )
}

export default FeaturedCharacther