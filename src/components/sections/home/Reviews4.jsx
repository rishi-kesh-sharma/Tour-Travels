import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
import React from "react";
import ReviewsCards from "./ReviewsCards4.jsx";
import cl1 from "/public/assets/images/cl-1.png";
import cl2 from "/public/assets/images/cl-2.png";
import cl3 from "/public/assets/images/cl-3.png";
import cl4 from "/public/assets/images/cl-4.png";
import cl5 from "/public/assets/images/cl-5.png";
import cl6 from "/public/assets/images/cl-6.png";
import cl7 from "/public/assets/images/cl-7.png";
import cl8 from "/public/assets/images/cl-8.png";
const cl = [cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8];

const Reviews = () => {
  return (
    <Section className="mt-[2rem] md:mt-[5rem] ">
      <Container>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold max-w-[500px] mx-auto ">
          What our customers are saying about us
        </h1>
        <ReviewsCards />
      </Container>
    </Section>
  );
};

export default Reviews;
