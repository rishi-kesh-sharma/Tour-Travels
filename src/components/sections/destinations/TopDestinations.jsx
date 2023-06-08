import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import TopDestinationsCards from "./TopDestinationsCards";

const TopDestinations = () => {
  return (
    <Section className=" mt-[3rem] md:mt-[3rem]">
      <Container>
        <Heading
          title={"Explore Top Destinations"}
          topTitle={"Top Destinations"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <TopDestinationsCards />
      </Container>
    </Section>
  );
};

export default TopDestinations;
