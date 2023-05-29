import { bestTourPackagesData, toursSidebarData } from "@/data";
import React from "react";

import { Checkbox, Slider } from "antd";
import Image from "next/image";
import Section from "@/components/utils/Section";
import { AiFillGooglePlusCircle, AiFillTag } from "react-icons/ai";
import Tab from "./Tab";
import { BiLike, BiPhone, BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Person from "/public/assets/images/peoples/person1.jpg";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import Tags from "./Tags";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Sidebar = () => {
  return (
    <Section className=" gap-[2rem] hidden lg:block  overflow-hidden lg:grid-cols-1 xl:col-span-2">
      <h1 className="font-semibold text-lg">Search Here</h1>

      <div className="flex w-full mt-2">
        <input
          placeholder="Search your keyword here"
          type="email"
          className="p-[0.9rem] md:p-[1rem] rounded-l-lg outline-none text-gray-500 text-xs md:text-base border mt w-full"
        />
        <button className="bg-primary text-white px-[1rem] rounded-r-lg text-xs md:text-base">
          Search
        </button>
      </div>
      <div className="shadow-md flex  flex-col  gap-[0.7rem] items-center p-4 border mt-3 rounded-lg">
        <Image
          src={Person}
          className="rounded-full object-cover  h-[100px] w-[100px]"
        />
        <h2>{"Relson Dulux"}</h2>
        <ul className="flex gap-2">
          {[
            { icon: <BsFacebook />, color: "gray" },
            { icon: <AiFillGooglePlusCircle />, color: "red" },
            { icon: <BsTwitter />, color: "green" },
          ].map((item, index) => {
            return (
              <li className={`bg-${item.color}-800`} key={index}>
                {item.icon}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-[2rem]">
        <Tab />
      </div>

      <div className="mt-[2rem]">
        <h2 className="text-lg font-semibold">{"All Categories"}</h2>
        <ul className="flex flex-col gap-2 mt-[1rem]">
          {[
            { isActive: true, title: "All" },
            { isActive: false, title: "Featured" },
            { isActive: false, title: "Sliders" },
            { isActive: false, title: "Manage Listings" },
            { isActive: false, title: "Address and Map" },
            { isActive: false, title: "Reservation Requests" },
            { isActive: false, title: "Your Reservation" },
            { isActive: false, title: "Search Results" },
          ].map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  item.isActive ? "bg-primary text-white" : "text-gray-500"
                } p-3 border rounded-md  hover:bg-primary hover:text-gray-100 cursor-pointer`}>
                {item.title}
              </li>
            );
          })}
        </ul>
        <div className="mt-[2rem] flex flex-col gap-3">
          <h1 className="font-semibold text-xl">Tags</h1>
          <Tags
            tagsData={[
              "Tour",
              "Rental",
              "City",
              "Yatch",
              "Activity",
              "Museum",
              "Beauty",
              "Classic",
              "Creative",
              "Designs",
              "Featured",
              "Free Style",
              "Programs",
              "Travel",
            ]}
          />
        </div>
      </div>
    </Section>
  );
};

export default Sidebar;
