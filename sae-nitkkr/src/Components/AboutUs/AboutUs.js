import React,{useEffect} from 'react';
import './AboutUs.css';
import image from '../../Assets/AboutUs/homeimage.png';
import HomeAboutUs from '../../Assets/AcceleronsGallery/Accelerons_33.jpeg'
import AutokritiAboutUs from '../../Assets/AutokritiGallery/AutokritiAboutUs.jpeg'
import Autokriti from '../../Containers/Autokriti/Autokriti';

import Aos from"aos";
import"aos/dist/aos.css";
function Home(props) {
    useEffect(()=>{
      Aos.init({duration:3000});
    },[])

  var content, contentOnlyForHomepage, contentOnlyForAutokriti;
  var comp1, comp2, comp3, comp4;
  var picture;

  if(props.page === "Home"){
    content = "SAE NIT Kurukshetra is a collegiate club affiliated under SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together in arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, under graduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions "
    contentOnlyForHomepage = "We bring our skills to many competitions";
    comp1 = "Baja SAE India";
    comp2 = "ATVC";
    comp3 = "SUPRA India";
    comp4 = "Formula Bharat";
    picture = HomeAboutUs;
  }
  else if(props.page === "Autokriti"){
    content = "Autokriti is north India's largest automobile workshop which began in 2010. Every year loads of students gets enrolled to gain firsthand knowledge of industrial vehicles. The last held physical autokriti in 2019 saw a participation of 700+ candidates. It involves overhauling of a star engine, which varied from a 2 stroke engine of a scooter in Autokriti 1 to 3.6L turbocharged V6 Porsche Cayenne in season 11.0; always in cahoots with technology. And not just the gearheads, but geeks from all branches of technology find here the stuffs of their interest.";
    contentOnlyForAutokriti = "E- Autokriti is a digital edition of Autokriti, where this legacy of imparting knowledge continues amid the current covid crisis. And with many new surprises awaiting e-autokriti 2.0, we are expecting an even greater engagement.";
    picture = AutokritiAboutUs;
  }

  return (
  <>
  <div className="AboutUs-boxes">
    <div data-aos="fade-right"
      data-aos-offset="300"
    className="AboutUs-box1">
      <img src={picture} alt="images" className="AboutUs-image"/>
    </div>
    <div data-aos="fade-up"
        data-aos-offset="320"

    className="AboutUs-box2">
      <div className="AboutUs-box21"><h2>who are</h2><h2 className="AboutUs-head">We?</h2></div>
      <div className="AboutUs-box22">{content}<br/><br/>  {contentOnlyForHomepage}</div>
      <div className="AboutUs-box23">
        {comp1}<br/>
        {comp2}{contentOnlyForAutokriti} <br/>
        {comp3} <br/>
        {comp4}
      </div>
    </div>
  </div>
  </>
  );
}
export default Home

// the lower written text is just to state which props is used for which  text


// --> For eautokriti

// export default App;
// define="what is" 
//     title="AUTOKRITI"
//      text="There lies an ignite, behind every source of light. This thought is truly justified by the radiance of Autokriti, which was yet another flame of passion in the brain of our super seniors. This process of enlightening young minds, began with Autokriti 1.0, where 80 heads hunched over an overhauling 2 stroke engine of a scooter. And then with each step, we escalated newer heights, from Maruti Suzuki in Autokriti 3.0 to Toyota Camry Hybrid engine, season 10 saw us adding electric touch to our workshops. We have come a long way in this beautiful journey, learning and teaching and growing together. But itâ€™s no end."
//       lowerword="eAutokriti"
//       lowertext=": The challenges still awaits and tougher expeditions are yet to be made, as nothing less that best can be embraced"   
 

// --> For main site

// define="Who are"
//     title="WE"
//     text="SAE NIT Kurukshetra is a collegiate club affiliated under SAE India, which is a wing of SAE International on a national scale. The club is a platform for budding engineers to work together and arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, UG students from various branches strive to innovate better under the guidance of our proffessors here at NIT Kurukshetra."
//     lowertext="We bring our skills in competition in various events like
//     BAJA SAE
//     ATVC
//     SUPRA
//     Formula Bharat"