import './Saga.css';
import Nitrox2019 from '../../Assets/Saga/Nitrox2019.png';
import Nitrox2018 from '../../Assets/Saga/Nitrox2018.png';


function Saga(){

    console.log(Nitrox2019);

    function changeInfo(year){
        if(year === 2019){
            document.getElementById('carPic').src = {Nitrox2019};
        }
    }

    return(
        <div className="saga-outside-container">

            <div className="heading">
                <p>Our</p> <p id = "legacy">Legacy</p>
            </div>

            <div className = "saga-container">
                <div className="years">
                    <div id="year"><p onClick={() => changeInfo(2020)}>2020</p> <div className="vl"></div></div>
                    <div id="year"><p>2019</p> <div className="vl"></div></div>
                    <div id="year"><p>2018</p> <div className="vl"></div></div>
                    <div id="year"><p>2017</p> <div className="vl"></div></div>
                    <div id="year"><p>2016</p> <div className="vl"></div></div>
                    <div id="year"><p>2015</p> <div className="vl"></div></div>
                    <div id="year"><p>2014</p> <div className="vl"></div></div>
                    <div id="year"><p>2013</p> <div className="vl"></div></div>
                    {/* Replace The Code Here With a Component at Last */}
                </div>
                <div className="main-content">
                    <div className="image">
                        <img id="carPic" src={Nitrox2019}></img>
                    </div>
                    <div className="text">
                        {/* Replace The Code Here With a Component at Last  */}
                        <div className="comp1">
                            <h4>Supra</h4>
                            <p>
                                <ul>
                                    <li>Acievment</li>
                                    <li>Acievment</li>
                                    <li>Acievment</li>
                                </ul>
                            </p>
                        </div>
                        <div className="comp2">
                            <h4>Formula Bharat</h4>
                            <p>
                                <ul>
                                    <li>Acievment</li>
                                    <li>Acievment</li>
                                    <li>Acievment</li>
                                </ul>
                            </p>
                        </div>
                        {/*------ */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saga;