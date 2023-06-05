import { Table } from "antd";
import React from "react";

const data = [
  {
    orderNumber: 1012,
    date: "11/02/2022",
    total: "$550.00",
    paymentMethod: "Bank Transfer",
  },
];

const columns = [
  {
    title: "Order Number",
    dataIndex: "orderNumber",
    key: "orderNumber",
    render: (text) => (
      <div className=" text-gray-500">
        <p className="">{text}</p>
      </div>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => (
      <div className=" text-gray-500">
        <p className="">{text}</p>
      </div>
    ),
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (text) => (
      <div className=" text-gray-500">
        <p className="">{text}</p>
      </div>
    ),
  },
  {
    title: "Payment Method",
    dataIndex: "paymentMethod",
    key: "paymentMethod",
    render: (text) => (
      <div className=" text-gray-500">
        <p className="">{text}</p>
      </div>
    ),
  },
];

const OrderTable = () => (
  <Table
    size="small"
    columns={columns}
    bordered
    scroll={true}
    dataSource={data}
    showHeader={true}
    pagination={false}
  />
);
// export default App;

export default OrderTable;
