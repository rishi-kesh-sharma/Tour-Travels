import { Button } from "antd";
import React from "react";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import CustomSelect from "../commons/CustomSelect";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import CarImage from "/public/assets/images/cars/car.jpg";
import { carHeroOptions } from "@/data";
import CustomDatePicker from "../commons/CustomDatePicker";
import CostumSlider from "@/components/utils/CustomSlider";
import Card from "@/components/utils/Card";

const carImages = [CarImage, CarImage, CarImage, CarImage, CarImage];

const Hero = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: null,
    // prevArrow: null,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <Section className="mt-[3rem] md:mt-[5rem]">
      <Container className="text-gray-600 flex flex-col justify-items-center items-start gap-[3rem]">
        <Section className="flex flex-col flex-nowrap gap-[0.5rem] mx-auto max-w-[600px]">
          <h3 className="text-primary text-xl text-center">
            Explore The World
          </h3>
          <h1 className="text-4xl font-bold text-center">
            Search For The Best Car Hire Deals!
          </h1>
          <p className="text-sm text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            eligendi quod voluptas ipsam magni rem et, omnis beatae fuga
            impedit!
          </p>
        </Section>
        <Section className="w-[95%]  mx-auto  md:flex md:flex-wrap lg:grid  bg-white lg:grid-cols-5 lg:h-[200px]  items-center border rounded-xl gap-[1rem] p-[1rem] lg:px-[3rem] justify-items-center md:py-[2rem]">
          {carHeroOptions.map(({ title, options }) => {
            return (
              <div className="flex flex-col  gap-2  md:gap-[1rem] mb-[1rem] ">
                <p className="text-gray-500">{title}</p>
                <CustomSelect
                  className="w-full"
                  options={options}
                  size="large"
                />
              </div>
            );
          })}
          <div className="flex flex-col gap-2 mb-[1rem]">
            <p className="text-gray-500">Pick Up</p>
            <CustomDatePicker size="large" />
          </div>
          <div className="flex flex-col gap-2 mb-[1rem]">
            <p className="text-gray-500">Drop Off</p>
            <CustomDatePicker size="large" />
          </div>
          <div className="w-full col-span-5">
            <Button
              type="ghost"
              size="large"
              className="bg-primary py-[1rem] text-gray-50 rounded-r-xl text-center flex items-center p-2 text-xl m-auto  justify-center ">
              <BiSearch className="font-bold group-hover:text-white text-2xl" />
              Search Now
            </Button>
          </div>
        </Section>
        <Section className=" overflow-hidden object-contain  col-span-2">
          <CostumSlider dynamicSetting={dynamicSetting}>
            {carImages.map((item, index) => (
              <div className=" pr-5  w-full ">
                <Card
                  className="bg-white cursor-pointer  px-0  py-0 shadow-none"
                  item={item}
                  key={index}>
                  <Image src={item} className=" object-cover rounded-lg" />
                </Card>
              </div>
            ))}
          </CostumSlider>
        </Section>
      </Container>
    </Section>
  );
};

export default Hero;
