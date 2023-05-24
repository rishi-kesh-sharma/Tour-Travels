import React from "react";

import Card from "../../utils/Card";
import { topDestinationData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import { Button } from "antd";
import GetToKnow from "./GetToKnow";
const TopDestinationCards = () => {
  return (
    <Section className="mt-[2rem]">
      <div className="grid grid-cols-1  md:grid-cols-7  gap-[1.5rem] md:grid-rows-2 md:h-[500px] justify-start">
        {topDestinationData.map((item, index) => (
          <div
            key={index}
            className={` ${
              index == 0 ? "md:row-span-2 md:col-span-3" : "md:col-span-2"
            } p-[5rem] md:p-5 relative rounded-lg group overflow-hidden  `}>
            <Card
              className="  overflow-hidden gap-[1rem] px-[1rem] justify-center cursor-pointer shadow-md transition-all  hover:bg-primary hover:text-gray-100 md:h-full"
              item={item}
              key={index}>
              <div className="after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-30 after:bg-black after:opacity-20 group-hover:after:opacity-30 "></div>
              <div className="absolute z-40 bottom-[4rem] left-[1rem] ">
                <p className="text-secondary  max-w-[500px] text-start font-semibold ">
                  {item.country}
                </p>
                <h3 className=" font-semibold text-xl absolute text-white ">
                  {item.place}
                </h3>
              </div>
              <Button
                size="large"
                type="ghost"
                className="bg-primary text-gray-100 absolute right-[0.5rem] z-30 bottom-[2rem] md:bottom-[80%] lg:bottom-[2rem]  ">
                {item.totalTours}
              </Button>
              <Image
                height={"100px"}
                className="  absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover rounded-lg group-hover:scale-110  transition-all duration-700"
                src={item.image}
              />
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TopDestinationCards;
