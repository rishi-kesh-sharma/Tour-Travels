import React from "react";
import AwesomePartners from "@/components/sections/home/AwesomePartners";
import Banner from "../utils/Banner.jsx";
import VideoSection from "../sections/home/VideoSection.jsx";
import FAQ from "../sections/FAQ/FAQ";
import ContactForm from "../sections/FAQ/ContactForm.jsx";

const Testimonials = () => {
  return (
    <div className="flex flex-col  gap-10">
      <Banner title={"FAQ"} breadCrumbs={["Home", "FAQ"]} />
      <FAQ />
      <ContactForm />
      <VideoSection />
      <AwesomePartners />
    </div>
  );
};

export default Testimonials;
