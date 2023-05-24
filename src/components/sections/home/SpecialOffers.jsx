import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import SpecialOffersCards from "./BestTourPackagesCards";

const SpecialOffers = () => {
  return (
    <Section className="mt-[1.8rem] md:mt-[3rem]">
      <Container>
        <Heading
          title={"Special Offers & Discount Packages"}
          topTitle={"Top Offers"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <SpecialOffersCards />
      </Container>
    </Section>
  );
};

export default SpecialOffers;
