import react,{useEffect,useState} from "react";
// import { GiTrophyCup } from 'react-icons/fa';
// import { GiGears } from 'react-icons/fa';
// import { BsFillPeopleFill } from 'react-icons/fa';
import "./ExploreUs.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import {db1} from "../../../Firebase";
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    setDoc,
  } from "firebase/firestore";
// import { getStorage, ref, deleteObject } from "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import jQuery from 'jquery'

var animateDone = 0
$(window).scroll(function(){
    function elementScrolled(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    function updateValue() {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    $.fn.exists = function () {
        return this.length !== 0;
    }
    
    if($(".counter-body").exists()){
        if(elementScrolled('.counter-body')) { 
            if(animateDone == 0){ 
                console.log("animate done!");
                updateValue();
                animateDone = 2
            }
        }
    }
  });
 
function ExploreUs() {
    useEffect(() => {
        getpopupInfo();
        // getpopupInfo();
      },[]);

      var [popupResult, setResult] = useState([]);
      async function getpopupInfo() {
        const popup = collection(db1, "counterbackend");
        const popup_doc = await getDocs(popup);
        const popupList = popup_doc.docs.map((doc) => doc.data());
        setResult(popupList);
        return popupList;
      }
      
//  const renderCard = (card, index) => {
//     return (
//       <div className="popup_card_image_container" key={index}>
//  <Link to={card.Link}> 
//         {/* <img src={img1} alt="burgur" className="popup_image" /> */}
//         <h3 className="popup_card_title">{card.Title}</h3>
        
//        </Link>
//       </div>
//     );
//   };
const renderCard = (card, index) => {
    return (
<div className="counter-counter">
                    <i class="fas fa-user-friends"></i>
                    <h3 data-value="117" className="count">{card.Link}</h3>
                    <h6>{card.Title}</h6>
                </div>

    );
  };
    return (
        
        <div className="counter-body">
    
            <div className="counter-container">
            <div class="stars"></div>
            <div class="twinkling"></div>
            {popupResult.map(renderCard)}
            {/* <div class="bubbles"> */}
                {/* <div className="counter-counter">
                    <i class="fas fa-user-friends"></i>
                    <h3 data-value="117" className="count">{popupResult[0].Link}</h3>
                    <h6>{popupResult[1].Title}</h6>
                </div>
                <div className="counter-counter">
                    <i class="fas fa-trophy"></i>
                    <h3 data-target="30" className="count">30</h3>
                    <h6>Awards Won</h6>
                </div>
                <div className="counter-counter">
                    <i class="fas fa-cogs"></i>
                    <h3 data-target="16" className="count">16</h3>
                    <h6>Vehicles designed</h6>
                    </div> */}
                </div>
            {/* </div> */}
        </div>
    );
}


export default ExploreUs;