import React from "react";

import Card from "../../utils/Card";
import CostumSlider from "../../utils/CustomSlider";
import { reviewsData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import ReviewHero from "/public/assets/images/ReviewHero.png";

const FlightReviewsCards = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
    ],
  };
  return (
    <Section className=" z-30 items-center mt-[1rem] md:mt-[2rem] col-span-1">
      <CostumSlider dynamicSetting={dynamicSetting}>
        {reviewsData.map((item, index) => (
          <div className="md:py-5 px-5 rounded-lg">
            <Card
              className="rounded-lg items-start cursor-pointer shadow-sm px-[1rem] transition-all border-b-2 hover:border-b-primary bg-white md:p-8"
              item={item}
              key={index}>
              <div className="flex gap-[1rem] items-center">
                <Image
                  src={item.image}
                  className="rounded-full object-cover h-[40px] w-[40px] md:h-[80px] md:w-[80px]"
                />
                <div>
                  <h3 className="text-primary font-semibold">{item.name}</h3>
                  <h3 className="text-sm text-gray-600">{item.designation}</h3>
                </div>
              </div>
              <div className=" text-gray-400 w-full m-auto md:py-2  text-xs md:text-sm">
                {item.text}
              </div>
            </Card>
          </div>
        ))}
      </CostumSlider>
    </Section>
  );
};

export default FlightReviewsCards;
