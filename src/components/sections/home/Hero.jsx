import { Button, Dropdown, Space, Tooltip } from "antd";
import React from "react";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import CustomSelect from "../commons/CustomSelect";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import DefaultHomeHeroImage from "/public/assets/images/defaultHome.png";
import { heroOptionsList } from "@/data";
import CustomDatePicker from "../commons/CustomDatePicker";

const Hero = () => {
  return (
    <Section className=" mt-[2rem] md:mt-[6rem]">
      <Container className="text-gray-600 grid grid-cols-1  md:grid-cols-2  gap-[3rem] justify-items-center md:items-start items-center">
        <div className="flex flex-col flex-nowrap gap-[0.5rem]">
          <h3 className="text-primary text-xl">Explore The World</h3>
          <h1 className="text-4xl font-bold">
            Start Planning Your Dream Trip Today
          </h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            eligendi quod voluptas ipsam magni rem et, omnis beatae fuga
            impedit!
          </p>
          <div className="grid grid-cols-2 gap-[1rem]">
            {heroOptionsList.map((options) => {
              return <CustomSelect options={options} size="large" />;
            })}
            <CustomDatePicker />
            <Button
              type="ghost"
              className="col-span-2 bg-primary group gap-[0.2rem]  text-gray-100 flex items-center justify-center h-[3rem] text-lg hover:text-white">
              <BiSearch className="font-bold group-hover:text-white" />
              Search Now
            </Button>
          </div>
        </div>
        <div className="max-h-[400px]">
          <Image
            src={DefaultHomeHeroImage}
            className="object-contain max-h-[400px] animate-wiggle delay-[1000] duration-[5000] "
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
