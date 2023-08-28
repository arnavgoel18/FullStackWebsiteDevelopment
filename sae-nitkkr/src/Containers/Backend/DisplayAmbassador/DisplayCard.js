import React, { Component } from "react";
import "./DisplayCard.css";
function DisplayCard(props) {
  return (
    <>
      <div className="ttable-box">
        <div className="ttable-row ttable-head">
          <div className="ttable-cell ffirst-cell">
            <p>{props.docId}</p>
          </div>
          <div className="ttable-cell">
            <p>Responses</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Full Name *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.FullName}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>College Name *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.ClgName}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Branch *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.Branch}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Current Semester *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.CurrentSem}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>phone No. *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.Phoneno}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Email id *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.Emailid}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Why do you think you can be a Campus Ambassador? *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.s1}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Have you ever been a Campus Ambassador? *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.s2}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>
              What are your top 3 qualities related to being a Campus
              Ambassador?
            </p>
          </div>
          <div className="ttable-cell">
            <p>{props.ans2}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>
              What two channels do you think are the most effective for engaging
              with our target audience (18-22 Yrs)? *{" "}
            </p>
          </div>
          <div className="ttable-cell">
            <p>{props.ans3}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>How did you find out about this ambassador program? *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.s3}</p>
          </div>
        </div>
        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Referral Code</p>
          </div>
          <div className="ttable-cell">
            <p>{props.referralCode}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayCard;
