import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="next absolute top-[45%] z-[40] left-[-0px]  md:left-[-15px]  lg:-left-[40px] bg-primary w-7 h-7 lg:w-12 lg:h-12  rounded-full flex justify-center items-center text-white "
      onClick={onClick}>
      <BsArrowLeft className="relative z-40" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="next absolute top-[45%] z-40 right-[0] md:right-[-15px] lg:-right-[45px]  bg-primary h-7 w-7 lg:w-12 lg:h-12  rounded-full flex justify-center items-center text-white"
      onClick={onClick}>
      <BsArrowRight className="relative z-40" />
    </button>
  );
}

const CostumSlider = ({ children, dynamicSetting }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...dynamicSetting,
  };
  return (
    <div className="relative ">
      <Slider pauseOnHover={false} autoplay={true} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default CostumSlider;
