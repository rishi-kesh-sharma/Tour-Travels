import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
import Image from "next/image";
import React from "react";
import AboutImage from "/public/assets/images/about/about2topsectionimage.jpg";
import MetaInfo from "./MetaInfo2";
import { Button } from "antd";
const TopSection = () => {
  return (
    <Section className="mt-[3rem]">
      <Container className="grid  md:grid-cols-2 gap-[2rem] items-center">
        <Section>
          <Image src={AboutImage} />
        </Section>
        <Section className="flex flex-col gap-[1rem]">
          <div>
            <h2 className="text-xl md:text-3xl  font-semibold">
              We have been in the tourism industry for more than 20 years
            </h2>
            <p className="text-sm text-gray-500">
              Leave your guidebooks at home and dive into the local cultures
              that make each destination so special. We’ll connect you with our
              exclusive experiences.
            </p>
          </div>
          <div>
            <MetaInfo />
          </div>
          <Button
            size="large"
            type="ghost"
            className="bg-primary max-w-[150px] text-white mt-[1rem]">
            Book Now!
          </Button>
        </Section>
      </Container>
    </Section>
  );
};
export default TopSection;
