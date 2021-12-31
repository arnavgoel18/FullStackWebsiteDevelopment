import React from 'react'
import "./AfterLoginCard.css"

export default function AfterLoginCard(props) {
    return (
        <div>
            <div className="afterLoginCard" style={{backgroundColor:"#F88215"}}>
                {props.name}
            </div>
        </div>
    )
}
