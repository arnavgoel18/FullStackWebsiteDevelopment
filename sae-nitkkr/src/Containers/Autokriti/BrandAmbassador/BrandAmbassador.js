import React from "react";
import Roles from "./Roles";
import FormContainer from './FormContainer'
import Benifits from "./Benifits";
import './BrandAmbassador.css'
import $ from 'jquery';


export default function Ap() {
  
  $(document).ready(function () {
    if(window.location.href.includes('#ambassador')){
      $('html, body').animate({
        scrollTop: $('#ambassador').offset().top
      }, 'slow');
    }
});

  function showForm(e){
    document.querySelector('.AmbassadorBody').classList.add('trig')
  }
  function showData(e){
    document.querySelector('.AmbassadorBody').classList.remove('trig')
  }
  return (<>
    <div className="Ambassador-container" id="ambassador">
      <div className="Ambassador-title">
        Become an Ambassador
      </div>
      <div className="AmbassadorBody" >
        <div className="leftportion">
          <div className="ambassador-buttons">
            <button class="button-4 button-41" role="button" onClick={ShowBenifit} >Benefits</button>
            <button class="button-4 button-42" role="button" onClick={ShowRoles} >Roles</button>
          </div>
          <div className="Roles" style={{ display: 'none' }} ><Roles /></div>
          <div className="Benifits"><Benifits /></div>
          <div className="leftportion-joinus" onClick={showForm}>
            Join Us
          </div>
        </div>
        <div className="rightportion">
          <div className="rightportion-back" onClick={showData}>
            back
          </div>
          <FormContainer />
        </div>
      </div>
    </div>
  </>);
}

function ShowBenifit() {
  var benifit = document.getElementsByClassName("Benifits");
  var role = document.getElementsByClassName("Roles");
  document.querySelector('.button-41').style.backgroundColor = "#c5d7e9"
  document.querySelector('.button-42').style.backgroundColor = "white"
  benifit[0].style.display = 'block';
  role[0].style.display = 'none';
}

function ShowRoles() {
  var role = document.getElementsByClassName("Roles");
  var benifit = document.getElementsByClassName("Benifits");
  document.querySelector('.button-42').style.backgroundColor = "#c5d7e9"
  document.querySelector('.button-41').style.backgroundColor = "white"
  role[0].style.display = 'block';
  benifit[0].style.display = 'none';
}