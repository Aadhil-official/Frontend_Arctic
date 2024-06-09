
import React from 'react'
import Filterone from '../../Components/Filterone.js';
import EmployeeName from '../../Components/EmployeeName.js';
import Foot from '../../Components/Foot.js';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import { Link } from 'react-router-dom';

export default function Employee1() {
  return (
    <div>
     <KeyboardReturnIcon sx={{position:'absolute'}}/>
      <h1>Employee List</h1>
      <Filterone option1="User Name" option2="Designation"  />
      <br></br>
      <EmployeeName name="Employee name"/>
      <EmployeeName name="Employee name"/>
      <EmployeeName name="Employee name"/>
      <EmployeeName name="Employee name"/>
      <EmployeeName name="Employee name"/>
      <EmployeeName name="Employee name"/>

<Link to={"/Employee_Reg1"}>
      <button style={{
            
            height: '30px',
            alignItems:'center',
            backgroundColor:'#667EEA',
            border:'0',
            color:'white',
            cursor: 'pointer',
            position:'relative',
            left:"35%",
            position: 'relative',
            marginBottom: '10px',
            marginLeft: '10px',
            marginRight: '10px',
            width: '30%'
            
      }}
      >Add New Employee</button> </Link>
<Foot/>
      
    </div>
  )
}
