import PersonCard from './PersonCard';
import prof1 from '../../../Assets/ProfIncharges/mittal.jpg';
import prof2 from '../../../Assets/ProfIncharges/JDSir.jpg';
import prof3 from '../../../Assets/ProfIncharges/angra.jpg';

function Managers(){
    return(
        <>
            <div className = "managers_container">
                <p className="Managers-Heading">Team Managers</p>
                
                <div className = "persons_container">
                    <PersonCard name={"Deepak Yadav"} designation={"President"} url={prof1}/>
                    <PersonCard name={""} designation={"Vice-President"} url={prof3}/>
                    <PersonCard name={"Sarthak Mittal"} designation={"Secretary"} url={prof2}/>
                </div>
            </div>
        </>
    )
}

export default Managers;