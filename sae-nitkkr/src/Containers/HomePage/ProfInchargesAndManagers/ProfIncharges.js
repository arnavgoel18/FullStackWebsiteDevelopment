import './ProfInchargesAndManagers.css';
import PersonCard from './PersonCard';
import prof1 from '../../../Assets/ProfIncharges/mittal.jpg';
import prof2 from '../../../Assets/ProfIncharges/JDSir.jpg';
import prof3 from '../../../Assets/ProfIncharges/angra.jpg';

function ProfIncharges(){
    return(
        <>
            {/*Professor Incharges*/}
            <div className = "profIncharge_container">
                <p className="heading">Professor Incharges</p>
                
                <div className = "persons_container">
                    <PersonCard name={"Dr. Vinod Mittal"} designation={"Professor"} url={prof1}/>
                    <PersonCard name={"Dr. Jaideep Gupta"} designation={"Professor"} url={prof2}/>
                    <PersonCard name={"Dr. Surjeet Angra"} designation={"Professor"} url={prof3}/>
                </div>
            </div>
        </>
    )
}

export default ProfIncharges;