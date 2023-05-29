import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import ExcellentGuidesSlider from "./ExcellentGuidesSlider";

const ExcellentGuides = () => {
  return (
    <Section className="mt-[2rem] md:mt-[3rem]">
      <Container>
        <Heading
          title={"Meet Our Excellent Guides"}
          topTitle={"Tour Guides"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <ExcellentGuidesSlider />
      </Container>
    </Section>
  );
};

export default ExcellentGuides;
