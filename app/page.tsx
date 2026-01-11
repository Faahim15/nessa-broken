import Banner from "./components/Banner/Banner";
import FeaturedCharacther from "./components/Home/FeaturedCharacther/FeaturedCharacther";
import LatestRelease from "./components/Home/LatestRelease/LatestRelease";
import LatestUpdate from "./components/Home/LatestUpdate/LatestUpdate";
import WorldUnraveling from "./components/Home/WorldUnraveling/WorldUnraveling";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <WorldUnraveling/>
      <FeaturedCharacther/>
      <LatestRelease/>
      <LatestUpdate/>

    </div>
  );
}
