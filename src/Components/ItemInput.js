import React, { useState } from 'react';
import { error, success } from '../util/Toastify';
import { z } from 'zod';

export default function Item_Input_container({buttonName}) {
  const [name, setName] = useState("");
  const [indoorModel, setIndoorModel] = useState("");
  const [outdoorModel, setOutdoorModel] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [capacity, setCapacity] = useState("");

  const validateForm = z.object({
    name: z.string().min(1, "Enter name"),
    indoorModel: z.string().min(1, "Enter indoor model"),
    outdoorModel: z.string().min(1, "Enter outdoor model"),
    manufacture: z.string().min(1, "Enter manufacture"),
    capacity: z.string().min(1, "Enter capacity"),
  });

  const handleSubmit = () => {
    const data = { name, indoorModel, outdoorModel, manufacture, capacity };
    const result = validateForm.safeParse(data);
    if (result.success) {
      success("Form validation success");
      // Perform submit action here
    } else {
      const formattedError = result.error.format();
      if (formattedError.name?._errors) {
        error(String(formattedError.name._errors));
      } else if (formattedError.indoorModel?._errors) {
        error(String(formattedError.indoorModel._errors));
      } else if (formattedError.outdoorModel?._errors) {
        error(String(formattedError.outdoorModel._errors));
      } else if (formattedError.manufacture?._errors) {
        error(String(formattedError.manufacture._errors));
      } else if (formattedError.capacity?._errors) {
        error(String(formattedError.capacity._errors));
      } else {
        error("An unknown error occurred in the validation process");
      }
    }
  };

  return (
    <div>
      <div className="inputcontainer">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="inputcontainer">
        <input type="text" placeholder="Indoor Model" value={indoorModel} onChange={(e) => setIndoorModel(e.target.value)} />
      </div>
      <div className="inputcontainer">
        <input type="text" placeholder="Outdoor Model" value={outdoorModel} onChange={(e) => setOutdoorModel(e.target.value)} />
      </div>
      <div className="inputcontainer">
        <input type="text" placeholder="Manufacture" value={manufacture} onChange={(e) => setManufacture(e.target.value)} />
      </div>
      <div className="inputcontainer">
        <input type="text" placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
      </div>
       <button className="save"  style={{
        width: '25%',
        height: '30px',
        alignItems:'center',
        backgroundColor:'#667EEA',
        border:'0',
        color:'white',
        cursor: 'pointer',
        position:'relative',
        left:"500px"

      }} onClick={handleSubmit} >{buttonName}</button>
       
     
    </div>
  );
}
