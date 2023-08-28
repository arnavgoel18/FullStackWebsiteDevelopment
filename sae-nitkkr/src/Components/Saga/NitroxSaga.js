//Kept this file as this has Data in it
//KEEP
//KEEEP
//KEEEP FILE
import React from 'react';
import { useState } from 'react';

import './Saga.css';

// Nitrox Image Files
import Nitrox2020 from '../../Assets/Saga/Nitrox2019.jpeg';
import Nitrox2019 from '../../Assets/Saga/Nitrox2019.jpeg';
import Nitrox2018 from '../../Assets/Saga/Nitrox2018.jpg';
import Nitrox2017 from '../../Assets/Saga/Nitrox2017.jpg';
import Nitrox2016 from '../../Assets/Saga/Nitrox2016.jpg';
import Nitrox2015 from '../../Assets/Saga/Nitrox2015.png';
import Nitrox2014 from '../../Assets/Saga/Nitrox2014.png';
import Nitrox2013 from '../../Assets/Saga/Nitrox2013.png';
import Nitrox2012 from '../../Assets/Saga/Nitrox2012.png';
import Nitrox2011 from '../../Assets/Saga/Nitrox2011.png';



function Saga(){

    const [comp1Achievements, setcomp1Achievements] = useState([]);
    const [comp2Achievements, setcomp2Achievements] = useState([]);

    const nitroxInfo = [
        {
            competition1Name: "ATVC",
            competition2Name: "BAJA SAE India",
        },
        {
            id: 2011,
            atvc: {
                achievement1: "Did Not Participate",
                achievement2: "",
                achievement3: "",
            },
            baja: {
                achievement1: "First Time NIT KURUKSHETRA's DREAM ROLLED ON WHEELS",
                achievement2: "",
                achievement3: "",
            }
        },
        {
            id: 2012,
            atvc: {
                achievement1: "Did Not Participate",
                achievement2: "",
                achievement3: "",
            },
            baja: {
                achievement1: "First Time VIRTUAL CLEARED Roared On BAJA Tracks in -Hill Climb,Endurance,Accleration",
                achievement2: "",
                achievement3: "",
            }
        },
        {
            id: 2013,
            atvc: {
                achievement1: "Did Not Participate",
                achievement2: "",
                achievement3: "",
            },
            baja: {
                achievement1: "AIR8 in Endurance",
                achievement2: "AIR10 Out of 262 TEAMS",
                achievement3: "",
            }
        },
        {
            id: 2014,
            atvc: {
                achievement1: "Did Not Participate",
                achievement2: "",
                achievement3: "",
            },
            baja: {
                achievement1: "AIR20 Out Of 327 TEAMS",
                achievement2: "",
                achievement3: "",
            }
        },
        {
            id: 2015,
            atvc: {
                achievement1: "Improved Suspension",
                achievement2: "",
                achievement3: "",
            },
            baja: {
                achievement1: "AIR3 in Suspension and Traction Event",
                achievement2: "AIR7 out of 397 TEAMS",
                achievement3: "",
            }
        },
        {
            id: 2016,
            atvc: {
                achievement1: "Did Not Participate",
                achievement2: "",
                achievement3: "",
            },
            baja: {
                achievement1: "AIR2 in Cost Efficiency.",
                achievement2: "AIR4 in Hill CLimb.",
                achievement3: "AIR6 in Light Weight Vehicle Category.",
            }
        },
        {
            id: 2017,
            atvc: {
                achievement1: "Did Not Participate",
                achievement2: "",
                achievement3: "",
            },
            baja: {
                achievement1: "AIR29 out of 400 TEAMS",
                achievement2: "AIR7 out of 397 TEAMS",
                achievement3: "",
            }
        },
        {
            id: 2018,
            atvc: {
                achievement1: "AIR5 in Light Weight Category",
                achievement2: "AIR6 as a Fast Vehicle",
                achievement3: "",
            },
            baja: {
                achievement1: "AIR4 in Endurance Run",
                achievement2: "AIR5 in Cost Efficieny",
                achievement3: "",
                achievement4: "",
            }
        },
        {
            id: 2019,
            atvc: {
                achievement1: "AIR1 in Build Quality",
                achievement2: "AIR1 in Light Weight Category",
                achievement3: "AIR1 in Engineering Design",
                achievement4: "AIR1 in Innovation",
                achievement5: "AIR3 in Suspension And Traction",
                achievement6: "AIR3 in Sledge Pull",
                achievement7: "AIR3 in Endurance",
            },
            baja: {
                achievement1: "AIR4 in Design",
                achievement2: "AIR7 in Sales",
                achievement3: "AIR6 in Acceleration",
                achievement4: "AIR8 in Rock Crawl",
            }
        },
        {
            id: 2020,
            atvc: {
                achievement1: "",
                achievement2: "",
                achievement3: "",
            },
            baja: {
                achievement1: "",
                achievement2: "",
                achievement3: "",
            }
        }
        
    ];    

    function changeInfo(year){
        if(year === 2011){
            document.getElementById('nitrox_carPic').src = Nitrox2011;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);
            deletepast();
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[1].atvc.achievement1]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[1].atvc.achievement2]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[1].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[1].baja.achievement1]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[1].baja.achievement2]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[1].baja.achievement3]);
        }
         if(year === 2012){
            document.getElementById('nitrox_carPic').src = Nitrox2012;
            deletepast();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[2].atvc.achievement1]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[2].atvc.achievement2]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[2].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[2].baja.achievement1]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[2].baja.achievement2]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[2].baja.achievement3]);
        }
        if(year === 2013){
            document.getElementById('nitrox_carPic').src = Nitrox2013;
            deletepast();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[3].atvc.achievement1]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[3].atvc.achievement2]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[3].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[3].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[3].baja.achievement2]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[3].baja.achievement3]);
        }
        if(year === 2014){
            document.getElementById('nitrox_carPic').src = Nitrox2014;
            deletepast();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[4].atvc.achievement1]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[4].atvc.achievement2]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[4].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[4].baja.achievement1]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[4].baja.achievement2]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[4].baja.achievement3]);
        }
        if(year === 2015){
            document.getElementById('nitrox_carPic').src = Nitrox2015;
            deletepast();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[5].atvc.achievement1]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[5].atvc.achievement2]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[5].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[5].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[5].baja.achievement2]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[5].baja.achievement3]);
        }
        if(year === 2016){
            document.getElementById('nitrox_carPic').src = Nitrox2016;
            deletepast();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[6].atvc.achievement1]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[6].atvc.achievement2]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[6].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[6].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[6].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[6].baja.achievement3]);
        }
        if(year === 2017){
            document.getElementById('nitrox_carPic').src = Nitrox2017;
            deletepast();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[7].atvc.achievement1]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[7].atvc.achievement2]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[7].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[7].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[7].baja.achievement2]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[7].baja.achievement3]);
        }
        if(year === 2018){
            deletepast();
            document.getElementById('nitrox_carPic').src = Nitrox2018;
            deletepast();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[8].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[8].atvc.achievement2]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[8].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[8].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[8].baja.achievement2]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[8].baja.achievement3]);
            // setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[8].baja.achievement4]);
        }
        if(year === 2019){
            document.getElementById('nitrox_carPic').src = Nitrox2019;
            deletepast();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement2]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement3]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement4]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement5]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement6]);
            // setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement7]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[9].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[9].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[9].baja.achievement3]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[9].baja.achievement4]);
        }
        if(year === 2020){
            document.getElementById('nitrox_carPic').src = Nitrox2020;
            deletepast();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[10].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[10].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[10].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[10].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[10].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[10].baja.achievement3]);
        }
        
       
    }
  
    function deletepast()
    {
      let atvc_li1;
      let atvc_li2;
      let atvc_li3;
      let baja_li1;
      let baja_li2;
      let baja_li3;
      atvc_li1=document.getElementById('atvc_li1');
      atvc_li2=document.getElementById('atvc_li2');
      atvc_li3=document.getElementById('atvc_li3');
      baja_li1=document.getElementById('baja_li1');
      baja_li2=document.getElementById('baja_li2');
      baja_li3=document.getElementById('baja_li3');
      
      if(typeof(atvc_li1) !='undefined' && atvc_li1 !=null)
      {
        atvc_li1.remove();
        atvc_li2.remove();
        atvc_li3.remove();
        baja_li1.remove();
        baja_li2.remove();
        baja_li3.remove();
      }
  }
    return(
        <div className="nitrox_saga-outside-container">

            <div className="nitrox_heading">
                <h1><p>our</p> <p id = "nitrox_legacy">LEGACY</p></h1>
            </div>

            <div className = "nitrox_saga-container">
                <div className="nitrox_years">
                    <div id="year"><p onClick={() => changeInfo(2019)}>2019</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2018)}>2018</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2017)}>2017</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2016)}>2016</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2015)}>2015</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2014)}>2014</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2013)}>2013</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2012)}>2012</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2011)}>2011</p> <div className="vl"></div></div>
                </div>
                <div className="nitrox_main-content">
                    <div className="nitrox_image">
                        <img id="nitrox_carPic" src={Nitrox2020}></img>
                    </div>
                    <div className="nitrox_text">
                        <div className="nitrox_comp1">
                            <h4 id="nitrox_competition1">{nitroxInfo[0].competition2Name}</h4>
                            <p>
                                
                                <ul>
                                {/* <li id="atvc_li1">AIR1 in Desgin</li>
                                    <li id="atvc_li2">AIR2 in VD</li>
                                    <li  id="atvc_li3">AIR3 in Stability</li> */}
                                 
                                    {
                                    comp2Achievements.map(position => 
                                        (
                                            <li>{position}</li>
                                        )
                                    )}
                                       
                                    
                                </ul>
                            </p>
                        </div>
                        <div className="nitrox_comp2">
                            <h4 id="nitrox_competition1">{nitroxInfo[0].competition1Name}</h4>
                            <p>
                                <ul>
                                {/* <li  id="baja_li1">AIR5 in Desgin</li>
                                    <li  id="baja_li2">AIR6 in VD</li>
                                    <li  id="baja_li3">AIR7 in Stability</li> */}
                                {comp1Achievements.map(position => 
                                        (
                                            
                                            <li>{position}</li>
                                        )
                                        
                                    )
                                    }
                                
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saga;