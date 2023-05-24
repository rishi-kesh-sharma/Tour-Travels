import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import FindTravelCards from "./FindTravelCards";

const FindTravel = () => {
  return (
    <Section className="mt-[2rem] md:mt-[3rem]">
      <Container>
        <Heading
          title={"Find Travel Perfection"}
          topTitle={"3 Step Of The Perfect Tour"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <FindTravelCards />
      </Container>
    </Section>
  );
};

export default FindTravel;
