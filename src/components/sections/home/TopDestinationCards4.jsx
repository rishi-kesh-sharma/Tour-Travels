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
      <div className="grid  md:grid-cols-3  gap-[1.5rem] grid-rows-2 md:h-[500px] justify-start">
        {topDestinationData.map((item, index) => (
          <div
            key={index}
            className={` p-5 relative rounded-lg group overflow-hidden  h-full`}>
            <Card
              className="  overflow-hidden gap-[1rem] px-[1rem] justify-center cursor-pointer shadow-md transition-all  hover:bg-primary hover:text-gray-100 h-full"
              item={item}
              key={index}>
              <div className="after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-30 after:bg-black after:opacity-20 group-hover:after:opacity-60"></div>
              <div className="relative gap-[0.7rem] z-40 text-sm translate-y-[600%] h-full group-hover:translate-y-[0] transition-all duration-500 mt-[1rem]">
                <p className="text-center text-lg font-semibold">
                  {item.country}
                </p>
                <p className="text-center text-sm">{item.description}</p>
                <Button
                  type="ghost"
                  className="text-primary text-sm w-full m-auto">
                  View all tours
                </Button>
              </div>
              <div className="absolute z-40 bottom-[2rem] left-[50%] translate-x-[-50%] group-hover:translate-y-[200%] transition-all duration-700">
                <p className="text-white  max-w-[500px] text-start font-semibold text-lg">
                  {item.country}
                </p>
                {/* <h3 className=" font-semibold text-xl absolute text-white ">
                  {item.place}
                </h3> */}
              </div>
              <Button
                size="middle"
                className="bg-primary text-gray-100 absolute  z-30 top-[1rem] right-[1rem] ">
                {item.totalTours}
              </Button>
              <Image
                height={"100px"}
                className="  absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover rounded-lg "
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
