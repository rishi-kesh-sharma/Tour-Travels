import React from "react";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import Image from "next/image";
import AboutGuideImage from "/public/assets/images/about.jpg";
import { FaMapSigns } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineFolder } from "react-icons/ai";

const AboutGuide = () => {
  const guideMetaData = [
    {
      title: "Expert Team Guide",
      description:
        "Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: <FaMapSigns className="text-2xl" />,
    },
    {
      title: "E Correct Directions",
      description:
        "Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: <BsBagCheck className="text-2xl" />,
    },
    {
      title: " Save Money & Time",
      description:
        "Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: <AiOutlineFolder className="text-2xl" />,
    },
  ];
  return (
    <Section className=" relative mt-[2rem] md:mt-[4rem] bg-gray-100 py-[2rem] md:py-[2rem] lg:py-[5rem]  bg-[url(https://htmldesigntemplates.com/html/travelin/images/bg/bg-trans.png)]">
      <Container className=" text-gray-600 grid lg:grid-cols-2  gap-[2rem] justify-items-center items-center">
        <div className="h-full">
          <Image
            src={AboutGuideImage}
            className="object-cover rounded-lg h-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[1rem] lg:gap-[2rem] md:gap-[0.5rem] ">
          <div>
            <h3 className="text-primary text-lg ">Perfect Team</h3>
            <h1 className="text-3xl font-semibold ">Our Experience Guides</h1>
            <p className="text-xs md:text-sm md:text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              eligendi quod voluptas ipsam magni rem et, omnis beatae fuga
              impedit! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Maiores ex nam in sunt nemo quod fugiat ipsa nostrum consequuntur
              soluta. Lorem ipsum, dolor sit amet consectetur .
            </p>
            <p className="text-xs md:text-sm md:text-gray-400 ">
              dipisicing elit. Enim incidunt, eaque nostrum fuga laborum culpa
              ducimus exercitationem esse veniam fugit dicta velit minus neque
              ut facilis magnam temporibus modi assumenda.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 bg-white   rounded-lg items-center p-5 md:p-10 lg:p-3 ">
            {guideMetaData.map((item) => {
              return (
                <div className="   lg:py-[1rem] last-of-type:border-none  flex   gap-[0.5rem] ">
                  {item.icon}
                  <div>
                    <h3 className="text-gray-700 text-base lg:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-xs  text-gray-400">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutGuide;
