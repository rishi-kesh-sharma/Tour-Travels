import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import BestTourPackagesCards from "./BestTourPackagesCards";

const BestTourPackages = () => {
  return (
    <Section className="mt-[2rem] lg:mt-[4rem]">
      <Container>
        <Heading
          centered={true}
          className="m-0"
          title={"Best Tour Packages"}
          topTitle={"Top Pick"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <BestTourPackagesCards />
      </Container>
    </Section>
  );
};

export default BestTourPackages;
