import React from 'react'
import SwitchBt from '../../Components/SwitchBt'
import Foot from '../../Components/Foot'
import Unitprofile0 from '../../Components/Unitprofile0'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


export default function Unitprofile_final() {
  return (
  
    <div>
       <KeyboardReturnIcon sx={{position:'absolute'}}/>
       <h1>Unit Profile</h1>
      <h6>View unit details</h6>
      <SwitchBt/>
      <Unitprofile0/>

      <Foot/>
    </div>
  )
}
