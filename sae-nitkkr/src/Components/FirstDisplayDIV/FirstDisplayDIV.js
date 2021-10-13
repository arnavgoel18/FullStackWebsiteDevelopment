import './FirstDisplayDIV.css'
import PictureH from '../../Assets/FirstDisplayDiv/HomePage_FirstDIV.jpeg'
import PictureAc from '../../Assets/FirstDisplayDiv/TeamAccelerons_FirstDIV.jpeg'
import PictureN from '../../Assets/FirstDisplayDiv/TeamNitrox_FirstDIV.jpeg'
import PictureAu from '../../Assets/FirstDisplayDiv/Autokriti_FirstDIV.jpeg'

function FirstDisplayDiv(props){
    
    var Picture;
    var text1, text2;
    
    if(props.page === "Home"){
        Picture = PictureH;
        text1 = "SAE";
        text2 = "NIT Kurukshetra";
    }
    else if(props.page === "Accelerons"){
        Picture = PictureAc;
        text1 = "Team"
        text2 = "Accelerons"
    }
    else if(props.page === "Nitrox"){
        Picture = PictureN
        text1 = "Team"
        text2 = "Nitrox"
    }
    else if(props.page === "Autokriti"){
       Picture = PictureAu;
       text1 = "AUTOKRITI"
    }

    return(
        <>
            <div className = "main-container">
                <img src = {Picture}></img>
                <p>{text1}<br/>{text2}</p>
            </div>

            {/* <div id = "one">
        
            </div> */}
        </>
    )
}

export default FirstDisplayDiv;