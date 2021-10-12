import './FirstDisplayDIV.css'
import PictureH from '../../Assets/FirstDisplayDiv/HomePage_FirstDIV.jpeg'
import PictureAc from '../../Assets/FirstDisplayDiv/TeamAccelerons_FirstDIV.jpeg'
import PictureN from '../../Assets/FirstDisplayDiv/TeamNitrox_FirstDIV.jpeg'
import PictureAu from '../../Assets/FirstDisplayDiv/Autokriti_FirstDIV.jpeg'

function FirstDisplayDiv(props){
    
    var Picture;
    
    if(props.page === "Home"){
        Picture = PictureH;
    }
    else if(props.page === "Accelerons"){
        Picture = PictureAc;
    }
    else if(props.page === "Nitrox"){
        Picture = PictureN
    }
    else if(props.page === "Autokriti"){
       Picture = PictureAu;
    }

    return(
        <>
            <div className = "main-container">
                <img src = {Picture}></img>
                <p>SAE <br/> NIT KURUKSHETRA</p>
            </div>

            {/* <div id = "one">
        
            </div> */}
        </>
    )
}

export default FirstDisplayDiv;