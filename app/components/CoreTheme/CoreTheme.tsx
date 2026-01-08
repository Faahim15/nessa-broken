import { icons } from 'antd/es/image/PreviewGroup'
import React from 'react'
import { BsCollection } from 'react-icons/bs'
import { HiOutlineCube } from 'react-icons/hi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoEyeOutline } from 'react-icons/io5'

const CoreTheme = () => {

    const coreData = [
        {
            title: "Identity",
            description: "In a fractured world, the question Who am I? becomes both a burden and a liberation. Our characters struggle with the pieces of themselves they've lost and the selves they're becoming.",
            icon: <IoMdHeartEmpty />
        },
        {
            title: "Loss",
            description: "Every ending carries the weight of what could have been. Loss shapes the landscape of this world—not as tragedy alone, but as transformation and the space for new beginnings.",
            icon: <IoEyeOutline />
        },
        {
            title: "Myth & Reality",
            description: "The boundaries between legend and truth dissolve. Ancient myths bleed into present reality, and what was once dismissed as fantasy becomes the foundation of existence.",
            icon: <HiOutlineCube />
        },
        {
            title: "Choices",
            description: "Every decision fractures reality in subtle ways. The choices we make ripple through time, creating new paths while closing others forever.",
            icon: <BsCollection />
        },
    ]
    return (
        <div className='bg-[#131417] py-12 mt-16'>
            <div className='max-w-7xl mx-auto '>
                {/* Core theme heading */}
                <div className='text-center'>
                    <p className='font-[georgia]  text-[40px]'>Core Themes</p>
                    <p className='text-[#9D9A97]'>The emotional foundations of a broken world</p>
                </div>
                {/* Core theme content */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>

                    {
                        coreData?.map((item, i) => {
                            return <div key={i} className='bg-[#2B2F36] grid grid-cols-1 md:grid-cols-2 p-4 rounded-xl'>
                                <div>
                                    <div>{item.icon}</div>
                                    <div>
                                        <h2>{item?.title}</h2>
                                        <p>{item?.description}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>


            </div>
        </div>
    )
}

export default CoreTheme