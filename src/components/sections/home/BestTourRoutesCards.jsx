import React from "react";

import Card from "../../utils/Card";
import { bestTourRoutesData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import { Button, Rate } from "antd";
import CardImage from "@/components/utils/CardImage";
import CustomSlider from "../../utils/CustomSlider";
import CardContent from "@/components/utils/CardContent";
const BestTourRoutesCards = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: null,
    prevArrow: null,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <Section className="  md:p-[2rem] rounded-lg ">
      {/* <div className="grid grid-cols-2  lg:grid-cols-3  gap-[2rem]   justify-start"> */}
      <CustomSlider dynamicSetting={dynamicSetting}>
        {bestTourRoutesData.map((item, index) => (
          <div className="md:py-2 pr-2 md:pr-5">
            <Card className="bg-white cursor-pointer    hover:border-primary  border-b-2 items-start">
              <CardImage>
                <Image src={item.image} className="rounded-lg" />
              </CardImage>
              <CardContent className="gap-[0.3rem] justify-start">
                <h1 className="text-lg font-semibold">
                  {item.from} To {item.to}
                </h1>
                <div className="text-gray-500 text-sm">
                  <span>{item.type}</span>
                  <span>| {item.departure}</span>
                  <span>- {item.return}</span>
                </div>
                <div className="flex gap-[0.3rem] items-center">
                  <span className="text-gray-500 text-sm">From</span>
                  <h2 className="text-semibold text-primary ">${item.cost} </h2>
                  <span className="text-gray-500 text-sm">|Per Person</span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </CustomSlider>
      {/* </div> */}
    </Section>
  );
};

export default BestTourRoutesCards;
