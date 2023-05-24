import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import PopularToursCards from "./PopularToursCards4.jsx";
import { Button } from "antd";
import { BsArrowRight } from "react-icons/bs";

const PopularTours = () => {
  return (
    <Section className="mt-[3rem] lg:mt-[5rem]">
      <Container>
        <div className="flex flex-col items-center gap-[1rem]">
          <Heading title={" Popular Tours"} />
        </div>
        <PopularToursCards />
      </Container>
    </Section>
  );
};

export default PopularTours;
