import Card from "@/components/utils/Card";
import CardContent from "@/components/utils/CardContent";
import CardImage from "@/components/utils/CardImage";
import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
import { team } from "@/data";
import Image from "next/image";
import React from "react";
import { BsFacebook, BsPinterest, BsTwitter } from "react-icons/bs";

const Team = () => {
  return (
    <Section className="mt-[2rem] md:mt-[5rem]">
        <h1 className="text-center text-xl md:text-3xl font-semibold"> Team & Founders</h1>
      <Container className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1rem] md:gap-[2rem] mt-[2rem]">
        {team.map((item, index) => {
          return (
            <Card
              key={index}
              className="group overflow-hidden gap-[1.3rem] rounded-lg flex flex-col  items-center transition-all w-full cursor-pointer shadow-md">
              <CardImage>
                <Image
                  src={item.image}
                  className="rounded-lg group-hover:scale-105 transition-all overflow-hidden"
                />
              </CardImage>
              <CardContent className="items-center gap-[0.5rem]">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500 text-sm">{item.designation}</p>
                <div className="flex gap-[1rem]">
                  <BsFacebook href={item.socials.facebook} />
                  <BsPinterest href={item.socials.pinterest} />
                  <BsTwitter href={item.socials.twitter} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </Section>
  );
};

export default Team;
