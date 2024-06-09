import React from 'react'
import Filterone from '../../Components/Filterone'
import Heading_One from '../../Components/Heading_One'
import EmployeeName from '../../Components/EmployeeName'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Foot from '../../Components/Foot'

export default function Vehicle_List_One() {
  return (
    <div>
      KeyboardReturnIcon sx={{position:'absolute'}}/
      
      <Heading_One item="Vehicle List"/>
      <Filterone/>
      <br/>
      <br/>
      <EmployeeName name ="Vehicle_no"/>
      <EmployeeName name ="Vehicle_no"/>
      <EmployeeName name ="Vehicle_no"/>
      <EmployeeName name ="Vehicle_no"/>
      <EmployeeName name ="Vehicle_no"/>
      <EmployeeName name ="Vehicle_no"/>
      <EmployeeName name ="Vehicle_no"/>
      <EmployeeName name ="Vehicle_no"/>
      <br/>
      <br/>
     
      <Foot/>
    </div>
  )
}
