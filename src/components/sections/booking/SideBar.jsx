import React from "react";

import { Button, Checkbox, Input, Rate, Slider } from "antd";
import Image from "next/image";
import Section from "@/components/utils/Section";
import { IoLocationOutline } from "react-icons/io5";
import PriceSummary from "./PriceSummary";
import Place from "/public/assets/images/places/place1.jpg";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Sidebar = () => {
  return (
    <Section className=" hidden  md:grid grid-cols-1  col-span-1 xl:col-span-1 gap-[3rem] ">
      <div className="grid grid-cols-1 gap-7 border shadow-md p-5 rounded-lg ">
        <h2 className="text-xl font-semibold">Your Booking Details</h2>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-3 ">
          <Image src={Place} className="h-full rounded-lg" />
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 text-sm">
              <Rate
                value={5}
                allowHalf
                allowClear={false}
                className="text-xs"
              />
              <span className="text-xs text-gray-500">(200 Reviews)</span>
            </div>
            <h2 className="font-semibold  2xl:text-lg ">
              Adriative Adventure Zagreb To Athens
            </h2>
            <div className="flex gap-1 items-center">
              <IoLocationOutline />
              <span className="font-semibold text-primary">Croatia</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-3  ">
          <div className=" border flex flex-col gap-1  bg-gray-50 p-4 rounded-md">
            <p className=" text-sm text-gray-500">Check in</p>
            <h5 className="font-semibold">Thu 21 Feb 2022</h5>
            <p className="text-xs text-gray-500">15:00 -22:00</p>
          </div>
          <div className=" border flex flex-col gap-1 bg-gray-50 p-4 rounded-md ">
            <p className=" text-sm text-gray-500">Check in</p>
            <h5 className="font-semibold">Thu 21 Feb 2022</h5>
            <p className="text-xs text-gray-500">15:00 -22:00</p>
          </div>
        </div>
        <div className=" grid gird-cols-1 gap-1 ">
          <p className="text-gray-500"> Total Length of Stay</p>
          <h5 className="font-semibold ">8 Days | 7 Nights</h5>
          <p className="text-primary text-xs ">Travelling on diffrent dates?</p>
        </div>
        <div className=" grid gird-cols-1 gap-1">
          <p className="text-gray-500"> You Selected</p>
          <div className="flex flex-nowrap gap-4 justify-between">
            <h5 className="font-semibold ">Superior Double Rooms</h5>
            <h5 className="text-gray-600">1 Room , 3 Adults</h5>
          </div>
          <p className="text-primary text-xs ">Travelling on diffrent dates?</p>
        </div>
      </div>
      <div className="shadow-md  bg-white p-4 flex flex-col gap-2 rounded-lg">
        <h2 className="font-semibold text-lg">Your Price Summary</h2>
        <PriceSummary />
      </div>
      <div className="flex flex-col gap-4 p-4 border shadow-md rounded-md">
        <h2 className="font-semibold text-lg">Your Payment Schedule</h2>
        <div className="flex flex-nowrap gap-5 items-center justify-between">
          <p className="text-gray-500 text-sm">
            before you stay you&apos;ll pay
          </p>
          <p className="text-gray-500 text-sm">$40.00</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 shadow-md rounded-md p-8">
        <h2 className="font-semibold text-lg">Do You Have A Promo Code?</h2>
        <Input size="large" />
        <Button
          type="ghost max-w-[120px]"
          className="bg-black text-white hover:bg-secondary"
          size="large">
          Apply
        </Button>
      </div>
    </Section>
  );
};

export default Sidebar;
