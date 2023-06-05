import { bestTourPackagesData, toursSidebarData } from "@/data";
import React from "react";

import { Button, Checkbox, Input, Rate, Slider } from "antd";
import Image from "next/image";
import Section from "@/components/utils/Section";
import { AiFillTag } from "react-icons/ai";
import { BiLike, BiPhone, BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Place from "/public/assets/images/places/place1.jpg";
import { IoLocationOutline } from "react-icons/io5";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Sidebar = () => {
  return (
    <Section className=" hidden  md:grid grid-cols-1  col-span-1 xl:col-span-1 gap-[3rem] ">
      <div className="grid grid-cols-1 gap-3 border shadow-md p-5 rounded-lg ">
        <h2 className="text-xl font-semibold">Your Booking Details</h2>
        <p className="text-gray-400 text-sm">
          Paid was hill sir high 24/7. For him precaution any advantages
          dissimilar.
        </p>
        <p className="text-gray-400 text-sm">Hotline: +475 15 123 21</p>
        <p className="text-gray-400 text-sm">Email: support@Yatriiworld.com</p>
        <p className="text-gray-400 text-sm">Livechat: Yatriiworld (Skype)</p>
      </div>
      <div className="grid grid-cols-1 gap-6 border shadow-md p-5 rounded-lg  ">
        <h2 className="text-xl font-semibold">Why Booking With Us?</h2>
        <div>
          <h4 className="text-base font-semibold">No Booking Charges</h4>
          <p className="text-gray-400 text-sm">
            We don't charge you an extra fee for booking a hotel room with us
          </p>
        </div>
        <div>
          <h4 className="text-base font-semibold">No Cancellation Sees</h4>
          <p className="text-gray-400 text-sm">
            We don't charge you a cancellation or modification fee in case plans
            change
          </p>
        </div>
        <div>
          <h4 className="text-base font-semibold">Instant Confirmation</h4>
          <p className="text-gray-400 text-sm">
            Instant booking confirmation whether booking online or via the
            telephone
          </p>
        </div>
        <div>
          <h5 className="text-base font-semibold">Flexible Booking</h5>
          <p className="text-gray-400 text-sm">
            You can book up to a whole year in advance or right up until the
            moment of your stay
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Sidebar;
