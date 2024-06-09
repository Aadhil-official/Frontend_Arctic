import React, { useState } from 'react';
import { z } from 'zod';
import { error, success } from '../util/Toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarkerAlt, faPhone, faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function CustomerInput({buttonName}) {
  const [custName, setCustName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState(""); // Fixed typo here
  const [location, setLocation] = useState("");

  const validateForm = z.object({
    custName: z.string().min(1, "Enter customer name").regex(/^[a-zA-Z ]*$/, {
      message: "Cannot enter number or symbol for name",
    }),
    address: z.string().min(1, "Enter your address"),
    contactNumber: z.string().min(1, { message: "Enter your mobile number" }).regex(/^[0-9]+$/, {
      message: "Mobile number must contain only numbers",
    }),
    email: z.string().email({ message: "Invalid email" }),
    location: z.string().min(1, "Enter your location"),
  });

  const hanldeSave = () => {
    
    const data = { custName, address, contactNumber, email, location };
    const result = validateForm.safeParse(data);
   if(result.success){
    success("Form validation success")
   }
    if(result.success){
      console.log("Success")
    }
    if (result.error) {
      const formattedError = result.error.format();
      if (formattedError.custName?._errors) {
        error(String(formattedError.custName?._errors));
      } else if (formattedError.address?._errors) {
        error(String(formattedError.address?._errors));
      } else if (formattedError.email?._errors) {
        error(String(formattedError.email?._errors)); 
      }
      if (formattedError.contactNumber?._errors) {
        error(String(formattedError.contactNumber?._errors));
      }
      if (formattedError.location?._errors) {
        error(String(formattedError.location?._errors));
      }   else error("An unknown error occurred in the validation process");
    }
  };

  return (
    <div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faUser} className="icon" />
      <input type="text" placeholder="Customer Name" value={custName} onChange={(e) => setCustName(e.target.value)} />
      </div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faPhone} className="icon" />
        <input type="number" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
      </div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faLocationDot} className='icon'/>
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} /> {/* Corrected onChange here */}
      </div>

      <button className="save" style={{
        width: '25%',
        height: '30px',
        alignItems:'center',
        backgroundColor:'#667EEA',
        border:'0',
        color:'white',
        cursor: 'pointer',
        position:'relative',
        left:"500px"

      }} type="button" onClick={hanldeSave}>{buttonName}</button> {/* Changed type to "button" */}

    </div>
  );
}
