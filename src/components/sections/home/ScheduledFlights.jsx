import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import FlightScheduleTable from "./FlightScheduleTable.jsx";

const ScheduledFlights = () => {
  return (
    <Section className="lg:mt-[3rem] hidden md:block w-full overflow-auto">
      <Container>
        <Heading
          title={"Find Your Flight Scheduled"}
          topTitle={"Recommended Flights"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
          }
        />
        <FlightScheduleTable />
      </Container>
    </Section>
  );
};

export default ScheduledFlights;
