import './ProfInchargesAndManagers.css'
import './pm.css'
import PersonCard from './PersonCard'
import manager1 from '../../../Assets/ProfIncharges/President.jpeg'
import manager2 from '../../../Assets/ProfIncharges/VicePres.jpeg'
import manager3 from '../../../Assets/ProfIncharges/Secy.jpeg'

function Managers() {
  return (
    <>
      <div className='ProfInchargesandManagers-managers_container'>
        <p className='ProfInchargesandManagers-Managers-Heading'>
          Team Managers
        </p>

        <div className='ProfInchargesandManagers-persons_container'>
          <PersonCard
            name={'Aasheesh Bansal'}
            designation={'President'}
            page={'manager'}
            url={manager1}
            linkedin={'https://www.linkedin.com/in/aasheesh4bansal/'}
            email={'mailto:Bansalaasheesh7@gmail.com'}
          />
          <PersonCard
            name={'Arnav Goel'}
            designation={'Vice-President'}
            page={'manager'}
            url={manager2}
            linkedin={'https://www.linkedin.com/in/arnav-goel-ba94a21ab/'}
            email={'mailto:arnav18.goel@gmail.com'}
          />
          <PersonCard
            name={'Ishika Mittal'}
            designation={'Secretary'}
            page={'manager'}
            url={manager3}
            linkedin={'https://www.linkedin.com/in/ishika-mittal-464b971b2/'}
            email={'mailto:ishikamittal117@gmail.com'}
          />
        </div>
      </div>
    </>
  )
}

export default Managers
