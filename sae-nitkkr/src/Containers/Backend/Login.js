import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div id="LoginPage-loginBody">
     
      <div id="LoginPage-container">
        <p id="LoginPage-form-title">Login</p>
        <form>
          <div id='LoginPage-field_userid'>
            <label htmlFor="username" id="login_username">Username</label>
             <input type="text" name="username" id="LoginPage-username"></input>
           </div>
           <div id='LoginPage-field_password'>
            <label htmlFor="password" id="login_password">Password</label>
            <input type="password" name="password" id="LoginPage-password"></input>
          </div>
          <div id="login_submit">
          <button type="submit" onClick={checkCredentials} id="submit_button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function checkCredentials(e){
  const userName = document.getElementById("LoginPage-username").value;
  const password = document.getElementById("LoginPage-password").value;

  if(userName == "saeoperator" && password == "wearesaenitkkr"){
     e.preventDefault();
    window.location.href='/admin/actions';
  }
  else{
    window.alert("Wrong Password or Username");
  }
}

export default Login;
