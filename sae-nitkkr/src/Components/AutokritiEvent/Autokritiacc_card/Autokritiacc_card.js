import { useContext } from "react";
import "./Autokritiacc_card.css";

import CheckContext from "../Context/CheckContext";

function Autokritiacc_card(props) {
  let k = useContext(CheckContext);

  return (
    <div id="autokriti_acc_card">
      <div id="acc_card_title">
        <div id="acc_card_title_sentence">{props.title}</div>
        <div id="acc_card_title_sign">
          {props.visibility == "no" ? (
            <>
              <img
                id="down_arrow"
                src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-down-arrows-those-icons-fill-those-icons-7.png"
                onClick={() => {
                  k.setvisibility("yes");
                  k.show(props.id);
                }}
              />
            </>
          ) : (
            <img
              id="down_arrow"
              src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-up-arrows-those-icons-fill-those-icons-6.png"
              onClick={() => {
                k.setvisibility("no");
                k.notshow(props.id);
              }}
            />
          )}
        </div>
      </div>
      {props.visibility == "yes" ? (
        <div id="acc_card_description">{props.description}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Autokritiacc_card;
