function PersonCard(props){
    return(
        <>
            <div className = "ProfInchargesandManagers-person">
                <div className = "ProfInchargesandManagers-circle">
                    <img src = {props.url}/>
                </div>
                <div className = "ProfInchargesandManagers-name">{props.name}</div>
                <div className = "ProfInchargesandManagers-designation">{props.designation}</div>
            </div>
        </>
    )
}

export default PersonCard;