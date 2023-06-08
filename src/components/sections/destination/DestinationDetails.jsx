import React from "react";

import { topDestinationData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import { Rate } from "antd";
import { IoLocationOutline } from "react-icons/io5";
import ReviewForm from "./ReviewForm";
import ProgressSection from "./ProgressSection";

const DestinationDetail = () => {
  return (
    <Section className="rounded-lg   gap-[1rem] lg:col-span-2 xl:col-span-3 overflow-hidden col-span-full">
      <h1 className="font-bold text-3xl mb-1">Bangkok Thailand</h1>
      <div className="flex flex-col md:flex-row gap-1 items-center mb-5">
        <IoLocationOutline className="text-gray-500 text-lg" />
        <span className="text-sm text-gray-500">
          Greater London,United Kingdom{" "}
        </span>
        <Rate
          allowClear
          allowHalf
          value={topDestinationData[0].ratings}
          className="mb-2"
        />
        <span className="text-gray-500 text-sm">(1,186 Reviews)</span>
      </div>
      <Image src={topDestinationData[0].image} className="rounded-md mb-11" />
      <h1 className="font-semibold text-2xl mb-3">Description</h1>
      <p className="text-gray-500 text-sm mb-9">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ab
        officia officiis quisquam repudiandae voluptatum perferendis odio. Est,
        autem repellat eaque ea quaerat repudiandae quibusdam voluptas
        perferendis accusamus aperiam. Sed voluptas autem molestiae sint quia
        sequi animi, quidem reiciendis et ab dignissimos sapiente deserunt non
        atque tenetur incidunt tempore nesciunt necessitatibus delectus ipsam
        alias commodi vel. Commodi culpa molestiae fuga voluptas nobis suscipit!
        Impedit inventore error ullam ab iure, quaerat aperiam quibusdam nostrum
        unde numquam voluptatem illum est laboriosam in rerum veritatis id
        architecto cupiditate, saepe, dignissimos distinctio. Ipsa deserunt
        explicabo laborum molestias necessitatibus aliquam quibusdam quis natus
        vel laudantium.
      </p>
      <h1 className="font-semibold text-2xl mb-3">Gallery</h1>

      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[2rem] mb-9">
        <Image src={topDestinationData[0].image} className="rounded-md" />
        <Image src={topDestinationData[1].image} className="rounded-md" />
      </div>

      <div className="mb-9">
        <h1 className="font-semibold text-2xl mb-3">Map</h1>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59592.33680120934!2d85.18748437247488!3d27.693103047769096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1685603711813!5m2!1sen!2snp"
          height="450"
          allowfullscreen=""
          loading="lazy"
          className="rounded-lg w-full"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="mb-9">
        <h1 className="font-semibold text-2xl mb-3">Average Reviews</h1>

        <ProgressSection />
      </div>
      <div className="mb-9">
        <h1 className="font-semibold text-2xl mb-3">Write A Review</h1>
        <ReviewForm />
      </div>
    </Section>
  );
};

export default DestinationDetail;
