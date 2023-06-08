import { Button, Tabs } from "antd";

const Tab = () => {
  const items = [].map((item, index) => ({
    label: item.title,
    key: index,
    children: item.form,
  }));
  const mode = "top";

  return (
    <Tabs
      defaultActiveKey="0"
      tabPosition={mode}
      items={items}
      animated={true}
      size="small"
      tabBarStyle={{ fontWeight: 400, fontSize: "1.1rem" }}
    />
  );
};

export default Tab;
