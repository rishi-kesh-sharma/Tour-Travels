import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Sidebar from "../sections/Destination/Sidebar.jsx";
import Banner from "../utils/Banner";
import DestinationDetail from "../sections/Destination/DestinationDetails";
import { topDestinationData } from "@/data";
import AwesomePartners from "../sections/home/AwesomePartners";

const Destination = () => {
  const Destination = topDestinationData[0];
  return (
    <Section className="overflow-hidden w-full">
      <Banner
        title={"Bangkok - Thailand"}
        breadCrumbs={["Home", "Destination Detail"]}
      />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[3rem] mt-[3rem] overflow-hidden">
        <DestinationDetail />
        <Sidebar />
      </Container>
      <AwesomePartners />
    </Section>
  );
};

export default Destination;
