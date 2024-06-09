import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Heading_One from '../../Components/Heading_One';
import Heading_six from '../../Components/Heading_six';
import SwitchBt from '../../Components/SwitchBt';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarkerAlt, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { z } from 'zod';
import { success, error } from '../../util/Toastify';
import Foot from '../../Components/Foot';
import CustomerInput from '../../Components/CustomerInput';

export default function Customer_Profile_Ad() {
  const [custName, setCustName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const validateForm = z.object({
    custName: z.string().min(1, "Enter customer name"),
    address: z.string().min(1, "Enter address"),
    contactNumber: z.string().min(1, "Enter contact number"),
    email: z.string().email({ message: "Invalid email" }),
    location: z.string().min(1, "Enter location"),
  });

  const handleSubmit = () => {
    const data = { custName, address, contactNumber, email, location };
    const result = validateForm.safeParse(data);
    if (result.success) {
      success("Form validation success");
      // Perform submit action here
    } else {
      const formattedError = result.error.format();
      if (formattedError.custName?._errors) {
        error(String(formattedError.custName?._errors));
      } else if (formattedError.address?._errors) {
        error(String(formattedError.address?._errors));
      } else if (formattedError.contactNumber?._errors) {
        error(String(formattedError.contactNumber?._errors));
      } else if (formattedError.email?._errors) {
        error(String(formattedError.email?._errors));
      } else if (formattedError.location?._errors) {
        error(String(formattedError.location?._errors));
      } else {
        error("An unknown error occurred in the validation process");
      }
    }
  };

  return (
    <div>
      <Link to={"/Customer_reg"}>
        <KeyboardReturnIcon sx={{position:'absolute'}}/>
      </Link>
      <Heading_One item="Customer Profile"/>
      <Heading_six item="View And Edit Account Details"/>
      <SwitchBt/>
      <br/> <br/>
      
    <CustomerInput buttonName="Edit details"/>
      <Foot/>
    </div>
  );
}
