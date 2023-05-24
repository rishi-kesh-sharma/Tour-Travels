import React from "react";

import { footer } from "@/data";
import Image from "next/image";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
const Footer = () => {
  return (
    <Section className="bg-slate-800">
      <Container className="grid mt-[5rem]  text-gray-200 gap-[1rem] md:grid-cols-2 lg:grid-cols-6  lg:justify-center lg:justify-items-center text-sm md:text-lg py-[2rem]  md:py-[3rem]">
        <div className="flex flex-col gap-[1rem] col-span-2">
          <Image src={footer.logo} />
          <p className="text-sm">{footer.text}</p>

          <ul className="flex   text-lg flex-col">
            {footer.contacts.map((contact, index) => (
              <li key={index} className="">
                <span className="font-semibold text-sm">{contact.title}: </span>
                <span className="text-sm">{contact.name}</span>
              </li>
            ))}
          </ul>
          <ul className="flex   text-lg">
            {footer.socials.map((social, index) => (
              <li key={index} className="p-[0.4rem] ">
                <a className="" href={social.url}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {footer.columns.map((column, index) => {
          return (
            <div key={index} className={`${column.items && "col-span-2"} `}>
              <h2 className="text-lg w-auto font-semibold mb-[2rem] relative after:absolute after:h-[2px] after:bg-white after:w-[50%] after:left-0 after:bottom-[-5px]">
                {column.heading}
              </h2>
              {column.links ? (
                <ul className="flex flex-col gap-[0.7rem]">
                  {column?.links.map((link, index) => {
                    return (
                      <li className="text-sm hover:text-blue-400" key={index}>
                        {link.url ? <a href="">{link.name}</a> : link.name}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul className="flex flex-col gap-[2rem]">
                  {column.items.map((item) => {
                    return <li className="text-sm">{item}</li>;
                  })}
                </ul>
              )}
            </div>
          );
        })}

        <div className=" text-[10px] `md:text-sm mt-[1rem]   items-start justify-self-center col-span-2">
          Copyright © 2019 All Rights Reserved by App Technologies
        </div>
      </Container>
    </Section>
  );
};
export default Footer;
