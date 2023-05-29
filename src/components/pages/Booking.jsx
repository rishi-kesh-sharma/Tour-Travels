import React from "react";
import Section from "../utils/Section";
import BookingForm from "../sections/booking/BookingForm.jsx";
import Container from "../utils/Container";
import Banner from "../utils/Banner";
import Sidebar from "../sections/booking/Sidebar";

const Booking = () => {
  return (
    <Section className="mt-[4rem] overflow-hidden w-full">
      <Banner title={"Booking"} breadCrumbs={["Home", "Booking"]} />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] mt-[3rem] overflow-hidden items-start">
        <BookingForm />
        <Sidebar />
      </Container>
    </Section>
  );
};
export default Booking;
