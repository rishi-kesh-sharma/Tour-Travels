import { bestTourPackagesData, toursSidebarData } from "@/data";
import React from "react";

import { Checkbox, Slider } from "antd";
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
    <Section className=" gap-[1rem] hidden md:grid  overflow-hidden mt-[13rem]  lg:mt-[8.5rem]"></Section>
  );
};

export default Sidebar;
