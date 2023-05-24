import React from "react";

import Card from "../../utils/Card";
import { carData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import { Button, Rate } from "antd";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
import { FaIndent, FaTachometerAlt, FaUser } from "react-icons/fa";
import CostumSlider from "@/components/utils/CustomSlider";
import { BsBagCheck } from "react-icons/bs";
const BestCarHiresCardsCards = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: null,
    prevArrow: null,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <Section className="  md:p-[2rem] rounded-lg ">
      <CostumSlider dynamicSetting={dynamicSetting}>
        {carData.map((item, index) => (
          <div className="py-2 pr-5 ">
            <Card className="bg-white shadow-md cursor-pointer  border-white  hover:border-primary  border-b-2 items-start">
              <CardImage>
                <Image src={item.image} className="rounded-lg" />
              </CardImage>
              <CardContent className="items-start gap-[0.4rem] ">
                <p className="text-sm text-gray-400">
                  {item.location} - {item.type}
                </p>
                <h1 className=" md:text-lg font-semibold">{item.name}</h1>
                {/* <h2 className="text-primary">{item.name}</h2> */}

                <div className="flex gap-[0.6rem] items-center flex-wrap">
                  <p className="flex items-center gap-[0.2rem] text-sm text-gray-500">
                    <FaUser />
                    {item.users}
                  </p>
                  <p className="flex items-center gap-[0.2rem] text-sm text-gray-500">
                    <BsBagCheck />
                    {item.riders}
                  </p>
                  <p className="flex items-center gap-[0.2rem] text-sm text-gray-500">
                    <FaIndent />
                    {item.key}
                  </p>
                  <p className="flex items-center gap-[0.2rem] text-sm text-gray-500">
                    <FaTachometerAlt />
                    {item.rideTime}
                  </p>
                </div>
                <div className="flex gap-[0.3rem] items-center">
                  <h2 className=" text-primary font-semibold">
                    ${item.price}{" "}
                  </h2>
                  <span className="text-gray-500 text-sm">total</span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </CostumSlider>
    </Section>
  );
};

export default BestCarHiresCardsCards;
