import './App.css';
// import {BrowserRouter as Router} from "react-router-dom";
import NavBar from './Blogs/navbar';
import Features from './Blogs/FeatureCard';
import Followup from './Blogs/FollowUsCard';
//import Footer from './components/Footer/Footer(black)/Footer.css';
import Card from './Blogs/TopicCardHolder';

function App() {
  return (
  
 <div className='page' style={{
 display:"flex",
 flexDirection: "column",
   width:"100vw",
   height:"100vh",  
   background: "#FFFFFF",

}}> 
< NavBar/>
   <Card/>
   <br/>
    <Followup/> 
    <Features/>
    <br/><br/>
    {/* <Footer/> */}
  </div>
  );
}

export default App;
