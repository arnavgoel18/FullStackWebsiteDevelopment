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
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2012,
            supra: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2013,
            supra: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2014,
            supra: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2015,
            supra: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2016,
            supra: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2017,
            supra: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2018,
            supra: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2019,
            supra: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2020,
            supra: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            fb: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        }
    ];        

    function changeInfo(year){
        if(year === 2013){
            document.getElementById('carPic').src = Accelerons2013;

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
            document.getElementById('carPic').src = Accelerons2014;

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
            document.getElementById('carPic').src = Accelerons2015;

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
            document.getElementById('carPic').src = Accelerons2016;

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
            document.getElementById('carPic').src = Accelerons2017;

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
            document.getElementById('carPic').src = Accelerons2018;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[8].supra.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[8].supra.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, acceleronsInfo[8].supra.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[8].fb.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[8].fb.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, acceleronsInfo[8].fb.achievement3]);
        }
        else if(year === 2019){
            document.getElementById('carPic').src = Accelerons2019;

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
            document.getElementById('carPic').src = Accelerons2020;

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

    return(
        <div className="saga-outside-container">

            <div className="heading">
                <p>Our</p> <p id = "legacy">Legacy</p>
            </div>

            <div className = "saga-container">
                <div className="years">
                    <div id="year"><p onClick={() => changeInfo(2020)}>2020</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2019)}>2019</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2018)}>2018</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2017)}>2017</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2016)}>2016</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2015)}>2015</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2014)}>2014</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2013)}>2013</p> <div className="vl"></div></div>
                </div>
                <div className="main-content">
                    <div className="image">
                        <img id="carPic" src=""></img>
                    </div>
                    <div className="text">
                        <div className="comp1">
                            <h4 id="competition1">{acceleronsInfo[0].competition1Name}</h4>
                            <p>
                                <ul>
                                    {comp1Achievements.map(position => 
                                        (
                                            <li>{position}</li>
                                        )
                                    )}
                                </ul>
                            </p>
                        </div>
                        <div className="comp2">
                            <h4 id="competition1">{acceleronsInfo[0].competition2Name}</h4>
                            <p>
                                <ul>
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