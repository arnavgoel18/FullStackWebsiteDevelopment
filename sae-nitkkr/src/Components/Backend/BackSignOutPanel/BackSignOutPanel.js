//Back button of admin panel
import React from "react";
import './BackSignOutPanel.css'
import {IoArrowUndoSharp} from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

function backSignOutPanel() {
  return (
    <div>
      <div className="backend-panel">
        <Link to="/admin/actions">
          <button className="backend-backBtn">
            <IoArrowUndoSharp />
            &nbsp; Back
          </button>
        </Link>
        <button
          type="submit"
          className="backend-signout"
          onClick={(e) => {
            localStorage.removeItem("token");
            window.location.href = "/admin/login";
          }}
        >
          <BiLogOut />
          &nbsp; Sign out
        </button>
      </div>
    </div>
  );
}

export default backSignOutPanel;
