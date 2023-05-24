import React from "react";
import { DatePicker, Space } from "antd";

const onChange = (date, dateString) => {};

const CustomDatePicker = ({ size = "large", className = "" }) => (
  <Space direction="vertical" className="w-full">
    <DatePicker size={size} className={className} onChange={onChange} />
  </Space>
);

export default CustomDatePicker;
