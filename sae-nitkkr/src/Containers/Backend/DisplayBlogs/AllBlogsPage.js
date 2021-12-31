import React, { useState, useEffect } from "react";
import "./AllBlogsPage.css";
import TopicCardHolder from "../../../Components/Blogs/TopicsCardHolder/TopicsCardHolder";
import db from "../../../Firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

export default function AllBlogsPage() {
  const [forreload, setForreload] = useState([]);
  var [blogResult, setResult] = useState([]);

  async function getBlogInfo() {
    const blogs = collection(db, "blogs");
    const blogs_doc = await getDocs(blogs);
    const blogList = blogs_doc.docs.map((doc) => doc.data());
    setResult(blogList);
    return blogList;
  }

  useEffect(() => {
    setForreload([...forreload, getBlogInfo()]);
  }, []);

  return (
    <div>
      <div className="LoginPage-header">
        <i className="fa fa-user fa-lg" aria-hidden="true"></i>
        <button type="submit">Sign Out</button>
      </div>
      <div className="backendBlogPanel">
        <h4 id="totalHeading">Total no. of blogs: {blogResult.length}</h4>
        <button id="addNewBlog">View Blog Request</button>
        <button id="addNewBlog" type="button" onClick={goToEditor}>
          Add new blog
        </button>
      </div>

      <div className="card_contain">
        {blogResult.map((detail, index) => {
          return (
            <div>
              <Link to="">
                <TopicCardHolder
                  key={index}
                  title={detail.title}
                  srcs=""
                  date={detail.date}
                />
              </Link>
              <div className="blogIcons">
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => deleteBlog(detail.timestamp)}
                ></i>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function goToEditor(e) {
  e.preventDefault();
  window.location.href = "/admin/displayBlogs/editor";
}

function deleteBlog(timestamp) {
   var result = window.confirm("Want to delete?");
   if (result) {
     deleteDoc(doc(db, "blogs", timestamp));
   }
}
