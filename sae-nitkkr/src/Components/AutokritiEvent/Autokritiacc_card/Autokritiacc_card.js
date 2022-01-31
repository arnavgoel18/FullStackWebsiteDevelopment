import React,{useState,useEffect} from "react";
import "./Autokritiacc_card.css";
import Aos from"aos";
import"aos/dist/aos.css";

function Autokritiacc_card(props) {
    useEffect(()=>{
        Aos.init({duration:1000});
      },[])
const[active,setactive]=useState(false);
const[arrownature,setarrownature]=useState("down");
const[titleborder,settitleborder]=useState("0px solid black")
function description_div_show()
{
    settitleborder("4px solid grey")
    setactive(true);
    setarrownature("up");
    
    

}
 
function description_div_disable()
{
    
   
    // setfade("fade-down");
   settitleborder("0px solid grey")
    
        document.getElementById("acc_card_description").style.transform="translateY(200px)"
    
    setTimeout(() => {
        setactive(false);
    }, 200);
    
    
    setarrownature("down");
 
    
    

}
  return (
    <div id="autokriti_acc_card">
      <div id="acc_card_title" style={{"border":titleborder}}>
        <div id="acc_card_title_sentence" >{props.title}</div>
        <div id="acc_card_title_sign">
            { arrownature=="down"&&
          <img id="down_arrow"src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-down-arrows-those-icons-fill-those-icons-7.png"  onClick={description_div_show} />
            }
            {
                arrownature=="up" &&
                <img id="down_arrow" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-up-arrows-those-icons-fill-those-icons-6.png" onClick={description_div_disable}/>
            }
          </div>
      </div>
      {active?
      <div 
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="300"
      id="acc_card_description"
      
      >
          {props.description}
        {/* This 5 days workshop begins with an overview of vehicle, followed by the
        power-flow through drivetrain,steering system&braking system.By the end
        of the day,you'll have deep insight of how your vehicle works */}
      </div>:""}
      
      
     
    </div>
  );
}

export default Autokritiacc_card;
