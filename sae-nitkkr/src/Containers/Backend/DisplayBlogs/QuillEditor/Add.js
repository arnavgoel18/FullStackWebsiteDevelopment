import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import { Redirect } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import { useHistory } from "react-router-dom";
import db from "../../../../Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  storage,
  snapshot,
} from "firebase/firestore";

function Add() {
  const params = new URL(document.location).searchParams;
  const timestamp = params.get("timestamp");

  const [forreload, setForreload] = useState([]);
  const [userInfo, setuserInfo] = useState({
    title: "",
    information: "",
    coverPhoto: "",
  });

  async function getBlogInfo() {
    const blogs = collection(db, "blogs");
    const blogs_doc = await getDocs(blogs);
    const blogList = blogs_doc.docs.map((doc) => doc.data());

    blogList.map((detail, index) => {
      if (detail.timestamp == timestamp) {
        setuserInfo({
          title: detail.title,
          information: detail.information,
          coverPhoto: detail.coverPhotoUrl,
        });
      }
    });
  }

  useEffect(() => {
    setForreload([...forreload, getBlogInfo()]);
  }, []);

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const oninformation = (value) => {
    setuserInfo({ ...userInfo, information: value });
  };

  const onCoverPhoto = (e) => {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
  };

  const [isError, setError] = useState(null);

  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();

      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      var url;

      if (timestamp == "null") {
        var newTimestamp = String(new Date().getTime());

        const storage = getStorage();
        const coverPhotoRef = ref(storage, `${newTimestamp}`);

        uploadBytes(coverPhotoRef, userInfo.coverPhoto).then((res) => {
          getDownloadURL(coverPhotoRef).then((url) => {
            setDoc(doc(db, "blogs", newTimestamp), {
              title: userInfo.title,
              information: userInfo.information,
              createdDate: date,
              modifiedDate: date,
              timestamp: newTimestamp,
              coverPhotoUrl: url,
            }).then((res) => {
              alert("Your blog has been successfully added.");
              setuserInfo({
                title: "",
                information: "",
                coverPhoto: "",
              });
            });
          });
        });
      } else {
        const storage = getStorage();
        const coverPhotoRef = ref(storage, `${timestamp}`);
        uploadBytes(coverPhotoRef, userInfo.coverPhoto);
        getDownloadURL(coverPhotoRef).then((url) => {
          updateDoc(doc(db, "blogs", timestamp), {
            title: userInfo.title,
            information: userInfo.information,
            modifiedDate: date,
            coverPhotoUrl: url,
          }).then((res) => {
            alert("Your blog has been successfully modified.");
            setuserInfo({
              title: "",
              information: "",
              coverPhoto: "",
            });
          });
        });
      }
    } catch (error) {
      throw error;
    }
  };

  function discardChanges() {
    var confirm = window.confirm("Do you want to discard changes?");
    if (confirm) {
      setuserInfo({
        title: "",
        information: "",
        coverPhoto: "",
      });
    }
  }

  const token = localStorage.getItem("token");
  let loggedin = true;
  if (token == null) {
    loggedin = false;
  }
  if (loggedin == false) {
    return <Redirect to="/admin/login" />;
  } else {
    return (
      <div>
        <div className="App">
          <div className="quillContainer">
            <div className="row">
              <form onSubmit={addDetails} className="update__forms">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      id="quillTitle"
                      type="text"
                      name="title"
                      value={userInfo.title}
                      onChange={onChangeValue}
                      className="form-control"
                      placeholder="Enter Topic Here"
                      required
                    />
                    <div className="coverPic">
                      <label htmlFor="coverPhoto" id="coverlabel">
                        Choose Cover Pic:
                      </label>
                      <input
                        id="quillFile"
                        type="file"
                        name="coverPhoto"
                        // value={userInfo.coverPhoto}
                        onChange={(e) => onCoverPhoto(e)}
                        className="form-control"
                        placeholder="Upload file..."
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group col-md-12 editor">
                    <EditorToolbar toolbarId={"t1"} />
                    <ReactQuill
                      theme="snow"
                      value={userInfo.information}
                      onChange={oninformation}
                      placeholder={"Write something awesome..."}
                      modules={modules("t1")}
                      formats={formats}
                      id="quillInfo"
                    />
                  </div>

                  <div className="preview_heading">Preview</div>
                  <div className="blog_preview">
                    <ReactQuill
                      theme="bubble"
                      value={userInfo.information}
                      readOnly={true}
                      formats={formats}
                    />
                  </div>

                  <div className="buttons">
                    <button
                      type="button"
                      className="btn btn-black"
                      onClick={backToAll}
                    >
                      Back To All
                    </button>
                    <button
                      type="button"
                      className="btn btn-red"
                      onClick={discardChanges}
                    >
                      Discard Changes
                    </button>
                    <button type="submit" className="btn btn-green">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;

function backToAll(e) {
  e.preventDefault();
  window.location.href = "/admin/displayBlogs";
}
