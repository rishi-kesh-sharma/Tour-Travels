import React from "react";

import Card from "../../utils/Card";
import { bestTourPackagesData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import { Button, Rate, Select } from "antd";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
import { BsArrowRight, BsFillGrid3X3GapFill } from "react-icons/bs";
const ToursList = () => {
  return (
    <Section className="rounded-lg  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1rem] md:gap-[2rem]  md:col-span-2 xl:col-span-3 overflow-hidden">
      <Section className="col-span-full flex gap-[1rem] md:justify-between items-center">
        <p className="text-xs md:text-sm text-gray-500">
          Showing 1-{bestTourPackagesData.length} of{" "}
          {bestTourPackagesData.length} results
        </p>
        <div className="flex gap-[1rem]  items-center">
          <BsFillGrid3X3GapFill className={`text-lg`} />
          <BsFillGrid3X3GapFill />
          <Select
            size="small"
            className="w-[300px]"
            animation
            options={[
              { value: "averageRating", label: "Average Rating" },
              { value: "priceLowToHigh", label: "Price low to high" },
              { value: "priceHighToLow", label: "Price high to low" },
            ]}
          />
        </div>
      </Section>
      {bestTourPackagesData.map((item, index) => (
        <Card className="bg-white shadow-md cursor-pointer  border-white  hover:border-primary  border-b-2 ">
          <CardImage>
            <Image src={item.image[0]} className="rounded-lg" />
          </CardImage>
          <CardContent className="">
            <h2 className="text-primary">{item.country}</h2>
            <h1 className=" text-lg font-semibold">{item.place}</h1>
            <div>
              <Rate key={index} allowHalf defaultValue={item?.rating} />
              <span className="text-gray-500">({item?.totalTours})</span>
            </div>
            <p className="text-sm text-gray-400">{item.description}</p>
            <div className="flex gap-[0.3rem] items-center">
              <h2 className=" text-primary font-semibold">${item.cost} </h2>
              <span className="text-gray-500 text-sm">|Per Person</span>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="col-span-full">
        <Button
          icon={<BsArrowRight />}
          size="large"
          type="ghost"
          className="max-w-[150px] mx-auto bg-primary text-white flex flex-row-reverse items-center gap-[0.3rem]  ">
          Load More
        </Button>
      </div>
    </Section>
  );
};

export default ToursList;
