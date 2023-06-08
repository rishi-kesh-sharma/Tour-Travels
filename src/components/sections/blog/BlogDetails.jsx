import React from "react";

import { blogsData } from "@/data";
import Image from "next/image";
import Section from "../../utils/Section";
import { FaQuoteLeft } from "react-icons/fa";
import VideoSection from "./VideoSection";

const BlogDetail = () => {
  const blog = blogsData[0];
  return (
    <Section className="rounded-lg  grid grid-cols-1  gap-[1rem] lg:col-span-2 xl:col-span-3 overflow-hidden col-span-full">
      <div className="gap-2 md:gap-4 flex flex-col">
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ratione
          quidem mollitia impedit autem repellendus debitis architecto, incidunt
          omnis. Harum explicabo fugit autem rerum natus totam repellendus,
          veniam pariatur quae eos, quis animi ea, unde quibusdam nostrum in sed
          quos. Libero ratione qui saepe eaque consectetur porro hic
          dignissimos. Placeat.
        </p>
        <div className="h-[200px] md:h-[500px]">
          <VideoSection />
        </div>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ab
          officia officiis quisquam repudiandae voluptatum perferendis odio.
          Est, autem repellat eaque ea quaerat repudiandae quibusdam voluptas
          perferendis accusamus aperiam. Sed voluptas autem molestiae sint quia
          sequi animi, quidem reiciendis et ab dignissimos sapiente deserunt non
          atque tenetur incidunt tempore nesciunt necessitatibus delectus ipsam
          alias commodi vel. Commodi culpa molestiae fuga voluptas nobis
          suscipit! Impedit inventore error ullam ab iure, quaerat aperiam
          quibusdam nostrum unde numquam voluptatem illum est laboriosam in
          rerum veritatis id architecto cupiditate, saepe, dignissimos
          distinctio. Ipsa deserunt explicabo laborum molestias necessitatibus
          aliquam quibusdam quis natus vel laudantium.
        </p>
      </div>
      <div className=" gap-3 flex items-center justify-center flex-col justify-items-center bg-primary text-gray-200 p-[2rem] min-h-[300px]">
        <FaQuoteLeft className=" p-3 rounded-full text-gray-700" />
        <h2 className="text-lg font-semibold text-center">
          “To take a trivial example, which ever undertakes laborious physical
          work exercise, except obtain some advantage blinded”
        </h2>
        <p className="italic">By Michael Delwell</p>
      </div>
      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-[2rem]">
        <Image src={blogsData[0].image} className="rounded-md" />
        <Image src={blogsData[1].image} className="rounded-md" />
      </div>
      <p className="text-gray-500 text-sm">
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
    </Section>
  );
};

export default BlogDetail;
