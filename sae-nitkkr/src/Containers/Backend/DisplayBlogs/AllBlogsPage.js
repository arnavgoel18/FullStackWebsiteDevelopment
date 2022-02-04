import React, { useState, useEffect } from "react";
import "./AllBlogsPage.css";
import { Redirect } from "react-router-dom";
import TopicCardHolder from "../../../Components/Blogs/TopicsCardHolder/TopicsCardHolder";
import {db1} from "../../../Firebase";
import { getStorage, ref, deleteObject } from "firebase/storage";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
// import { RWebShare } from "react-web-share";

export default function AllBlogsPage() {
  const [forreload, setForreload] = useState([]);
  var [blogResult, setResult] = useState([]);
  const storage = getStorage();

  async function getBlogInfo() {
    const blogs = collection(db1, "blogs");
    const blogs_doc = await getDocs(blogs);
    const blogList = blogs_doc.docs.map((doc) => doc.data());
    setResult(blogList);
    return blogList;
  }

  useEffect(() => {
    setForreload([...forreload, getBlogInfo()]);
  }, []);
  const token = localStorage.getItem("token");

  function deleteBlog(timestamp) {
    var result = window.confirm("Want to delete?");
    if (result) {
      deleteDoc(doc(db1, "blogs", timestamp));
      const desertRef = ref(storage, `${timestamp}`);
      deleteObject(desertRef);
    }
    setForreload([...forreload, getBlogInfo()]);
  }

  let loggedin = true;
  if (token == null) {
    loggedin = false;
  }

  if (loggedin == false) {
    return <Redirect to="/admin/login" />;
  }

  return (
    <div>
      <div className='LoginPage-header'>
        <Link to='/admin/actions'>
          <button id='AllBlogs-backBtn'>
            <i className='fa fa-arrow-left fa-customize fa-fw'></i>Back
          </button>
        </Link>

        {/* <i className="fa fa-user fa-lg" aria-hidden="true"></i> */}
        <button
          type='submit'
          id='blog-signout'
          onClick={(e) => {
            localStorage.removeItem('token')
            window.location.href = '/admin/login'
          }}
        >
          Sign Out
          <i class='fa fa-arrow-right fa-customize fa-fw'></i>
        </button>
      </div>
      <div className='backendBlogPanel'>
        <h4 id='totalHeading'>Total no. of blogs: {blogResult.length}</h4>
        <button className='addNewBlog'>
          <i className='fa fa-eye  fa-fw'></i>View Blog Request
        </button>
        <button className='addNewBlog' type='button' onClick={goToEditor}>
          <i className='fa fa-plus fa-customize fa-fw'></i> Add new blog
        </button>
      </div>

      <div className='card_contain' style={{marginBottom:'15px'}}>
        {blogResult.map((detail, index) => {
          return (
            <div key={index}>
              <Link to={'/blogs/leftvsright?timestamp=' + detail.timestamp}>
                <TopicCardHolder
                  title={detail.title}
                  srcs={detail.coverPhotoUrl}
                  date={detail.modifiedDate}
                  shareUrl={'/blogs/leftvsright?timestamp=' + detail.timestamp}
                />
              </Link>
              <div className='blogIcons'>
                <i
                  className='fa fa-trash'
                  aria-hidden='true'
                  onClick={() => deleteBlog(detail.timestamp)}
                ></i>
                <i
                  className='fa fa-pencil-square-o'
                  aria-hidden='true'
                  onClick={() => editBlog(detail.timestamp)}
                ></i>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function goToEditor(e) {
  e.preventDefault();
  window.location.href = `/admin/displayBlogs/editor?timestamp=null`;
}

function editBlog(timestamp) {
  window.location.href = "/admin/displayBlogs/editor?timestamp=" + timestamp;
}
