import React from 'react'
import Heading_One from '../../Components/Heading_One'
import Heading_six from '../../Components/Heading_six'
import SwitchBt from '../../Components/SwitchBt'
import Customer_Input_container from '../../Components/Customer_Input_Container'
import Foot from '../../Components/Foot'
import Single_Button from '../../Components/Single_Button'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom'
import CustomerInput from '../../Components/CustomerInput'

export default function Customer_Profile_Sv() {
  return (
    <div>
      <Link to={"/Customer_Profile_Ad"}>
       <KeyboardReturnIcon sx={{position:'absolute'}}/></Link>
    <Heading_One item="Customer Profile"/>
    <Heading_six item="View And Edit Account Details"/>
    <SwitchBt/>
    <br/>
    <br/>
    <CustomerInput buttonName="Save details"/>
    <Foot/>

    </div>
  )
}
