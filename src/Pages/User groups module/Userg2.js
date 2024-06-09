import { Switch } from '@mui/material'
import React from 'react'
import EmployeeName from '../../Components/EmployeeName.js';
import Foot from '../../Components/Foot'
import SwitchBt from '../../Components/SwitchBt.js';
import InputGroupDet from '../../Components/InputGroupDet.js';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';

export default function Userg2() {
  return (
    <div>
      <Link to={"/Userg1"}>
       <KeyboardReturnIcon sx={{position:'absolute'}}/> </Link>
      <SwitchBt/>

      <h1>User Group</h1>
      <h6>View edit your group details</h6>
      <InputGroupDet></InputGroupDet>
 
{/* <Link to="/Job1">
      <button style={{
            width: '25%',
            height: '30px',
            alignItems:'center',
            backgroundColor:'#667EEA',
            border:'0',
            color:'white',
            cursor: 'pointer',
            position:'relative',
            left:"500px"
            
      }}
      >Edit Details</button></Link> */}
      <Foot/>

    </div>
  )
}
