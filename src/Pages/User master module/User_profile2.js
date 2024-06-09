import React from 'react'
import InputContainers from '../../Components/InputContainer1'
import SwitchBt from '../../Components/SwitchBt'
import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';


export default function User_profile2() {
  return (
    <div>
      <Link to={"/User_Profile1"}>
      <KeyboardReturnIcon sx={{position:'absolute'}}/> </Link>
      <h1>User Profile</h1>
      <h6>View and edit account details</h6>
      <SwitchBt/>
      
      <br>
      </br>
      <br>
      </br>
      <InputContainers buttonName="Save"/>
     {/* <Link to={"/"}>
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
      >Save</button> 
      </Link> */}
      
     
     <Foot/>
    </div>
  )
}
