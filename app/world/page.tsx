import PageHeading from '../components/common/PageHeading/PageHeading'
import img from "@/public/images/world.png"
import img2 from "@/public/images/char3.png"
import Image from 'next/image'
import CoreTheme from '../components/CoreTheme/CoreTheme'

const WorldPage = () => {

    const worldData = [
        {
            title: "The Fractured Realm",
            description: "Imagine a world where reality itself has shattered like glass, each fragment reflecting a different possibility, a different truth. This is the realm Nessa and her companions inhabit—a place where the laws of nature bend to emotion, where memories can become tangible, and where the past and future exist in an eternal, precarious present.",
            img: img
        },
        {
            title: "The Void Between",
            description: "Between the fragments of reality lies the Void—not an absence of existence, but a space of pure potential. Some fear it as a place of annihilation. Others seek it as the only escape from a world that has lost its way.",
            img: img2
        },
       
    ]
    return (
        <>
            <PageHeading title='World & Themes' description='Discover the fractured reality of Nessa universe' />
            <div className='bg-[#0C0E0F] py-10 px-2 xl:px-0'>
                <div className='max-w-7xl mx-auto space-y-14 md:space-y-28'>

                    {
                        worldData?.map((item, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <div key={i} className={`flex flex-col ${isEven ? "md:flex-row" : " md:flex-row-reverse "} items-center justify-between gap-8  `}>
                                    <div className='space-y-4'>
                                        <h2 className='font-semibold text-[32px]'>{item?.title}</h2>
                                        <p className='text-[#9D9A97] max-w-7xl leading-6'>{item?.description}</p>
                                    </div>
                                    <div className='relative w-full h-50 xl:h-108.75'>
                                        <Image src={item?.img} fill alt='img' className='object-cover rounded-xl' />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <CoreTheme/>
            </div>
        </>
    )
}

export default WorldPage