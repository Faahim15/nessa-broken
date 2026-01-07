import CharactherCard from '../components/common/CharactherCard/CharactherCard'
import PageHeading from '../components/common/PageHeading/PageHeading'
import img1 from "@/public/images/char1.png"
import img2 from "@/public/images/char2.png"
import img3 from "@/public/images/char3.png"
import img4 from "@/public/images/char4.png"

const CharactherPage = () => {
  return (
    <div>
        <PageHeading title='Characters' description='Meet the people of Nessa Broken World' />
         <div className='container mx-auto py-14 grid grid-cols-1 md:grid-cols-4 gap-10 px-2 md:px-0'>
            <CharactherCard title='Nessa' description='The Fractured Soul' image={img1} height={150} />
            <CharactherCard title='Kael' description='The Shadow Walker' image={img2} height={150} />
            <CharactherCard title='Lyra' description='The Memory Keeper ' image={img3} height={150} />
            <CharactherCard title='Thorne' description='The Oath Breaker' image={img4} height={150} />
         </div>
    </div>
  )
}

export default CharactherPage