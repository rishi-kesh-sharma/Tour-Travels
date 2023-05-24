import React from "react";
import Hero from "../../sections/home/Hero2";
import About from "../../sections/home/About.jsx";
import TopDestinations from "../../sections/home/TopDestinations";
import BestTourPackages from "../../sections/home/BestTourPackages";
import LastMinuteDeals from "../../sections/home/LastMinuteDeals";
import VideoSection from "../../sections/home/VideoSection";
import ExcellentGuides from "../../sections/home/ExcellentGuides";
import SpecialOffers from "../../sections/home/SpecialOffers";
import Reviews from "../../sections/home/Reviews";
import RecentBlogs from "../../sections/home/RecentBlogs";
import AwesomePartners from "@/components/sections/home/AwesomePartners";
import ExtraFeatures from "@/components/sections/home/ExtraFeatures";

const Home = () => {
  return (
    <div>
      <Hero />
      <ExtraFeatures />
      <About />
      <BestTourPackages />
      <VideoSection />
      <TopDestinations />
      <LastMinuteDeals />
      <SpecialOffers />
      <ExcellentGuides />
      <RecentBlogs />
      <Reviews />
      <AwesomePartners />
    </div>
  );
};

export default Home;
