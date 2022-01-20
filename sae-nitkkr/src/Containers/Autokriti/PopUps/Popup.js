import React from 'react'
import './Popup.css'


function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-inner1">
                  
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                    {props.children}
                    </div>
                
            </div>
        </div>
    ) : "";

}
export default Popup
