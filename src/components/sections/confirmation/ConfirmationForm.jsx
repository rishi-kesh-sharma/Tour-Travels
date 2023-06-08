import { Button, Checkbox, Input } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

import * as yup from "yup";
import CustomSelect from "../commons/CustomSelect";
import CustomDatePicker from "../commons/CustomDatePicker";
import { BsFillEmojiSmileFill, BsPrinter, BsSend } from "react-icons/bs";
import { BiCard, BiCheck } from "react-icons/bi";
import Image from "next/image";
import TravelersInformationTable from "./TravelersInformationTable";
import OrderTable from "./OrderTable";
import Section from "@/components/utils/Section";

const ConfirmationForm = () => {
  return (
    <Section className="grid grid-cols-1 xl:grid-cols-2 items-center gap-x-14 gap-10 xl:col-span-2 ">
      <div className="grid col-span-full  p-8 gap-3 bg-gray-900 rounded-lg items-center">
        <div className="grid bg-white  grid-cols-1 items-center justify-items-center p-3 rounded-md h-[70px] w-[70px]">
          <BiCheck className="text-gray-900 font-bold text-3xl" />
        </div>
        <div className="col-span-4 flex flex-col gap-4 ">
          <h2 className=" font-semibold text-2xl text-gray-100">
            Thank You. Your Booking Order Is Confirmed Now.
          </h2>
          <p className="text-gray-100 text-sm">
            A confirmation email has been sent to your provided email address.
          </p>
        </div>
      </div>
      <div className="col-span-full">
        <h2 className="font-semibold text-xl mb-2"> Payment</h2>

        <OrderTable />
      </div>
      <div className="col-span-full">
        <h2 className="font-semibold text-xl mb-2"> Traveller Information</h2>

        <TravelersInformationTable />
      </div>
      <div className="col-span-full">
        <h2 className="font-semibold text-xl mb-2"> Payment</h2>
        <p className="text-gray-400 text-sm">
          This is the third time I've used Travelo Website and telling you the
          truth their services are always reliable and it ony takes few minutes
          to plan and finalize. Payment is made by Credit Card via Paypal
        </p>
      </div>
      <div className="col-span-full">
        <h2 className="font-semibold text-xl mb-2"> View Booking Details</h2>
        <p className="text-gray-400 text-sm">
          This is the third time I've used Travelo Website and telling you the
          truth their services are always reliable and it ony takes few minutes
          to plan and finalize. https://www.travel.com/booking-details
        </p>
      </div>
      <div className="flex gap-3">
        <Button
          icon={<BsPrinter />}
          size="large"
          type="ghost"
          className="bg-primary text-white mt-3 w-5/12 flex items-center max-w-[130px]">
          Print
        </Button>
        <Button
          icon={<BsSend />}
          size="large"
          type="ghost"
          className="bg-black text-white mt-3 w-5/12 flex items-center max-w-[130px]">
          Send To
        </Button>
      </div>
    </Section>
  );
};

export default ConfirmationForm;
