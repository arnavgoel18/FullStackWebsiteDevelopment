//login page for ambassadors

import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';
import "../Backend/Login.css";
import man_sitting from '../../Assets/LoginPageLogos/man_sitting.jpg'
import db from "../../Firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import Footer from '../../Components/Footer/Footer(black)/FooterBlack';
import NavBar from '../../Components/NavBar/NavBar';

function Login() {
    var [tester, setTester] = useState(true);
    var [ambInfoName, setAmbInfoName] = useState([]);
    var [ambInfoReferalCode, setAmbInfoReferalCode] = useState([]);

    async function getAmbInfo() {
        const ambInfo = collection(db, "finalStudentAmbassador");
        const ambInfo_doc = await getDocs(ambInfo);
        ambInfoName = ambInfo_doc.docs.map((doc) => doc.data().phone);
        ambInfoReferalCode = ambInfo_doc.docs.map((doc) => doc.data().referralCode);
        setAmbInfoName(ambInfoName);
        setAmbInfoReferalCode(ambInfoReferalCode);
      }

      if (tester == true) {
        window.addEventListener("load", getAmbInfo());
        setTester(false);
      }
    

  var [userid,setuserid]=useState();
  var [password,setpassword]=useState();
  const[loggedin,setloggedin]=useState(false);
  

  function checkCredentials(e){
  
    if(ambInfoReferalCode.includes(userid) && ambInfoName.includes(password)){
      localStorage.setItem("token","shivaji");
      localStorage.setItem("username",userid);
      localStorage.setItem("password",password);
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
    userid = localStorage.getItem("username");
    password = localStorage.getItem("password");
    return <Redirect to={"/ShowAmbassador?username="+ userid +"&password=" + password}/>
  }
  else if(loggedin==true)
  {
    return <Redirect to="/Ambassador/login"/>
  }
  else{
  return (
    <>
      <NavBar/>
      <div id="logincontainer">
        <div id="loginbox">
            <div id="loginlogo"> <img id="login_man-sitting"src={man_sitting} alt=""/></div>
            <div id="loginmain">
              <div id="logincompo1"> <h2 id="h2comp1">SAE NITKKR Ambassador</h2> </div>
              <br/>
              <div id="logincompo2"> <input type="text" id="loginadmin" className="con"  placeholder= "Username"  onChange={(e)=>
            {
              setuserid(e.target.value)
            }}/></div>
              <div id="logincompo3"> <input type="password" id="loginpass" className="con" placeholder="Password" onChange={(e)=>
            {
               setpassword(e.target.value)
            }}/></div>
              <br/>
              <div id="logincompo4"><button id="loginbut" onClick={checkCredentials}>LOGIN</button></div>
            </div>
        </div>
        
    </div>
    <Footer/>
    </>
  );
          }
}

export default Login;

