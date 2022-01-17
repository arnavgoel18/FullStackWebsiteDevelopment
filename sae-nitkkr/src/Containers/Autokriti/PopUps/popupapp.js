import Popup from './Popup';
import {useState , useEffect} from 'react';

import './Popup.css'

function Compo() {
  const [buttonPopup , setButtonPopup] = useState(false);
  const [timedPopup , setTimedPopup] = useState(false);

   useEffect( () => {
  setTimeout( () => {
     setTimedPopup(true);
   } , 3000);
  } , []);
   
  return (
    <div className="container_popup">
     <main>

       </main> 
      


       <Popup trigger = {timedPopup} setTrigger={setTimedPopup }>
       
       <div className='innerbox1_2_popup'>
        
       <div className='innertext_popup'>
       <img id="pop_img"src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-announcement-news-kiranshastry-lineal-color-kiranshastry-2.png"/>
       <br/>
       <p id="major_pop">MAJOR <br/> HAPPENINGS! </p>
       </div>

      
       <div className="close-btn">


       </div>
       </div>
       <div className='innnerbox1_1_popup'>
         <ul>
        <li className='list_popup'> <h3>Quiz Registrations</h3></li>
        <h5>Guys,what are you waiting for!!!</h5>
        <br/>
       
        <li className='list_popup'> <h3>Become Our Brand Ambassador</h3></li>
        <h5>Become a part of our project.</h5>
        <br/>
        <li className='list_popup'> <h3>Quiz Registrations</h3></li>
        <h5>Guys,what are you waiting for!!!</h5>
        <br/>
        <li className='list_popup'> <h3>Become Our Brand Ambassador</h3></li>
        <h5>Become a part of our project.</h5>
        <br/>
        <li className='list_popup'> <h3>Quiz Registrations</h3></li>
        <h5>Guys,what are you waiting for!!!</h5>
        <br/>
        <li className='list_popup'> <h3>Become Our Brand Ambassador</h3></li>
        <h5>Become a part of our project.</h5>
        <br/>
        </ul>
        </div>
       </Popup>
    </div>
  );
}

export default Compo;
