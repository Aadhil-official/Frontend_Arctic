import React from 'react'
import Heading_One from '../../Components/Heading_One'
import SwitchBt from '../../Components/SwitchBt'
import Heading_six from '../../Components/Heading_six'
import Item_Input_container from '../../Components/ItemInput'
import Foot from '../../Components/Foot'
import Single_Button from '../../Components/Single_Button'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom'

export default function Item_Details_VE() {
  return (
    <div>
      <Link to={"/Item_Reg"}>
       <KeyboardReturnIcon sx={{position:'absolute'}}/> </Link>
      <Heading_One item ="Item Details"/>
      <Heading_six item ="View and edit item Details"></Heading_six>
      <SwitchBt/>
     <Item_Input_container buttonName="Save"/>
      <Foot/>
      
      
    </div>
  )
}
