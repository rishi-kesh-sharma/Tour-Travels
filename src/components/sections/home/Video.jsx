import React from "react";
import VideoImage from "/public/assets/images/videoImage.jpg";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Video = () => {
  const bg = `bg-[${VideoImage.src}]`;
  return (
    <div className={`relative   bg-[${VideoImage.src}]  `}>
      {/* <Image
        src={VideoImage}
        className="w-full object-contain   z-20 peer-last:absolute peer-last:top-[50%] peer-last:left-[50%] peer-last:translate-x-[-50%] peer-last:translate-y-[-50%] peer-last:z-40 peer-last:text-white"
      /> */}
      <BsFillPlayCircleFill className="absolute z-50 " />
    </div>
  );
};

export default Video;
