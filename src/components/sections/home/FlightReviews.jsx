import Container from "@/components/utils/Container";
import Heading from "@/components/utils/Heading";
import Section from "@/components/utils/Section";
import React from "react";
import FlightReviewsCards from "./FlightReviewsCards.jsx";
import { GetToKnowData } from "@/data";
import { Button } from "antd";

const Reviews = () => {
  return (
    <Section className="relative mt-[3rem]  bg-[url(https://htmldesigntemplates.com/html/travelin/images/flights/1.jpg)] bg-center bg-no-repeat bg-cover  md:h-[700px]">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-20"></div>

      <Container className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-[3rem] lg:gap-[7rem] py-[2rem] relative justify-items-start h-[700px]">
        <div className="relative z-30">
          <div
            className={`heading flex md:gap-[0.6rem]   flex-col m-auto  max-w-[600px] `}>
            <p className={`text-white   text-lg `}>
              {"Your Great Destination"}
            </p>

            <h1 className={`text-3xl font-semibold text-white`}>
              {"OFFER DEALS"}
            </h1>
            <p className={`text-gray-100 text-xs md:text-sm`}>
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
              }
            </p>
          </div>
          <div className="grid grid-cols-2   lg:grid-cols-4 lg:gap-y-[1rem] lg:gap-[0.3rem] bg-white   rounded-lg mt-[2rem]">
            {GetToKnowData.map((item) => {
              return (
                <div className="  lg:border-r py-[1rem] lg:last-of-type:border-none px-[1rem] md:px-[0.4rem] ">
                  <h1 className="text-xl text-primary font-semibold">
                    {item.count}
                  </h1>
                  <p className="text-xs  text-gray-400">{item.title}</p>
                </div>
              );
            })}
          </div>
          <div className="flex mt-[1rem] items-center gap-[2rem]">
            <p className="text-xs md:text-sm text-gray-200">
              {" "}
              Discover the latest offers & news and start planning
            </p>
            <Button
              size="large"
              type="ghost"
              className="bg-primary text-white ">
              Contact Us
            </Button>
          </div>
        </div>
        <FlightReviewsCards />
      </Container>
    </Section>
  );
};

export default Reviews;
