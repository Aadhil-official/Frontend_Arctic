import React from 'react'
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


export default function Jobdetails() {
  return (
    <div>

<div className="inputcontainer">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="text" placeholder="Job_ID" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
        <input type="text" placeholder="User_Group_ID" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <input type="text" placeholder="Location" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <input type="text" placeholder="Vehicle_No" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <input type="text" placeholder="Job_Details" />
      </div>

      

    
      
    </div>
  )
}
