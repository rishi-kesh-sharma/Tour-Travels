import React from "react";

import Card from "../../utils/Card";
import { findTravelData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
const FindTravelCards = () => {
  return (
    <Section className="md:mt-[2rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4   ">
        {findTravelData.map((item, index) => (
          <div className=" p-5 ">
            <Card
              className="group justify-center cursor-pointer shadow-md transition-all  hover:bg-primary hover:text-gray-100 gap-0"
              item={item}
              key={index}>
              <p className="text-6xl">{item.icon}</p>
              <h3 className="text-center font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs max-w-[500px] text-center group-hover:text-gray-200">
                {item.subtitle}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FindTravelCards;
