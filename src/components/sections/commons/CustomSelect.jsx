import React from "react";
import { Select } from "antd";

const CustomSelect = ({ options, size = "small", className = "" }) => (
  <Select
    className={className}
    size={size}
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? "").includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? "")
        .toLowerCase()
        .localeCompare((optionB?.label ?? "").toLowerCase())
    }
    options={options}
  />
);

export default CustomSelect;
