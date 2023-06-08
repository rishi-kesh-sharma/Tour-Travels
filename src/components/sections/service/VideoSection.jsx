import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
const overlay =
  "https://htmldesigntemplates.com/html/travelin/images/dot-overlay.png";

const VideoSection = () => {
  return (
    <Section className="relative    mt-[3rem] bg-[url(https://htmldesigntemplates.com/html/travelin/images/bg/bg1.jpg)] bg-cover bg-no-repeat rounded-lg ">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-30 rounded-lg"></div>
      <Container className="py-[3rem] flex flex-col items-center justify-center h-[80vh] max-h-[800px]  gap-[3rem] my-0">
        <div className="relative z-40">
          <h3 className="text-secondary text-center md:text-lg">
            Live Where You're Going
          </h3>
          <h1 className="text-lg md:text-5xl text-white text-center w-[60vw] max-w-[700px] mx-auto">
            Explore Your Life,Travel Where You Want!
          </h1>
          <p className="text-center max-w-[700px] w-[60vw] text-gray-200 md:text-sm text-xs">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            recusandae quos, ullam quasi architecto repudiandae ducimus
            quibusdam amet iste ea."
          </p>
        </div>
        <div className="relative  cursor-default">
          <div className="p-3 border border-secondary rounded-full animate-ping-slow">
            <div className="p-9 border border-white rounded-full "></div>
          </div>
          <BsFillPlayCircleFill className=" z-50 text-primary  text-6xl  absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] border-gray-400 border rounded-full p-1" />
        </div>
      </Container>
    </Section>
  );
};

export default VideoSection;
