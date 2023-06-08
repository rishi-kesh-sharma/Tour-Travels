import React from "react";

import Image from "next/image";
import Section from "../../utils/Section";
import { Rate } from "antd";
import { BiTimeFive, BiWifi } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import TourImage from "/public/assets/images/tours/tour.jpg";
import Itinerary from "./Itinerary";
import FAQ from "./FAQ";
const ToursList = () => {
  const itineraryData = [
    {
      day: 2,
      title: "Day 1 - Arrive in Zürich, Switzerland",
      description:
        "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
    },
    {
      day: 2,
      title: "Ziirich-Biel/BienneNeuchatel-Geneva",
      description:
        "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light",
    },
    {
      day: 3,
      title: "Enchanting Engelberg",
      description:
        "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
    },
    {
      day: 4,
      title: "Enchanting Engelberg",
      description:
        "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
    },
    {
      day: 4,
      title: "Enchanting Engelberg",
      description:
        "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
    },
  ];
  return (
    <Section className="rounded-lg  grid grid-cols-1 col-span-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1rem] md:gap-[2rem]  lg:col-span-2 xl:col-span-3 overflow-hidden">
      <Section className="lg:col-span-full flex flex-col gap-[1rem] md:justify-between ">
        <h1 className="text-xl md:text-3xl font-semibold">
          Africa – Amazing African Safari
        </h1>
        <div>
          <Rate value={4} allowHalf allowClear={false} />
          <span className="text-xs md:text-sm"> (1 Review)</span>
        </div>
        <div className="flex-col flex md:flex-row md:flex-wrap gap-[1rem]  md:items-center ">
          <p className="flex gap-[0.4rem] items-center text-gray-500 text-sm ">
            <BiTimeFive />5 Hours
          </p>
          <p className="flex gap-[0.4rem] items-center text-gray-500 text-sm">
            <FaUsers />
            Max Guests-200
          </p>
          <p className="flex gap-[0.4rem] items-center text-gray-500 text-sm">
            <BiWifi />
            Wifi Available
          </p>
          <p className="flex gap-[0.4rem] items-center text-gray-500 text-sm">
            <CiCalendar />
            Jan- July
          </p>
        </div>
        <div>
          <Image src={TourImage} className="rounded-lg" />
        </div>
        <h2 className="text-xl font-semibold">Detail</h2>
        <div className="flex flex-col gap-[1rem]">
          <p className=" text-gray-500 ">
            Leave your guidebooks at home and dive into the local cultures that
            make each destination so special. We’ll connect you with our
            exclusive experiences. Each trip is carefully crafted to let enjoy
            your vacation.
          </p>
          <p className=" text-gray-500 ">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents.
          </p>
        </div>
        <div>
          {[
            {
              title: "Price Includes",
              items: [
                "Air Fares",
                "3 Nights Hotel Accommodation",
                "On Trip Transport",
                "2 Meals/day",
              ],
            },
            {
              title: "Price Excludes",
              items: [
                "Driver Service Fee",
                "Guide Service Fee",
                "Room Service Fee",
              ],
            },
          ].map((item, index) => {
            return (
              <div key={index}>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                {item.items.map((temp, index) => {
                  return (
                    <li className="text-gray-500" key={index}>
                      {temp}
                    </li>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-lg font-semibold"> What to Expect</h1>
          <p className="text-gray-500">
            {" "}
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents.
          </p>
          <ul className="text-gray-500  list-decimal">
            {[
              "view the City Walls",
              "Hiking in the Forest",
              "Discover the famous view point The Lark",
              "Sunset on the cruise",
            ].map((item, index) => {
              return (
                <li className="" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-[1rem]">Itinerary</h1>

          <Itinerary faqs={itineraryData} />
        </div>
        <div>
          <h1 className="text-lg font-semibold my-[1rem] ">FAQ</h1>
          <FAQ faqs={itineraryData} />
        </div>
      </Section>
    </Section>
  );
};

export default ToursList;
