import "./ProfInchargesAndManagers.css";
import "./pm.css";
import PersonCard from "./PersonCard";
import manager1 from "../../../Assets/ProfIncharges/Bhavya Gevariya.jpg";
import manager2 from "../../../Assets/ProfIncharges/Umesh Kumar.jpeg";
import manager3 from "../../../Assets/ProfIncharges/Aditya Dabral.jpg";
import manager4 from "../../../Assets/ProfIncharges/Asmita Singh.jpg";
import manager5 from "../../../Assets/ProfIncharges/sourav.jpg";
import manager6 from "../../../Assets/Teammembers/Govind.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Managers() {
  return (
    <>
      <div className="ProfInchargesandManagers-managers_container">
        <p className="ProfInchargesandManagers-Managers-Heading">
          Team Managers
        </p>

        <div className="ProfInchargesandManagers-persons_container">
          <PersonCard
            name={"Bhavya Gevariya"}
            designation={"President"}
            page={"manager"}
            url={manager1}
            linkedin={"https://www.linkedin.com/in/bhavya-gevariya-99183b220"}
            email={"mailto:Bhavyagevariya@gmail.com"}
          />
          <PersonCard
            name={"Umesh Kumar"}
            designation={"Vice-President"}
            page={"manager"}
            url={manager2}
            linkedin={"https://www.linkedin.com/in/umesh-kumar-4532551a6/"}
            email={"mailto:umeshnagawan1225@gmail.com"}
          />
          <PersonCard
            name={"Aditya Dabral"}
            designation={"Secretary"}
            page={"manager"}
            url={manager3}
            linkedin={"https://www.linkedin.com/in/aditya-dabral-294a6523a"}
            email={"mailto:adityas.dabral@gmail.com"}
            />
          <PersonCard
            name={"Asmita Singh"}
            designation={"Secretary"}
            page={"manager"}
            url={manager4}
            linkedin={"https://www.linkedin.com/in/asmita-singh-7657a8261/"}
            email={"mailto:asmita0782@gmail.com"}
          />
          <PersonCard
            name={"Sourav"}
            designation={"Student Program Chairperson"}
            page={"manager"}
            url={manager5}
            linkedin={"https://www.linkedin.com/in/sourav-kumar-691270284"}
            email={"mailto:101souravkumar@gamil.com"}
          />
          <PersonCard
            name={"Govind Kumar Mahawar"}
            designation={"Student Program Chairperson"}
            page={"manager"}
            url={manager6}
            linkedin={"https://www.linkedin.com/in/govind-kumar-mahawar-955570259/"}
            email={"govindmahawar960@gmail.com"}
            />
        </div>
        <Link to="/Teammembers">
          <p className="know-more-text">
            Know More About Our Team →
          </p>
        </Link>
      </div>
    </>
  );
}

export default Managers;
