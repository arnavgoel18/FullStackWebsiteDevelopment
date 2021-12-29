import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div className="LoginPage-loginBody">
      <div className="LoginPage-header">
        <i class="fa fa-user fa-lg" aria-hidden="true"></i>
        <button type="submit">Sign Out</button>
      </div>
      <div className="LoginPage-container">
        <h2 className="LoginPage-form-title">Login</h2>
        <form>
          <div className='LoginPage-field'>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="LoginPage-username"></input>
          </div>
          <div className='LoginPage-field'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="LoginPage-password"></input>
          </div>
          <button type="submit" onClick={checkCredentials}>Login</button>
        </form>
      </div>
    </div>
  );
}

function checkCredentials(e){
  const userName = document.getElementById("LoginPage-username").value;
  const password = document.getElementById("LoginPage-password").value;

  if(userName == "SAE" && password == "123"){
     e.preventDefault();
    window.location.href='/admin/displayInfo';
  }
  else{
    window.alert("Wrong Password or Username");
  }
}

export default Login;
