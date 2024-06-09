import React from 'react'
import SwitchBt from '../../Components/SwitchBt'

import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';
import InputContainers from '../../Components/InputContainer1';

export default function User_Profile1() {
  return (
    <div>
      <Link to={"/Employee_Reg1"}>
      <KeyboardReturnIcon sx={{position:'absolute'}}/> </Link>
      <h1>User Profile</h1>
      <h6>View and edit account details</h6>
      <SwitchBt/>
      
      <br>
      </br>
      <br>
      </br>
<InputContainers buttonName="Edit Details"/>      
{/* <Link to={'/User_profile2'}> 
      <button style={{
            width: '25%',
            height: '30px',
            alignItems:'center',
            backgroundColor:'#667EEA',
            border:'0',
            color:'white',
            cursor: 'pointer',
           position:'relative',
            left:'500px'
      }}
      >Edit Details</button> 
      </Link>   */}
      <Foot/>
    </div>
  )
}
