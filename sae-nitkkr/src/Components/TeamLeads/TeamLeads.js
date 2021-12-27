import React, { Component } from 'react'
import PersonCard from '../../Containers/HomePage/ProfInchargesAndManagers/PersonCard'

/* Import Images */
import nitroxCap from '../../Assets/ProfIncharges/angra.jpg'
import nitroxVicecap from '../../Assets/ProfIncharges/VicePres.jpg'
import acceleronsCap from '../../Assets/ProfIncharges/angra.jpg'
import acceleronsVicecap from '../../Assets/ProfIncharges/acceleronsViceCap.png'

import './TeamLeads.css'

function TeamLeads(props){
    if(props.page == "Nitrox"){
        return(
            <>
                {/*Professor Incharges*/}
                <div className = "TeamLeads-profIncharge_container">
                    <p className="TeamLeads-heading">Team Leads</p>
                    
                    <div className = "TeamLeads-persons_container">
                        <PersonCard name={"Ritik Yadav"} designation={"Team Captain"} url={nitroxCap}/>
                        <PersonCard name={"Udit Tripathi"} designation={"Team Vice Captain"} url={nitroxVicecap}/>
                    </div>
                </div>
            </>
        )
    }
    else if(props.page == "Accelerons"){
        return(
            <>
                {/*Professor Incharges*/}
                <div className = "TeamLeads-profIncharge_container">
                    <p className="TeamLeads-heading">Team Leads</p>
                    
                    <div className = "TeamLeads-persons_container">
                        <PersonCard name={"Aakash Singh Bhisht"} designation={"Team Captain"} url={acceleronsCap}/>
                        <PersonCard name={"Amit Rawat"} designation={"Team Vice Captain"} url={acceleronsVicecap}/>
                    </div>
                </div>
            </>
        )
    }

}

export default TeamLeads