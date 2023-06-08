import React from "react";

import Card from "../../utils/Card";
import { hotelRoomsData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import { Button, Rate } from "antd";
import CostumSlider from "@/components/utils/CustomSlider";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
import { BiBed } from "react-icons/bi";
const HotelRoomsdCards = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: false,
    arrows: true,
  };
  return (
    <Section className="md:mt-[2rem]">
      <CostumSlider dynamicSetting={dynamicSetting}>
        {hotelRoomsData.map((item, index) => (
          <div className="py-2 md:pr-5 bg-white group ">
            <Card
              className=" w-full relative  overflow-hidden md:gap-[1rem] px-[1rem] justify-center cursor-pointer  transition-all  h-full items-start shadow-md"
              item={item}
              key={index}>
              <CardImage className="relative overflow-hidden w-full">
                {/* <div className="after:absolute after:top-0 after:bottom-0 after:left-0 after:right-[0rem] after:z-30 after:bg-black after:opacity-20 hover:after:opacity-30 group-hover:scale-110 transition-all"></div> */}
                <Image
                  className="   object-cover rounded-lg  group-hover:scale-110 transition-all"
                  src={item.image}
                />
              </CardImage>
              <CardContent className="relative w-full grid grid-cols-1 md:gap-[0.6rem]  text-sm md:mt-[1rem]">
                <p className=" md:text-lg font-semibold">{item.type}</p>
                <div>
                  <Rate allowHalf value={item.ratings} /> ({item.noOfReviews}
                  reviews)
                </div>
                <p className=" text-sm flex gap-[0.3rem]">
                  <BiBed />
                  {item.bedType}
                </p>
                <p className="md:text-lg font-semibold">
                  From{" "}
                  <span className="line-through text-xs">
                    ${item.previousPrice}
                  </span>{" "}
                  ${item.price}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </CostumSlider>
    </Section>
  );
};

export default HotelRoomsdCards;
