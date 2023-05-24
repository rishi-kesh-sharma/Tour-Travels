import React from "react";
import Hero from "../../sections/home/Hero4.jsx";
import HeroCards from "../../sections/home/HeroCards";
import FindTravel from "../../sections/home/FindTravel";
import TopDestinations from "../../sections/home/TopDestinations4.jsx";
import GetToKnow from "../../sections/home/GetToKnow";
import BestTourPackages from "../../sections/home/BestTourPackages";
import LastMinuteDeals from "../../sections/home/LastMinuteDeals";
import VideoSection from "../../sections/home/VideoSection";
import ExcellentGuides from "../../sections/home/ExcellentGuides";
import SpecialOffers from "../../sections/home/SpecialOffers";
import Reviews from "../../sections/home/Reviews4.jsx";
import RecentBlogs from "../../sections/home/RecentBlogs";
import PopularTours from "@/components/sections/home/PopularTours4.jsx";
import FreshlyAdded from "@/components/sections/home/FreshlyAdded.jsx";
import HotelRooms from "@/components/sections/home/HotelRooms.jsx";
import DiscoverSpecialDeals from "@/components/sections/home/DiscoverSpecialDeals.jsx";
import MetaInfo from "@/components/sections/home/MetaInfo4.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      <TopDestinations />
      <PopularTours />
      <FreshlyAdded />
      <HotelRooms />
      <DiscoverSpecialDeals />
      <Reviews />
      <MetaInfo />
      {/* <FindTravel /> */}
      {/* <GetToKnow /> */}
      {/* <BestTourPackages /> */}
      {/* <LastMinuteDeals />
      <VideoSection />
      <SpecialOffers />
      <ExcellentGuides /> */}
      {/* <RecentBlogs /> */}
    </div>
  );
};

export default Home;
