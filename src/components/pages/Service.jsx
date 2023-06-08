import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Sidebar from "../sections/service/Sidebar";
import Banner from "../utils/Banner";
import ServiceDetail from "../sections/service/ServiceDetail";
import VideoSection from "../sections/service/VideoSection";
import AwesomePartners from "../sections/service/AwesomePartners";

const Service = () => {
  return (
    <Section className=" overflow-hidden w-full">
      <Banner title={"Service List"} breadCrumbs={["Home", "Service"]} />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3rem] mt-[3rem] overflow-hidden">
        <ServiceDetail />
        <Sidebar />
      </Container>
      <Container>
        <VideoSection />
        <AwesomePartners />
      </Container>
    </Section>
  );
};

export default Service;
