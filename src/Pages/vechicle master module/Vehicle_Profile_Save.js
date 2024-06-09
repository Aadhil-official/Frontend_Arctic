import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Heading_One from '../../Components/Heading_One';
import Heading_six from '../../Components/Heading_six';
import { z } from 'zod';
import { success, error } from '../../util/Toastify';
import Foot from '../../Components/Foot';

export default function Vehicle_Profile_Save() {
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [passengerCount, setPassengerCount] = useState("");

  const validateForm = z.object({
    vehicleType: z.string().min(1, "Enter vehicle type"),
    vehicleNumber: z.string().min(1, "Enter vehicle number"),
    passengerCount: z.string().min(1, "Enter number of passengers"),
  });

  const handleSubmit = () => {
    const data = { vehicleType, vehicleNumber, passengerCount };
    const result = validateForm.safeParse(data);
    if (result.success) {
      success("Form validation success");
      // Perform submit action here
    } else {
      const formattedError = result.error.format();
      if (formattedError.vehicleType?._errors) {
        error(String(formattedError.vehicleType?._errors));
      } else if (formattedError.vehicleNumber?._errors) {
        error(String(formattedError.vehicleNumber?._errors));
      } else if (formattedError.passengerCount?._errors) {
        error(String(formattedError.passengerCount?._errors));
      } else {
        error("An unknown error occurred in the validation process");
      }
    }
  };

  return (
    <div>
      <Link to={"/Vehicle_Profile"}>
        <KeyboardReturnIcon sx={{position:'absolute'}}/>
      </Link>
      <Heading_One item="Vehicle Profile"/>
      <Heading_six item="View And Edit Vehicle Details"/>
      <div>
        <div className="inputcontainer">
          <input type="text" placeholder="Vehicle type" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} />
        </div>
        <div className="inputcontainer">
          <input type="text" placeholder="Vehicle Number" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} />
        </div>
        <div className="inputcontainer">
          <input type="text" placeholder="No. of Passengers" value={passengerCount} onChange={(e) => setPassengerCount(e.target.value)} />
        </div>
        <button className="save" style={{
          width: '25%',
          height: '30px',
          alignItems:'center',
          backgroundColor:'#667EEA',
          border:'0',
          color:'white',
          cursor: 'pointer',
          position:'relative',
          left:"500px"
        }} onClick={handleSubmit}>Save</button>
      </div>
      <br/><br/>
      <Foot/>
    </div>
  );
}
