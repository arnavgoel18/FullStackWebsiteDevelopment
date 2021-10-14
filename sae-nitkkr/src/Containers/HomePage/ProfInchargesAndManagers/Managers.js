import PersonCard from './PersonCard';
import prof1 from '../../../Assets/ProfIncharges/mittal.jpg';
import prof2 from '../../../Assets/ProfIncharges/JDSir.jpg';
import prof3 from '../../../Assets/ProfIncharges/angra.jpg';

function Managers(){
    return(
        <>
            <div className = "ProfInchargesandManagers-managers_container">
                <p className="ProfInchargesandManagers-Managers-Heading">Team Managers</p>
                
                <div className = "ProfInchargesandManagers-persons_container">
                    <PersonCard name={"Deepak Yadav"} designation={"President"} url={prof1}/>
                    <PersonCard name={"Ritik "} designation={"Vice-President"} url={prof3}/>
                    <PersonCard name={"Sarthak Mittal"} designation={"Secretary"} url={prof2}/>
                </div>
            </div>
        </>
    )
}

export default Managers;