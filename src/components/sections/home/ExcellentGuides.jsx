import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import Video from "./Video";
import ExcellentGuidesCards from "./ExcellentGuidesCards";

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
        <ExcellentGuidesCards />
      </Container>
    </Section>
  );
};

export default ExcellentGuides;
