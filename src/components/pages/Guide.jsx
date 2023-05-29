import React from "react";
import AwesomePartners from "@/components/sections/home/AwesomePartners";
import Banner from "../utils/Banner.jsx";
import AboutGuide from "../sections/guide/AboutGuides.jsx";
import ExcellentGuides from "../sections/guide/ExcellentGuides.jsx";
import ExcellentGuidesGrid from "../sections/guide/ExcellentGuidesGrid.jsx";

const Guide = () => {
  return (
    <div>
      <Banner title={"Out Guide"} breadCrumbs={["Guide", "Our Guide"]} />
      <ExcellentGuides />
      <AboutGuide />
      <ExcellentGuidesGrid />
      <AwesomePartners />
    </div>
  );
};

export default Guide;
