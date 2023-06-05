import React from "react";

import Card from "../../utils/Card";
import CostumSlider from "../../utils/CustomSlider";
import Image from "next/image";
import Section from "../../utils/Section";
import Container from "../../utils/Container";
import cl1 from "/public/assets/images/cl-1.png";
import cl2 from "/public/assets/images/cl-2.png";
import cl3 from "/public/assets/images/cl-3.png";
import cl4 from "/public/assets/images/cl-4.png";
import cl5 from "/public/assets/images/cl-5.png";
import cl6 from "/public/assets/images/cl-6.png";
import cl7 from "/public/assets/images/cl-7.png";
import cl8 from "/public/assets/images/cl-8.png";
const cl = [cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8];
const AwesomePartnersCards = () => {
  const dynamicSetting = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
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
          {cl.map((item) => (
            <div className="py-2 px-5">
              <Image className="" src={item} />
            </div>
          ))}
        </CostumSlider>
      </Container>
    </Section>
  );
};

export default AwesomePartnersCards;
