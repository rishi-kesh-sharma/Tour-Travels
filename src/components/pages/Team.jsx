import React from "react";
import AwesomePartners from "@/components/sections/home/AwesomePartners";
import Banner from "../utils/Banner.jsx";
import AboutTeam from "../sections/team/AboutTeam.jsx";
import ExcellentTeam from "../sections/team/ExcellentTeam.jsx";
import ExcellentTeamGrid from "../sections/team/ExcellentTeamGrid.jsx";

const team = () => {
  return (
    <div>
      <Banner title={"Our Team"} breadCrumbs={["Home", "Team"]} />
      <ExcellentTeam />
      <AboutTeam />
      <ExcellentTeamGrid />
      <AwesomePartners />
    </div>
  );
};

export default team;
