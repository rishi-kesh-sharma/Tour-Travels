import React from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Button, Input, InputNumber } from "antd";

import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
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
      <Container className="grid md:grid-cols-2 gap-7 mt-9 ">
        <div>
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59592.33680120934!2d85.18748437247488!3d27.693103047769096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1685603711813!5m2!1sen!2snp"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}>
          <Form className="grid grid-cols-1 gap-5 ">
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
              className="bg-primary text-white w-[130px]">
              Submit
            </Button>
          </Form>
        </Formik>
      </Container>
    </Section>
  );
};

export default ContactForm;
