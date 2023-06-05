import React from "react";

import Card from "../../utils/Card";
import { bestTourPackagesData, blogsData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import { Button, Rate, Select } from "antd";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
import { BsArrowRight, BsFillGrid3X3GapFill } from "react-icons/bs";
const BlogsList = () => {
  return (
    <Section className="rounded-lg  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[1rem] md:gap-[2rem]  lg:col-span-2 xl:col-span-2 overflow-hidden">
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
      {blogsData.map((item, index) => (
        <Card className="bg-white cursor-pointer    hover:border-primary border-white  border-b-2  shadow-md">
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
                <h2 className="text-gray-400 text-sm">{item.author.name} </h2>
              </div>
              <Button type="primary" className="bg-primary" size="middle">
                Read More
              </Button>
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

export default BlogsList;
