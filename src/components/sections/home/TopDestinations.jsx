import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import TopDestinationCards from "./TopDestinationCards";

const TopDestinations = () => {
  return (
    <Section className=" mt-[1rem] md:mt-[3rem]">
      <Container>
        <Heading
          title={"Explore Top Destinations"}
          topTitle={"Top Destinations"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <TopDestinationCards />
      </Container>
    </Section>
  );
};

export default TopDestinations;
