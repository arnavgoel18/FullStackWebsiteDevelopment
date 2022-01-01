import React, { useState, useEffect } from "react";
import "./Card_contain.css";
import TopicCardHolder from "../../../Components/Blogs/TopicsCardHolder/TopicsCardHolder";
// import daq from '../../../Assets/TopicsCardHolder/daq.png'
// import brakes from '../../../Assets/TopicsCardHolder/brakes.png'
import FeatureCard from "../../../Components/Blogs/FeatureCard/FeatureCard";
import FollowUsCard from "../../../Components/Blogs/FollowUsCard/FollowUsCard";
import { Link } from "react-router-dom";
import db from "../../../Firebase";
import { collection, getDocs } from "firebase/firestore";


function Card_contain() {
  const [forreload, setForreload] = useState([]);
  var [blogResult, setResult] = useState([]);
  // const storage = getStorage();

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
    <div id="blog_contain">
      <div id="card_contain">
        {blogResult.map((detail, index) => {
          return (
            <div key={index}>
              <Link to={"/blogs/leftvsright?timestamp=" + detail.timestamp}>
                <TopicCardHolder
                  title={detail.title}
                  srcs={detail.coverPhotoUrl}
                  date={detail.modifiedDate}
                  shareUrl={"/blogs/leftvsright?timestamp=" + detail.timestamp}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div id="side_contain">
        {/* <div id="side_contain_hustle"> */}
        <FollowUsCard />
        {/* </div> */}
        <FeatureCard />
      </div>
    </div>
  );
}

export default Card_contain;
