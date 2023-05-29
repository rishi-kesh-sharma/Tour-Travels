import React from "react";

import Card from "../../utils/Card";
import CostumSlider from "../../utils/CustomSlider";
import { guidesData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
const ExcellentGuidesSlider = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: null,
    prevArrow: null,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <Section className="">
      <CostumSlider dynamicSetting={dynamicSetting}>
        {guidesData.map((item, index) => (
          <div className="pt-5 pr-5 rounded-lg hover:translate-y-[-1rem] transition-all cursor-pointer">
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
      </CostumSlider>
    </Section>
  );
};

export default ExcellentGuidesSlider;
