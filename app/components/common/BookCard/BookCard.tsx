
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface IBook {
  title: string,
  description: string,
  image: StaticImageData
}

const BookCard = ({ title, description, image }: IBook) => {
  return (
    <div className="space-y-3">
      <div className="relative w-full h-140.75">
        <Image
          src={image}
          alt="img"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h2 className="font-medium text-[32px]">{title}</h2>
      <p className="text-[#9D9A97] text-sm">{description}</p>
      <Link className="bg-[#2B2F36] block text-center py-2 rounded-md w-full hover:shadow-2xl" href="/">Read More</Link>
    </div>
  )
}

export default BookCard