import React from 'react';
import Filterone from '../../Components/Filterone';
import Heading_One from '../../Components/Heading_One';
import EmployeeName from '../../Components/EmployeeName';
import Single_Button from '../../Components/Single_Button';
import Foot from '../../Components/Foot';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


export default function Vehicle_List_Em() {
  return (
    <div>
       <KeyboardReturnIcon sx={{ position: "absolute" }} />
      <Heading_One item="Vehicle List"/>
      <Filterone option1= "Vehicle number" option2="Vehicle Name" option3="No.of Passengers"/>
      <br/>
      <br/>
      <EmployeeName name="Vehicle_no"/>
      <EmployeeName name="Vehicle_no"/>
      <EmployeeName name="Vehicle_no"/>
      <EmployeeName name="Vehicle_no"/>
      <EmployeeName name="Vehicle_no"/>
      <EmployeeName name="Vehicle_no"/>
      <EmployeeName name="Vehicle_no"/>
      <EmployeeName name="Vehicle_no"/>
      <br/>
      <br/>
      
      <Link to="/Vehicle_Registration">
        <Single_Button value="Add New Item"/>
      </Link>
      <Foot/>
    </div>
  );
}
