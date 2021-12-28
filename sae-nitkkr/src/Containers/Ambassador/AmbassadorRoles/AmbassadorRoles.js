import React from "react";
import AmbassadorRolesCard from "./AmbassaderRolesCard";
import "./AmbassadorRoles.css";

function AmbassadorRoles() {
  return (
    <div className="mainBoxRoles">
      <div className="rolesTitle">
        Roles as an <br />
        Ambassador for <br /> e - Autokriti
      </div>
      <div className="ambassadorRoles">
        <AmbassadorRolesCard
          number="01."
          heading="Recruiting students for Worskhop"
          content="You will help recruit interested candidates for workshops and courses. A traininig session will provide you with all the info you might need."
        />
        <AmbassadorRolesCard
          number="02."
          heading="Spreading the Word of our workshop"
          content="Getting the word out using Social Media platmforms or Campus News Letters to enroll as many students as possible."
        />
        <AmbassadorRolesCard
          number="03."
          heading="Claim your Ambassador Certificate"
          content="Must bring at least 2 entries in all the courses and workshops combined to avail the Ambassdor Certificate."
        />
      </div>
    </div>
  );
}

export default AmbassadorRoles;
