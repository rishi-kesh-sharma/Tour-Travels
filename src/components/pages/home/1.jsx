import React from "react";
import Hero from "../../sections/home/Hero1";
import HeroCards from "../../sections/home/HeroCards";
import FindTravel from "../../sections/home/FindTravel";
import TopDestinations from "../../sections/home/TopDestinations";
import GetToKnow from "../../sections/home/GetToKnow";
import BestTourPackages from "../../sections/home/BestTourPackages";
import LastMinuteDeals from "../../sections/home/LastMinuteDeals";
import VideoSection from "../../sections/home/VideoSection";
import ExcellentGuides from "../../sections/home/ExcellentGuides";
import SpecialOffers from "../../sections/home/SpecialOffers";
import Reviews from "../../sections/home/Reviews";
import RecentBlogs from "../../sections/home/RecentBlogs";
import AwesomePartners from "@/components/sections/home/AwesomePartners";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroCards />
      <FindTravel />
      <TopDestinations />
      <BestTourPackages />
      <LastMinuteDeals />
      <GetToKnow />
      <ExcellentGuides />
      <SpecialOffers />
      <VideoSection />
      <Reviews />
      <RecentBlogs />
      <AwesomePartners />
    </div>
  );
};

export default Home;
