import './AboutUs.css';
import image from '../../Assets/homeimage.png';

function Home() {
  return (
  <>
  <div className="boxes">
    <div className="box1">
      <img src={image} alt="images" />
    </div>
    <div className="box2">
      <div className="box21"><h2>who are</h2><h2 className="head">We</h2></div>
      <div className="box22">SAE NIT Kurukshetra is a collegiate club affiliated under SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together in arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, under graduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. </div>
      <div className="box23"><b>lowerword</b>lowertext</div>
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