import { Tabs } from "antd";
import { blogsData } from "@/data";
import Image from "next/image";

const Tab = () => {
  const items = [
    { title: "Popular", items: blogsData.slice(0, 4) },
    { title: "Recent", items: blogsData.slice(4, -1) },
  ].map((item, index) => ({
    label: item.title,
    key: index,
    children: (
      <div className="grid grid-cols-1 gap-3">
        {item.items.map((blog, index) => {
          return (
            <div key={index} className="grid grid-cols-5 items-center gap-2">
              <Image
                src={blog.image}
                className="col-span-1 object-cover rounded-sm"
              />
              <div className="col-span-4">
                <h3 className="font-semibold text-xs">{blog.title}</h3>
                <p className="text-xs text-gray-500">{"08 Mar 2021"}</p>
              </div>
            </div>
          );
        })}
      </div>
    ),
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
