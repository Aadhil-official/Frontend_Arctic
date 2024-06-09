import React from 'react'
//import EmployeeName from '../../Components/Body_content_Button.js';
import Foot from '../../Components/Foot.js';
import Jobdetails from '../../Components/Jobdetails.js';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';

export default function Job1() {
  return (
    <div>
      <Link to={"/Userg2"}>
      <KeyboardReturnIcon sx={{position:'absolute'}}/> </Link>
      <h1>Job Details</h1>

     <Jobdetails></Jobdetails>

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
>Print</button>
<Foot/>
    </div>
  )
}
