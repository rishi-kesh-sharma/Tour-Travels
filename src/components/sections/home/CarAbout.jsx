import React from "react";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import Image from "next/image";
import CarsCollection from "/public/assets/images/cars/carsCollection.png";
import { carMetaData } from "@/data";

const About = () => {
  return (
    <Section className=" relative pt-[3rem]   md:pt-[7rem] bg-primary pb-[3rem]">
      <Container className=" text-gray-600 flex flex-col gap-[2rem]">
        <Section className="grid grid-cols-1 md:grid-cols-2 items-start gap-[2rem] ">
          <div className="flex flex-col flex-nowrap gap-[2rem] ">
            <h1 className="text-3xl font-semibold  text-gray-50">
              Your Comfortable Journey With Us. We Are Trusted By More Than 1500
              Clients
            </h1>
            <p className="text-sm text-gray-100 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              eligendi quod voluptas ipsam magni rem et, omnis beatae fuga
              impedit! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Maiores ex nam in sunt nemo quod fugiat ipsa nostrum consequuntur
              soluta. Lorem ipsum, dolor sit amet consectetur .
            </p>
          </div>
          <div className="  grid grid-cols-2   gap-[1rem] rounded-lg items-center m md;items-start">
            {carMetaData.map((item) => {
              return (
                <div className="border border-white px-[0.4rem] text-center py-[1.5rem] rounded-lg">
                  <h1 className="text-xl text-white font-semibold">
                    {item.count}
                  </h1>
                  <p className="text-xs  text-gray-100">{item.title}</p>
                </div>
              );
            })}
          </div>
        </Section>
        <Section>
          <Image
            src={CarsCollection}
            className="object-contain max-h-[500px] rounded-lg"
          />
        </Section>
      </Container>
    </Section>
  );
};

export default About;
