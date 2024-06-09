import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarkerAlt, faPhone, faEnvelope, faLock, faUserTie, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { z } from 'zod';
import { error, success } from '../util/Toastify';

export default function InputContainers() {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Initialize confirmPassword state
  const [designation, setDesignation] = useState("");
  const [userGroup, setUserGroup] = useState("");

  const validateForm = z.object({
    username: z.string().min(1, "Enter username"),
    address: z.string().min(1, "Enter address"),
    contactNumber: z.string().min(1, "Enter contact number"),
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .refine((value) => value === password, {
      message: "Passwords do not match",
    }),

    designation: z.string().min(1, "Enter designation"),
    userGroup: z.string().min(1, "Enter user group"),
  });

  const handleSubmit = () => {
    const data = { username, address, contactNumber, email, password, confirmPassword, designation, userGroup };
    const result = validateForm.safeParse(data);
    if (result.success) {
      success("Form validation success");
      // Perform submit action here
    } else  {
      const formattedError = result.error.format();
      console.log("Formatted error:", formattedError); // Add this console log statement for debugging
  
      if (formattedError.username?._errors) {
        error(String(formattedError.username?._errors));
      } else if (formattedError.address?._errors) {
        error(String(formattedError.address?._errors));
      } else if (formattedError.contactNumber?._errors) {
        error(String(formattedError.contactNumber?._errors));
      } else if (formattedError.email?._errors) {
        error(String(formattedError.email?._errors));
      } else if (formattedError.password?._errors) {
        error(String(formattedError.password?._errors));
      } else if (formattedError.confirmPassword?._errors) {
        error(String(formattedError.confirmPassword?._errors));
      } else if (formattedError.designation?._errors) {
        error(String(formattedError.designation?._errors));
      } else if (formattedError.userGroup?._errors) {
        error(String(formattedError.userGroup?._errors));
      } else  if (formattedError.confirmPassword?.confirmPassword?._errors) {
        error(String(formattedError.confirmPassword.confirmPassword._errors));
      } else {
        error("An unknown error occurred in the validation process");
      }
    }
  };
  
  

  return (
    <div>
      <div className="inputcontainer">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faUserTie} className="icon" />
        <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
      </div>

      <div className="inputcontainer">
        <FontAwesomeIcon icon={faUserGroup} className="icon" />
        <input type="text" placeholder="User Group" value={userGroup} onChange={(e) => setUserGroup(e.target.value)} />
      </div>

      <button className="save" onClick={handleSubmit}>Register</button>
      <button className="cancel">Cancel</button>
    </div>
  );
}
