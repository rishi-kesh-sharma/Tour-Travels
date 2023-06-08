import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
import { Button, Input, InputNumber } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";

import * as yup from "yup";
import image from "/public/assets/images/site4hero.jpg";
import Image from "next/image";
import CustomSelect from "../commons/CustomSelect";
import Heading from "@/components/utils/Heading";

const ContactForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    comment: "",
  };
  const validationSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    comment: yup.string().required(),
  });
  return (
    <Section className="">
      <Heading
        title={"Do You Have Any Questions?"}
        subtitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim recusandae quos, ullam quasi architecto repudiandae ducimus quibusdam amet iste ea."
        }
      />
      <Container className="grid md:grid-cols-2 gap-4 mt-6 ">
        <div>
          <Image src={image} className="h-[320px] rounded-lg " />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}>
          <Form className="grid lg:grid-cols-2 gap-5 ">
            <Field name="fullName">
              {({}) => {
                return <Input size="large" placeholder="Name" />;
              }}
            </Field>
            <Field name="email">
              {({}) => {
                return <Input size="large" placeholder="Email" />;
              }}
            </Field>
            <Field name="phone">
              {({}) => {
                return <Input size="large" placeholder="phone" />;
              }}
            </Field>
            <Field name="destination">
              {({}) => {
                return (
                  <CustomSelect
                    size="large"
                    placeholder="Destination"
                    options={[
                      { label: "Nepal", value: "nepal" },
                      { label: "India", value: "india" },
                    ]}
                  />
                );
              }}
            </Field>
            <Field name="comment">
              {({}) => {
                return (
                  <Input.TextArea
                    rows={5}
                    size="large"
                    placeholder="Comment"
                    className="col-span-full"
                  />
                );
              }}
            </Field>
            <Button
              size="large"
              type="ghost"
              className="bg-primary text-white w-[150px]">
              Submit Review
            </Button>
          </Form>
        </Formik>
      </Container>
    </Section>
  );
};

export default ContactForm;
