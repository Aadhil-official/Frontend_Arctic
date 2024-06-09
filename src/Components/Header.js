import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faUserTie,
  faUserGroup,
  faPhone,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";


import "./Header.css";

function Header() {
  return (
    <div>
      


      <h1>Employee Registration</h1>
      <h6>Create a new account</h6>
      <div className="inputcontainer">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="text" placeholder="Username" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
        <input type="text" placeholder="Address" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <input type="text" placeholder="Contact Number" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <input type="text" placeholder="Email" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input type="text" placeholder="Password" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input type="text" placeholder="Confirm Password" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faUserTie} className="icon" />
        <input type="text" placeholder="Designation" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faUserGroup} className="icon" />
        <input type="text" placeholder="User Group" />
      </div>

      <button className="save">Register</button>
      <button className="cancel">Cancel</button>

      <div className="foot">
        <h2>© 2023 • All Rights Reserved</h2>
      </div>
    </div>
  );
}

export default Header;
