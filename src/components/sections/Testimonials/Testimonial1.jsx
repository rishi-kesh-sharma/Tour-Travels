import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import Testimonial1Cards from "./Testimonial1Cards";
import cl1 from "/public/assets/images/cl-1.png";
import cl2 from "/public/assets/images/cl-2.png";
import cl3 from "/public/assets/images/cl-3.png";
import cl4 from "/public/assets/images/cl-4.png";
import cl5 from "/public/assets/images/cl-5.png";
import cl6 from "/public/assets/images/cl-6.png";
import cl7 from "/public/assets/images/cl-7.png";
import cl8 from "/public/assets/images/cl-8.png";
import Image from "next/image";
const cl = [cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8];

const Reviews = () => {
  return (
    <Section className="mt-[3rem] lg:mt-[1rem]">
      <Container>
        <Heading
          title={"Good Reviews By Clients"}
          topTitle={"Our Testimonails"}
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
