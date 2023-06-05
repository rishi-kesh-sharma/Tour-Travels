import Section from "@/components/utils/Section";
import { Progress } from "antd";
import React from "react";

const chronologyData = [
  {
    title: "2013 Present",
    text: "manager,GoodLayers Inc",
  },
  {
    title: "2008-2013",
    text: "Holiday Inn Corporation",
  },
  {
    title: "2000-2008",
    text: "lead Marketing,Airbnb Corp",
  },
  {
    title: "1997-2000",
    text: "Massachusetts Institute of Technology,Computer Engineering",
  },
];

const skillsData = [
  {
    title: "Tour Experience",
    percent: 90,
  },
  {
    title: "Costumer Relation",
    percent: 70,
  },
  {
    title: "Marketing",
    percent: 60,
  },
  {
    title: "Managing",
    percent: 85,
  },
];

const MainContent = () => {
  return (
    <Section className="flex flex-col gap-14 items-center md:items-start">
      <Section>
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Jane Smith
        </h1>
        <h4 className="text-gray-500 text-center md:text-start">
          {" "}
          CEO & Founder
        </h4>
      </Section>
      <Section>
        <h2 className="font-semibold text-lg mb-5"> BIOGRAPHY</h2>
        <p className="text-gray-400 text-sm">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment. I throw myself down among the tall grass by the
          trickling stream; and, as I lie close to the earth. Thousand unknown
          plants are noticed by me. When I hear the buzz of the little world
          among the stalks, and grow familiar with the countless.
        </p>
      </Section>
      <Section>
        <h2 className="font-semibold text-lg mb-5"> CHRONOLOGY</h2>
        <ul className="flex flex-col gap-6">
          {chronologyData.map((item, index) => {
            return (
              <li>
                <h5 className="text-gray-600 font-semibold  mb-2">
                  {item.title}
                </h5>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </Section>
      <Section>
        <h2 className="font-semibold text-lg mb-5"> SKILLS</h2>
        <ul className="flex flex-col gap-6">
          {skillsData.map((item, index) => {
            return (
              <li>
                <h5 className="text-gray-600 font-semibold  mb-2">
                  {item.title}
                </h5>
                <Progress
                  strokeColor={"#029e9d"}
                  size={["100%", 15]}
                  showInfo={true}
                  percent={item.percent}
                />
              </li>
            );
          })}
        </ul>
      </Section>
    </Section>
  );
};

export default MainContent;
