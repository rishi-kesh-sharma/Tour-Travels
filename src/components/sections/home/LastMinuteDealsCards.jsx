import React from "react";

import Card from "../../utils/Card";
import { bestTourPackagesData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import { Button, Rate } from "antd";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
const LastMinuteDealsCards = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  md:gap-[2rem]   justify-start ">
        <Section className="mt-[3rem] md:mt-[1rem] lg:mt-[3rem] md:col-span-1 md:grid-cols-1  gap-[2rem] hidden lg:grid">
          {bestTourPackagesData.map((item, index) => (
            <div
              key={index}
              className={` p-5 relative rounded-lg group overflow-hidden  `}>
              <Card
                className="overflow-hidden gap-[1rem] px-[1rem] justify-center cursor-pointer shadow-md transition-all  hover:bg-primary hover:text-gray-100 h-full"
                item={item}
                key={index}>
                <div className="after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-30 after:bg-black after:opacity-30 group-hover:after:opacity-40 "></div>
                <div className="absolute z-40 top-[50%] translate-y-[-50%] left-[1rem] flex flex-col flex-nowrap gap-[0.3rem]">
                  <p className="text-secondary  max-w-[500px] text-start  text-sm">
                    {item.country}
                  </p>
                  <h3 className=" font-semibold   text-white  ">
                    {item.place}
                  </h3>
                  <div>
                    <Rate allowHalf value={item.rating} />
                    <span className="text-white text-sm">
                      {" "}
                      ({item.totalTours})
                    </span>
                  </div>
                  <p className=" text-primary font-semibold ">
                    ${item.cost}{" "}
                    <span className="text-sm text-gray-100 font-light">
                      | Per person
                    </span>
                  </p>
                </div>
                <Button
                  size="medium"
                  type="ghost"
                  className=" bg-primary  text-white absolute right-[0.5rem] z-30 bottom-[2rem] text-sm hover:text-white">
                  {item.days} Days Tours
                </Button>
                <Image
                  width={100}
                  height={500}
                  className="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover rounded-lg group-hover:scale-110  transition-all duration-700"
                  src={item.image[1]}
                  alt="place"
                />
              </Card>
            </div>
          ))}
        </Section>
        <Section className="grid md:grid-cols-2 md:col-span-2 gap-[1.5rem] md:gap-[3rem] justify-start items-start mt-[2rem] peer-[h-full]">
          {bestTourPackagesData.map((item, index) => (
            <Card className="bg-white shadow-md cursor-pointer  border-white  hover:border-primary  border-b-2 ">
              <CardImage>
                <Image src={item.image[0]} className="rounded-lg" />
              </CardImage>
              <CardContent className="">
                <h2 className="text-primary">{item.country}</h2>
                <h1 className=" text-lg font-semibold">{item.place}</h1>
                <div>
                  <Rate key={index} allowHalf defaultValue={item?.rating} />
                  <span className="text-gray-500">({item?.totalTours})</span>
                </div>
                <p className="text-sm text-gray-400">{item.description}</p>
                <div className="flex gap-[0.3rem] items-center">
                  <h2 className=" text-primary font-semibold">${item.cost} </h2>
                  <span className="text-gray-500 text-xs">| Per Person</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </Section>
      </div>
    </Section>
  );
};

export default LastMinuteDealsCards;
