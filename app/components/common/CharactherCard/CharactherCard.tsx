"use client"
import Image, { StaticImageData } from 'next/image'

interface ICard {
  title: string,
  description: string,
  image: StaticImageData,
  height : number,
  onClick: () => void
}

const CharactherCard = ({ image, title, description , height , onClick }: ICard) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className='relative'>
       
        <div className={`relative w-full h-150 `}
        >
          <Image
            className="object-cover rounded-md"
             src={image} alt='char'
            fill
          />
        </div>

        <div className='absolute bottom-4 left-4'>
          <h1 className='text-[24px] font-semibold'>{title}</h1>
          <p className='text-[#9D9A97]'>{description}</p>
        </div>

      </div>
    </div>
  )
}

export default CharactherCard