import React from "react";

import Card from "../../utils/Card";
import { topDestinationData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import { Button, Rate } from "antd";
import CostumSlider from "@/components/utils/CustomSlider";
import { BsArrowRight } from "react-icons/bs";
const PopularTourCards = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: null,
    // prevArrow: null,
    autoplay: true,
    // autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: true,
  };
  return (
    <Section className="mt-[1rem] md:mt-[2rem]">
      <CostumSlider dynamicSetting={dynamicSetting}>
        {topDestinationData.map((item, index) => (
          <div className="py-2 md:pr-5 ">
            <Card
              className=" w-full relative  overflow-hidden gap-[1rem] md:px-[1rem] justify-center cursor-pointer  transition-all  hover:bg-primary hover:text-gray-100 h-full items-start "
              item={item}
              key={index}>
              <div className="after:absolute after:top-0 after:bottom-0 after:left-0 after:right-[0rem] after:z-30 after:bg-black after:opacity-20 group-hover:after:opacity-60"></div>
              <div className="relative w-full grid grid-cols-2 items-end justify-items-end gap-[0.7rem] z-40 text-sm translate-y-[600%] h-full group-hover:translate-y-[0%] transition-all duration-500 mt-[1rem]">
                <div className="w-full">
                  <p className=" text-lg font-semibold">
                    {item.country}- Tour Of {item.place}
                  </p>
                  <p className=" text-sm">{item.duration}</p>
                  <div>
                    <Rate allowHalf value={item.ratings} />({item.noOfReviews}{" "}
                    reviews)
                  </div>
                </div>
                <div>
                  <p className="text-lg line-through ">${item.previousPrice}</p>
                  <p className="text-lg font-semibold">${item.price}</p>
                </div>
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
              </div>
              <Button
                size="middle"
                className="bg-primary text-gray-100 absolute  z-30 top-[1rem] right-[1rem] ">
                {item.totalTours}
              </Button>
              <Image
                className="  absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover rounded-lg "
                src={item.image}
              />
            </Card>
          </div>
        ))}
      </CostumSlider>
      <div className="w-full flex md:mt-[2rem] m-auto justify-center">
        <Button
          type="ghost"
          size="middle"
          icon={<BsArrowRight />}
          className="text-gray-500 flex flex-row-reverse items-center gap-[0.3rem] border-b border-b-primary shadow-sm">
          See More
        </Button>
      </div>
    </Section>
  );
};

export default PopularTourCards;
