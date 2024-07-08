import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot, faSitemap, faCalendarDays, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import './SerAgTwoInputContainer.css';
import axios from "axios";


export default function SerAgTwoInputContainer() {
  const [customerName,setCustomerName]=useState("");
  const [location,setLocation]=useState("");
  const [item,setItem]=useState("");
  const [agreementType,setAgreementType]=useState("");
  const [periodOfTheAgreement,setPeriodOfTheAgreement]=useState("");

  const data = {
    customerName:customerName,
    location:location,
    item:item,
    agreementType:agreementType,
    periodOfTheAgreement:periodOfTheAgreement

    }
  const handleSave=() => {
    axios.put("http://localhost:8080/api/v1/agreementService/ServiceAgreement",data)

  } 
      return (
            <div className='seraginput'>
              <div className='input-container'>
              <input type='text' placeholder='Customer name' onChange={(e) => (setCustomerName(e.target.value))}></input>
              <FontAwesomeIcon icon={faUser} className='icon'/>
              </div>
              <div className='input-container'>
              <input type='text' placeholder='Location' onChange={(e) => (setLocation(e.target.value))}></input>
              <FontAwesomeIcon icon={faLocationDot} className='icon' /></div>
              <div className='input-container'>
              <input type='text' placeholder='Item'onChange={(e) => (setItem(e.target.value))}></input>
              <FontAwesomeIcon icon={faSitemap} className='icon'/>
              </div>
              <div className='input-container'>
              <input type='text' placeholder='Agreement Type'onChange={(e) => (setAgreementType(e.target.value))}></input>
              <FontAwesomeIcon icon={faFileSignature} className='icon'/>
              </div>
              <div className='input-container'>
              <input type='text' placeholder='Period of the agreement'onChange={(e) => (setPeriodOfTheAgreement(e.target.value))}></input>
              <FontAwesomeIcon icon={faCalendarDays} className='icon' />
              </div>
              <button value="save" onClick={handleSave} style={{
                backgroundColor:"rgba(60, 108, 230, 0.647)",
                color:"aliceblue",
                border:"none",
                textAlign:"center",
                cursor:"pointer",
                fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                borderRadius:"5px",
                width:"400px",
                height:"60px",
                margin:"2em"
              }}>Save</button>
              
              
            
            </div>

            
        
        
          )
}
