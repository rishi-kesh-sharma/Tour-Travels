import { toursSidebarData } from "@/data";
import React from "react";

import { Checkbox, Slider } from "antd";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const getField = (type, field) => {
  if (type == "checkbox") {
    return (
      <Checkbox
        name={field.name}
        value={field.value}
        onChange={onChange}
        className="text-gray-500">
        {field.label}
      </Checkbox>
    );
  }
  if (type == "slider") {
    return (
      <Slider
        range
        defaultValue={[0, 300]}
        tooltip={{ open: true }}
        max={field.max}
        min={field.min}
        id={field.name}
      />
    );
  }
};
const Sidebar = () => {
  return (
    <div className="flex flex-col gap-[1rem] overflow-hidden">
      {toursSidebarData.map((item, index) => {
        return (
          <div className="" key={index}>
            <h1 className="text-lg font-semibold pb-[0.2rem] border-b border-b-gray-200">
              {item.name}
            </h1>
            <ul className="flex flex-col gap-[0.4rem] my-[0.7rem]">
              {item.items.map((field, index) => {
                return (
                  <li key={index} className="flex justify-between ">
                    {getField(item.type, field)}
                    <span className="text-gray-500 text-sm">
                      {field?.total}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
