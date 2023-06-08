import React from "react";

import Card from "../../utils/Card";
import { bestTourRoutesData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
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
      <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-[2rem]   justify-start ">
        <Section className="grid md:grid-cols-2 col-span-2 gap-[1.5rem] lg:gap-[3rem] justify-start items-start mt-[2rem] peer-[h-full]">
          {bestTourRoutesData.map((item, index) => (
            <Card className="bg-white cursor-pointer border-white shadow-md md:gap-[1rem]   hover:border-primary  border-b-2 items-start ">
              <CardImage>
                <Image src={item.image} className="rounded-lg" />
              </CardImage>
              <CardContent className="gap-[0.3rem] md:gap-[0.7rem] justify-start">
                <h1 className="text-lg font-semibold">
                  {item.from} To {item.to}
                </h1>
                <div className="text-gray-500 text-sm">
                  <span> {item.departure}</span>
                  <span>- {item.return}</span>
                </div>
                <p className="text-xs md:text-sm text-gray-500">
                  {item.description}
                </p>
                <div className="flex gap-[0.3rem] items-center">
                  <span className="text-gray-500 text-sm">From</span>
                  <h2 className="text-semibold text-primary ">${item.cost} </h2>
                  <span className="text-gray-500 text-xs">| Per Person</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </Section>
        <Section className="hidden lg:grid mt-[3rem] col-span-1  grid-cols-1  gap-[2rem] ">
          {bestTourRoutesData.map((item, index) => (
            <div
              key={index}
              className={` p-5 relative rounded-lg group overflow-hidden  `}>
              <Card
                className="  overflow-hidden gap-[1rem] px-[1rem] justify-center cursor-pointer shadow-md transition-all  hover:bg-primary hover:text-gray-100 h-full"
                item={item}
                key={index}>
                <div className="text-gray-100 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-30 after:bg-black after:opacity-30 group-hover:after:opacity-40 "></div>
                <div className="absolute z-40 top-[50%] translate-y-[-50%] left-[1rem] flex flex-col flex-nowrap gap-[0.3rem]">
                  <h1 className="text-lg font-semibold text-gray-100">
                    {item.from} To {item.to}
                  </h1>
                  <div className="text-gray-100 text-sm te">
                    <span> {item.departure}</span>
                    <span>- {item.return}</span>
                  </div>
                  <div className="flex gap-[0.3rem] items-center text-white">
                    <span className=" text-sm text-gray-100">From</span>
                    <h2 className="text-semibold text-secondary">
                      ${item.cost}{" "}
                    </h2>
                    <span className="text-gray-100 text-xs">| Per Person</span>
                  </div>
                  <p className="text-gray-100">{item.type}</p>
                </div>
                {/* <Button
                  size="middle"
                  className=" bg-primary  text-white absolute right-[0.5rem] z-30 bottom-[2rem] text-sm">
                  {item.days} Days Tours
                </Button> */}
                <Image
                  width={100}
                  height={500}
                  className="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover rounded-lg group-hover:scale-110  transition-all duration-700"
                  src={item.image}
                  alt="place"
                />
              </Card>
            </div>
          ))}
        </Section>
      </div>
    </Section>
  );
};

export default LastMinuteDealsCards;
