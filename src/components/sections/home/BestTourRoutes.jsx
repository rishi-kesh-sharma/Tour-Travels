import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import BestTourRoutesCards from "./BestTourRoutesCards.jsx";

const BestTourPackages = () => {
  return (
    <Section className="mt-[2rem] md:mt-[4rem] lg:mt-[6rem]">
      <Container>
        <Heading
          // centered={false}
          className="m-0"
          title={"Best Tour Routes"}
          topTitle={"Top Pick"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <BestTourRoutesCards />
      </Container>
    </Section>
  );
};

export default BestTourPackages;
