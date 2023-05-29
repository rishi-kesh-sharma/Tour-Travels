import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import ExcellentGuidesGridCards from "./ExcellentGuidesGridCards";

const ExcellentGuidesGrid = () => {
  return (
    <Section className="mt-[2rem] md:mt-[3rem]">
      <Container className="grid grid-cols-1  lg:grid-cols-4 md:gap-[2rem] items-start">
        <Heading
          centered={true}
          className="md:my-0   mx-auto"
          title={"Meet Our Excellent Guides"}
          topTitle={"Tour Guides"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <ExcellentGuidesGridCards />
      </Container>
    </Section>
  );
};

export default ExcellentGuidesGrid;
