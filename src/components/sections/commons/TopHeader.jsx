import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";

import React from "react";

import { topHeaderItems } from "@/data";
const TopHeader = () => {
  return (
    <Section className={`bg-primary  h-[3rem] `}>
      <Container
        className={`text-white flex flex-nowrap items-center h-full justify-between gap-[1rem] md:gap-[3rem]`}>
        <ul className="flex gap-[1.3rem] items-center justify-between w-full">
          {topHeaderItems.left.map((item, index) => {
            return (
              <li
                key={index}
                className="flex  flex-nowrap items-center gap-[0.2rem] md:gap-[0.3rem] text-xs">
                {item.icon}
                <span className="text-xs ">{item.content}</span>
              </li>
            );
          })}
        </ul>
        <ul className="hidden md:flex flex-nowrap items-center gap-[1.5rem] ">
          {topHeaderItems.socials?.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.ur}>
                  {item.icon} <span className="text-xs">{item.content}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};

export default TopHeader;
