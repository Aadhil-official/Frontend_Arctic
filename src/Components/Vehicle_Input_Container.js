import React, { useState } from 'react';
import { error, success } from '../util/Toastify';
import { z } from 'zod';

export default function Vehicle_Input_container() {
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [passengerCount, setPassengerCount] = useState("");

  const validateForm = z.object({
    vehicleType: z.string().min(1, "Enter vehicle type"),
    vehicleNumber: z.number().min(1, "Enter vehicle number"),
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
        error(String(formattedError.vehicleType._errors));
      } else if (formattedError.vehicleNumber?._errors) {
        error(String(formattedError.vehicleNumber._errors));
      } else if (formattedError.passengerCount?._errors) {
        error(String(formattedError.passengerCount._errors));
      } else {
        error("An unknown error occurred in the validation process");
      }
    }
  };
  

  return (
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
      <button className="save" onClick={handleSubmit}>Register</button>
      <button className="cancel">Cancel</button>
    </div>
  );
}
