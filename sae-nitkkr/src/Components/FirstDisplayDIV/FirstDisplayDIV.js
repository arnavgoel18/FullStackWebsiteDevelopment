import "./FirstDisplayDIV.css";
import PictureH from "../../Assets/FirstDisplayDiv/Homepage_hero.webp";
import PictureAc from "../../Assets/FirstDisplayDiv/TeamAccelerons_FirstDIV.webp";
import PictureN from "../../Assets/FirstDisplayDiv/TeamNitrox_FirstDIV.webp";
import PictureAu from "../../Assets/FirstDisplayDiv/Autokriti_FirstDIV.webp";
// First Display Page of teams page
//Autokriti has Different First Display Div (caraousal Format)
function FirstDisplayDiv(props) {
  let Picture;
  let text1, text2;
  // Checking Condition For Which page Images are used
  if (props.page === "Home") {
    Picture = PictureH;
    text1 = "SAE";
    text2 = "NIT Kurukshetra";
  } else if (props.page === "Accelerons") {
    Picture = PictureAc;
    text1 = "Team";
    text2 = "Accelerons";
  } else if (props.page === "Nitrox") {
    Picture = PictureN;
    text1 = "Team";
    text2 = "Nitrox";
  } else if (props.page === "Autokriti") {
    Picture = PictureAu;
    text1 = "AUTOKRITI";
  }
  if(props.page === "Home"){
    return (
      <div className='FirstDisplayDIV-main-container homepage__div'>
        <img alt='SOS' loading='eager' src={Picture}></img>
        <div className="homepage_div__content">
          <span>
            SAE
            <br />
            NIT Kurukshetra
          </span>
          <span>
            SAE Unity Drive<br/>
            Is Live
          </span>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className='FirstDisplayDIV-main-container'>
        <img alt='SOS' loading='eager' src={Picture}></img>
        <p>
          SAE
          <br />
          NIT Kurukshetra
        </p>
      </div>
    </>
  )
}

export default FirstDisplayDiv;
