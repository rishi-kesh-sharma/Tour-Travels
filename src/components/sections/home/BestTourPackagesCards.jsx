import React from "react";

import Card from "../../utils/Card";
import { bestTourPackagesData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import { Button, Rate } from "antd";
import CardImage from "@/components/utils/CardImage";
import CustomSlider from "../../utils/CustomSlider";
import CardContent from "@/components/utils/CardContent";
const BestTourPackagesCards = () => {
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
    <Section className="  lg:p-[2rem] rounded-lg ">
      {/* <div className="grid grid-cols-2  lg:grid-cols-3  gap-[2rem]   justify-start"> */}
      <CustomSlider dynamicSetting={dynamicSetting}>
        {bestTourPackagesData.map((item, index) => (
          <div className="py-2 pr-5">
            <Card className="bg-white cursor-pointer border-white   hover:border-primary  border-b-2">
              <CardImage>
                <Image src={item.image[0]} className="rounded-lg" />
              </CardImage>
              <CardContent className="gap-[0.3rem]">
                <h2 className="text-primary  text-sm">{item.country}</h2>
                <h1 className="text-lg font-semibold">{item.place}</h1>
                <div>
                  <Rate key={index} allowHalf defaultValue={item?.rating} />
                  <span className="text-gray-500">({item?.totalTours})</span>
                </div>
                <p className="text-sm text-gray-400">{item.description}</p>
                <div className="flex gap-[0.3rem] items-center">
                  <h2 className="text-semibold text-primary ">${item.cost} </h2>
                  <span className="text-gray-500">|Per Person</span>
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

export default BestTourPackagesCards;
