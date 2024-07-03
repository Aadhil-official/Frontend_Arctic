import React from 'react'
import './SerAgSixInputContainer.css';
//import axios from "axios";
import { Link } from 'react-router-dom';

export default function SerAgThreeInputContainer(props) {
//   const [customerName,setCustomerName]=useState("");
//   const [location,setLocation]=useState("");
//   const [item,setItem]=useState("");
//   const [agreementType,setAgreementType]=useState("");
//   const [periodOfTheAgreement,setPeriodOfTheAgreement]=useState("");

//   const data = {
//     customerName:customerName,
//     location:location,
//     item:item,
//     agreementType:agreementType,
//     periodOfTheAgreement:periodOfTheAgreement

//     }
  
    
  return (
    <div>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>
      <button className='SerAgButton'>{props.customerName}</button>

      

      
    </div>
  )
}
