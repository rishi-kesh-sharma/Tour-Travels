import React from "react";
import Section from "../utils/Section";
import ToursList from "../sections/tours/ToursList";
import Container from "../utils/Container";
import Sidebar from "../sections/tours/Sidebar";
import Banner from "../utils/Banner";

const Tours = () => {
  return (
    <Section className="mt-[4rem] overflow-hidden w-full">
      <Banner title={"Tours List"} breadCrumbs={["Home","Tours"]}/>
      <Container className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[3rem] mt-[3rem] overflow-hidden">
        <Sidebar/>
        <ToursList />
      </Container>
    </Section>
  );
};

export default Tours;
