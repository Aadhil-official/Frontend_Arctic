import React from 'react'
import Filterone from '../../Components/Filterone.js';
import EmployeeName from '../../Components/EmployeeName.js';
import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';


export default function Unit_list_1() {
  return (
    <div>
      <KeyboardReturnIcon sx={{position:'absolute'}}/>
      <h1>Unit List</h1>

      <Filterone option1="Serial number" option2="Model name"/>
      <br></br>

      <EmployeeName name={"Serial_No:Unit_name"}/>
       <EmployeeName name={"Serial_No:Unit_name"}/>
        <EmployeeName name={"Serial_No:Unit_name"}/> 
        <EmployeeName name={"Serial_No:Unit_name"}/> 
        <EmployeeName name={"Serial_No:Unit_name"}/> 
        <EmployeeName name={"Serial_No:Unit_name"}/>
         <EmployeeName name={"Serial_No:Unit_name"}/>
<Link to={"/Unit_reg1"}>
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
      >Add new unit</button></Link>
      <Foot/>
    </div>
  )
}
