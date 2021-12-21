import React from 'react'
import './Sponsicompanies.css'
import advanced_robotics from '../../Assets/Sponsors Image/advanced_robotics.png';
import altair from '../../Assets/Sponsors Image/altair.png';
import Ansys from '../../Assets/Sponsors Image/Ansys.png';
import c3 from '../../Assets/Sponsors Image/c3.png';
import cmsr from '../../Assets/Sponsors Image/cmsr.png';
import CPG from '../../Assets/Sponsors Image/CPG.png';
import forgify from '../../Assets/Sponsors Image/forgify.png';
import Hartron from '../../Assets/Sponsors Image/Hartron.png';
import hero from '../../Assets/Sponsors Image/hero.png';
import honda from '../../Assets/Sponsors Image/honda.png';
import Instapro from '../../Assets/Sponsors Image/Instapro.png';
import Janatics from '../../Assets/Sponsors Image/Janatics.png';
import Lps_Bossard from '../../Assets/Sponsors Image/Lps_Bossard.png';
import mh from '../../Assets/Sponsors Image/mh.png';
import NIT_kurukshetra from '../../Assets/Sponsors Image/NIT_kurukshetra.png';
import pankaj_potentiometer from '../../Assets/Sponsors Image/pankaj_potentiometer.png';
import polyplastics from '../../Assets/Sponsors Image/polyplastics.png';
import republic_motors from '../../Assets/Sponsors Image/republic_motors.png';
import Ricardo from '../../Assets/Sponsors Image/Ricardo.png';
import saiga_parts from '../../Assets/Sponsors Image/saiga_parts.png';
import skf_sealing from '../../Assets/Sponsors Image/skf_sealing.png';
import sne from '../../Assets/Sponsors Image/sne.png';
import Sponsorlogo from '../../Assets/Sponsors Image/Sponsorlogo.png';
import Suresh_Metals from '../../Assets/Sponsors Image/Suresh_Metals.png';
import unbrako from '../../Assets/Sponsors Image/unbrako.png';
import venus from '../../Assets/Sponsors Image/venus.png';

function Sponsicompanies() {
  function expandsponsor()
  {
    let expansion=document.getElementsByClassName('tobeexpanded');
    let k=0;
    let classsize=expansion.length;
    for(k=0;k<classsize;k=k+1)
    {
      expansion[k].style.display="block";
    }
    let removebutton=document.getElementById('viewmore_div');
    removebutton.style.display="none";
  }
  return (
    <div id="sponsicompanies_bigbox">
      <div id="sponsicompanies_first" >
          
        <div id="sponsicompanies_first1" >
            <img src={unbrako} id="unbrako-id" className='ima'/>
        </div>
        <div id="sponsicompanies_first2" >
        <img src={Lps_Bossard}  id="Lps_Bossard-id" className='ima'/>
        </div>
        <div id="sponsicompanies_first3" >
        <img src={saiga_parts} id="saiga_parts-id" className='ima'/>
        </div>
      
      {/* <div id="sponsicompanies_second"> */}
      
        <div id="sponsicompanies_second1" >
        <img src={Ansys}  id="Ansys-id" className='ima'/>
        </div>
        <div id="sponsicompanies_second2" >
        <img src={Janatics} id="Janatics-id" className='ima'/>
        </div>
        <div id="sponsicompanies_second3" >
        <img src={NIT_kurukshetra} id="NIT_kurukshetra-id" className='ima'/>
        </div>
      {/* </div> */}
      {/* <div id="sponsicompanies_third"> */}
        <div id="viewmore_div">
          <button id="viewmore_button" onClick={expandsponsor}>
            View More
          </button>
        </div>
        <div id="sponsicompanies_third1" className="tobeexpanded">
        <img src={pankaj_potentiometer} id="pankaj_potentiometer-id" className='ima'/>
        </div>
        <div id="sponsicompanies_third2" className="tobeexpanded">
        <img src={skf_sealing} id="skf_sealing-id" className='ima'/>
        </div>
        <div id="sponsicompanies_third3" className="tobeexpanded" >
        <img src={hero} id="hero-id" className='ima'/>
        {/* </div> */}
      </div>
      {/* <div id="sponsicompanies_fourth"> */}
      
        <div id="sponsicompanies_fourth1" className="tobeexpanded" >
        <img src={honda} id="honda-id" className='ima'/>
        </div>
        <div id="sponsicompanies_fourth2"  className="tobeexpanded">
        <img src={venus} id="venus-id" className='ima'/>
        </div>
        <div id="sponsicompanies_fourth3" className="tobeexpanded">
        <img src={republic_motors} id="republic_motors-id" className='ima'/>
        {/* </div> */}
      </div>
      {/* <div id="sponsicompanies_fifth"> */}
      
        <div id="sponsicompanies_fifth1" className="tobeexpanded">
        <img src={forgify} id="forgify-id" className='ima'/>
        </div>
        <div id="sponsicompanies_fifth2" className="tobeexpanded">
        <img src={Instapro} id="Instapro-id" className='ima'/>
        </div>
        <div id="sponsicompanies_fifth3" className="tobeexpanded">
        <img src={advanced_robotics} id="advanced_robotics-id" className='ima'/>
        {/* </div> */}
      </div>
      {/* <div id="sponsicompanies_sixth"> */}
      
        <div id="sponsicompanies_sixth1" className="tobeexpanded" >
        <img src={altair} id="altair-id" className='ima'/></div>  
        <div id="sponsicompanies_sixth2" className="tobeexpanded" >
        <img src={polyplastics} id="polyplastics-id" className='ima'/></div>  
        <div id="sponsicompanies_sixth3" className="tobeexpanded">
        <img src={CPG} id="CPG-id" className='ima'/></div>  
      {/* </div> */}
      {/* <div id="sponsicompanies_seventh"> */}
      
        <div id="sponsicompanies_seventh1" className="tobeexpanded">
        <img src={Ricardo} id="Ricardo-id" className='ima'/></div>  
        <div id="sponsicompanies_seventh2" className="tobeexpanded">
        <img src={Hartron} id="Hartron-id" className='ima'/></div>  
        <div id="sponsicompanies_seventh3" className="tobeexpanded">
        <img src={mh}  id="mh-id" className='ima'/></div>  
      {/* </div> */}
      {/* <div id="sponsicompanies_eighth"> */}
      
        <div id="sponsicompanies_eight1" className="tobeexpanded">
        <img src={cmsr} id="cmsr-id" className='ima'/></div>  
        <div id="sponsicompanies_eight2" className="tobeexpanded">
        <img src={sne} id="sne-id" className='ima'/></div>  
        <div id="sponsicompanies_eight3" className="tobeexpanded">
        <img src={c3} id="c3-id" className='ima'/></div>  
      {/* </div> */}
      {/* <div id="sponsicompanies_ninth"> */}
      
        <div id="sponsicompanies_ninth1" className="tobeexpanded">
          <img src={Suresh_Metals} id="Suresh_Metals-id" className='ima'/>
        </div>
        <div id="sponsicompanies_ninth2" className="tobeexpanded" >
        {/* <img src={Suresh_Metals} id="Suresh_Metals-id" className='ima'/> */}
        </div>
        <div id="sponsicompanies_ninth3" className="tobeexpanded">
        {/* <img src={Suresh_Metals} id="Suresh_Metals-id" className='ima'/> */}
        {/* </div> */}

      </div>
      </div>
    </div>
  )
}

export default Sponsicompanies;