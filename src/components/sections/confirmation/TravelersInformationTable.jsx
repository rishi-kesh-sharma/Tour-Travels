import { Table } from "antd";
import React from "react";

const data = [
  {
    label: "Booking Number",
    value: "5784-BD245",
  },
  {
    label: "First Name",
    value: "Jessica",
  },
  {
    label: "Last Name",
    value: "Brown",
  },
  {
    label: "Email Address",
    value: "jessica@gmail.com",
  },
  {
    label: "Street Address and number",
    value: "353 Third floor Avenue",
  },
  {
    label: "Town/City",
    value: "Paris",
  },
  {
    label: "ZIP Code",
    value: "75800-875",
  },
  {
    label: "Country",
    value: "France",
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

const TravelersInformationTable = () => (
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
// export default App;

export default TravelersInformationTable;
