import Image from "next/image";
import React from "react";
import Person from "/public/assets/images/peoples/person1.jpg";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import Section from "@/components/utils/Section";

const socials = [
  {
    icon: <BsFacebook className="text-primary" />,
    url: "https://facebook.com",
  },
  {
    icon: <AiOutlineTwitter className="text-primary" />,
    url: "https://twitter.com",
  },
  {
    icon: <BsInstagram className="text-primary" />,
    url: "https://instagram.com",
  },
  {
    icon: <BsLinkedin className="text-primary" />,
    url: "https://linkedin.com",
  },
];
const Sidebar = () => {
  return (
    <Section className="flex flex-col gap-4 items-center ">
      <Image
        src={Person}
        className="rounded-full w-[150px] h-[150px]  object-cover  "
      />
      <ul className="flex flex-nowrap gap-4 items-center justify-center ">
        {socials.map((item, index) => {
          return (
            <li>
              <a className="text-primary" href={item.url}>
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Sidebar;
