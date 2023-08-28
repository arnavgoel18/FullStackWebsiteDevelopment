import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div
        style={{ marginTop: "2px" }}
        className="modal"
        onClick={props.onClose}
      >
        <div className="" onClick={(e) => e.stopPropagation()}>
          {/* <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div> */}
          <div class="cardd">
            <h3 class="cardd-title">{props.tittle}</h3>
            <div className="modal-body">{props.children}</div>

            <p style={{ marginTop: "10px" }} class="cardd-content">
              Thank you for your generous donation to the club! Your
              contribution has brought us a step closer to achieving our goal
            </p>
            <button onClick={props.onClose} class="cardd-btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
