import PersonCard from './PersonCard';
import manager1 from '../../../Assets/ProfIncharges/President.jpg';
import manager2 from '../../../Assets/ProfIncharges/VicePres.jpg';
import manager3 from '../../../Assets/ProfIncharges/Secy.jpg';

function Managers(){
    return(
        <>
            <div className = "ProfInchargesandManagers-managers_container">
                <p className="ProfInchargesandManagers-Managers-Heading">Team Managers</p>
                
                <div className = "ProfInchargesandManagers-persons_container">
                    <PersonCard name={"Deepak Yadav"} designation={"President"} page={"manager"} url={manager1}/>
                    <PersonCard name={"Ritik "} designation={"Vice-President"} page={"manager"} url={manager2}/>
                    <PersonCard name={"Sarthak Srivastava"} designation={"Secretary"} page={"manager"} url={manager3}/>
                </div>
            </div>
        </>
    )
}

export default Managers;