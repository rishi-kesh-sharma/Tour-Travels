import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import SpecialFlightOffersCards from "./SpecialFlightOffersCards.jsx";

const SpecialFlightOffers = () => {
  return (
    <Section className="mt-[3rem]">
      <Container>
        <Heading
          title={"Special Flight Offers"}
          topTitle={"Top Offers"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <SpecialFlightOffersCards />
      </Container>
    </Section>
  );
};

export default SpecialFlightOffers;
