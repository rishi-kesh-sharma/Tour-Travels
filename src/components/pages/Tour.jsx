import React from "react";
import Section from "../utils/Section";
import TourDetail from "../sections/tour/TourDetail.jsx";
import Container from "../utils/Container";
import Banner from "../utils/Banner";
import { bestTourPackagesData } from "@/data";
import RelatedTours from "../sections/tour/RelatedTours";
import Sidebar from "../sections/tour/Sidebar";

const Tours = () => {
  return (
    <Section className=" overflow-hidden w-full">
      <Banner title={"Tours List"} breadCrumbs={["Home", "Tours"]} />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] mt-[3rem] overflow-hidden items-start">
        <TourDetail />
        <Sidebar />
      </Container>
      <Container className="mt-[2rem]">
        <h2 className="mb-[1rem] font-semibold text-lg">Related Tours</h2>
        <Section className=" grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[3rem]">
          {<RelatedTours tours={bestTourPackagesData.slice(0, 3)} />}
        </Section>
      </Container>
    </Section>
  );
};
export default Tours;
