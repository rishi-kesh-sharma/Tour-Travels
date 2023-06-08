import React from "react";
import AwesomePartners from "@/components/sections/home/AwesomePartners";
import Banner from "../utils/Banner.jsx";
import Testimonials1 from "../sections/Testimonials/Testimonial1.jsx";
import Testimonials3 from "../sections/Testimonials/Testimonial3.jsx";
import Testimonials4 from "../sections/Testimonials/Testimonial4.jsx";
import VideoSection from "../sections/home/VideoSection.jsx";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-8">
      <Banner title={"Testimonials"} breadCrumbs={["Home", "Testimonials"]} />
      <Testimonials1 />
      <Testimonials4 />
      <Testimonials3 />
      <VideoSection />
      <AwesomePartners />
    </div>
  );
};

export default Testimonials;
