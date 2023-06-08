import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import AwesomePartnersCards from "./AwesomePartnersCards.jsx";

const AwesomePartners = () => {
  return (
    <Section className="mt-[3rem] lg:mt-[4rem] ">
      <Container>
        <Heading
          title={"Our Awesome Partners"}
          topTitle={"Our Partners"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <AwesomePartnersCards />
      </Container>
    </Section>
  );
};

export default AwesomePartners;
