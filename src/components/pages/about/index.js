import React from "react";
import FindTravel from "../../sections/home/FindTravel";
import GetToKnow from "../../sections/about/GetToKnow";
import ExcellentGuides from "../../sections/home/ExcellentGuides";
import Reviews from "../../sections/home/Reviews";
import Banner from "@/components/utils/Banner";

const About = () => {
  return (
    <div>
      <Banner title={"ABOUT US"} breadCrumbs={["About", "About Us"]} />
      <GetToKnow />
      <FindTravel />
      <ExcellentGuides />
      <Reviews />
    </div>
  );
};

export default About;
