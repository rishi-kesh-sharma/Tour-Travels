import { Button, Dropdown, Space, Tooltip } from "antd";
import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import CustomSelect from "../commons/CustomSelect";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { heroOptionsListEnhanced } from "@/data";
import CustomDatePicker from "../commons/CustomDatePicker";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <Section className=" flex flex-col gap-[2rem] relative mt-[2rem] lg:mt-[6rem]  bg-[url(https://htmldesigntemplates.com/html/travelin/images/section-bg1.png)] bg-repeat-x bg-cover bg-center">
      <Container className="text-gray-600   gap-[3rem] flex flex-col items-center">
        <div className="flex flex-col flex-nowrap items-center justify-center md:w-[60vw]  max-w-[1000px] gap-[1rem]">
          <h3 className=" text-lg lg:text-xl text-center ">
            Try To Fix Your Destination & Save Money
          </h3>
          <h1 className=" text-2xl lg:text-5xl font-bold text-center">
            Let's Go The Adventure Is Waiting For You!
          </h1>
          <p className="text-sm text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore duis aute irure dolor in
            reprehenderit
          </p>
        </div>
      </Container>
      <Container className=" grid bg-white md:grid-cols-4 md:h-[140px]  items-center border rounded-xl gap-[1rem] p-[1rem]  md:pl-[2rem] md:pr-0 md:py-0 justify-items-center">
        {heroOptionsListEnhanced.map(({ title, options }) => {
          return (
            <div className="w-full">
              <p className="font-semibold text-gray-500 md:text-center">
                {title}
              </p>
              <CustomSelect className="" options={options} size="large" />
            </div>
          );
        })}
        <div className="w-full">
          <p className="font-semibold text-gray-500 md:text-center">Date</p>
          <CustomDatePicker size="large" className="w-[100%]" />
        </div>
        <div className="bg-primary text-gray-50 h-full rounded-l-xl rounded-r-xl md:rounded-l-none text-center flex items-center p-2 text-xl m-auto w-full justify-center">
          <BiSearch className="font-bold group-hover:text-white text-2xl" />
          Search Now
        </div>
      </Container>
      <HeroCards />
    </Section>
  );
};

export default Hero;
