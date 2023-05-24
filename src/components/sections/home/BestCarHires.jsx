import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import BestCarHiresCards from "./BestCarHiresCards.jsx";

const BestCarHires = () => {
  return (
    <Section className="mt-[3rem]">
      <Container>
        <Heading
          title={"Best Car Hires"}
          topTitle={"Top Pick"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <BestCarHiresCards />
      </Container>
    </Section>
  );
};

export default BestCarHires;
