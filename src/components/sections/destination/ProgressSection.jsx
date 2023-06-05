import { Progress } from "antd";
import Item from "antd/es/list/Item";
const items = [
  {
    title: "Cleanliness",
    percent: 40,
  },
  {
    title: "Facilities",
    percent: 60,
  },
  {
    title: "Value for money",
    percent: 80,
  },
  {
    title: "Service",
    percent: 20,
  },
  {
    title: "Location",
    percent: 50,
  },
];
const ProgressSection = () => (
  <div className="grid grid-cols-3 gap-5">
    <div className="h-full col-span-1 text-white bg-black flex flex-col items-center justify-center rounded-lg gap-3">
      <h1 className="text-center text-4xl font-semibold">2.2/5</h1>
      <h3 className="text-center text-xl font-semibold">
        "Feel so Much Worst Than Thinking"
      </h3>
      <p className="text-center">From 40 Reviews</p>
    </div>
    <div className="col-span-2 h-full w-full">
      {items.map((item) => {
        return (
          <div>
            <h5 className="text-gray-400">{item.title}</h5>
            <Progress
              strokeColor={"#029e9d"}
              size={["100%", 20]}
              showInfo={false}
              percent={item.percent}
            />
          </div>
        );
      })}{" "}
    </div>
  </div>
);
export default ProgressSection;
