import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import FreshlyAddedCards from "./FreshlyAddedCards.jsx";
import { Button } from "antd";
import { BsArrowRight } from "react-icons/bs";

const FreshlyAdded = () => {
  return (
    <Section className="mt-[2rem] md:mt-[3rem]">
      <Container>
        <div className="flex flex-col items-center gap-[1rem]">
          <Heading title={" Freshly Added"} />
        </div>
        <FreshlyAddedCards />
        <div className="w-full flex mt-[1rem] md:mt-[2rem] m-auto justify-center">
          <Button
            type="ghost"
            size="middle"
            icon={<BsArrowRight />}
            className="text-gray-500 flex flex-row-reverse items-center gap-[0.3rem] border-b border-b-primary shadow-sm">
            View All Tours
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default FreshlyAdded;
