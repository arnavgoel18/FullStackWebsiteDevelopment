import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import { useHistory } from "react-router-dom";
import db from "../../../../Firebase";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";


function Add() {
  let history = useHistory();
  const [userInfo, setuserInfo] = useState({
    title: '',
    information: '',
  });

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 

  const oninformation = (value) => {
    setuserInfo({ ...userInfo,
      information:value
    });
  } 
  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
     try {
      event.preventDefault();
       event.persist();
       var timestamp = String(new Date().getTime());
       const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
       await setDoc(doc(db, "blogs", timestamp),
       {
         title: userInfo.title,
         information: userInfo.information,
         date: date,
         timestamp: timestamp,
       })
        .then(res => {
      alert("Your blog has been successfully added.")
      setuserInfo({
        title: '',
        information: '',
      })
        })
     } catch (error) { throw error;}    
  } 

  function discardChanges(){
    setuserInfo({
      title: '',
      information: '',
    })
  }

return ( 
<>

  <div className="App">
    <div className="quillContainer">
      <div className="row"> 
        <form onSubmit={addDetails} className="update__forms">
         
          <div className="form-row">
            <div className="form-group col-md-12">
              <input id="quillTitle" type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="form-control" placeholder="(Whatever the topic will be)" required />
            </div>
           
            <div className="form-group col-md-12 editor">
            <EditorToolbar toolbarId={'t1'}/>
            <ReactQuill
              theme="snow"
              value={userInfo.information}
              onChange={oninformation}
              placeholder={"Write something awesome..."}
              modules={modules('t1')}
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
            <button type="button" className="btn btn-black" onClick={backToAll}>Back To All</button>
            <button type="button" className="btn btn-red" onClick={discardChanges}>Discard Changes</button>
            <button type="submit" className="btn btn-green">Save Changes</button>
            </div>
            
          </div> 
        </form>
      </div>
    </div>
  </div>
</>
)
}


export default Add

function backToAll(e){
  e.preventDefault();
    window.location.href='/admin/displayBlogs';
}