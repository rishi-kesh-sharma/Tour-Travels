import React from "react";

import Card from "../../utils/Card";
import Image from "next/image";
import { Rate } from "antd";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
const RelatedTours = ({ tours }) => {
  return (
    <>
      {tours.map((item, index) => (
        <Card className="bg-white shadow-md cursor-pointer  border-white  hover:border-primary  border-b-2 ">
          <CardImage>
            <Image src={item.image[0]} className="rounded-lg" />
          </CardImage>
          <CardContent className="">
            <h2 className="text-primary">{item.country}</h2>
            <h1 className=" text-lg font-semibold">{item.place}</h1>
            <div>
              <Rate key={index} allowHalf defaultValue={item?.rating} />
              <span className="text-gray-500">({item?.totalTours})</span>
            </div>
            <p className="text-sm text-gray-400">{item.description}</p>
            <div className="flex gap-[0.3rem] items-center">
              <h2 className=" text-primary font-semibold">${item.cost} </h2>
              <span className="text-gray-500 text-xs">| Per Person</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default RelatedTours;
