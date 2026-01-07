import Banner from "./components/Banner/Banner";
import FeaturedCharacther from "./components/Home/FeaturedCharacther/FeaturedCharacther";
import WorldUnraveling from "./components/Home/WorldUnraveling/WorldUnraveling";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <WorldUnraveling/>
      <FeaturedCharacther/>
    </div>
  );
}
