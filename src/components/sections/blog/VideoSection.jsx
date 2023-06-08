import Section from "@/components/utils/Section";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const VideoSection = () => {
  return (
    <Section className="relative bg-[url(https://htmldesigntemplates.com/html/travelin/images/bg/bg1.jpg)] bg-cover bg-no-repeat h-full rounded-lg">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-30 rounded-lg"></div>

      <BsFillPlayCircleFill className=" z-50 text-primary  text-6xl  absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] border-gray-400 border rounded-full p-1" />
    </Section>
  );
};

export default VideoSection;
