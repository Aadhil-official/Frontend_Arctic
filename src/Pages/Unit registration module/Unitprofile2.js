import React from 'react'
import SwitchBt from '../../Components/SwitchBt'
import Foot from '../../Components/Foot'
import Unitprofile0 from '../../Components/Unitprofile0'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';

export default function Unitprofile2() {
  return (
    <div>
      <Link to={"/Unitprofile"}>
       <KeyboardReturnIcon sx={{position:'absolute'}}/></Link>
       <h1>Unit Profile</h1>
      <h6>View and edit unit details</h6>
      <SwitchBt/>
      <Unitprofile0/>

<Link to={"/Unit_list_1"}>
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
      >Save</button></Link>
<Foot/>
    </div>
  )
}
