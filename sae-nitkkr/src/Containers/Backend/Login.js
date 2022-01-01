import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';
import "./Login.css";

function Login() {
  const[userid,setuserid]=useState();
  const[password,setpassword]=useState();
  const[loggedin,setloggedin]=useState(false);
  

  function checkCredentials(e){
  
    if(userid== "saeoperator" && password == "wearesaenitkkr"){
      localStorage.setItem("token","shivaji");
       e.preventDefault();
       setloggedin(true);
       console.log(userid);
       console.log(password);
       console.log(loggedin);
       
     
    }
    else{
      console.log(loggedin);
      window.alert("Wrong Password or Username");
      
    }
  }
  const token=localStorage.getItem("token");

  let loggedinsecond=true;
  if(token==null)
  {
    loggedinsecond=false;
  }

  if(loggedinsecond==true)
  {
    return <Redirect to="/admin/actions"/>
  }
  else if(loggedin==true)
  {
    return <Redirect to="/admin/actions"/>
  }
  else{
  return (
    
    <div id="LoginPage-loginBody">
     
      <div id="LoginPage-container">
        <p id="LoginPage-form-title">Login</p>
        <form>
          <div id='LoginPage-field_userid'>
            <label htmlFor="username" id="login_username">Username</label>
             <input type="text" name="username" id="LoginPage-username" onChange={(e)=>
            {
              setuserid(e.target.value)
            }}></input>
           </div>
           <div id='LoginPage-field_password'>
            <label htmlFor="password" id="login_password">Password</label>
            <input type="password" name="password" id="LoginPage-password" onChange={(e)=>
            {
               setpassword(e.target.value)
            }}></input>
          </div>
          <div id="login_submit">
          <button type="submit" onClick={checkCredentials} id="submit_button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
          }
}



export default Login;

