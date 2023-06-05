import React from "react";
import AwesomePartners from "@/components/sections/home/AwesomePartners";
import Banner from "../utils/Banner.jsx";
import VideoSection from "../sections/home/VideoSection.jsx";
import ContactForm from "../sections/contact/ContactForm.jsx";
import Information from "../sections/contact/Information.jsx";
import Container from "../utils/Container.jsx";
import Section from "../utils/Section.jsx";
import NotFoundImage from "/public/assets/images/404.svg";
import Image from "next/image.js";
import { Button } from "antd";
const NotFound = () => {
  return (
    <Section className="mt-[5rem]">
      <Container className="flex flex-col gap-11 items-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-start">
          Oops! Page Not Found
        </h2>
        <Image src={NotFoundImage} className="md:h-[400px] object-contain" />
        <h3 className="text-xl font-semibold text-center  max-w-[400px]">
          We Are Sorry, But The Page You Requested Was Not Found
        </h3>
        <div className="flex gap-4 flex-col md:flex-row">
          <Button type="ghost" size="large" className="bg-primary text-white">
            Go To HomePage
          </Button>
          <Button type="ghost" size="large" className="bg-primary text-white">
            Go To ContactPage
          </Button>
        </div>
      </Container>
    </Section>
  );
};
export default NotFound;
