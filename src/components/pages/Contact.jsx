import React from "react";
import AwesomePartners from "@/components/sections/home/AwesomePartners";
import Banner from "../utils/Banner.jsx";
import VideoSection from "../sections/home/VideoSection.jsx";
import ContactForm from "../sections/contact/ContactForm.jsx";
import Information from "../sections/contact/Information.jsx";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner title={"Contact"} breadCrumbs={["Home", "Contact"]} />
      <Information />
      <ContactForm />
      <VideoSection />
      <AwesomePartners />
    </div>
  );
};

export default Testimonials;
