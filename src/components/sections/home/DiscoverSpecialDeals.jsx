import React from "react";

import Card from "../../utils/Card";
import Image from "next/image";
import { Button } from "antd";
import { Input } from "antd";
const { Search } = Input;

import Container from "@/components/utils/Container";
const DiscoverSpecialDeals = () => {
  return (
    <Container className="mt-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[1rem] lg:gap-[2rem] justify-start ">
      <Card className="overflow-hidden py-[3rem] lg:py-[6rem] lg:px-[5rem]  xl:py-[9rem]   text-white  cursor-pointer shadow-md transition-all  hover:bg-primary hover:text-gray-100 h-full bg-[url(https://a6e8z9v6.stackpathcdn.com/traveltour/homepages/main5/wp-content/uploads/sites/6/2022/06/beach-bg.jpg)] bg-cover">
        <p className="text-2xl font-semibold">{"Discover Special Deals!"}</p>
        <p className="  ">Make sure to check out these special promotions</p>
        <Button
          type="primary"
          className="text-white text-sm bg-primary  mr-auto">
          See Tours
        </Button>
        ``
      </Card>
      <Card className="bg-gray-200 flex flex-col py-[2rem] lg:px-[2rem] xl:px-[3rem] items-start">
        <h2 className="text-2xl font-semibold">Don&apos;t miss a thing</h2>
        <p className="text-gray-500">
          Get update to special deals and exclusive offers. Sign up to our
          newsletter!
        </p>
        <div className="flex ">
          <input
            placeholder="your email address"
            type="email"
            className="p-[0.8rem] lg:p-[1rem] rounded-l-full outline-none text-gray-500 text-xs md:text-sm lg:text-base"
          />
          <button className="bg-primary text-white px-[1rem] rounded-r-full text-xs md:text-base">
            Subscribe
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default DiscoverSpecialDeals;
