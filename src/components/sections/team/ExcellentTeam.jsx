import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import ExcellentTeamSlider from "./ExcellentTeamSlider";

const ExcellentTeam = () => {
  return (
    <Section className="mt-[2rem] md:mt-[3rem]">
      <Container>
        <Heading
          title={"Meet Our Excellent Team"}
          topTitle={"Tour Team"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <ExcellentTeamSlider />
      </Container>
    </Section>
  );
};

export default ExcellentTeam;
