import { Link } from "react-router-dom";
import "./BrandAmbassador.css";
import xyz from '../../../Assets/BrandAmbassador/BrandAmbassador.jpeg'
function BrandAmbassador() {
  return (
    <div>
    {/* <div className="BrandAmbassador-body">
      <div className="BrandAmbassador-boxes">
        <div className="BrandAmbassador-box1">
          <div className="BrandAmbassador-box11">
            <div className="BrandAmbassador-box111">AUTOKRITI</div>{" "}
            <div className="BrandAmbassador-box112"> x</div>{" "}
          </div>
          <div className="BrandAmbassador-box12">
            <div className="BrandAmbassador-box121">BRAND</div>{" "}
            <div className="BrandAmbassador-box122">AMBASSADOR </div>{" "}
          </div>
        </div>
        <br />
        <br />
        <div className="BrandAmbassador-box2">
          <div className="BrandAmbassador-box21">Become</div>
          <div className="BrandAmbassador-box22">our</div>
          <div className="BrandAmbassador-box23">BRAND AMBASSADOR</div>
        </div>
        <br />
        <br/>
        <br/>
        <div className="BrandAmbassador-box3">
          Spread a word about us in your college and get amazing perks!
        </div>
        <br />
        <br />
        <br />
        <Link to="/ambassador">
          <button className="BrandAmbassador-box4">JOIN US</button>
        </Link>
      </div>
    </div> */}
    <div className="BrandAmbassador-container">
      <div className="BrandAmbassador-text">
          <div className="BrandAmbassador-title">BECOME <br/> OUR BRAND AMBASSADOR</div>
          <div >Spread a word about us in your college and get amazing perks!</div>
          <Link to="/ambassador">
          <button className="BrandAmbassador-button">JOIN US</button>
          </Link>
      </div>
      <div >
          <img  className="BrandAmbassador-image" src={xyz} />
      </div>
    </div>
    </div>
  );
}

export default BrandAmbassador;