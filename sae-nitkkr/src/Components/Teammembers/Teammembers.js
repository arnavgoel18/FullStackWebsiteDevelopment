import React from "react";
import "./Teammembers.css";
import Cards from "./cards";
import { Alumni, Details4yr, Details3yr } from "./details";
function Teammembers() {
  return (
    <>
      <p className="ProfInchargesandManagers-Managers-Heading">Team Members</p>
      <Cards yr={"4th Year"} DetailsArray={Details4yr} />
      <Cards yr={"3rd Year"} DetailsArray={Details3yr} />
      <Cards yr={"Alumni"} DetailsArray={Alumni} />
    </>
  );
}

export default Teammembers;
