import React, { useEffect, useState } from "react";
import db from "../../Firebase.js";
import saelogo from "../../Assets/SAELOGO.png";
import emailjs from "@emailjs/browser";
import MoonLoader from "react-spinners/MoonLoader.js";
import "./RegistrationDetails.css";
import {
  collection,
  getDocs, query, where, doc, setDoc
} from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer.js";

var flag = true;
function RegistrationDetails() {
  let timestamp = "";
  let [department, setDepartment] = useState([]);
  const [authorised_user, setauthorised_user] = useState({});
  const [authorised_user2, setauthorised_user2] = useState({});
  const [loading, setLoading] = useState(false);
  let totalamount = 0;
  useEffect(() => {
    console.log("run");
    flag = false;
    const items = JSON.parse(localStorage.getItem("userData"));
    const depart = JSON.parse(localStorage.getItem("department"));
    const items2 = JSON.parse(localStorage.getItem("userData2"));

    if (items) {
      setauthorised_user(items);
      setDepartment(depart);
    }
    if (items2) {
      setauthorised_user2(items2);
    }
  }, []);
  const makePaymentCash = async () => {
    document.getElementById("payform-button1").disabled = true;
    document.getElementById("payform-button1").style.background = "grey";
    setTimeout(() => {
      document.getElementById("payform-button1").disabled = false;
      document.getElementById("payform-button1").style.background = "#3c4fe0";
    }, 5000);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1
      }/${current.getFullYear()}`;
    var newtimestamp = String(new Date().getTime());

    authorised_user["department"] = department;
    authorised_user.paymentid = newtimestamp;

    const toSend = {
      name: authorised_user.name,
      sem: authorised_user.semester,
      branch: authorised_user.branch,
      email: authorised_user.email,
      college: authorised_user.college,
      OrderId: authorised_user.orderid,
      PaymentId: authorised_user.paymentid,
      Phone: authorised_user.phone,
      Payment: 'Cash on delivery',
      QRCodeURL: `https://saenitkurukshetra.in/registered/${authorised_user.paymentid}`,
    };
    emailjs
      .send(
        "service_efl7b9h",
        "template_zezhpzf",
        toSend,
        "ulnoJlsECTLQyCRZ5"
      )
      .then(

        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    const Saving_user_data = authorised_user;
    Saving_user_data.Registration_time = new Date().toString();
    let gotit = await setDoc(
      doc(db, "paymentregistrationid", newtimestamp),
      Saving_user_data
    );

    localStorage.removeItem("userData");
    localStorage.removeItem("department");
    window.location = `/register_confirmation/${newtimestamp}`;

  }
  // const res = await initializeRazorpay();
  // document.getElementById("payform-button1").disabled = true;
  // document.getElementById("payform-button1").style.background = "grey";
  // document.getElementById("payform-button1").innerText = "LOADING...";
  // setTimeout(() => {
  //   document.getElementById("payform-button1").disabled = false;
  //   document.getElementById("payform-button1").style.background = "#3c4fe0";
  //   document.getElementById("payform-button1").innerText = "Pay Now";
  // }, 8000);

  // if (!res) {
  //   alert("Razorpay SDK Failed to load");
  //   return;
  // }

  // Make API call to the serverless API
  // const data = await fetch("https://saepayment.onrender.com/razorpay", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title: "cost",
  //     body: authorised_user.amount,
  //     userId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // }).then((t) => t.json());

  // console.log(data);
  // var options = {
  //   key: "rzp_live_p9zIgcTn6FVaOD",
  //   name: "SAE NIT Kurukshetra",
  //   currency: data.currency,
  //   amount: data.amount,
  //   order_id: data.id,
  //   description: "Thankyou for registration",
  //   image: { saelogo },
  //   handler: async (response) => {
  //     await handler(response);
  //     await set_to_database();
  //     console.log(options);
  //     window.location = `/register_confirmation/${timestamp}`;
  //   },
  //   prefill: {
  //     name: "SAE NIT Kurukshetra",
  //     email: "saenitkkr@nitkkr.ac.in",
  //     contact: "9650735458",
  //   },
  // };
  // console.log(authorised_user.amount);
  // setTotalamount(()=> {return authorised_user.amount})
  // setTotalamount((prev)=>{return prev+authorised_user.amount});
  // if(authorised_user.iot==="group2"){
  //   setTotalamount((prev)=>{return prev+authorised_user2.amount});
  // }


  const loadRazorpay = (amount) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      openRazorpay(amount);
    };
    document.body.appendChild(script);
  };
  // const totalamount=authorised_user.amount
  // if(authorised_user.iot === "group2"){
  //   totalamount+=authorised_user2.amount
  // }
  // console.log(totalamount);
  const openRazorpay = async (amount) => {
    const result = await fetch('http://localhost:5000/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    console.log(result);
    const order = await result.json();

    const options = {
      key: 'rzp_test_DpkksCCoV6nye1',
      amount: order.amount,
      currency: order.currency,
      name: 'SAE NIT KURUKSHETRA',
      description: 'Thank You for Registration',
      order_id: order.id,
      image: { saelogo },
      handler: async (response) => {
        // alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        await secondaryMakePayment();
      },
      prefill: {
        name: 'SAE NIT KURUKSHETRA',
        email: 'saenitkkr@nitkkr.ac.in',
        contact: '9520417250',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // const handler = async (response) => {
  //   authorised_user.orderid = response.razorpay_order_id;
  //   timestamp = response.razorpay_payment_id;
  //   authorised_user.paymentid = timestamp;
  // };



  // const paymentObject = new window.Razorpay(options);
  // paymentObject.open();

  // localStorage.removeItem("userData");
  // localStorage.removeItem("department");

  // const initializeRazorpay = () => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //     document.body.appendChild(script);

  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //   });
  // };
  const sendEmail = async (userDetails) => {
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      });

      const result = await response.json();
      // console.log(response);
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email');
    }
  }
  async function isRegistrationIdUnique(registrationId) {
    const usersCollection = collection(db, "AutokritiRegistration2024"); // Replace with your collection name
    const q = query(usersCollection, where("registrationId", "==", registrationId));

    try {
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // registrationId is already present
        console.log("Registration ID already exists.");
        return false;
      } else {
        // registrationId is unique
        console.log("Registration ID is unique.");
        return true;
      }
    } catch (error) {
      console.error("Error checking registrationId:", error);
      return false;
    }
  }
  async function getUniqueRegistrationId() {
    let isUnique = false;
    let registrationId;

    while (!isUnique) {
      registrationId = generateRegId();
      isUnique = await isRegistrationIdUnique(registrationId);
    }
    return registrationId;
  }
  function generateRegId() {
    // Generate a random integer between 100000 and 999999
    const min = 100000;
    const max = 999999;
    const registrationId = Math.floor(Math.random() * (max - min + 1)) + min;
    return registrationId.toString();
  }
  async function generateRegistrationId() {
    const id = await getUniqueRegistrationId();
    return id;
  }
  const secondaryMakePayment = async () => {
    setLoading(true);
    var newTimestamp = String(new Date().getTime());
    authorised_user["department"] = department;
    authorised_user.paymentid = newTimestamp;
    authorised_user.registrationId = await generateRegistrationId();
    // console.log(authorised_user.registrationId);
    console.log(totalamount);
    if (authorised_user.iot === "group2") {
      authorised_user2.registrationId = await generateRegistrationId();
      authorised_user2.paymentid = newTimestamp;
      authorised_user2["department"] = department;
      // console.log(authorised_user2.registrationId);
    }
    const Saving_user_data2 = authorised_user2;
    const Saving_user_data = authorised_user;
    Saving_user_data.Registration_time = new Date().toString();
    let gotit = await setDoc(
      doc(db, 'AutokritiRegistration2024', newTimestamp),
      Saving_user_data
    )
    // sendEmail(authorised_user);
    if (authorised_user.iot === "group2") {
      Saving_user_data2.Registration_time = new Date().toString();
      // sendEmail(authorised_user2)
      // console.log("saved");
      let gotit = await setDoc(
        doc(db, 'AutokritiRegistration2024', newTimestamp),
        Saving_user_data2
      )
      // loadRazorpay(authorised_user.amount+authorised_user2.amount);
    }
    // setLoading(false);
    window.location = `/autokriti`;
  }
  const handlemakepayment = () => {
    if (authorised_user.iot === "group2") {
      loadRazorpay(authorised_user.amount + authorised_user2.amount)
    }
    else {
      loadRazorpay(authorised_user.amount)
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="reg-details-heading">
        <h1 className="reg-details-h1">Registeration Details</h1>
        {/* {authorised_user.cod == 'Yes' ?  <button className="pay-btn" id="payform-button1" onClick={makePaymentCash}>
          Confirm
        </button> :   */}
        {/* 
        To activate payment gateway
        <button className="pay-btn" id="payform-button1" onClick={makePayment}>
          Pay Now
        </button>  */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
          <button className="pay-btn" id="payform-button1" onClick={handlemakepayment}>
            Pay Now
          </button>
          {loading &&
            <div style={{width:"auto",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
              <MoonLoader loading={loading} size={25} />
            </div>}
        </div>


      </div>

      <div className="reg-details">
        <table border={1} className="reg-details-table">
          <tr>
            <th>TITLES</th>
            <th>VALUES</th>
          </tr>
          <tr>
            <td className="td-first">NAME</td>
            <td>{authorised_user.name}</td>
          </tr>
          <tr>
            <td className="td-first">EMAIL</td>
            <td>{authorised_user.email}</td>
          </tr>
          <tr>
            <td className="td-first">COLLEGE</td>
            <td>{authorised_user.college}</td>
          </tr>{" "}
          <tr>
            <td className="td-first">BRANCH</td>
            <td>{authorised_user.branch}</td>
          </tr>
          <tr>
            <td className="td-first">SEMESTER</td>
            <td>{authorised_user.semester}</td>
          </tr>{" "}
          <tr>
            <td className="td-first">PHONE NO.</td>
            <td>{authorised_user.phone}</td>
          </tr>{" "}
          {department.map((e, i) => {
            //   return(
            //   <tr>
            //   <td className="td-first">{e} WORKSHOP</td>
            //   {i==0?<td>{authorised_user.timeSlot1} September</td>:<td>{authorised_user.timeSlot2} September</td>}
            //   {/* <td>{authorised_user.timeSlot1} August</td> */}
            // </tr>)

          })}
          <tr>
            <td className="td-first">{department[0]}WORKSHOP</td>
            <td>{authorised_user.timeSlot1} September</td>
          </tr>
          {/* <tr>
            <td className="td-first">{department[0]} WORKSHOP</td>
            <td>{authorised_user.timeSlot1} August</td>
          </tr>{" "}
          <tr>
            <td className="td-first">{department[1]} WORKSHOP</td>
            <td>{authorised_user.timeSlot2} August</td>
          </tr>{" "} */}
          {/* <tr>
            <td className="td-first">REFERAL</td>
            <td>{authorised_user.referal}</td>
          </tr>{" "} */}
          <tr>
            <td className="td-first">NEED ACCOMODATION</td>
            <td>{authorised_user.accomodation}</td>
          </tr>{" "}
          <tr>
            <td className="td-first">AMOUNT</td>
            <td>{authorised_user.amount}</td>
          </tr>{" "}
          {/* <tr>
            <td className="td-first">CASH ON DELIVERY</td>
            <td>{authorised_user.cod}</td>
          </tr>{" "} */}
          <tr>
            <td className="td-first">DEPARTMENT</td>
            <td>{
              department.map((other, i) => {
                return (<span key={i}>
                  {other} &nbsp;{" "}
                </span>)
              })
            }
            </td>
          </tr>{" "}
        </table>
      </div>
      {authorised_user.iot === "group2" &&
        <div className="reg-details">
          <table border={1} className="reg-details-table">
            <tr>
              <th>TITLES</th>
              <th>VALUES</th>
            </tr>
            <tr>
              <td className="td-first">NAME</td>
              <td>{authorised_user2.name}</td>
            </tr>
            <tr>
              <td className="td-first">EMAIL</td>
              <td>{authorised_user2.email}</td>
            </tr>
            <tr>
              <td className="td-first">COLLEGE</td>
              <td>{authorised_user2.college}</td>
            </tr>{" "}
            <tr>
              <td className="td-first">BRANCH</td>
              <td>{authorised_user2.branch}</td>
            </tr>
            <tr>
              <td className="td-first">SEMESTER</td>
              <td>{authorised_user2.semester}</td>
            </tr>{" "}
            <tr>
              <td className="td-first">PHONE NO.</td>
              <td>{authorised_user2.phone}</td>
            </tr>{" "}
            {department.map((e, i) => {
              //   return(
              //   <tr>
              //   <td className="td-first">{e} WORKSHOP</td>
              //   {i==0?<td>{authorised_user.timeSlot1} September</td>:<td>{authorised_user.timeSlot2} September</td>}
              //   {/* <td>{authorised_user.timeSlot1} August</td> */}
              // </tr>)

            })}
            <tr>
              <td className="td-first">{department[0]}WORKSHOP</td>
              <td>{authorised_user2.timeSlot1} September</td>
            </tr>
            {/* <tr>
          <td className="td-first">{department[0]} WORKSHOP</td>
          <td>{authorised_user.timeSlot1} August</td>
        </tr>{" "}
        <tr>
          <td className="td-first">{department[1]} WORKSHOP</td>
          <td>{authorised_user.timeSlot2} August</td>
        </tr>{" "} */}
            {/* <tr>
          <td className="td-first">REFERAL</td>
          <td>{authorised_user.referal}</td>
        </tr>{" "} */}
            <tr>
              <td className="td-first">NEED ACCOMODATION</td>
              <td>{authorised_user2.accomodation}</td>
            </tr>{" "}
            <tr>
              <td className="td-first">AMOUNT</td>
              <td>{authorised_user2.amount}</td>
            </tr>{" "}
            {/* <tr>
              <td className="td-first">CASH ON DELIVERY</td>
              <td>{authorised_user.cod}</td>
            </tr>{" "} */}
            <tr>
              <td className="td-first">DEPARTMENT</td>
              <td>{
                department.map((other, i) => {
                  return (<span key={i}>
                    {other} &nbsp;{" "}
                  </span>)
                })
              }
              </td>
            </tr>{" "}
          </table>
        </div>
      }
      {/* {authorised_user.iot === "group2" &&
        <div className="reg-details">
          <table border={1} className="reg-details-table">
            <tr>
              <th>TITLES</th>
              <th>VALUES</th>
            </tr>
            <tr>
              <td className="td-first">NAME</td>
              <td>{authorised_user2.name}</td>
            </tr>
            <tr>
              <td className="td-first">EMAIL</td>
              <td>{authorised_user2.email}</td>
            </tr>
            <tr>
              <td className="td-first">COLLEGE</td>
              <td>{authorised_user2.college}</td>
            </tr>{" "}
            <tr>
              <td className="td-first">BRANCH</td>
              <td>{authorised_user2.branch}</td>
            </tr>
            <tr>
              <td className="td-first">SEMESTER</td>
              <td>{authorised_user2.semester}</td>
            </tr>{" "}
            <tr>
              <td className="td-first">PHONE NO.</td>
              <td>{authorised_user2.phone}</td>
            </tr>{" "}
            <tr>
              <td className="td-first">{department[0]}WORKSHOP</td>
              <td>{authorised_user.timeSlot1} September</td>
            </tr>
            <tr>
              <td className="td-first">AMOUNT</td>
              <td>{authorised_user.amount}</td>
            </tr>{" "}

          </table>
        </div>
      } */}
      <Footer />
    </>
  );
}
export default RegistrationDetails;
