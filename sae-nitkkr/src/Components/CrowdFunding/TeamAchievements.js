import React, { Component } from 'react';
import './TeamAchievements.css'
import formulaCar from './../../Assets/CrowdFunding/Svg/formulaCar.svg'
import atv from './../../Assets/CrowdFunding/Svg/atv.png'
function TeamAchievements(){
    return(
        <div className='team-achievements_container'>
            <div className='team-achievements_heading'>
                <div className="TeamAboutUs-heading">
                    <h1 className="TeamAboutUs-weare"> Our&nbsp;</h1>
                    <h1 className="TeamAboutUs-boldcolor">Achievements</h1>
                </div>
            </div>
            <div className='team-achievements_box'>
                <div className='team-achievements_team-box'>
                    <div className='team-achievements_team-boxHeader'>
                        <div className='team-achievements_team-boxHeaderIcon'><img src={formulaCar}></img></div>
                        <div className='team-achievements_team-boxHeaderName'>Team Accelerons</div>
                    </div>
                    <div className='team-achievements_team-boxContent'>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>2019</p>
                            Only Team to Incorporate Clutch System(CLUTCHLESS) in FS car Customized Engine wiring Self Design Intake Manifold and Exhaust System
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>2018</p>
                            1st among NITs in FORMULA BHARAT <br></br>
                            AIR 6 in Endurance Race <br></br>
                            AIR 12 in Cost Event Overall 16th Rank among 70 Teams
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>2017</p>
                            Overall 18th rank in SUPRA SAE INDIA
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>2016</p>
                            AIR 25 in FORMULA STUDENT INDIA 2016
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>2015</p>
                            Installed Pneumatic Gear Shifter<br></br>
                            AIR 10 in COST EVENT<br></br>
                            AIR 30 in Formula Design
                        </div>
                    </div>
                </div>
                <div className='team-achievements_team-box'>
                    <div className='team-achievements_team-boxHeader'>
                        <div className='team-achievements_team-boxHeaderIcon'><img src={atv}></img></div>
                        <div className='team-achievements_team-boxHeaderName'>Team Nitrox</div>
                    </div>
                    <div className='team-achievements_team-boxContent'>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>ATVC 2021</p>
                            VIRTUAL- AIR 1<br></br>
                            Shifted to ELECTRIC VEHICLE for BAJA
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>ATVC 2020</p>
                            Runner Up
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>BAJA USA 2020</p>
                            INTERNATIONAL RANK 20
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>BAJA 2019</p>
                            AIR 4 in Design<br></br>
                            AIR 7 in Sales<br></br>
                            AIR 6 in Acceleration<br></br>
                            AIR 8 in Rock Crawl
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>BAJA 2018</p>
                            AIR 6 Fastest Vehicle<br></br>
                            AIR 5 Light Weight Category<br></br>
                            AIR 5 Cost Efficient Category<br></br>
                            AIR 8 Endurance Run
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>BAJA 2017</p>
                            Ergonomic sling seat design<br></br>
                            Trailing arm suspension with camber links<br></br>
                            Innovated safety belt system<br></br>
                            Overall AIR 29 out of 400 teams AIR 7 out of 397 teams
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>BAJA 2016</p>
                            AIR 2 Cost Effective Category
                            AIR 4 Hill Climb<br></br>
                            AIR 6 Light<br></br>
                            Weight Category Self Designed Gearbox
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>BAJA 2015</p>
                            AIR 3 Suspension and Traction Event<br></br>
                            AIR 7 out of 397 Teams
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>BAJA 2014</p>
                            AIR 20 out of 327 teams<br></br>
                            Innovation: Cutting Brakes
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>BAJA 2013</p>
                            AIR 8 in Endurance<br></br>
                            AIR 10 out of 262 teams
                        </div>
                        <div className='team-achievements_team-boxContentRank'>
                            <p>BAJA 2012</p>
                            First Time VIRTUALLY CLEARED<br></br>
                            Roared on BAJA tracks in all events – Hill Climb, Endurance, Acceleration
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamAchievements