"use client"
import { MdArrowBack } from 'react-icons/md'
import img from "@/public/images/latest.png"
import Image from 'next/image'
import { CiCalendar, CiShoppingTag } from 'react-icons/ci'
import { useRouter } from 'next/navigation'
import ReadBookButton from '@/app/components/ReadBookButton/ReadBookButton'

const BookDetailsPage = () => {
    const router = useRouter();
    return (
        <div className='bg-[#0C0E0F] py-10 px-2 md:px-0'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex items-center gap-1'>
                    <MdArrowBack size={20} className='cursor-pointer' onClick={() => router.back()} />
                    <p>Back to All Book</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 '>

                    <div>
                        <div className='relative w-full h-50 xl:h-108.75'>
                            <Image src={img} fill alt='img' className='object-cover rounded-xl' />
                        </div>
                        {/* <button className='bg-[#2B2F36] mt-5 w-full py-2 rounded-xl cursor-pointer'>Read Book</button> */}
                        <ReadBookButton/>
                    </div>

                    <div>

                        <h1 className='text-[48px] font-semibold'>The Fracture</h1>
                        <p className='text-[#9D9A97]'>In a world where reality itself is coming undone, Nessa must confront the memories she tried to forget. A haunting exploration of identity and survival.</p>


                        {/* Writter and publish date section */}
                        <div className='border border-[#9D9A97] bg-[#131417] rounded-xl p-4 mt-5'>

                            <div className='flex items-center gap-2'>
                                <div><CiShoppingTag size={25} /></div>
                                <div className=''>
                                    <p className='text-[#9D9A97] text-xs'>Writter</p>
                                    <p className='text-sm '>Dark Fantasy</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2 mt-8'>
                                <div><CiCalendar size={25} /></div>
                                <div className=''>
                                    <p className='text-[#9D9A97] text-xs'>Published</p>
                                    <p className='text-sm '>October 2025</p>
                                </div>
                            </div>

                        </div>


                        {/* About Book section */}
                        <h1 className='mt-10 text-2xl font-semibold'>About This Book</h1>
                        <div className='space-y-3 text-[#9D9A97] mt-5 text-sm'>

                            <p>In a world where reality itself is coming undone, Nessa must confront the memories she's tried to forget and the future she never imagined. As the fractures in her world deepen, she discovers that the only way forward is through the broken pieces of her past.</p>

                            <p>The Fracture is a deeply emotional journey through a shattered reality where nothing is as it seems. Nessa, our protagonist, finds herself caught between worlds-between who she was and who she's becoming. Each chapter peels back another layer of mystery, revealing truths that will shake the very foundation of her existence.</p>

                            <p>With lyrical prose and haunting imagery, this novel explores themes of identity, memory, loss, and the courage it takes to face our deepest fears. It's a story about finding wholeness in brokenness, about discovering that our fractures are not weaknesses but the places where light gets in.</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetailsPage