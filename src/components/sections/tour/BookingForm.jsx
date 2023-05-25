import { Button, Select } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const BookingForm = () => {
  return (
    <Formik>
      <Form className="grid grid-cols-1 gap-[1rem]">
        <div className="flex gap-2 items-center text-gray-500">
          <BsCalendarDate />
          <h2>February 1,2030</h2>
        </div>
        <p className="text-gray-500" >Available 67 seats</p>
        <div className="flex gap-[1rem] items-center">
          <FaUsers />
          <Field
            placeholder="Number Of People"
            name="noOfPeople"
            as={Select}
            
            options={[
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 },
            ]}
          />
        </div>
        <Button size="large" type="ghost" className="bg-primary text-white ">
          Proceed Booking
        </Button>
      </Form>
    </Formik>
  );
};

export default BookingForm;
