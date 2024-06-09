import React from 'react'
import Heading_One from '../../Components/Heading_One'
import Body_content_Button from '../../Components/EmployeeName'
import Single_Button from '../../Components/Single_Button'
import Foot from '../../Components/Foot'
import { Link } from 'react-router-dom'
import Filterone from '../../Components/Filterone.js';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function Itemlist1() {
  return (
    <div>
       <KeyboardReturnIcon sx={{position:'absolute'}}/>
       <Heading_One item ="Item List"/>
       <Filterone option1="Serial Number" option2="Model Number"/>
       <br></br>
       <Body_content_Button name="Item number: Item name:"/>
       <Body_content_Button name="Item number: Item name:"/>
       <Body_content_Button name="Item number: Item name:"/>
       <Body_content_Button name="Item number: Item name:"/>
       <Body_content_Button name="Item number: Item name:"/>
       <Body_content_Button name="Item number: Item name:"/>
       <br/>
       <Link to={"/Item_Reg"}>
       <Single_Button value="Add new item"/></Link>
       <Foot/>


      
    </div>
  )
}
