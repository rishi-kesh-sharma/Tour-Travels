import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import TopDestinationCards from "./TopDestinationCards4.jsx";
import { Button } from "antd";
import { BsArrowRight } from "react-icons/bs";

const TopDestinations = () => {
  return (
    <Section className="mt-[3rem]">
      <Container>
        <div className="flex flex-col items-center gap-[1rem]">
          <Heading
            title={" Top Destinations"}
            subtitle={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
            }
          />
          <Button
            type="ghost"
            size="middle"
            icon={<BsArrowRight />}
            className="text-gray-500 flex flex-row-reverse items-center gap-[0.3rem] border-b border-b-primary shadow-sm">
            All Destinations
          </Button>
        </div>
        <TopDestinationCards />
      </Container>
    </Section>
  );
};

export default TopDestinations;
