import React from 'react'

import Heading_One from '../../Components/Heading_One'

import Foot from '../../Components/Foot'
import Heading_six from '../../Components/Heading_six'
import Vehicle_Input_container from '../../Components/Vehicle_Input_Container'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function Vehicle_Profile_E() {
  return (
    <div>
      
      <KeyboardReturnIcon sx={{position:'absolute'}}/> 
      <Heading_One item="Vehicle Profile"/>
      <Heading_six item="View And Edit Vehicle Details"/>
      
      <br/>
      <br/>
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
