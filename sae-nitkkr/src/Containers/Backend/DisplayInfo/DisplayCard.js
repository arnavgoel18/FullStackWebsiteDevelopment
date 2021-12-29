import React, { Component } from "react";
import "./DisplayCard.css";
function DisplayCard(props) {
  return (
    <>
      <div className="ttable-box">
        <div className="ttable-row ttable-head">
          <div className="ttable-cell ffirst-cell">
            <p>Ambassador Name</p>
          </div>
          <div className="ttable-cell">
            <p>Responses</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Full Name</p>
          </div>
          <div className="ttable-cell">
            <p>{props.FullName}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>College Name</p>
          </div>
          <div className="ttable-cell">
            <p>{props.ClgName}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Branch</p>
          </div>
          <div className="ttable-cell">
            <p>{props.Branch}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Current Semester</p>
          </div>
          <div className="ttable-cell">
            <p>{props.CurrentSem}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>phone No.</p>
          </div>
          <div className="ttable-cell">
            <p>{props.Phoneno}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Email id</p>
          </div>
<<<<<<< HEAD
          <div className="table-cell">
            <p>{props.Emailid}</p>
=======
          <div className="ttable-cell">
            <p>{props.Email - id}</p>
>>>>>>> cbfc45eac087e2588f9b205178c3edefdab8496c
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>
              Why do you think you can be a Campus Ambassador Why do you think
              you can be a Campus Ambassador ?
            </p>
          </div>
          <div className="ttable-cell">
            <p>
              Why do you think you can be a Campus Ambassador Why do you think
              you can be a Campus Ambassador ?Why do you think you can be a
              Campus Ambassador Why do you think you can be a Campus Ambassador
              ?Why do you think you can be a Campus Ambassador Why do you think
              you can be a Campus Ambassador ?Why do you think you can be a
              Campus Ambassador Why do you think you can be a Campus Ambassador
              ?Why do you think you can be a Campus Ambassador Why do you think
              you can be a Campus Ambassador ?Why do you think you can be a
              Campus Ambassador Why do you think you can be a Campus Ambassador{" "}
            </p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Have you ever been a Campus Ambassador ?</p>
          </div>
<<<<<<< HEAD
          <div className="table-cell">
            <p>{props.ans1}</p>
=======
          <div className="ttable-cell">
            <p>{prop.ans1}</p>
>>>>>>> cbfc45eac087e2588f9b205178c3edefdab8496c
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>How did you find out about this ambassador program?</p>
          </div>
<<<<<<< HEAD
          <div className="table-cell">
            <p>{props.ans2}</p>
=======
          <div className="ttable-cell">
            <p>{prop.ans2}</p>
>>>>>>> cbfc45eac087e2588f9b205178c3edefdab8496c
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>
              What are your top 3 qualities related to being a Campus
              Ambassador?{" "}
            </p>
          </div>
<<<<<<< HEAD
          <div className="table-cell">
            <p>{props.ans3}</p>
          </div>
        </div>

        <div className="table-row">
          <div className="table-cell first-cell">
=======
          <div className="ttable-cell">
            <p>{prop.ans3}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
>>>>>>> cbfc45eac087e2588f9b205178c3edefdab8496c
            <p>
              What two channels do you think are the most effective for engaging
              with our target audience (18-22 Yrs) *
            </p>
          </div>
<<<<<<< HEAD
          <div className="table-cell">
            <p>{props.ans4}</p>
=======
          <div className="ttable-cell">
            <p>{prop.ans4}</p>
>>>>>>> cbfc45eac087e2588f9b205178c3edefdab8496c
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayCard;
