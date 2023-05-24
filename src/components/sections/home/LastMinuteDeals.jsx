import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import LastMinuteDealsCards from "./LastMinuteDealsCards";

const LastMinuteDeals = () => {
  return (
    <Section className="mt-[2rem] md:mt-[4rem] lg:mt-[2rem]">
      <Container>
        <Heading
          title={"The Last Minute Deals"}
          topTitle={"Top Deals"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <LastMinuteDealsCards />
      </Container>
    </Section>
  );
};

export default LastMinuteDeals;
