import { Table } from "antd";
import React from "react";

const data = [
  {
    label: "Superior Twin",
    value: "$500",
  },
  {
    label: "Number of Travelers",
    value: "3",
  },
  {
    label: "Tax & Fee",
    value: "$50",
  },
  {
    label: "Booking Fee",
    value: "Free",
  },
  {
    label: "Amount",
    value: "$550.00",
  },
 
];

const columns = [
  {
    title: "Label",
    dataIndex: "label",
    key: "label",
    render: (text) => (
      <div className=" text-gray-500">
        <p className="">{text}</p>
      </div>
    ),
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    render: (text) => (
      <div className=" text-gray-500">
        <p className="">{text}</p>
      </div>
    ),
  },
];

const PriceSummary = () => (
  <Table
    size="small"
    columns={columns}
    bordered
    scroll={true}
    dataSource={data}
    showHeader={false}
    pagination={false}
  />
);

export default PriceSummary;
