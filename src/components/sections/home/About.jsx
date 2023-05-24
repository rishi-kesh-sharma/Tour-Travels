import { Button, Dropdown, Space, Tooltip } from "antd";
import React from "react";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import Image from "next/image";
import AboutBg from "/public/assets/images/about-bg.png";
import { GetToKnowData, aboutData } from "@/data";
import AboutImage from "/public/assets/images/about.jpg";

const About = () => {
  return (
    <Section className=" relative mt-[2rem] bg-gray-100 py-[2rem] md:py-[5rem] md:mb-[10rem] bg-[url(https://htmldesigntemplates.com/html/travelin/images/bg/bg-trans.png)]">
      <Container className=" text-gray-600 grid md:grid-cols-2  gap-[1rem] justify-items-center items-center">
        <div className="">
          <Image
            src={AboutImage}
            className="object-contain max-h-[500px] rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-nowrap gap-[0.5rem] ">
          <h3 className="text-primary text-lg text-center">About Travelin</h3>
          <h1 className="text-3xl font-semibold text-center">
            Get 100% Satisfaction With Our Services
          </h1>
          <p className="text-xs md:text-sm md:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            eligendi quod voluptas ipsam magni rem et, omnis beatae fuga
            impedit! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maiores ex nam in sunt nemo quod fugiat ipsa nostrum consequuntur
            soluta. Lorem ipsum, dolor sit amet consectetur .
          </p>
          <p className="text-xs md:text-sm md:text-gray-400 text-center">
            dipisicing elit. Enim incidunt, eaque nostrum fuga laborum culpa
            ducimus exercitationem esse veniam fugit dicta velit minus neque ut
            facilis magnam temporibus modi assumenda.
          </p>

          <div className="grid md:grid-cols-3 md:gap-[0.3rem] bg-white   rounded-lg items-center ">
            {aboutData.map((item) => {
              return (
                <div className="border-r  border border-b-gray-200 md:border-none  py-[1rem] last-of-type:border-none  flex   gap-[0.5rem] justify-center">
                  {item.icon}
                  <p className="text-xs  text-gray-400">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <div className=" w-[85%] grid grid-cols-2 lg:grid-cols-4 gap-y-[1rem] gap-[0.3rem] bg-white   rounded-lg absolute bottom-[-250px] md:bottom-[-120px] left-[50%] translate-x-[-50%] shadow-sm py-[1.6rem] md:py-0">
        {GetToKnowData.map((item) => {
          return (
            <div className="border-r py-[1rem] last-of-type:border-none px-[0.4rem] text-center">
              <h1 className="text-xl text-primary font-semibold">
                {item.count}
              </h1>
              <p className="text-xs  text-gray-400">{item.title}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default About;
