import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';
import "../Backend/Login.css";
import man_sitting from '../../Assets/LoginPageLogos/man_sitting.jpg'
import db from "../../Firebase";
import { getStorage, ref, deleteObject } from "firebase/storage";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

function Login() {
    var [tester, setTester] = useState(true);
    var [ambInfoName, setAmbInfoName] = useState([]);
    var [ambInfoReferalCode, setAmbInfoReferalCode] = useState([]);

    async function getAmbInfo() {
        const ambInfo = collection(db, "finalStudentAmbassador");
        const ambInfo_doc = await getDocs(ambInfo);
        ambInfoName = ambInfo_doc.docs.map((doc) => doc.data().studentName);
        ambInfoReferalCode = ambInfo_doc.docs.map((doc) => doc.data().referralCode);
        setAmbInfoName(ambInfoName);
        setAmbInfoReferalCode(ambInfoReferalCode);
      }

      if (tester == true) {
        window.addEventListener("load", getAmbInfo());
        setTester(false);
      }
    

  const[userid,setuserid]=useState();
  const[password,setpassword]=useState();
  const[loggedin,setloggedin]=useState(false);
  

  function checkCredentials(e){
  
    if(ambInfoName.includes(userid) && ambInfoReferalCode.includes(password)){
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
    return <Redirect to={"/ShowAmbassador?username="+ userid +"&password=" + password}/>
  }
  else if(loggedin==true)
  {
    return <Redirect to="/Ambassador/login"/>
  }
  else{
  return (
     <div id="logincontainer">
        <div id="loginbox">
            <div id="loginlogo"> <img id="login_man-sitting"src={man_sitting} alt=""/></div>
            <div id="loginmain">
              <div id="logincompo1"> <h2 id="h2comp1">SAE NITKKR Ambassador</h2> </div>
              <br/>
              <div id="logincompo2"> <input type="text" id="loginadmin" className="con"  placeholder= "Admin"  onChange={(e)=>
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
  );
          }
}



export default Login;

