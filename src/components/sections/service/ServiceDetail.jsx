import React from "react";

import Image from "next/image";
import Section from "../../utils/Section";
import TourImage from "/public/assets/images/tours/tour.jpg";
import Image1 from "/public/assets/images/tours/tour.jpg";
import Image2 from "/public/assets/images/places/place1.jpg";
const ServiceDetail = () => {
  return (
    <Section className="rounded-lg  grid grid-cols-1 col-span-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1rem] md:gap-[2rem]  lg:col-span-2  overflow-hidden">
      <Section className="lg:col-span-full flex flex-col gap-[1rem]  ">
        <h1 className="text-xl md:text-3xl font-semibold">
          Share Your Travel Locations
        </h1>
        <div>
          <Image src={TourImage} className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-[1rem]">
          <p className=" text-gray-500 ">
            Leave your guidebooks at home and dive into the local cultures that
            make each destination so special. We’ll connect you with our
            exclusive experiences. Each trip is carefully crafted to let enjoy
            your vacation. A wonderful serenity has taken possession of my
            entire soul, like these sweet mornings of spring which I enjoy with
            my whole heart. I am alone, and feel the charm of existence in this
            spot, which was created for the bliss of souls like mine. I am so
            happy, my dear friend, so absorbed in the exquisite sense of mere
            tranquil existence, that I neglect my talents.
          </p>

          <p className=" text-gray-500 ">
            Leave your guidebooks at home and dive into the local cultures that
            make each destination so special. We’ll connect you with our
            exclusive experiences. Each trip is carefully crafted to let enjoy
            your vacation. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Alias, dolorum cumque. Officiis amet deleniti ab rem, aperiam
            magnam id ipsam.
          </p>
          <div className="grid lg:grid-cols-2 gap-5">
            <Image src={Image1} className="rounded-md h-full object-cover" />
            <Image src={Image2} className="rounded-md h-full object-cover" />
          </div>
          <p className=" text-gray-500 ">
            Leave your guidebooks at home and dive into the local cultures that
            make each destination so special. We’ll connect you with our
            exclusive experiences. Each trip is carefully crafted to let enjoy
            your vacation. Leave your guidebooks at home and dive into the local
            cultures that make each destination so special. We’ll connect you
            with our exclusive experiences. Each trip is carefully crafted to
            let enjoy your vacation.
          </p>
          <p className=" text-gray-500 ">
            Leave your guidebooks at home and dive into the local cultures that
            make each destination so special. We’ll connect you with our
            exclusive experiences. Each trip is carefully crafted to let enjoy
            your vacation. Leave your guidebooks at home and dive into the local
            cultures that make each destination so special. We’ll connect you
            with our exclusive experiences. Each trip is carefully crafted to
            let enjoy your vacation.
          </p>
        </div>
      </Section>
    </Section>
  );
};

export default ServiceDetail;
