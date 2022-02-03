import React, { Component } from "react";
import './DisplayQuizescard.css'
export default function DisplayQuizescard(props) {
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
          <p>College *</p>
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
          <p>Semester *</p>
        </div>
        <div className="ttable-cell">
          <p>{props.CurrentSem}</p>
        </div>
      </div>

      <div className="ttable-row">
        <div className="ttable-cell ffirst-cell">
          <p>Referal Code</p>
        </div>
        <div className="ttable-cell">
          <p>{props.ReferalCode}</p>
        </div>
      </div>

      <div className="ttable-row">
        <div className="ttable-cell ffirst-cell">
          <p>Payment ID *</p>
        </div>
        <div className="ttable-cell">
          <p>{props.transaction}</p>
        </div>
      </div>

      

     

      
    </div>
  </>
  );
}
