import React from "react";
import VideoSection from "../sections/home/VideoSection";
import Banner from "../utils/Banner";
import TopDestinations from "../sections/destinations/TopDestinations";
import AwesomePartners from "../sections/destinations/AwesomePartners";

const Home = () => {
  return (
    <div>
      <Banner
        title={"Destination List"}
        breadCrumbs={["Home", "Destination Lists"]}
      />
      <TopDestinations />
      <VideoSection />
      <AwesomePartners />
    </div>
  );
};

export default Home;
