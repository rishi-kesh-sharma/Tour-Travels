import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
import React from "react";
import Testimonials2Cards from "./Testimonials2Cards.jsx";

const Reviews = () => {
  return (
    <Section className="mt-[2rem] md:mt-[5rem] ">
      <Container>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold max-w-[500px] mx-auto ">
          What our customers are saying about us
        </h1>
        <Testimonials2Cards />
      </Container>
    </Section>
  );
};

export default Reviews;
