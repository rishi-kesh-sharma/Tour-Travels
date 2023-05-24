import React from "react";

const Heading = ({
  topTitle,
  title,
  subtitle,
  className = "",
  centered = true,
}) => {
  const titleFirstWord = title?.split(" ")[0];
  const titleRemainingWord = title
    ?.split(" ")
    ?.map((item, index) => (index == 0 ? " " : `${item} `));

  return (
    <div
      className={`heading flex gap-[0.3rem] items-center  flex-col m-auto ${className} max-w-[600px] `}>
      <p className={`text-secondary   text-lg ${centered && "text-center"}`}>
        {topTitle && topTitle}
      </p>

      <h1 className={`text-3xl font-semibold   ${centered && "text-center"}`}>
        {titleFirstWord && titleFirstWord}{" "}
        <span className="text-primary">
          {titleRemainingWord && titleRemainingWord}
        </span>
      </h1>
      <p
        className={`text-gray-400 text-sm  ${
          centered && "text-center"
        } max-w-[500px]`}>
        {subtitle && subtitle}
      </p>
    </div>
  );
};

export default Heading;
