import React from "react";
import Section from "../utils/Section";
import ConfirmationForm from "../sections/confirmation/ConfirmationForm";
import Container from "../utils/Container";
import Banner from "../utils/Banner";
import Sidebar from "../sections/confirmation/SideBar";

const Confirmation = () => {
  return (
    <Section className="mt-[4rem] overflow-hidden w-full">
      <Banner title={"Confirmation"} breadCrumbs={["Home", "Confirmation"]} />
      <Container className="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-3 gap-[3rem] mt-[3rem]  items-start">
        <ConfirmationForm />
        <Sidebar />
      </Container>
    </Section>
  );
};
export default Confirmation;
