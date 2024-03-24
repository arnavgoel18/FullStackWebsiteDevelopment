import React, { useState } from "react";
import "./Cards.scss";
import Card from "./Card";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cards = (props) => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <h2 className="year-heading">{props.yr}</h2>
      <div className={showFull?"cards-full":"cards"}>
        {props.DetailsArray.map((val) => (
          <Card
            key={val.id}
            img={val.img}
            name={val.name}
            LinkedIn={val.LinkedIn}
            Email={val.Email}
            Team={val.Team}
            metadata={val.metadata}
            Department={val.Department}
            github={val.github}
          />
        ))}
      </div>
      {!showFull && (
        <IoIosArrowDown className="arrow-btn" onClick={() => setShowFull(true)} />
      )}
      {showFull && (
        <IoIosArrowUp className="arrow-btn" onClick={() => setShowFull(false)} />
      )}
    </>
  );
};

export default Cards;
