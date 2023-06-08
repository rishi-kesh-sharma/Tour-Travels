import Container from "@/components/utils/Container";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Information = () => {
  return (
    <Container className="flex flex-col gap-1">
      <h2 className="font-semibold text-2xl md:text-3xl text-center">
        Information About Us
      </h2>
      <p className="text-sm text-gray-400 text-center max-w-[500px] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ab
        temporibus iure obcaecati corporis facere. Et quidem cumque amet
        tempora!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-5">
        <div className="flex flex-col gap-2 items-center bg-gray-50 border p-10 rounded-md ">
          <IoLocationOutline className="text-6xl font-bold text-primary" />
          <h2 className="text-xl font-semibold">Office Location</h2>

          <p className="text-sm text-gray-500">Lagankhel, Lalitpur</p>
        </div>
        <div className="flex flex-col gap-2 items-center bg-gray-50 border p-10 rounded-md">
          <BiPhone className="text-6xl font-bold text-primary" />
          <h2 className="text-xl font-semibold">Phone Number</h2>
          <p className="text-sm text-gray-500">9876543210</p>
        </div>
        <div className="flex flex-col gap-2 items-center bg-gray-50 border p-10 rounded-md">
          <MdEmail className="text-6xl font-bold text-primary" />
          <h2 className="text-xl font-semibold">Email Address</h2>
          <p className="text-sm text-gray-500">Help@apptechnologies.co</p>
        </div>
      </div>
    </Container>
  );
};

export default Information;
