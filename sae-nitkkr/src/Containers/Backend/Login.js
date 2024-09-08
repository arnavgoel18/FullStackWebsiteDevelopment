import React, { useState } from "react";
import "./Login.css";
import man_sitting from "../../Assets/LoginPageLogos/man_sitting.webp";

function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [error, setError] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://sae-backend.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      const { token } = data;

      // Store JWT token in localStorage
      localStorage.setItem('token', token);

      // Redirect to admin panel
      // navigate('/admin');
      window.location.href = "/admin";
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
    return (
      <div id="logincontainer">
        <div id="loginbox">
          <div id="loginlogo">
            {" "}
            <img id="login_man-sitting" src={man_sitting} alt="" />
          </div>
          <div id="loginmain">
            <div id="logincompo1">
              {" "}
              <h2 id="h2comp1">Login For SAE ADMIN</h2>{" "}
            </div>
            <br />
            <div id="logincompo2">
              {" "}
              <input
                type="text"
                id="loginadmin"
                class="con"
                placeholder="Admin"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div id="logincompo3">
              {" "}
              <input
                type="password"
                id="loginpass"
                class="con"
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <br />
            <div id="logincompo4">
              <button id="loginbut" onClick={handleLogin}>
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
