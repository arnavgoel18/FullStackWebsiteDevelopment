import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';
import "./Login.css";
import man_sitting from '../../Assets/LoginPageLogos/man_sitting.webp'

function Login() {
  const[userid,setuserid]=useState();
  const[password,setpassword]=useState();
  const[loggedin,setloggedin]=useState(false);
  

  function checkCredentials(e){
  
    if(userid== "saeoperator" && password == "wearesaenitkkr"){
      localStorage.setItem("token","shivaji");
       e.preventDefault();
       setloggedin(true);
     
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
    
     <div id="logincontainer">
        
        <div id="loginbox">
            <div id="loginlogo"> <img id="login_man-sitting"src={man_sitting} alt=""/></div>
            <div id="loginmain">
              <div id="logincompo1"> <h2 id="h2comp1">Login For SAE ADMIN</h2> </div>
              <br/>
              <div id="logincompo2"> <input type="text" id="loginadmin" class="con"  placeholder= "Admin"  onChange={(e)=>
            {
              setuserid(e.target.value)
            }}/></div>
              <div id="logincompo3"> <input type="password" id="loginpass" class="con" placeholder="Password" onChange={(e)=>
            {
               setpassword(e.target.value)
            }}/></div>
              <br/>
              <div id="logincompo4"><button id="loginbut" onClick={checkCredentials}>LOGIN</button></div>
            </div>
        </div>
    </div>
  );
          }
}



export default Login;

