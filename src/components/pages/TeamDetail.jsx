import React from "react";
import Banner from "../utils/Banner.jsx";
import TeamDetail from "../sections/TeamDetail/index.jsx";

export default function () {
  return (
    <div>
      <Banner
        title={"Our Team Detail"}
        breadCrumbs={["TeamDetail", "Our TeamDetail"]}
      />
      <TeamDetail />
    </div>
  );
}
