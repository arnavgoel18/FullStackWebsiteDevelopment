function PersonCard(props){
    return(
        <>
            <div className = "person">
                <div className = "circle">
                    <img src = {props.url}/>
                </div>
                <div className = "name">{props.name}</div>
                <div className = "designation">{props.designation}</div>
            </div>
        </>
    )
}

export default PersonCard;