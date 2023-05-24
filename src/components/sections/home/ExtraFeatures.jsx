import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import ExtraFeaturesCards from "./ExtraFeaturesCards";

const ExtraFeatures = () => {
  return (
    <Section className="mt-[2rem] md:mt-[3rem]">
      <Container>
        <Heading
          className="items-start m-0 justify-start "
          title={"Find Extra Features"}
          topTitle={"Core Features"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <ExtraFeaturesCards />
      </Container>
    </Section>
  );
};

export default ExtraFeatures;
