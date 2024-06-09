import React from 'react'
import Heading_One from '../../Components/Heading_One'
import SwitchBt from '../../Components/SwitchBt'
import Heading_six from '../../Components/Heading_six'
import Item_Input_container from '../../Components/Item_Input_containers'
import Foot from '../../Components/Foot'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function Item_Details_View() {
  return (
    <div>
       <KeyboardReturnIcon sx={{position:'absolute'}}/> 
      <Heading_One item ="Item Registration"/>
      <Heading_six item ="View item Details"></Heading_six>
      <SwitchBt/>
      <Item_Input_container/>
      <br/>
      
      <Foot/>
      
      
    </div>
  )
}
