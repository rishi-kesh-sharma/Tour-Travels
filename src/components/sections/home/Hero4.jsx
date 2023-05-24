import { Button, Input, Select } from "antd";
import React from "react";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import CustomSelect from "../commons/CustomSelect";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import HeroImage from "/public/assets/images/site4hero.jpg";
import { flightHeroOptions, heroCardsData, heroOptionsList } from "@/data";
import CustomDatePicker from "../commons/CustomDatePicker";

const Hero = () => {
  return (
    <Section className=" pt-[3rem] lg:pt-[5rem] bg-[#f8f8f8]  relative">
      <Container className="relative text-gray-600 grid grid-cols-1 md:grid-cols-2  gap-[3rem] justify-items-center items-start">
        <Section className="flex flex-col flex-nowrap gap-[0.7rem] md:gap-[2rem] items-start ">
          <Button type="ghost" className="text-primary  bg-white shadow-sm">
            Book With Us!
          </Button>
          <h1 className="text-3xl md:text-6xl font-bold">
            Find Next Place To Visit
          </h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            eligendi quod voluptas ipsam magni rem et, omnis beatae fuga
            impedit!
          </p>
        </Section>
        <Section className=" overflow-hidden object-contain   min-h-[500px] h-[60vh] ">
          <Image src={HeroImage} className=" object-cover rounded-lg" />
        </Section>
        <Section className="absolute bottom-[-12rem] lg:bottom-[-5rem] xl:bottom-[-9rem]  grid bg-white md:grid-cols-4 md:h-[160px]  items-center border rounded-xl gap-[1rem] p-[1rem]  md:px-[3rem] justify-items-center mb-[10rem]   ">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-gray-500">Keyword</p>
            <Input size="large" placeholder="Enter keyword" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-gray-500">Destination</p>
            <CustomSelect size="large" options={heroOptionsList[0]} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-gray-500">Duration</p>
            <CustomSelect size="large" options={heroOptionsList[1]} />
          </div>
          {/* <div className="grid grid-cols-2 gap-[1rem]">
            {heroOptionsList.map((options) => {
              return <CustomSelect options={options} size="large" />;
            })}
          </div> */}
          <div className="flex flex-col gap-2 ">
            <p className="hidden md:block text-gray-500 ">Search</p>

            <Button
              type="ghost"
              size="large"
              className="bg-primary text-gray-50 rounded-r-xl text-center flex items-center p-2 text-xl m-auto  justify-center ">
              <BiSearch className="font-bold group-hover:text-white text-2xl w-full" />
              Search Now
            </Button>
          </div>
        </Section>
      </Container>
    </Section>
  );
};

export default Hero;
