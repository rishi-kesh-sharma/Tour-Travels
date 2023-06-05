import { Button, Input } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";

import * as yup from "yup";

const ReviewForm = () => {
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
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      
      <Form className="grid grid-cols-2 gap-5">
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
        <Field name="comment">
          {({}) => {
            return <Input.TextArea rows={5} size="large" placeholder="Comment" className="col-span-full" />;
          }}
        </Field>
        <Button size="large" type="ghost" className="bg-primary text-white w-[150px]">
          Submit Review
        </Button>
      </Form>
    </Formik>
  );
};

export default ReviewForm;
