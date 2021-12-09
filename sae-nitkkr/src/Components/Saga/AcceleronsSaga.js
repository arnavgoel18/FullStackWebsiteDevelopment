import React from 'react';
import { useState } from 'react';

import './Saga.css';

// Accelerons Image Files
import Accelerons2020 from '../../Assets/Saga/Accelerons2019.png';
import Accelerons2019 from '../../Assets/Saga/Accelerons2019.png';
import Accelerons2018 from '../../Assets/Saga/Accelerons2018.png';
import Accelerons2017 from '../../Assets/Saga/Accelerons2017.png';
import Accelerons2016 from '../../Assets/Saga/Accelerons2016.png';
import Accelerons2015 from '../../Assets/Saga/Accelerons2015.png';
import Accelerons2014 from '../../Assets/Saga/Accelerons2014.png';
import Accelerons2013 from '../../Assets/Saga/Accelerons2013.png';

function Saga(){

    const [comp1Achievements, setcomp1Achievements] = useState([]);
    const [comp2Achievements, setcomp2Achievements] = useState([]);

    //Display Latest Year First at time of Loading


    const acceleronsInfo = [
        {
            competition1Name: "Supra",
            competition2Name: "Formula Bharat",
        },
        {
            id: 2011,
            supra: {
                achievement1: "AIR1 in Terrain Response",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Design",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2012,
            supra: {
                achievement1: "AIR1 in Design",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Design",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2013,
            supra: {
                achievement1: "AIR1 in Design",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Design",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2014,
            supra: {
                achievement1: "AIR37 in SUPRA SAE INDIA",
                achievement2: "Engine Incorporated - KAWASAKI NINJA 400R ",
                achievement3: "AIR3 in Stability{}",
            },
            fb: {
                achievement1: "AIR5 in Design",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2015,
            supra: {
                achievement1: "AIR1 in Design{}",
                achievement2: "AIR2 in VD{}",
                achievement3: "AIR3 in Stability{}",
            },
            fb: {
                achievement1: "AIR30 in Formula Design Challenge",
                achievement2: "AIR10 in Cost Event",
                achievement3: "Installed Pneumatic gear Shifter ",
            }
        },
        {
            id: 2016,
            supra: {
                achievement1: "AIR1 in Design{}",
                achievement2: "AIR2 in VD{}",
                achievement3: "AIR3 in Stability{}",
            },
            fb: {
                achievement1: "AIR25 in Formula Student India",
                achievement2: "Weight Reduction To 60kgs",
                achievement3: "Incorporated the Innovative Idea of Cageless Differential",
                
            }
        },
        {
            id: 2017,
            supra: {
                achievement1: "AIR18 In SUPRA SAE INDIA",
                achievement2: "Empowered With KTM 390cc Engine",
                achievement3: "Significant Work of This Year- WEIGHT REDUCTION",
            },
            fb: {
                achievement1: "AIR5 in Design{}",
                achievement2: "AIR6 in VD{}",
                achievement3: "AIR7 in Stability{}",
            }
        },
        {
            id: 2018,
            supra: {
                achievement1: "AIR1 in Design{}",
                achievement2: "AIR2 in VD{}",
                achievement3: "AIR3 in Stability{}",
            },
            fb: {
                achievement1: "AIR1 Among NITs",
                achievement2: "AIR6 in Endurance Race",
                achievement3: "AIR12 in Cost Event",
                achievement4: "AIR16 Among 70 TEAMS"
            }
        },
        {
            id: 2019,
            supra: {
                achievement1: "AIR1 in Design{}",
                achievement2: "AIR2 in VD{}",
                achievement3: "AIR3 in Stability{}",
            },
            fb: {
                achievement1: "AIR5 in Design{}",
                achievement2: "AIR6 in VD{}",
                achievement3: "AIR7 in Stability{}",
            }
        },
        {
            id: 2020,
            supra: {
                achievement1: "AIR1 in Design{}",
                achievement2: "AIR2 in VD{}",
                achievement3: "AIR3 in Stability{}",
            },
            fb: {
                achievement1: "AIR5 in Design{}",
                achievement2: "AIR6 in VD{}",
                achievement3: "AIR7 in Stability{}",
            }
        }
    ];        

    function changeInfo(year){
        if(year === 2013){
            document.getElementById('acclerons_carPic').src = Accelerons2013;
            deletepastacc();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[3].supra.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[3].supra.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[3].supra.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[3].fb.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[3].fb.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[3].fb.achievement3]);
        }
        else if(year === 2014){
            document.getElementById('acclerons_carPic').src = Accelerons2014;
            deletepastacc();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[4].supra.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[4].supra.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[4].supra.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[4].fb.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[4].fb.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[4].fb.achievement3]);
        }
        else if(year === 2015){
            document.getElementById('acclerons_carPic').src = Accelerons2015;
            deletepastacc();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[5].supra.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[5].supra.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[5].supra.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[5].fb.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[5].fb.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[5].fb.achievement3]);
        }
        else if(year === 2016){
            document.getElementById('acclerons_carPic').src = Accelerons2016;
            deletepastacc();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[6].supra.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[6].supra.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[6].supra.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[6].fb.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[6].fb.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[6].fb.achievement3]);
        }
        else if(year === 2017){
            document.getElementById('acclerons_carPic').src = Accelerons2017;
            deletepastacc();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[7].supra.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[7].supra.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[7].supra.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[7].fb.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[7].fb.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[7].fb.achievement3]);
        }
        else if(year === 2018){
            document.getElementById('acclerons_carPic').src = Accelerons2018;
            deletepastacc();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[8].supra.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[8].supra.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[8].supra.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[8].fb.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[8].fb.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[8].fb.achievement3]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[8].fb.achievement4]);
        }
        else if(year === 2019){
            document.getElementById('acclerons_carPic').src = Accelerons2019;
            deletepastacc();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);
            
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[9].supra.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[9].supra.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[9].supra.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[9].fb.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[9].fb.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[9].fb.achievement3]);
        }
        else if(year === 2020){
            document.getElementById('acclerons_carPic').src = Accelerons2020;
            deletepastacc();
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[10].supra.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[10].supra.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[10].supra.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[10].fb.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[10].fb.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[10].fb.achievement3]);
        }
    }
    function deletepastacc()
  {
      
      
      let supra_li1;
      let supra_li2;
      let supra_li3;
      let fb_li1;
      let fb_li2;
      let fb_li3;
      supra_li1=document.getElementById('supra_li1');
      supra_li2=document.getElementById('supra_li2');
      supra_li3=document.getElementById('supra_li3');
      fb_li1=document.getElementById('fb_li1');
      fb_li2=document.getElementById('fb_li2');
      fb_li3=document.getElementById('fb_li3');
      if(typeof(supra_li1) !='undefined' && supra_li1 !=null)
      {
      supra_li1.remove();
      supra_li2.remove();
      supra_li3.remove();
      fb_li1.remove();
      fb_li2.remove();
      fb_li3.remove();
      }
  }

    return(
        <div className="acclerons_saga-outside-container">

            <div className="acclerons_heading">
               <h1> <p>our</p> <p id = "acclerons_legacy">LEGACY</p></h1>
            </div>

            <div className = "acclerons_saga-container">
                <div className="acclerons_years">
                    <div id="year"><p onClick={() => changeInfo(2020)}>2020</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2019)}>2019</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2018)}>2018</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2017)}>2017</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2016)}>2016</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2015)}>2015</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2014)}>2014</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2013)}>2013</p> <div className="vl"></div></div>
                </div>
                <div className="acclerons_main-content">
                    <div className="acclerons_image">
                        <img id="acclerons_carPic" src={Accelerons2020}></img>
                    </div>
                    <div className="acclerons_text">
                        <div className="acclerons_comp1">
                            <h4 id="acclerons_competition1">{acceleronsInfo[0].competition1Name}</h4>
                            <p>
                                <ul>
                                <li id="supra_li1">AIR1 in Design</li>
                                    <li id="supra_li2">AIR2 in VD</li>
                                    <li  id="supra_li3">AIR3 in Stability</li>
                                    {comp1Achievements.map(position => 
                                        (
                                            <li>{position}</li>
                                        )
                                    )}
                                </ul>
                            </p>
                        </div>
                        <div className="acclerons_comp2">
                            <h4 id="acclerons_competition1">{acceleronsInfo[0].competition2Name}</h4>
                            <p>
                                <ul>
                                <li  id="fb_li1">AIR5 in Design</li>
                                    <li  id="fb_li2">AIR6 in VD</li>
                                    <li  id="fb_li3">AIR7 in Stability</li>
                                {comp2Achievements.map(position => 
                                        (
                                            <li>{position}</li>
                                        )
                                    )}
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