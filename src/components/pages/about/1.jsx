import React from "react";
import FindTravel from "../../sections/home/FindTravel";
import GetToKnow from "../../sections/about/GetToKnow";
import ExcellentGuides from "../../sections/home/ExcellentGuides";
import Reviews from "../../sections/home/Reviews";
import Banner from "@/components/utils/Banner";
import TopSection from "@/components/sections/about/TopSection2";

const About = () => {
  return (
    <div>
      <Banner title={"About Uss"} breadCrumbs={["The Story", "About Us"]} />
      <TopSection />
    </div>
  );
};

export default About;
