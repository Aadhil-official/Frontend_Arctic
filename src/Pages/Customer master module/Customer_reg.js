import React from 'react'
import Heading_One from '../../Components/Heading_One'
import Heading_six from '../../Components/Heading_six'
import SwitchBt from '../../Components/SwitchBt'
import Customer_Input_container from '../../Components/Customer_Input_Container'
import Reg_Can from '../../Components/Reg_Can'
import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom'
export default function Customer_reg() {

  return (
    <div>
      <Link to={"/Customer_List_one"}>
      <KeyboardReturnIcon sx={{position:'absolute'}}/></Link>
    <Heading_One item="Customer Registration"/>
    <Heading_six item="Create a new account"/>
    <SwitchBt/>
    <br>
  </br>
  <br>
  </br>
    <Customer_Input_container/>
    {/* <Link to={"/Customer_Profile_Ad"}>
       <button className="save" >Register</button>
    </Link>
       
      <Link to={"/Customer_List_one"}>
      <button className="cancel">Cancel</button>
      </Link> */}

    <Foot/>

    </div>
  )
}
