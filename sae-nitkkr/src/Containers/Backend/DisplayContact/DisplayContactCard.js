import React from 'react'
import './DisplayContactCard.css';
function DisplayContactCard(props) {
  return (
    <>
      <div className="displayContactCard_contactCardDiv">
        <div className="displayContactCard_firstbox">
          <div className="displayContactCard_nameofapplicant">{props.name}</div>
          <div className="displayContactCard_reason">{props.reason}</div>
          <div className="displayContactCard_message">{props.message}</div>
        </div>
        <div className="displayContactCard_secondbox">
          <div className="displayContactCard_emailid">{props.emailid}</div>
          <div className="displayContactCard_mobile">{props.mobile}</div>
        </div>
        <div className="displayContactCard_thirdbox">
          <div className="displayContactCard_person">{props.person}</div>
          <div className="displayContactCard_college">{props.college}</div>
        </div>
      </div>
    </>
  )
}

export default DisplayContactCard
