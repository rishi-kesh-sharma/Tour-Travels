import React from "react";

import Card from "../../utils/Card";
import CostumSlider from "../../utils/CustomSlider";
import { flightsCardData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
const HeroCards = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: null,
    prevArrow: null,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <Section className="">
      <Container>
        <CostumSlider dynamicSetting={dynamicSetting}>
          {flightsCardData.map((item, index) => (
            <div className="py-2 pr-5 ">
              <Card
                className="bg-white cursor-pointer shadow-md px-0 transition-all border-b-2 border-white hover:border-b-primary "
                item={item}
                key={index}>
                <Image src={item.image} />
                <h3>{item.title}</h3>
              </Card>
            </div>
          ))}
        </CostumSlider>
      </Container>
    </Section>
  );
};

export default HeroCards;
