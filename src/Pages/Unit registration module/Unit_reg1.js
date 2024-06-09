import SwitchBase from '@mui/material/internal/SwitchBase'
import React from 'react'
import SwitchBt from '../../Components/SwitchBt'

import Reg_Can from '../../Components/Reg_Can'
import Foot from '../../Components/Foot'
import Unitreg from '../../Components/Unitreg'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom'


export default function Unit_reg1() {
  return (
    <div>
      <Link to={"/Unit_list1"}>
       <KeyboardReturnIcon sx={{position:'absolute'}}/></Link>
      <h1>Unit Registration</h1>
      <h6>Register a new unit</h6>
      <SwitchBt/>
      <br>
      </br>
      <br>
      </br>
      <Unitreg></Unitreg>
      
      {/* <Link to={"/Unitprofile"}>
       <button className="save" >Register</button></Link>
       
      <Link to={"/Unit_list_1"}>
      <button className="cancel">Cancel</button></Link> */}
    
  

      <Foot/>

    </div>
  )
}
