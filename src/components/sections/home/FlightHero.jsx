import { Button } from "antd";
import React from "react";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import CustomSelect from "../commons/CustomSelect";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import PlaneImage from "/public/assets/images/planes/plane.jpg";
import {
  flightHeroOptions,
  heroCardsData,
  heroOptionsList,
  heroOptionsListEnhanced,
} from "@/data";
import CustomDatePicker from "../commons/CustomDatePicker";
import CostumSlider from "@/components/utils/CustomSlider";
import Card from "@/components/utils/Card";

const planeImages = [
  PlaneImage,
  PlaneImage,
  PlaneImage,
  PlaneImage,
  PlaneImage,
];

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
    <Section className=" mt-[3rem] overflow-hidden mb-[2rem] lg:mb-0">
      <Container className="text-gray-600 grid grid-cols-1 md:grid-cols-2    lg:grid-cols-3  gap-[3rem] justify-items-center items-start">
        <Section className="flex flex-col flex-nowrap gap-[0.5rem]">
          <h3 className="text-primary text-xl">Explore The World</h3>
          <h1 className="text-4xl font-bold">
            Start Planning Your Dream Trip Today
          </h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            eligendi quod voluptas ipsam magni rem et, omnis beatae fuga
            impedit!
          </p>
        </Section>
        <Section className=" overflow-hidden object-contain   lg:col-span-2">
          <CostumSlider dynamicSetting={dynamicSetting}>
            {planeImages.map((item, index) => (
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

      <Section className="w-[95%] mx-auto grid bg-white md:grid-cols-3 lg:grid-cols-6 lg:h-[160px]  items-center border rounded-xl gap-[1rem] py-[1rem]  lg:py-0 px-[1rem]  lg:px-[3rem] justify-items-center md:justify-items-start md:mt-[2rem]">
        {flightHeroOptions.map(({ title, options }) => {
          return (
            <div className="flex flex-col  gap-2 w-full">
              <p className="text-gray-500">{title}</p>
              <CustomSelect className="w-full" options={options} size="large" />
            </div>
          );
        })}
        <div className="flex flex-col gap-2 w-full">
          <p className="text-gray-500">Depart</p>
          <CustomDatePicker size="large" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-gray-500">Return</p>
          <CustomDatePicker size="large" />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <p className="text-gray-500 hidden md:block md:text-center">Search</p>

          <Button
            type="ghost"
            size="large"
            className="bg-primary text-gray-50 rounded-r-xl text-center flex items-center p-2 text-xl m-auto  md:justify-items-center">
            <BiSearch className="font-bold group-hover:text-white text-2xl w-full " />
            Search Now
          </Button>
        </div>
      </Section>
    </Section>
  );
};

export default Hero;
