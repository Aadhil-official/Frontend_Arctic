import React from 'react'
import InputContainers from '../../Components/InputContainers'
import Foot from '../../Components/Foot'
import './Employee_Reg1.css'
import Reg_Can from '../../Components/Reg_Can'
import SwitchBt from '../../Components/SwitchBt'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom'

export default function Employee_Reg1() {
  return (
    <div>
      <Link to={"/"}>
      <KeyboardReturnIcon sx={{position:'absolute'}}/></Link>
        <h1>Employee Registration</h1>
        <SwitchBt/>
        <h6>Create a new account</h6>
       
      <InputContainers/>
      {/* <Reg_Can/> */}
      <Foot/>
      
    </div>
  )
}
