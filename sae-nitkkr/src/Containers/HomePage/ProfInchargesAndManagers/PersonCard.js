function PersonCard(props){
  if(props.page == "professor incharge"){

      return(
          <>
        <div className="container_pm">
           <div className="wrapper">
             
              <img src={props.url} alt=""/>
              <div className="name">
              {props.name}
              </div>
              <div className="designation">
              {props.designation}
              </div>
           </div>
{/*         
           <div className="icons">
              <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
              <li><a href="#"><span class="fab fa-twitter"></span></a></li>
              <li><a href="#"><span class="fab fa-linkedin " ></span></a></li>
              <li><a href="#"><span class="fab fa-instagram"></span></a></li>
           </div> */}
        </div>
              {/* <div className = "ProfInchargesandManagers-person">
                  <div className = "ProfInchargesandManagers-circle">
                      <img src = {props.url}/>
                  </div>
                  <div className = "ProfInchargesandManagers-name">{props.name}</div>
                  <div className = "ProfInchargesandManagers-designation">{props.designation}</div>
              </div> */}
          </>
      )
  }
  else{
    return(
        <>
      <div className="container_pm">
         <div className="wrapper">
           
            <img src={props.url} alt=""/>
            <div className="name">
            {props.name}
            </div>
            <div className="designation">
            {props.designation}
            </div>
         </div>
      
         <div className="icons">
            {/* <li><a href="#"><span class="fab fa-facebook-f"></span></a></li> */}
            {/* <li><a href="#"><span class="fab fa-twitter"></span></a></li> */}
            <li><a href="#"><span class="fab fa-linkedin " ></span></a></li>
            {/* <li><a href="#"><span class="fab fa-instagram"></span></a></li> */}
         </div>
      </div>
            {/* <div className = "ProfInchargesandManagers-person">
                <div className = "ProfInchargesandManagers-circle">
                    <img src = {props.url}/>
                </div>
                <div className = "ProfInchargesandManagers-name">{props.name}</div>
                <div className = "ProfInchargesandManagers-designation">{props.designation}</div>
            </div> */}
        </>
    )
  }

}

export default PersonCard;