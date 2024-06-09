import React from 'react'
import Heading_One from '../../Components/Heading_One'
import SwitchBt from '../../Components/SwitchBt'
import Foot from '../../Components/Foot'
import EmployeeName from '../../Components/EmployeeName'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
export default function Item_List() {
  return (
    <div>
      <KeyboardReturnIcon sx={{position:'absolute'}}/> 
      <Heading_One item ="Item List"/>
      <SwitchBt/>
      <EmployeeName name="Item_No:  Item_Name:"/>
      <EmployeeName name="Item_No:  Item_Name:"/>
      <EmployeeName name="Item_No:  Item_Name:"/>
      <EmployeeName name="Item_No:  Item_Name:"/>
      <EmployeeName name="Item_No:  Item_Name:"/>
      <EmployeeName name="Item_No:  Item_Name:"/>
      <EmployeeName name="Item_No:  Item_Name:"/>
     
      <br/>
     
      
      <Foot/>
      
      
    </div>
  )
}
