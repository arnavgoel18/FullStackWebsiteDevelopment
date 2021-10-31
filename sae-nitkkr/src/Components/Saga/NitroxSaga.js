import React from 'react';
import { useState } from 'react';

import './Saga.css';

// Nitrox Image Files
import Nitrox2020 from '../../Assets/Saga/Nitrox2019.png';
import Nitrox2019 from '../../Assets/Saga/Nitrox2019.png';
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
        if(year === 2011){
            document.getElementById('nitrox_carPic').src = Nitrox2011;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[1].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[1].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[1].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[1].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[1].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[1].baja.achievement3]);
        }
        else if(year === 2012){
            document.getElementById('nitrox_carPic').src = Nitrox2012;
            
            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[2].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[2].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[2].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[2].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[2].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[2].baja.achievement3]);
        }
        if(year === 2013){
            document.getElementById('nitrox_carPic').src = Nitrox2013;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[3].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[3].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[3].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[3].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[3].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[3].baja.achievement3]);
        }
        if(year === 2014){
            document.getElementById('nitrox_carPic').src = Nitrox2014;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[4].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[4].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[4].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[4].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[4].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[4].baja.achievement3]);
        }
        if(year === 2015){
            document.getElementById('nitrox_carPic').src = Nitrox2015;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[5].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[5].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[5].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[5].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[5].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[5].baja.achievement3]);
        }
        if(year === 2016){
            document.getElementById('nitrox_carPic').src = Nitrox2016;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[6].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[6].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[6].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[6].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[6].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[6].baja.achievement3]);
        }
        if(year === 2017){
            document.getElementById('nitrox_carPic').src = Nitrox2017;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[7].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[7].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[7].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[7].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[7].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[7].baja.achievement3]);
        }
        if(year === 2018){
            document.getElementById('nitrox_carPic').src = Nitrox2018;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[8].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[8].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[8].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[8].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[8].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[8].baja.achievement3]);
        }
        if(year === 2019){
            document.getElementById('nitrox_carPic').src = Nitrox2019;

            setcomp1Achievements(comp1Achievements => []);
            setcomp2Achievements(comp2Achievements => []);

            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement1]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement2]);
            setcomp1Achievements(comp1Achievements => [...comp1Achievements, nitroxInfo[9].atvc.achievement3]);

            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[9].baja.achievement1]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[9].baja.achievement2]);
            setcomp2Achievements(comp2Achievements => [...comp2Achievements, nitroxInfo[9].baja.achievement3]);
        }
        if(year === 2020){
            document.getElementById('nitrox_carPic').src = Nitrox2020;

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
        <div className="nitrox_saga-outside-container">

            <div className="nitrox_heading">
                <h1><p>Our</p> <p id = "nitrox_legacy">Legacy</p></h1>
            </div>

            <div className = "nitrox_saga-container">
                <div className="nitrox_years">
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
                </div>
                <div className="nitrox_main-content">
                    <div className="nitrox_image">
                        <img id="nitrox_carPic" src=""></img>
                    </div>
                    <div className="nitrox_text">
                        <div className="nitrox_comp1">
                            <h4 id="nitrox_competition1">{nitroxInfo[0].competition1Name}</h4>
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
                        <div className="nitrox_comp2">
                            <h4 id="nitrox_competition1">{nitroxInfo[0].competition2Name}</h4>
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