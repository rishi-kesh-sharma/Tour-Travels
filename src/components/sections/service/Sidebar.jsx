import { bestTourPackagesData, toursSidebarData } from "@/data";
import React from "react";

import { Checkbox, Slider } from "antd";
import Image from "next/image";
import Section from "@/components/utils/Section";
import Place from "/public/assets/images/places/place1.jpg";
const servicesData = [
  {
    image: Place,
    title: "An Incredibly Easy Method That Works For All",
    date: "10 Apr 2021",
  },
  {
    image: Place,
    title: "An Incredibly Easy Method That Works For All",
    date: "10 Apr 2021",
  },
  {
    image: Place,
    title: "An Incredibly Easy Method That Works For All",
    date: "10 Apr 2021",
  },
];

import Tags from "./Tags";

const Sidebar = () => {
  return (
    <Section className=" gap-[2rem] hidden lg:block  overflow-hidden lg:grid-cols-1 ">
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
      <div className="mt-10 ">
        <h2 className="font-semibold text-xl mb-4">Related Services</h2>
        <ul className="flex gap-8 flex-col">
          {servicesData.map((item, index) => {
            return (
              <li className="grid grid-cols-4 gap-3">
                <Image
                  src={item.image}
                  className="col-span-1 h-full rounded-sm"
                />
                <div className="col-span-3">
                  <h3 className=" font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-[2rem]">
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
