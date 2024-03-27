import "./ProfInchargesAndManagers.css";
import "./pm.css";
import PersonCard from "./PersonCard";
import manager1 from "../../../Assets/ProfIncharges/President.jpg";
import manager2 from "../../../Assets/ProfIncharges/VicePre.jpg";
import manager3 from "../../../Assets/ProfIncharges/secyy.jpg";
import manager4 from "../../../Assets/ProfIncharges/lisha.jpg";
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
            name={"Vaibhav Dharmani"}
            designation={"President"}
            page={"manager"}
            url={manager1}
            linkedin={"https://www.linkedin.com/in/vaibhav-dharmani-aa91a7199"}
            email={"mailto:dharmani.vaibhav2001@gmail.com"}
          />
          <PersonCard
            name={"Himanshu Khatri"}
            designation={"Vice-President"}
            page={"manager"}
            url={manager2}
            linkedin={"https://www.linkedin.com/in/hk2107/"}
            email={"mailto:hkhatri2107@gmail.com"}
          />
          <PersonCard
            name={"VINAY SAINI"}
            designation={"Secretary"}
            page={"manager"}
            url={manager3}
            linkedin={"https://www.linkedin.com/in/vinay-saini-6a3044241"}
            email={"mailto:sainivinay013@gmail.com"}
          />
          <PersonCard
            name={"Lisha Garg"}
            designation={"Secretary"}
            page={"manager"}
            url={manager4}
            linkedin={"https://www.linkedin.com/in/lisha-garg-61373a211/"}
            email={"mailto:lisha317garg@gmail.com"}
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
