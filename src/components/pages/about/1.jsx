import React from "react";
import FindTravel from "../../sections/home/FindTravel";
import GetToKnow from "../../sections/about/GetToKnow";
import ExcellentGuides from "../../sections/home/ExcellentGuides";
import Reviews from "../../sections/home/Reviews";
import Banner from "@/components/utils/Banner";
import TopSection from "@/components/sections/about/TopSection2";
import FAQ from "@/components/sections/about/FAQ";
import Team from "@/components/sections/about/Team";
import MetaInfo4 from "@/components/sections/home/MetaInfo4";

const About = () => {
  return (
    <div>
      <Banner title={"About Us"} breadCrumbs={["The Story", "About Us"]} />
      <TopSection />
      <FAQ />
      <Team />
      <MetaInfo4 />
    </div>
  );
};

export default About;
