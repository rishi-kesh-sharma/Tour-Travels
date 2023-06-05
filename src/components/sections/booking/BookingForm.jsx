import { Button, Checkbox, Input } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

import * as yup from "yup";
import CustomSelect from "../commons/CustomSelect";
import CustomDatePicker from "../commons/CustomDatePicker";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BiCard } from "react-icons/bi";
import Image from "next/image";
const formData = [
  {
    name: "title",
    placeholder: "Select",
    label: "Title",
    type: "select",
    options: [
      { value: "Mr.", label: "mr." },
      { value: "Mrs.", label: "mrs." },
    ],
  },
  {
    name: "firstName",
    placeholder: "First Name",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    placeholder: "First Name",
    label: "First Name",
    type: "text",
  },

  {
    name: "email",
    placeholder: "Email Address",
    label: "Email ",
    type: "email",
  },
  {
    name: "lastName",
    placeholder: "First Name",
    label: "First Name",
    type: "text",
  },
  {
    name: "phone",
    placeholder: "Phone No.",
    label: "Phone",
    type: "number",
  },
  {
    name: "gender",
    placeholder: "Gender",
    label: "Select Gender",
    type: "select",
    options: [
      {
        value: "male",
        label: "Male",
      },
      {
        value: "female",
        label: "Female",
      },
    ],
  },
  {
    name: "dob",
    placeholder: "DOB",
    label: "DOB",
    type: "date",
  },
  {
    name: "country",
    placeholder: "Select Country",
    label: "Country",
    type: "select",
    options: [
      {
        label: "Nepal",

        value: "nepal",
      },
      {
        label: "India",
        value: "india",
      },
      {
        label: "China",
        value: "china",
      },
      {
        label: "Bangladesh",
        value: "Bangladesh",
      },
    ],
  },
  {
    name: "city",
    placeholder: "Select City",
    label: "Select City",
    type: "select",
    options: [
      {
        label: "Lalitpur",
        value: "lalitpur",
      },
      { label: "Kathmandu", value: "kathmandu" },
      {
        label: "Bhaktapur",
        value: "Bhaktapur",
      },
    ],
  },
  {
    name: "addressLine1",
    placeholder: "Address Line 1",
    label: "Address Line 1",
    type: "text",
  },
  {
    name: "addressline2",
    placeholder: "Address Line 2",
    label: "Address Line 2",
    type: "text",
  },
];

const BookingForm = () => {
  const initialValues = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    country: "",
    city: "",
    addressLine1: "",
    addressLine2: "",
    email: "",
    enquiry: "",
  };
  const validationSchema = yup.object().shape({
    title: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    firstName: yup.string().required(),
    gender: yup.string().required(),
    dob: yup.string().required(),
    country: yup.string().required(),
    city: yup.string().required(),
    addressLine1: yup.string().required(),
    addressLine2: yup.string().required(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      className="">
      {({ errors }) => {
        return (
          <Form className="grid grid-cols-1 xl:grid-cols-2 items-center gap-x-14 gap-y-5 xl:col-span-2 ">
            {formData.map((item) => {
              return (
                <div className="md:flex flex-col gap-2 ">
                  <label className="text-sm text-gray-500" htmlFor={item.name}>
                    {item.label}
                  </label>
                  {item.type == "select" ? (
                    <Field name={item.name} placeholder={item.placeholder}>
                      {({}) => {
                        return (
                          <CustomSelect options={item.options} size="large" />
                        );
                      }}
                    </Field>
                  ) : item.type == "date" ? (
                    <Field name={item.name}>
                      {({}) => {
                        return <CustomDatePicker size="large" />;
                      }}
                    </Field>
                  ) : (
                    <Field
                      type={item.type}
                      placeholder={item.placeholder}
                      value={item?.value}>
                      {({}) => {
                        return <Input size="large" />;
                      }}
                    </Field>
                  )}

                  <ErrorMessage
                    name={item.name}
                    render={<p>{errors[item.name]}</p>}
                  />
                </div>
              );
            })}
            <Button
              size="large"
              type="ghost"
              className="bg-primary text-white mt-3 w-5/12 ">
              Submit
            </Button>

            <div className="grid col-span-full md:grid-cols-7 p-8 gap-4 bg-gray-100 rounded-lg">
              <div className="grid bg-primary  grid-cols-1 items-center justify-items-center p-3 rounded-md ">
                <BsFillEmojiSmileFill className="text-gray-100 text-3xl" />
              </div>
              <div className="col-span-4 flex flex-col gap-1 h-full ">
                <h2 className=" font-semibold">Good To Know:</h2>
                <p className="text-gray-500 text-sm">
                  Free Cancellation until 14:00 pm !! Feb 2022
                </p>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-2 col-span-full">
              <h2 className="font-semibold text-lg ">How Do You Want To Pay</h2>
              <div className="flex flex-col md:flex-row  gap-3">
                <Button
                  type="ghost"
                  size="large"
                  className="bg-primary text-white block">
                  Credit/Debit card
                </Button>
                <Button
                  type="ghost"
                  size="large"
                  className="bg-white border border-gray-200 text-gray-700 block">
                  Digital Payment
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-y-3 mt-5">
                <div className="flex items-center gap-1">
                  <BiCard className="text-xl" />
                  <h2 className="font-semibold">Credit Card</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 border border-gray-200">
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="carHolderNumber"
                        className="text-gray-500 text-sm">
                        Card Holder Number
                      </label>
                      <Field type="number" name="carHolderNumber">
                        {({}) => <Input size="large" type="number" />}
                      </Field>
                      <ErrorMessage name="carHolderNumber" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="cardNumber"
                        className="text-gray-500 text-sm">
                        Card Number
                      </label>
                      <Field type="number" name="cardNumber">
                        {({}) => <Input size="large" type="number" />}
                      </Field>
                      <ErrorMessage name="cardNumber" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="cardExpiryDate"
                        className="text-gray-500 text-sm">
                        Card Expiry Date
                      </label>
                      <Field type="text" name="cardExpiryDate">
                        {({}) => <Input size="large" type="text" />}
                      </Field>
                      <ErrorMessage name="cardExpiryDate" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="cvc" className="text-gray-500 text-sm">
                        CVC/CCV
                      </label>
                      <Field type="number" name="cvc">
                        {({}) => <Input size="large" type="number" />}
                      </Field>
                      <ErrorMessage name="cvc" />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <Image />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between justify-items-end mt-2">
                  <div className="flex gap-2 text-sm text-gray-500">
                    <Field>{({}) => <Checkbox name="hasAgreed" />}</Field>
                    <p>
                      {" "}
                      By continuing, you agree to the Terms and Conditions.
                    </p>
                  </div>
                  <Button
                    type="ghost"
                    size="large"
                    className="bg-primary text-white md:w-5/12 mt-5">
                    Confirm Booking
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BookingForm;
