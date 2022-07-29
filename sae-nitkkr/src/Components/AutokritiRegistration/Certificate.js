import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./Certificate.css";
// import db from "../../Firebase.js";

// import {
//   collection,
//   getDocs,
//   Timestamp,
//   doc,
//   setDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import NavBar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer(black)/FooterBlack";
// import { useParams } from "react-router-dom";

// const { id } = useParams();
//   const [authorised_user, setauthorised_user] = useState({});

//   async function getdata() {
//     const docRef = doc(db, "paymentregistrationid", id);
//     const docSnap = await getDoc(docRef);
//     setauthorised_user(docSnap.data());
//   }

//   useEffect(() => {
//     console.log('run');
//     flag = false;
//     getdata();
//   }, []);
class Certificate extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: ""
  };
  render() {
    return (
      <div className="Certificate">
        <div className="Meta">
          <h1>ACM Certificates</h1>
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p>{this.state.Name}</p>
            <img src="https://i.imgur.com/Toz3PUWh.png" alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}

export default Certificate;
