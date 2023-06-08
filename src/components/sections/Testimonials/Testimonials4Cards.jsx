import React from "react";

import Card from "../../utils/Card";
import CostumSlider from "../../utils/CustomSlider";
import { reviewsData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";

const Testimonials4Cards = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Section className=" z-30 items-center mt-[2rem] md:mt-[2rem] col-span-1 ">
      <CostumSlider dynamicSetting={dynamicSetting}>
        {reviewsData.map((item, index) => (
          <div className="md:py-5 px-5 rounded-lg">
            <Card
              className="rounded-lg items-start cursor-pointer shadow-sm px-[1rem]  bg-transparent  md:p-8"
              item={item}
              key={index}>
              <div className=" text-gray-100 w-full m-auto md:py-2  text-xs md:text-sm">
                {item.text}
              </div>
              <div className="flex gap-[1rem] items-center">
                <Image
                  src={item.image}
                  className="rounded-full object-cover h-[40px] w-[40px] md:h-[80px] md:w-[80px]"
                />
                <div>
                  <h3 className="text-secondary font-semibold">{item.name}</h3>
                  <h3 className="text-sm text-gray-100">{item.designation}</h3>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </CostumSlider>
    </Section>
  );
};

export default Testimonials4Cards;
