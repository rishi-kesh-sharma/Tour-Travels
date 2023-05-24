import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
import { site4MetaData } from "@/data";
import Image from "next/image";
import React from "react";

const MetaInfo = () => {
  return (
    <Section className=" ">
      <Container className="grid grid-cols-1 gap-[2rem] items-center">
        {site4MetaData.map((item, index) => {
          return (
            <div className="flex flex-row gap-[1rem] md:items-center">
              <Image
                src={item?.image}
                className="h-[80px] w-[80px] object-cover md:object-contain"
              />
              <div className="flex flex-col gap-[0.5rem] md:gap-0 lg:gap-[0.5rem] justify-center ">
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="text-xs lg:text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </Container>
    </Section>
  );
};
export default MetaInfo;
