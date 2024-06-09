import React from 'react'
import InputContainers from '../../Components/InputContainers'
import SwitchBt from '../../Components/SwitchBt'
import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


export default function User_Profileview() {
  return (
    
     <div>
       <KeyboardReturnIcon sx={{position:'absolute'}}/> 
      <h1>User Profile</h1>
      <h6>View account details</h6>
      <SwitchBt/>
      
      <br>
      </br>
      <br>
      </br>
      <InputContainers/>
     
     
     <Foot/>
    </div>
  )
}
