import { Button, Dropdown, Rate, Space, Tooltip } from "antd";
import React from "react";
import Section from "../../utils/Section";
import CustomSelect from "../commons/CustomSelect";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { bestTourPackagesData, heroOptionsList } from "@/data";
import CustomDatePicker from "../commons/CustomDatePicker";
import Card from "@/components/utils/Card";
import CostumSlider from "@/components/utils/CustomSlider";
import Container from "../../utils/Container";

const Hero = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
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
    <Section className="relative md:mb-[10rem] mb-[14rem] lg:mb-[4rem]">
      <CostumSlider dynamicSetting={dynamicSetting}>
        {bestTourPackagesData.map((item, index) => (
          <div
            key={index}
            className={`relative  group overflow-hidden h-[80vh]`}>
            <Card
              className="  overflow-hidden gap-[1rem]  justify-center cursor-pointer shadow-md transition-all  hover:bg-primary hover:text-gray-100 h-full"
              item={item}
              key={index}>
              <div className="after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-40 after:bg-black after:opacity-30 group-hover:after:opacity-40  "></div>
              <div className="absolute z-40 top-[50%] translate-y-[-50%] left-[1rem] flex flex-col flex-nowrap gap-[0.3rem]">
                <p className="text-secondary  max-w-[500px] text-start  text-sm">
                  {item.country}
                </p>
                <h3 className=" font-semibold   text-white  ">{item.place}</h3>
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
                <p className="   text-white  text-sm">{item.days} Days Tours</p>
              </div>
              <Image
                width={100}
                height={500}
                className="absolute top-0 bottom-0 left-0 right-0 h-full w-full object-cover  group-hover:scale-110  transition-all duration-700 z-30"
                src={item.image[1]}
                alt="place"
              />
            </Card>
          </div>
        ))}
      </CostumSlider>
      <Container className="grid bg-white grid-cols-1 md:grid-cols-2 lg:grid-cols-6  lg:h-[140px]  items-center border rounded-xl gap-[0.6rem] md:gap-[1rem] absolute bottom-[-200px] md:bottom-[-100px] lg:bottom-[-40px] left-[50%] translate-x-[-50%] z-[50] p-[1rem] md:p-[2rem] lg:p-0 lg:pr-[2rem]">
        <div className="bg-primary text-gray-50 h-full rounded-xl text-center flex items-center justify-center  p-2 text-xl font-semibold md:col-span-2 lg:col-span-1">
          Find Your Holidays
        </div>
        {heroOptionsList.map((options) => {
          return (
            <CustomSelect className="w-full" options={options} size="large" />
          );
        })}
        <CustomDatePicker size="large" />
        <Button
          type="ghost"
          size="large"
          className=" bg-primary group gap-[0.2rem]  text-gray-100 flex items-center justify-center  text-lg hover:text-white  md:max-w-[150px]">
          <BiSearch className="font-bold group-hover:text-white" />
          Search Now
        </Button>
      </Container>
    </Section>
  );
};

export default Hero;
