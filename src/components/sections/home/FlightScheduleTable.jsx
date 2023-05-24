import { flightScheduleData } from "@/data";
import { Button, Tabs } from "antd";
import React from "react";

import { Table } from "antd";
import Image from "next/image";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, { image, operator }) => (
      <div className=" text-gray-500">
        <Image src={image} />
        <p className="font-semibold">{text}</p>
        <p className="text-sm">{operator}</p>
      </div>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (_, { day, date }) => (
      <div className="text-gray-500">
        <p className="">{day}</p>
        <p>{date}</p>
      </div>
    ),
  },
  {
    title: "Flight Departure",
    dataIndex: "flightDeparture",
    key: "flightDeparture",
    render: (text) => <div className="text-gray-500">{text}</div>,
  },
  {
    title: "Flight Time",
    dataIndex: "flightTime",
    key: "flightTime",
    render: (text, { noOfStops }) => (
      <div className="text-gray-500">
        <p>{text}</p>
        <p>{noOfStops} Stops</p>
      </div>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => (
      <div className="text-primary font-semibold">
        {" "}
        $ {text ? text : "1234"}
      </div>
    ),
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: () => (
      <Button type="middle" className="bg-primary text-white">
        View Deals
      </Button>
    ),
  },
];

const App = ({ data }) => (
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

const FlightScheduleTable = () => {
  const items = flightScheduleData.map((item, index) => ({
    label: `${item.day} ${item.date}`,

    key: index,
    disabled: index === 28,
    children: <App data={item.flights} />,
  }));
  const mode = "top";

  return (
    <div className="mx-auto flex flex-col items-center gap-[2rem] overflow-auto">
      <Tabs
        defaultActiveKey="0"
        tabPosition={mode}
        items={items}
        animated={true}
        centered={true}
        size="small"
        tabBarStyle={{ fontWeight: 400, fontSize: "1.1rem" }}
      />
      <Button size="large" type="ghost" className="bg-primary text-white ">
        View More
      </Button>
    </div>
  );
};

export default FlightScheduleTable;
