import React from "react";
import AwesomePartners from "@/components/sections/destinations/AwesomePartners";
import Banner from "../utils/Banner.jsx";
import AboutGuide from "../sections/guide/AboutGuides.jsx";
import ExcellentGuides from "../sections/guide/ExcellentGuides.jsx";
import ExcellentGuidesGrid from "../sections/guide/ExcellentGuidesGrid.jsx";

const Guide = () => {
  return (
    <div>
      <Banner title={"Our Guides"} breadCrumbs={["Home", "Guide"]} />
      <ExcellentGuides />
      <AboutGuide />
      <ExcellentGuidesGrid />
      <AwesomePartners />
    </div>
  );
};

export default Guide;
