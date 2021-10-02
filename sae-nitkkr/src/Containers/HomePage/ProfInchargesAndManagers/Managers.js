import PersonCard from './PersonCard';
import prof1 from '../../../Assets/ProfIncharges/mittal.jpg';
import prof2 from '../../../Assets/ProfIncharges/JDSir.jpg';
import prof3 from '../../../Assets/ProfIncharges/angra.jpg';

function Managers(){
    return(
        <>
            <div className = "managers_container">
                <p>Team Managers</p>
                
                <div className = "persons_container">
                    <PersonCard name={"Dr. Mittal"} designation={"President"} url={prof1}/>
                    <PersonCard name={"Dr. Mittal"} designation={"Vice-President"} url={prof3}/>
                    <PersonCard name={"Dr. Mittal"} designation={"Treasurer"} url={prof2}/>
                </div>
            </div>
        </>
    )
}

export default Managers;