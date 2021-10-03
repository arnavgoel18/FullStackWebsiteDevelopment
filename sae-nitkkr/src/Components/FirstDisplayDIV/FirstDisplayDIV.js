import './FirstDisplayDIV.css'
import HomePic from '../../Assets/FirstDisplayDiv/HomePage_FirstDIV.jpeg'

function FirstDisplayDiv(){
    return(
        <>
            <div className = "main-container">
                <img src = {HomePic}></img>
                <p>SAE <br/> NIT KURUKSHETRA</p>
            </div>

            {/* <div id = "one">
        
            </div> */}
        </>
    )
}

export default FirstDisplayDiv;