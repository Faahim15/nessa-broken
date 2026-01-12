import img2 from "@/public/images/char3.png";
import img from "@/public/images/world.png";
import PageHeading from "../components/common/PageHeading/PageHeading";
import CoreTheme from "../components/CoreTheme/CoreTheme";
import VisualAtmosphere from "../components/VisualAtmosphere/VisualAtmosphere";
import WorldData from "../components/VisualAtmosphere/WorldData";

const WorldPage = () => {
  return (
    <section>
      <PageHeading
        title="World & Themes"
        description="Discover the fractured reality of Nessa universe"
      />

      <div className="container mx-auto pb-0! py-10 px-6 lg:px-0 sm:py-16 md:py-24">
        <WorldData />

        <CoreTheme />

        <VisualAtmosphere />
      </div>
    </section>
  );
};

export default WorldPage;
