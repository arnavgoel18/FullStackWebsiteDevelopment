import React, { Component } from "react";
import "./DisplayContactCard.css";
function DisplayContactCard(props) {
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
            <p>Name *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.Name}</p>
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
            <p>Phone No. *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.Phoneno}</p>
          </div>
        </div>


        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Institute/Organisations</p>
          </div>
          <div className="ttable-cell">
            <p>{props.institute}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>Your Message *</p>
          </div>
          <div className="ttable-cell">
            <p>{props.message}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>
              Reason to Contact *
            </p>
          </div>
          <div className="ttable-cell">
            <p>{props.reason}</p>
          </div>
        </div>

        <div className="ttable-row">
          <div className="ttable-cell ffirst-cell">
            <p>
              Person Contacting us is a *{" "}
            </p>
          </div>
          <div className="ttable-cell">
            <p>{props.person}</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default DisplayContactCard;
