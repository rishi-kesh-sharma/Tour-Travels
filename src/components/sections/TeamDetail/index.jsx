import Section from "@/components/utils/Section";
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Container from "@/components/utils/Container";

const TeamDetail = () => {
  return (
    <Section className="mt-16">
      <Container className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center md:justify-start gap-10">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <MainContent />
        </div>
      </Container>
      <Section className="bg-gray-100 py-[7rem] mt-16">
        <Container className=" w-full flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">Contact Info</h1>
          <div className="flex gap-2">
            <p className="text-gray-500"> Phone:</p>
            <p className="text-gray-500"> 9825517464</p>
          </div>

          <div className="flex gap-2">
            <p className="text-gray-500"> Email:</p>
            <p className="text-gray-500"> contact@gmail.com</p>
          </div>
        </Container>
      </Section>
    </Section>
  );
};

export default TeamDetail;
