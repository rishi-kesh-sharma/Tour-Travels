import React from "react";
import VideoImage from "/public/assets/images/videoImage.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Video = () => {
  return (
    <div className={`relative   bg-[${VideoImage.src}]  `}>
      <BsFillPlayCircleFill className="absolute z-50 " />
    </div>
  );
};

export default Video;
