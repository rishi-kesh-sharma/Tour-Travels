import React from "react";

import Card from "../../utils/Card";
import CostumSlider from "../../utils/CustomSlider";
import { reviewsData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import CarAboutImage from "/public/assets/images/carReviewImage.png";

const CarReviewsCards = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <Section className=" grid grid-cols-1  items-center mt-[2rem] gap-[2rem] ">
      <CostumSlider dynamicSetting={dynamicSetting}>
        {reviewsData.map((item, index) => (
          <div className="py-5 px-5 rounded-lg md:w-full">
            <Card
              className="rounded-lg items-start cursor-pointer shadow-sm px-[1rem] transition-all border-b-2 hover:border-b-primary bg-white p-8"
              item={item}
              key={index}>
              <div className="flex gap-[1rem] items-center">
                <Image
                  src={item.image}
                  className="rounded-full object-cover h-[80px] w-[80px]"
                />
                <div>
                  <h3 className="text-primary font-semibold">{item.name}</h3>
                  <h3 className="text-sm text-gray-600">{item.designation}</h3>
                </div>
              </div>
              <div className=" text-gray-400 w-full m-auto py-2 text-sm">
                {item.text}
              </div>
            </Card>
          </div>
        ))}
      </CostumSlider>
      <Section className="block md:hidden lg:hidden ">
        <Image src={CarAboutImage} />
      </Section>
    </Section>
  );
};

export default CarReviewsCards;
