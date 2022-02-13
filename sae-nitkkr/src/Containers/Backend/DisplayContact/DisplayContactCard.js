import React, {useState} from 'react'
import './DisplayContactCard.css';
function DisplayContactCard(props) {

  // var [bgcolor, setBgcolor] = useState('');
  // function setColor(){
  //   var col;
  //   if(props.status == 'new')
  //     col = '#F1A32E';
  //   if(props.status == 'progress')
  //     col = '#F2CC45';
  //   if(props.status == 'done')
  //     col = '#9EDA75';

  //   setBgcolor(col);
  // }

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
// style={{background: props.status == 'progress'? '#F2CC45': '#9EDA75'}}