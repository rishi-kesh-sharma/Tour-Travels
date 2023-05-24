import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
import Image from "next/image";
import React from "react";
import AboutImage from "/public/assets/images/about/about2topsectionimage.jpg";
import MetaInfo from "./MetaInfo2";
const TopSection = () => {
  return (
    <Section className="mt-[3rem]">
      <Container className="grid grid-cols-2 gap-[2rem] items-center">
        <Section>
          <Image src={AboutImage} />
        </Section>
        <Section className="flex flex-col gap-[1rem]">
          <div>
            <h2 className="text-3xl font-semibold">
              We have been in the tourism industry for more than 20 years
            </h2>
            <p>
              Leave your guidebooks at home and dive into the local cultures
              that make each destination so special. We’ll connect you with our
              exclusive experiences.
            </p>
          </div>
          <div>
            <MetaInfo />
          </div>
        </Section>
      </Container>
    </Section>
  );
};
export default TopSection;
