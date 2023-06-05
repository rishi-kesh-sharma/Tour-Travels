import React from "react";
import Banner from "../utils/Banner.jsx";
import GuideDetail from "../sections/GuideDetail/index.jsx";

export default function () {
  return (
    <div>
      <Banner title={"Our Guide Detail"} breadCrumbs={["Home", "Guide"]} />
      <GuideDetail />
    </div>
  );
}
