import React from 'react'
import Heading_One from '../../Components/Heading_One'
import SwitchBt from '../../Components/SwitchBt'
import Heading_six from '../../Components/Heading_six'
import Item_Input_container from '../../Components/Item_Input_containers'
import Reg_Can from '../../Components/Reg_Can'
import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom'
import Item_Button_SaveCancel from '../../Components/Item_Button_SaveCancel'

export default function Item_Reg() {
  return (
    <div>
      <Link to={"/Itemlist1"}>
       <KeyboardReturnIcon sx={{position:'absolute'}}/> </Link>
      <Heading_One item ="Item Registration"/>
      <Heading_six item ="Register a new item"></Heading_six>
      <SwitchBt/>
      <Item_Input_container/>
      {/* <Item_Button_SaveCancel/> */}
      {/* <Link to={"/Item_Details_VE"}>
       <button className="save" >Register</button></Link>
       
      <Link to={"/Itemlist1"}>
      <button className="cancel">Cancel</button></Link> */}
    
      <Foot/>
      
      
    </div>
  )
}
