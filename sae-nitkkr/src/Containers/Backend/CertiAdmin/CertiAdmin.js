import React from "react";
import "./CertiAdmin.css";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer(black)/FooterBlack";

import db from "../../../Firebase";
import {
  getStorage,
  ref,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

function CertiAdmin() {
  async function setDataDb() {
    let imgsRef = document.getElementsByClassName("imgsRef")[0];
    console.log(imgsRef.files.length);
    const storage = getStorage();
    for (let i = 0; i < imgsRef.files.length; i++) {
      let folder = ref(storage, `certificates//${imgsRef.files[i].name}`);

      console.log(folder);
      await uploadBytes(folder, imgsRef.files[i]).then((res) => {});
      console.log("uploaded " + i + "th img");
    }
    alert("all uploaded");
  }

  return (
    <>
      <NavBar />
      <div className="App">
        <h2>Upload image</h2>
        <input
          type="file"
          accept="image/*"
          multiple
          className="imgsRef"
          style={{ marginTop: "40px" }}
        />
        <button className="setbtn" onClick={setDataDb}>Set</button>
      </div>
      <Footer />
    </>
  );
}

export default CertiAdmin;
