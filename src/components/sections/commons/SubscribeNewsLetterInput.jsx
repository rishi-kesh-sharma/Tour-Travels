import React from "react";

const SubscribeNewsLetterInput = () => {
  return (
    <div className="flex ">
      <input
        placeholder="your email address"
        type="email"
        className="p-[0.9rem] md:p-[1rem] rounded-l-full outline-none text-gray-500 text-xs md:text-base"
      />
      <button className="bg-primary text-white px-[1rem] rounded-r-full text-xs md:text-base">
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeNewsLetterInput;
