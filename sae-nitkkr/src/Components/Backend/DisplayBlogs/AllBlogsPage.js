import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import "./AllBlogsPage.css";
import TopicCardHolder from '../../../Components/Blogs/TopicsCardHolder/Card_new'
import BackSignOutPanel from "../../../Components/Backend/BackSignOutPanel/BackSignOutPanel";

//Firestore
import {db1} from "../../../Firebase";
import { getStorage, ref, deleteObject } from "firebase/storage";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";


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
      <BackSignOutPanel/>
      <div className='backendBlogPanel'>
        <h4 id='totalHeading'>Total no. of blogs: {blogResult.length}</h4>
        <button className='addNewBlog'>
          <i className='fa fa-eye  fa-fw'></i>View Blog Request
        </button>
        <button className='addNewBlog' type='button' onClick={goToEditor}>
          <i className='fa fa-plus fa-customize fa-fw'></i> Add new blog
        </button>
      </div>

      <div className='card_contain'>
        {blogResult.map((detail, index) => {
           let obj = {
             src: detail.coverPhotoUrl,
             title: detail.title,
             subTitle: 'Subtitle',
             body: 'Click to view more',
             author:'Author',
             date:detail.modifiedDate,
             tags:['Electronics','Cars'],
           }
          return (
            <div key={index} style={{ width: '80%', padding: '20px' }}>
              <Link to={'/blogs/yourblog?timestamp=' + detail.timestamp}>
                {/* <TopicCardHolder
                  title={detail.title}
                  srcs={detail.coverPhotoUrl}
                  date={detail.modifiedDate}
                  shareUrl={'/blogs/leftvsright?timestamp=' + detail.timestamp}
                /> */}
                <TopicCardHolder poop={obj} />
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
