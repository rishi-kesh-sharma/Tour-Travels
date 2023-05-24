import { useState } from "react";
import AuthMain from "./AuthMain";
import BrandImage from "./BrandImage";

const MemberPage = ({ brand, logoUrl }) => {
  return (
    <div className="flex flex-row w-full ">
      <div className=" pt-[3rem] md:pt-[4rem]  flex-1">
        <div className="flex border bg-white rounded-lg shadow-md overflow-hidden mx-auto  lg:max-w-4xl p-8 gap-[2rem]">
          <BrandImage logoUrl={logoUrl} />
          <AuthMain brand={brand} />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
