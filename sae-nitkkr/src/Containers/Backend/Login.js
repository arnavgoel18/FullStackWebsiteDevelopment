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
        <form action="">
          <div className='LoginPage-field'>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="LoginPage-username"></input>
          </div>
          <div className='LoginPage-field'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="LoginPage-password"></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
