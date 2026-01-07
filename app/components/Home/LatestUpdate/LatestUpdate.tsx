import Link from "next/link"
import { MdOutlineArrowForward } from "react-icons/md"

const LatestUpdate = () => {
    const latestUpdate = [
        {
            date: "December 15, 2025",
            title: "The Making of a Broken World",
            description: "A behind-the-scenes look at how the world of Nessa came to be, and the inspirations that shaped its fractured reality."
        },
        {

            date: "December 1, 2025",
            title: "Character Spotlight: Nessa",
            description: "Diving deep into the mind of our protagonist, exploring her journey through loss, identity, and redemption."
        }
    ]
    return (
        <div className="bg-[#131417]">
            <div className="container mx-auto  max-w-6xl py-14">
                {/* Latest Update Header Text */}
                <div className='flex flex-col items-center'>
                    <h2 className='text-[40px] font-[Georgia]'>Latest Updates</h2>
                    <p className='text-[#9D9A97]'>News and reflections from the broken world</p>
                </div>

                {/* Latest content section */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
                    {
                        latestUpdate?.map((latest, i) => <div className="bg-[#2B2F36] p-4 rounded-md space-y-3" key={i + 1}>
                            <p className="text-[#9D9A97] text-xs">{latest?.date}</p>
                            <p className="text-[24px]">{latest?.title}</p>
                            <p className="text-[#9D9A97] text-sm">{latest?.description}</p>
                            <button className='hover:text-[#9D9A97] duration-500'><Link href={"/all-characther"} className='flex items-center gap-1'>Read More <MdOutlineArrowForward size={20} /></Link></button>
                        </div>)
                    }
                </div>
                <button className='flex items-center  justify-center w-full hover:text-[#9D9A97] duration-500 mt-8'><Link href={"/all-characther"} className='flex items-center gap-1'>View All Post <MdOutlineArrowForward size={20} /></Link></button>
            </div>
        </div>
    )
}

export default LatestUpdate