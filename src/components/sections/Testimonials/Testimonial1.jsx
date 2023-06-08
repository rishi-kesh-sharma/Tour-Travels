import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import Testimonial1Cards from "./Testimonial1Cards";

const Reviews = () => {
  return (
    <Section className="mt-[3rem] lg:mt-[1rem]">
      <Container>
        <Heading
          title={"Good Reviews By Clients"}
          topTitle={"Our Testimonials"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <Testimonial1Cards />
      </Container>
    </Section>
  );
};

export default Reviews;
