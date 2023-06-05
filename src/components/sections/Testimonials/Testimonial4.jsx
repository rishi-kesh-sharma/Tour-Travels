import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import Testimonials4Cards from "./Testimonials4Cards.jsx";
import { GetToKnowData } from "@/data";
import { Button } from "antd";

const Reviews = () => {
  return (
    <Section className="relative mt-[3rem]  bg-[url(https://htmldesigntemplates.com/html/travelin/images/bg/bg1.jpg)] bg-center bg-no-repeat bg-cover pt-[2rem] pb-[5rem] ">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-60"></div>

      <Container className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-[3rem] lg:gap-[7rem] py-[2rem] relative justify-items-start h-[400px]">
        <div className="relative z-30 text-white flex flex-col gap-2">
          <h2 className="text-xl text-secondary font-semibold text-center md:text-start">
            Our Testimonials
          </h2>
          <h1 className="text-3xl font-semibold text-center md:text-start">
            Good Reviews By{" "}
            <span className="text-primary text-3xl font-semibold text-center md:text-start">
              Clients
            </span>
          </h1>
          <p className="text-xs md:text-sm text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            consequuntur, voluptate quibusdam repellat saepe similique
          </p>
        </div>
        <Testimonials4Cards />
      </Container>
    </Section>
  );
};

export default Reviews;
