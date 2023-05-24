import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import CarOfferDealsCards from "./CarOfferDealsCards.jsx";

const CarOfferDeals = () => {
  return (
    <Section className="mt-[3rem]">
      <Container>
        <Heading
          title={"Cars Offer Deals"}
          topTitle={"OFFER DEALS"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <CarOfferDealsCards />
      </Container>
    </Section>
  );
};

export default CarOfferDeals;
