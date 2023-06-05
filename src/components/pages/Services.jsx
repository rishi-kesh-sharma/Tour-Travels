import React from "react";
import Banner from "../utils/Banner";
import GetToKnow from "../sections/services/GetToKnow";
import FindTravel from "../sections/services/FindTravel";
import VideoSection from "../sections/services/VideoSection";
import AwesomePartners from "../sections/services/AwesomePartners";

const Services = () => {
  return (
    <div>
      <Banner breadCrumbs={["Home", "Our Service"]} title={"Our Services"} />
      <FindTravel />
      <GetToKnow />
      <VideoSection />
      <AwesomePartners />
    </div>
  );
};

export default Services;
