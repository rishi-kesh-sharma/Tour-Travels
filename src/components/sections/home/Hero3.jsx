import { Button } from "antd";
import React from "react";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import CustomSelect from "../commons/CustomSelect";
import { BiSearch } from "react-icons/bi";
import { findTravelData, heroOptionsList } from "@/data";
import CustomDatePicker from "../commons/CustomDatePicker";
import Card from "@/components/utils/Card";
import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
const socials = [
  {
    icon: <BsFacebook className=" text-white" />,
    url: "facebook.com",
  },
  {
    icon: <BsTwitter className=" text-white" />,
    url: "twitter.com",
  },
  {
    icon: <BsGoogle className=" text-white" />,
    url: "twitter.com",
  },
  {
    icon: <BsInstagram className=" text-white" />,
    url: "instagram.com",
  },
  {
    icon: <BsLinkedin className=" text-white" />,
    url: "linkedin.com",
  },
];

const Hero = () => {
  return (
    <Section className="relative pt-[1rem] md:pt-[3rem] bg-[url(https://htmldesigntemplates.com/html/travelin/images/bg/bg1.jpg)] bg-cover bg-no-repeat  pb-[1rem] sm:pb-[2rem] md:h-[80vh] overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-30 "></div>
      <Container className="text-gray-600 grid md:grid-cols-2  gap-[5rem] justify-items-center items-start">
        <div className="flex flex-col flex-nowrap gap-[0.5rem] h-[65vh] text-white relative z-[50] justify-start">
          <h3 className="text-secondary md:text-xl opacity-100 ">
            Explore The World
          </h3>
          <h1 className="text-xl md:text-3xl font-bold text-white">
            Start Planning Your Dream Trip Today
          </h1>
          <p className="text-xs md:text-sm md:text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            eligendi quod voluptas ipsam magni rem et, omnis beatae fuga
            impedit!
          </p>
          <div className="grid grid-cols-2 gap-[1rem] ">
            {heroOptionsList.map((options) => {
              return <CustomSelect options={options} size="large" />;
            })}
            <CustomDatePicker className="w-[100%" />
            <Button
              type="ghost"
              className="col-span-2 bg-primary group gap-[0.2rem]  text-gray-100 flex items-center justify-center h-[3rem] text-lg hover:text-white">
              <BiSearch className="font-bold group-hover:text-white" />
              Search Now
            </Button>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center bg-transparent relative z-[50] gap-[1rem] text-gray-50">
          {findTravelData.map((item, index) => (
            <Card
              className="px-0 py-[0.5rem] items-center cursor-pointer shadow-md transition-all hover:text-gray-100 gap-[1rem] flex-row justify-start border-dotted border-white border-b "
              item={item}
              key={index}>
              <p className="text-3xl bg-primary rounded-lg p-2">{item.icon}</p>
              <div>
                <h3 className=" font-semibold ">{item.title}</h3>
                <p className=" text-xs max-w-[500px]  group-hover:text-gray-200">
                  {item.subtitle}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
      <Container>
        <div className="flex  text-white relative z-50 w-full justify-between ">
          <p className="text-white text-xs md:text-sm">
            2022 Travelin. All rights reserved.
          </p>
          <div className="flex flex-nowrap gap-[0.4rem] md:gap-[0.5rem] text-white">
            {socials.map((item) => {
              return (
                <a
                  href={item.url}
                  className="block  md:p-2 md:bg-gray-600 rounded-full">
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
