import { Button, Dropdown, Space, Tooltip } from "antd";
import React from "react";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import Image from "next/image";
import DefaultHomeHeroImage from "/public/assets/images/defaultHome.png";
import { GetToKnowData, aboutData } from "@/data";

const GetToKnow = () => {
  return (
    <Section className=" mt-[5rem] lg:mt-[2rem] bg-gray-100 py-[2rem] md:py-[5rem]">
      <Container className="text-gray-600 grid grid-cols-1 md:grid-cols-2  gap-[1rem] justify-items-center items-start md:items-center lg:items-start flex-row-reverse">
        <div className="max-h-[400px]">
          <Image
            src={DefaultHomeHeroImage}
            className="object-contain max-h-[500px] animate-wiggle delay-[1000] duration-[5000] "
          />
        </div>
        <div className="flex flex-col flex-nowrap gap-[0.5rem]">
          <h3 className="text-primary text-lg">Get To Know Us</h3>
          <h1 className="text-2xl font-semibold">
            Explore All Tour Of The World With Us.
          </h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            eligendi quod voluptas ipsam magni rem et, omnis beatae fuga
            impedit! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maiores ex nam in sunt nemo quod fugiat ipsa nostrum consequuntur
            soluta. Lorem ipsum, dolor sit amet consectetur .
          </p>
          <p className="text-sm text-gray-400">
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
          <Section className="grid grid-cols-2 lg:grid-cols-4 lg:gap-y-[1rem] lg:gap-[0.3rem] bg-white   rounded-lg">
            {GetToKnowData.map((item) => {
              return (
                <div className="border lg:border-l-0 lg:border-t-0 lg:border-b-0 lg:border-r-1 lg:border-r-gray-200 lg:border-gray-500 lg:border-r py-[1rem] lg:last-of-type:border-none px-[1.4rem] ">
                  <h1 className="text-xl text-primary font-semibold">
                    {item.count}
                  </h1>
                  <p className="text-xs  text-gray-400">{item.title}</p>
                </div>
              );
            })}
          </Section>
        </div>
      </Container>
    </Section>
  );
};

export default GetToKnow;
