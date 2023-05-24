import React from "react";

import Card from "../../utils/Card";
import { topDestinationData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import { Button, Rate } from "antd";
import CostumSlider from "@/components/utils/CustomSlider";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
const FreshlyAddedCards = () => {
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
    <Section className="md:mt-[2rem]">
      <CostumSlider dynamicSetting={dynamicSetting}>
        {topDestinationData.map((item, index) => (
          <div className="py-2 md:pr-5 bg-white group rounded-lg">
            <Card
              className=" w-full relative  overflow-hidden md:gap-[1rem] md:px-[1rem] justify-center cursor-pointer  transition-all  h-full items-start rounded-lg shadow-md "
              item={item}
              key={index}>
              <CardImage className="relative rounded-lg">
                <div className="after:absolute after:top-0 after:bottom-0 after:left-0 after:right-[0rem] after:z-30 after:bg-black after:opacity-20 hover:after:opacity-30 group-hover:scale-110 transition-all after:rounded-lg"></div>
                <Image
                  className="   object-cover rounded-lg  group-hover:scale-110 transition-all"
                  src={item.image}
                />
              </CardImage>
              <CardContent>
                <div className="relative w-full grid md:grid-cols-1 md:items-end md:justify-items-end md:gap-[0.7rem] z-40 text-sm md:mt-[1rem]">
                  <div className="w-full">
                    <p className=" md:text-lg font-semibold">
                      {item.country}- Tour Of {item.place}
                    </p>
                    <p className=" text-xs md:text-sm">{item.duration}</p>
                    <div>
                      <Rate
                        className="text-sm md:text-base"
                        allowHalf
                        value={item.ratings}
                      />
                      <p className="text-xs md:text-sm">
                        ({item.noOfReviews}
                        reviews)
                      </p>
                    </div>
                    <p className="md:text-lg font-semibold text-primary">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </CostumSlider>
    </Section>
  );
};

export default FreshlyAddedCards;
