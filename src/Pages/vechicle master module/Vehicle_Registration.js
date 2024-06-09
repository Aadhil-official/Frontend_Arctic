import React from 'react'
import Heading_One from '../../Components/Heading_One'
import Heading_six from '../../Components/Heading_six'
import Vehicle_Input_container from '../../Components/Vehicle_Input_Container'
import Reg_Can from '../../Components/Reg_Can'
import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom'
import Single_Button from '../../Components/Single_Button'

export default function Vehicle_Registration() {
  return (
    <div >
      <Link to={"/Vehicle_List_One"}>
      <KeyboardReturnIcon sx={{position:'absolute'}}/></Link>
      <Heading_One item="Vehicle Registration"/>
      <Heading_six item="Register a new vehicle"/>
      <Vehicle_Input_container/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      
      <br/>
      <Foot/>
    </div>
  )
}
