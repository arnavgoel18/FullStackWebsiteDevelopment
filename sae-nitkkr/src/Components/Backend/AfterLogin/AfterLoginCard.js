import React from 'react'
import "./AfterLoginCard.css"

export default function AfterLoginCard(props) {
    return (
        <div>
            <div className="afterLoginCard" id={props.id}>
                {props.name}
            </div>
        </div>
    )
}
