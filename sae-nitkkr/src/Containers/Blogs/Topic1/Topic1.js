import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import logo1 from "../../../Components/LEFT vs RIGHT/images/logo1.png";
import topiccardpic from "../../../Components/LEFT vs RIGHT/images/topiccardholder1.png";
import "./Topic1.css";
import NavBar from "../../../Components/NavBar/NavBar";
import ShareAndClapDIV from "../../../Components/Blogs/ShareAndClap/ShareAndClapDIV";
import TopicsCardHolder from "../../../Components/Blogs/TopicsCardHolder/TopicsCardHolder";
import PhoneShareAndClap from "../../../Components/Blogs/ShareAndClap/PhoneShareAndClap";
import Footer from "../../../Components/Footer/Footer(black)/FooterBlack";
import { getDocs, collection, doc } from "firebase/firestore";
import db from "../../../Firebase";

function App() {
  const params = new URL(document.location).searchParams;
  const timestamp = params.get("timestamp");

  var otherBlogmerged = [];
  const [forreload, setForreload] = useState([]);
  const [detail, setDetail] = useState({});
  var [otherBlog, setOtherBlog] = useState([]);

  async function getBlogInfo() {
    const blogs = collection(db, "blogs");
    const blogs_doc = await getDocs(blogs);
    const blogList = blogs_doc.docs.map((doc) => doc.data());

    blogList.map((blogDetail, index) => {
      if (blogDetail.timestamp == timestamp) {
        setDetail(blogDetail);
      }
      if(blogDetail.timestamp != timestamp) {
        otherBlogmerged.push(blogDetail);
      }
    });
    
    setOtherBlog(otherBlogmerged);
  }

  useEffect(() => {
    setForreload([...forreload, getBlogInfo()]);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="header">
        <NavBar />
      </div>

      <div className="bodyhead_extraspace">
        <div className="imgcircle">
          <img src={logo1} id="logo1" alt="not" />
        </div>

        <div className="topicname">
          <span>{detail.title}</span>
        </div>

        <div className="extraspace "></div>
      </div>

      <div className="body">
        <div id="bodyContent">
          <ReactQuill
            theme="bubble"
            value={detail.information || ""}
            readOnly={true}
          />
        </div>
        <div className="extraspace a">
          <ShareAndClapDIV
            shareUrl={"/blogs/leftvsright?timestamp=" + detail.timestamp}
            title={detail.title}
            database={detail.title}
          />
        </div>
      </div>
      <div id="extra">
        <PhoneShareAndClap
          shareUrl={"/blogs/leftvsright?timestamp=" + detail.timestamp}
          title={detail.title}
          database={detail.title}
        />
      </div>
      <hr />

      <h2 className="other_blogs">Other Blogs</h2>
      <div className="end">
        {otherBlog.map((other, index) => {
          if(index<3){
          return (
            <div key={index}>
              <Link to={"/blogs/leftvsright?timestamp=" + other.timestamp} target={"_parent"}>
                <TopicsCardHolder
                  title={other.title}
                  srcs={other.coverPhotoUrl}
                  date={other.modifiedDate}
                  shareUrl={"/blogs/leftvsright?timestamp=" + other.timestamp}
                />
              </Link>
            </div>
          );
          }
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
