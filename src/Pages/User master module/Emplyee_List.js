import React from "react";
import SwitchBt from "../../Components/SwitchBt";
import Filterone from "../../Components/Filterone.js";
import EmployeeName from "../../Components/EmployeeName.js";
import Foot from "../../Components/Foot";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export default function Emplyee_List() {
  return (
    <div>
      <KeyboardReturnIcon sx={{ position: "absolute" }} />
      <h1>Employee List</h1>
      <Filterone option1="user name" option2="designation" />
      <br></br>
      <EmployeeName name={"employee name"} />
      <EmployeeName name={"employee name"} />
      <EmployeeName name={"employee name"} />
      <EmployeeName name={"employee name"} />
      <EmployeeName name={"employee name"} />
      <EmployeeName name={"employee name"} />

      <Foot />
    </div>
  );
}
