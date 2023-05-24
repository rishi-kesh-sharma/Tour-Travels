import React from "react";
import Hero from "../../sections/home/CarHero.jsx";
import CarCards from "../../sections/home/CarCards.jsx";
import FindTravel from "../../sections/home/FindTravel";
import TopDestinations from "../../sections/home/TopDestinations";
import BestCarHires from "../../sections/home/BestCarHires.jsx";
import VideoSection from "../../sections/home/VideoSection";
import CarOffersDeals from "../../sections/home/CarOffersDeals.jsx";
import CarReviews from "../../sections/home/CarReviews.jsx";
import RecentBlogs from "../../sections/home/RecentBlogs";
import About from "@/components/sections/home/CarAbout.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <CarCards />
      <CarOffersDeals />
      <FindTravel />
      <BestCarHires />
      <VideoSection />
      <About />
      <CarReviews />
      <RecentBlogs />
    </div>
  );
};

export default Home;
