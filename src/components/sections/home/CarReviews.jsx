import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import CarReviewsCards from "./CarReviewsCards.jsx";
import { GetToKnowData } from "@/data";
import { Button } from "antd";

const Reviews = () => {
  return (
    <Section className="relative mt-[3rem] b bg-center bg-no-repeat bg-cover  ">
      <Container className="">
        <div
          className={`heading flex gap-[0.6rem]   flex-col m-auto  max-w-[600px] `}>
          <p className={` text-secondary   text-lg  text-center`}>
            {"Our Testimonials"}
          </p>

          <h1 className={`text-3xl font-semibold text-center`}>
            {"Good Reviews By "}
            <span className="text-primary">Clients</span>
          </h1>
          <p className={`text-gray-500 text-sm text-center`}>
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
            }
          </p>
        </div>
        <CarReviewsCards />
      </Container>
    </Section>
  );
};

export default Reviews;
