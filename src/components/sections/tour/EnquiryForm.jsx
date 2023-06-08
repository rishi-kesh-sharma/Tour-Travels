import { Button, Input } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";

import * as yup from "yup";

const EnquiryForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    enquiry: "",
  };
  const validationSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    enquiry: yup.string().required(),
  });
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form className="flex flex-col gap-3 pr-2">
        <div className="flex flex-col gap-1">
          <p className="text-gray-500">Full Name *</p>
          <Field name="fullName" as={Input} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-gray-500">Email *</p>
          <Field name="email" as={Input} type="email" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-gray-500">Enquiry *</p>
          <Field name="enquiry" as={Input.TextArea} />
        </div>
        <Button size="large" type="ghost" className="bg-primary text-white ">
          Submit Enquiry
        </Button>
      </Form>
    </Formik>
  );
};

export default EnquiryForm;
