import FeatureRelease from '../components/common/FeatureRelease/FeatureRelease'
import BookCard from '../components/common/BookCard/BookCard'
import latest from "@/public/images/latest.png"
import img3 from "@/public/images/book2.png"
import img2 from "@/public/images/book3.png"
import PageHeading from '../components/common/PageHeading/PageHeading'


const BooksPage = () => {
    return (
        <div>
            {/* Books page header */}
            <PageHeading title='Books' description='Explore the stories of Nessa Broken World' />

            <h1 className='text-center font-[georgia] bg-[#0C0E0F] py-5 text-[40px]'>Featured Release</h1>

            {/* Feature Release Section */}
            <FeatureRelease
                buttonLink="/books/the-fracture"
                badge={"available"}
                image={latest} title='The Fracture'
                description='In a world where reality itself is coming undone, Nessa must confront the memories she tried to forget and the future she never imagined As the fractures in her world deepen she discovers that the only way forward is through the broken pieces of her past'
            />


            <div className='bg-[#131417] px-2 md:px-0'>
                <p className='text-center font-[georgia] text-[40px] pt-10'>All Books</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-14 container mx-auto py-10 '>
                    <BookCard title='The Fracture' description='In a world where reality itself is coming undone, Nessa must confront the memories she tried to forget. A haunting exploration of identity and survival.' image={latest} />
                    <BookCard title='Echoes of the Void' description='The void calls to those who listen. A tale of sacrifice, redemption, and the price of power in a world that has forgotten compassion.' image={img3} />
                    <BookCard title='Between the Cracks' description='Lost between worlds, a wanderer searches for meaning in the fragments of a shattered reality. What waits in the spaces we fear to tread?' image={img2} />
                </div>
            </div>
 

        </div>
    )
}

export default BooksPage