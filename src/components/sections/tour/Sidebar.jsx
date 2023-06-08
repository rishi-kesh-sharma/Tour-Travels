import { bestTourPackagesData, toursSidebarData } from "@/data";
import React from "react";

import Image from "next/image";
import Section from "@/components/utils/Section";
import { AiFillTag } from "react-icons/ai";
import Tab from "./Tab";
import { BiLike, BiPhone, BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Sidebar = () => {
  return (
    <Section className=" gap-[1rem] hidden md:grid  overflow-hidden mt-[13rem]  lg:mt-[8.5rem]">
      <div className="grid grid-cols-2 gap-[1rem]">
        {bestTourPackagesData.map((item, index) => {
          return (
            <Image key={index} src={item.image[0]} className="rounded-md" />
          );
        })}
      </div>
      <div>
        <h5>{"Best Seller"}</h5>
        <div className="flex gap-[0.4rem] items-center font-semibold">
          <AiFillTag />
          <p className="text-gray-600 text-sm">from</p>
          <h2>$100</h2>
        </div>
        <Tab />
      </div>
      <div>
        <h1 className="font-semibold text-lg">Book With Confidence</h1>
        <ul className="flex flex-col gap-1">
          {[
            {
              title: "No-hassle best price guarantee",
              icon: <BiLike className="text-blue-600" />,
            },
            {
              title: "Customer care available 24/7",
              icon: <BiPhone className="text-blue-600" />,
            },
            {
              title: "Free Travel Insurance",
              icon: <BiUser className="text-blue-600" />,
            },
          ].map((item, index) => {
            return (
              <li key={index} className="flex items-center gap-2">
                {item.icon}
                <p className="text-gray-500 text-sm">{item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-lg">Need Help?</h2>
        <div className="flex gap-2 items-center">
          <BiPhone />
          <p className="text-sm text-gray-500">9876543210</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdEmail />
          <p className="text-sm text-gray-500">Help@apptechnologies.co</p>
        </div>
      </div>
    </Section>
  );
};

export default Sidebar;
