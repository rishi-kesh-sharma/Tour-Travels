import React from "react";
import Section from "./Section";
import Container from "./Container";

// const url = "https://vpn1.netlify.app/static/media/map.1269c3fd.svg";
const irregularShape =
  "bg-[url(https://htmldesigntemplates.com/html/travelin/images/shape8.png)]";
const bg = "https://htmldesigntemplates.com/html/travelin/images/bg/bg1.jpg";

const Banner = ({ title, breadCrumbs }) => {
  return (
    <Section className="pt-[3rem] bg-[url(https://htmldesigntemplates.com/html/travelin/images/bg/bg1.jpg)] after:bg-no-repeat after:opacity-[0.2] after:bg-cover h-[80vh]  max-h-[500px]">
      <Container className="flex  items-center justify-center flex-col h-full gap-[2rem] ">
        <h1 className="text-gray-100 text-[2rem] font-semibold">{title}</h1>
        <ul className="flex gap-[1rem]">
          {breadCrumbs.map((breadCrumb, index) => {
            return (
              <li key={index} className="text-gray-50">
                {breadCrumb}
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};

export default Banner;
