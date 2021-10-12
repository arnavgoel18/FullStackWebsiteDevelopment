import React from 'react';
import { ReactDOM } from 'react-dom';
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

    const nitroxInfo = [
        {
            competition1Name: "ATVC",
            competition2Name: "BAJA SAE India",
        },
        {
            id: 2011,
            atvc: {
                achievement1: "AIR1 in Terrain Response",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            baja: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2012,
            atvc: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            baja: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2013,
            atvc: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            baja: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2014,
            atvc: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            baja: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2015,
            atvc: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            baja: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2016,
            atvc: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            baja: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2017,
            atvc: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            baja: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2018,
            atvc: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            baja: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2019,
            atvc: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            baja: {
                achievement1: "AIR5 in Desgin",
                achievement2: "AIR6 in VD",
                achievement3: "AIR7 in Stability",
            }
        },
        {
            id: 2020,
            atvc: {
                achievement1: "AIR1 in Desgin",
                achievement2: "AIR2 in VD",
                achievement3: "AIR3 in Stability",
            },
            baja: {
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

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[3].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[3].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[3].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[3].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[3].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[3].baja.achievement3]);
        }
        else if(year === 2014){
            document.getElementById('carPic').src = Accelerons2014;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[4].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[4].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[4].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[4].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[4].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[4].baja.achievement3]);
        }
        else if(year === 2015){
            document.getElementById('carPic').src = Accelerons2015;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[5].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[5].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[5].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[5].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[5].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[5].baja.achievement3]);
        }
        else if(year === 2016){
            document.getElementById('carPic').src = Accelerons2016;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[6].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[6].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[6].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[6].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[6].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[6].baja.achievement3]);
        }
        else if(year === 2017){
            document.getElementById('carPic').src = Accelerons2017;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[7].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[7].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[7].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[7].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[7].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[7].baja.achievement3]);
        }
        else if(year === 2018){
            document.getElementById('carPic').src = Accelerons2018;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[8].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[8].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[8].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[8].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[8].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[8].baja.achievement3]);
        }
        else if(year === 2019){
            document.getElementById('carPic').src = Accelerons2019;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[9].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[9].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[9].baja.achievement3]);
        }
        else if(year === 2020){
            document.getElementById('carPic').src = Accelerons2020;

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
                    <div id="year"><p onClick={() => changeInfo(2012)}>2012</p> <div className="vl"></div></div>
                    <div id="year"><p onClick={() => changeInfo(2011)}>2011</p> <div className="vl"></div></div>
                    {/* Replace The Code Here With a Component at Last */}
                </div>
                <div className="main-content">
                    <div className="image">
                        <img id="carPic" src=""></img>
                    </div>
                    <div className="text">
                        <div className="comp1">
                            <h4 id="competition1">{nitroxInfo[0].competition1Name}</h4>
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
                            <h4 id="competition1">{nitroxInfo[0].competition2Name}</h4>
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