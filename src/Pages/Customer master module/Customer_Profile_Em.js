import React from 'react'
import Heading_One from '../../Components/Heading_One'
import Heading_six from '../../Components/Heading_six'
import SwitchBt from '../../Components/SwitchBt'
import Customer_Input_container from '../../Components/Customer_Input_Container'
import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function Customer_Profile_Em() {
  return (
    <div>
      <KeyboardReturnIcon sx={{position:'absolute'}}/>
    <Heading_One item="Customer Profile"/>
    <Heading_six item="View  Account Details"/>
    <SwitchBt/>
    <Customer_Input_container/>
   
    <Foot/>

    </div>
  )
}
