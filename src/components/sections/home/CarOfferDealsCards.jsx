import React from "react";

import Card from "../../utils/Card";
import { carData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import { Button, Rate } from "antd";
import CardImage from "@/components/utils/CardImage";
import { topDestinationData } from "@/data";
import CardContent from "@/components/utils/CardContent";
import { FaIndent, FaTachometerAlt, FaUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
const LastMinuteDealsCards = () => {
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
    <Section className="  p-[2rem] rounded-lg ">
      <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3rem] justify-start items-start mt-[2rem] peer-[h-full]">
        {carData.map((item, index) => (
          <Card className="bg-white shadow-md cursor-pointer  border-white  hover:border-primary  border-b-2 items-start">
            <CardImage>
              <Image src={item.image} className="rounded-lg" />
            </CardImage>
            <CardContent className="items-start gap-[0.5rem]">
              <p className="text-sm text-gray-400">
                {item.location} - {item.type}
              </p>
              <h1 className=" text-lg font-semibold">{item.name}</h1>
              {/* <h2 className="text-primary">{item.name}</h2> */}

              <div className="flex gap-[0.6rem] items-center">
                <p className="flex items-center gap-[0.2rem] text-xs text-gray-500">
                  <FaUser />
                  {item.users}
                </p>
                <p className="flex items-center gap-[0.2rem] text-xs text-gray-500">
                  <BsBagCheck />
                  {item.riders}
                </p>
                <p className="flex items-center gap-[0.2rem] text-xs text-gray-500">
                  <FaIndent />
                  {item.key}
                </p>
                <p className="flex items-center gap-[0.2rem] text-xs text-gray-500">
                  <FaTachometerAlt />
                  {item.rideTime}
                </p>
              </div>
              <div className="flex gap-[0.3rem] items-center">
                <h2 className=" text-primary font-semibold">${item.price} </h2>
                <span className="text-gray-500 text-sm">total</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </Section>
    </Section>
  );
};

export default LastMinuteDealsCards;
