import React from 'react'
import Filterone from '../../Components/Filterone'
import Heading_One from '../../Components/Heading_One'
import EmployeeName from '../../Components/EmployeeName'
import Single_Button from '../../Components/Single_Button'
import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom'

export default function Customer_List_one() {
  return (
    <div>
       <KeyboardReturnIcon sx={{position:'absolute'}}/> 
      <Heading_One item="Customer List"/>
      <Filterone option1="Customer" option2="Location"/>
      <br/>
      <br/>
      <EmployeeName name ="Customer name"/>
      <EmployeeName name ="Customer name"/>
      <EmployeeName name ="Customer name"/>
      <EmployeeName name ="Customer name"/>
      <EmployeeName name ="Customer name"/>
      <EmployeeName name ="Customer name"/>
      <EmployeeName name ="Customer name"/>
      
      <br/>
      <br/>
      <Link to={"/Customer_reg"}>
      <Single_Button value ="Add New Customer"/></Link>
      <Foot/>
    </div>
  )
}
