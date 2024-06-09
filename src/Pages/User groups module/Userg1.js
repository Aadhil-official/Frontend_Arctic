import React from 'react'
import Filterone from '../../Components/Filterone.js';
import EmployeeName from '../../Components/EmployeeName.js';
import Foot from '../../Components/Foot.js';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
export default function Userg1() {
  return (
    <div>
      <KeyboardReturnIcon sx={{position:'absolute'}}/>
      <h1>User Group Module</h1>
      <Filterone option1="User_Group_ID" option2="User_Group_Name"/>
      <br></br>
      <EmployeeName name={"user group id"}/>
      <EmployeeName name={"user group id"}/>
      <EmployeeName name={"user group id"}/>
      <EmployeeName name={"user group id"}/>
      <EmployeeName name={"user group id"}/>
      <EmployeeName name={"user group id"}/>
      <EmployeeName name={"user group id"}/>
    <Link to={"/Userg2"}>
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
      >Add new unit</button> </Link>
      <Foot/>
    </div>
  )
}
