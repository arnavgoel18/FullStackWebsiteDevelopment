import React from 'react'
import "./RedirectToForm.css";

function RedirectToForm() {
  return (
    <div id="redirect_form_container">
      <div id="redirect_form_text">
          Sign up to become Campus Ambassador
      </div>
      <div id="redirect_form_button">
          <a href="#form_body">
          <button id="redirect_signup">
              Sign Up
          </button>
          </a>
      </div>
    </div>
  )
}

export default RedirectToForm
