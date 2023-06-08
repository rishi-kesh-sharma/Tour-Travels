import React from "react";

import Card from "../../utils/Card";
import { guidesData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";

const ExcellentGuidesGridCards = () => {
  return (
    <Section className=" grid  md:grid-cols-3 lg:col-span-3">
      {guidesData.slice(0, 6).map((item, index) => (
        <div className="pt-5 md:pt-3 lg:pt-5 pr-5 rounded-lg hover:translate-y-[-1rem] transition-all cursor-pointer">
          <Card
            className="rounded-lg cursor-pointer shadow-md px-0 transition-all  gap-0 py-0"
            item={item}
            key={index}>
            <Image src={item.image} className="rounded-t-lg" />
            <div className="bg-primary text-white w-full m-auto py-2 rounded-b-lg">
              <h3 className="text-center ">{item.name}</h3>
              <h3 className="text-center text-xs">{item.designation}</h3>
            </div>
          </Card>
        </div>
      ))}
    </Section>
  );
};

export default ExcellentGuidesGridCards;
