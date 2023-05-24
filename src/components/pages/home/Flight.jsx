import React from "react";
import Hero from "../../sections/home/FlightHero.jsx";
import FlightCards from "../../sections/home/FlightCards";
import FindTravel from "../../sections/home/FindTravel";
import TopDestinations from "../../sections/home/TopDestinations";
import BestTourRoutes from "../../sections/home/BestTourRoutes.jsx";
import VideoSection from "../../sections/home/VideoSection";
import SpecialFlightOffers from "../../sections/home/SpecialFlightOffers.jsx";
import FlightReviews from "../../sections/home/FlightReviews.jsx";
import RecentBlogs from "../../sections/home/RecentBlogs";
import ScheduledFlights from "@/components/sections/home/ScheduledFlights";

const Home = () => {
  return (
    <div>
      <Hero />
      <FlightCards />
      <FindTravel />
      <TopDestinations />
      <BestTourRoutes />
      <ScheduledFlights />
      <VideoSection />
      <SpecialFlightOffers />
      <FlightReviews />
      <RecentBlogs />
    </div>
  );
};

export default Home;
