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


export default function Unitprofile0() {
  return (
    <div>

      <div className="inputcontainer">
        <input type="text" placeholder="Model Number" />
        
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
        <input type="text" placeholder="Owner" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <input type="text" placeholder="Warranty period" />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <input type="text" placeholder="Location" />
      </div>

      
     

      

    
      
    </div>
  )
}
