import React from "react";

import Card from "../../utils/Card";
import { bestTourPackagesData, blogsData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import { Button, Rate } from "antd";
import CardImage from "@/components/utils/CardImage";
import CustomSlider from "../../utils/CustomSlider";
import CardContent from "@/components/utils/CardContent";
const RecentBlogsCards = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      {/* <div className="grid grid-cols-2  lg:grid-cols-3  gap-[2rem]   justify-start"> */}
      <CustomSlider dynamicSetting={dynamicSetting}>
        {blogsData.map((item, index) => (
          <div className="md:py-2 md:pr-5">
            <Card className="bg-white cursor-pointer    hover:border-primary border-white  border-b-2">
              <CardImage>
                <Image src={item.image} className="rounded-lg" />
              </CardImage>
              <CardContent className="gap-[0.3rem]">
                <h2 className="text-primary  ">{item.tag}</h2>
                <h1 className=" font-semibold">{item.title}</h1>

                <p className="text-xs text-gray-400">{item.description}</p>
                <div className="flex gap-[0.3rem] items-center justify-between">
                  <div className="flex gap-[0.3rem] items-center">
                    <Image
                      className="object-cover h-[40px] w-[40px] rounded-full"
                      src={item.author.image}
                    />
                    <h2 className="text-gray-400 text-sm">
                      {item.author.name}{" "}
                    </h2>
                  </div>
                  <Button type="primary" className="bg-primary" size="middle">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </CustomSlider>
      {/* </div> */}
    </Section>
  );
};

export default RecentBlogsCards;
