import React, { Component } from 'react'
import Footer from '../../Components/Footer/Footer(black)/FooterBlack'
import NavBar from '../../Components/NavBar/NavBar'
import FeatureCard from './Blogs/FeatureCard';
import FollowUsCard from './Blogs/FollowUsCard';
import TopicCardHolder from './Blogs/TopicCardHolder';

function Blogs(){
    <>
        <NavBar/>
        <div className="main" style={{
            display:"flex",
            flexDirection: "column",
            width:"100vw",
            height:"100vh",  
            background: "#FFFFFF",}}>
           
            <TopicCardHolder/>
            <br/>
            <FollowUsCard/> 
            <FeatureCard/>
            <br/><br/>
        </div>
        <Footer/>
    </>
}

export default Blogs;
