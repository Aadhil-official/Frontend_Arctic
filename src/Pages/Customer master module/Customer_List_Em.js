import React from 'react'
import Filterone from '../../Components/Filterone'
import Heading_One from '../../Components/Heading_One'
import EmployeeName from '../../Components/EmployeeName'
import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function Customer_List_Em() {
  return (
    <div>
       <KeyboardReturnIcon sx={{position:'absolute'}}/> 
      <Heading_One item="Customer List"/>
      <Filterone/>
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
     
      <Foot/>
    </div>
  )
}
