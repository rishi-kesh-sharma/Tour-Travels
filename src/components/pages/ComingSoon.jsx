import React from "react";
import Image from "next/image";
import Logo from "/public/assets/images/logo.png";
import Container from "../utils/Container";
import Section from "../utils/Section";
import { useState } from "react";
import moment from "moment";

const TimeDisplayer = () => {
  const [time, setTime] = useState([]);
  var targetTime = moment("2023-07-03 12:00:00");
  function calculateRemainingTime(targetTime) {
    var currentTime = moment();
    var remainingTime = moment.duration(targetTime.diff(currentTime));

    if (remainingTime.asSeconds() < 0) {
      return "Target time has already passed.";
    }

    var days = remainingTime.days();
    var hours = remainingTime.hours();
    var minutes = remainingTime.minutes();
    var seconds = remainingTime.seconds();
    const remainingTimeObj = [
      { value: days, label: "Days" },
      { value: hours, label: "Hours" },
      { value: minutes, label: "Minutes" },
      { value: seconds, label: "Seconds" },
    ];

    return remainingTimeObj;
  }

  setInterval(() => {
    var remainingTime = calculateRemainingTime(targetTime);
    setTime(remainingTime);
  }, 1000);
  return (
    <ul className="text-white flex  items-center gap-8 md:gap-10 flex-wrap">
      {time.map((item, index) => {
        return (
          <li
            className="flex flex-col items-center md:gap-2  md:w-[100px]"
            key={index}>
            <span className="text-3xl md:text-7xl font-bold">{item.value}</span>
            <span className="text-sm md:text-base">{item.label}</span>
          </li>
        );
      })}
    </ul>
  );
};

const ComingSoon = () => {
  return (
    <Section className="relative pt-[2rem] md:pt-[3rem] bg-[url(https://htmldesigntemplates.com/html/travelin/images/bg/bg1.jpg)] bg-cover bg-no-repeat  pb-[1rem] sm:pb-[2rem] md:h-[100vh] overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50 "></div>
      <Container className="flex flex-col gap-11 items-center h-full justify-center relative z-50">
        <Image src={Logo} />
        <div className="flex flex-col items-center ">
          <div className="flex items-center gap-3 flex-wrap md:flex-nowrap text-center">
            <h3 className="text-xl md:text-4xl text-white font-bold">Under</h3>
            <h1 className="text-3xl md:text-6xl text-secondary font-bold">
              Construction
            </h1>
          </div>
          <p className="text-white text-sm mx-auto text-center max-w-[500px]">
            Our website is under construction. We will be here soon with our
            awesome new site, subscribe to be notified.
          </p>
        </div>
        <TimeDisplayer />
      </Container>
    </Section>
  );
};

export default ComingSoon;
