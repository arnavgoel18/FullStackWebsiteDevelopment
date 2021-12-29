import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div className="loginBody">
      <div className="header">
        <i class="fa fa-user fa-lg" aria-hidden="true"></i>
        <button type="submit">Sign Out</button>
      </div>
      <div className="container">
        <h2 className="form-title">Login</h2>
        <form action="">
          <div className='field'>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"></input>
          </div>
          <div className='field'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
