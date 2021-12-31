import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import { useHistory } from "react-router-dom";
// import axios from 'axios';

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
    // try {
    //   event.preventDefault();
    //   event.persist();
    //   axios.post(`http://localhost:8080/addArticle`, {
    //     title: userInfo.title,
    //     information: userInfo.information,
    //   })
    //   .then(res => {
    //     if(res.data.success === true){
    //       history.push('/');
    //     }
    //   })
    // } catch (error) { throw error;}    
  } 

return ( 
<>

  <div className="App">
    <div className="quillContainer">
      <div className="row"> 
        <form onSubmit={addDetails} className="update__forms">
         
          <div className="form-row">
            <div className="form-group col-md-12">
              <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="form-control" placeholder="(Whatever the topic will be)" required />
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
            
            
            {isError !== null && <div className="errors"> {isError} </div>}
            <div class="buttons">
            <button type="button" class="btn btn-black">Back To All</button>
            <button type="button" class="btn btn-red">Discard Changes</button>
            <button type="button" class="btn btn-green">Save Changes</button>
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