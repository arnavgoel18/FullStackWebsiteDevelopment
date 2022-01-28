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
                    <PersonCard name={"Deepak Yadav"} designation={"President"} page={"manager"} url={manager1} linkedin={"https://www.linkedin.com/in/deepak-yadav-48410a185"} email={"mailto:Dy53844@gmail.com"}/>
                    <PersonCard name={"Ritik "} designation={"Vice-President"} page={"manager"} url={manager2} linkedin={"http://www.linkedin.com/in/ritik-yadav6097"} email={"mailto:ritikyadav542000@gmail.com"}/>
                    <PersonCard name={"Sarthak Srivastava"} designation={"Secretary"} page={"manager"} url={manager3} linkedin={"https://www.linkedin.com/in/sarthak-srivastava-69061a188"} email={"mailto:sarthaksrivastava1621@gmail.com"}/>
                </div>
            </div>
        </>
    )
}

export default Managers;