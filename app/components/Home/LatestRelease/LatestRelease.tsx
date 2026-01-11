import latest from "@/public/images/latest.png"
import FeatureRelease from "../../common/FeatureRelease/FeatureRelease"


const LatestRelease = () => {
    return (
        <FeatureRelease
            buttonLink="/books"
            badge={"Latest Release"}
            image={latest}
            title='The Fracture'
            description='In a world where reality itself is coming undone, Nessa must confront the memories she tried to forget and the future she never imagined As the fractures in her world deepen she discovers that the only way forward is through the broken pieces of her past' />
    )
}

export default LatestRelease