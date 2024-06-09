import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareNfi, faUser, faMoneyCheckDollar, faHashtag,faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { z } from 'zod';
import { error, success } from '../util/Toastify';

export default function Unitreg() {
  const [serialNumber, setSerialNumber] = useState("");
  const [modelName, setModelName] = useState("");
  const [owner, setOwner] = useState("");
  const [warrantyPeriod, setWarrantyPeriod] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const validateForm = z.object({
    serialNumber: z.string().min(1, "Enter serial number"),
    modelName: z.string().min(1, "Enter model name"),
    owner: z.string().min(1, "Enter owner"),
    warrantyPeriod: z.string().min(1, "Enter warranty period"),
    unitPrice: z.string().min(1, "Enter unit price"),
  });

  const handleSubmit = () => {
    const data = { serialNumber, modelName, owner, warrantyPeriod, unitPrice };
    const result = validateForm.safeParse(data);
    if (result.success) {
      // Perform form submission logic here
      success("Form submitted!");
    } else {
      const formattedError = result.error.format();
      if (formattedError.serialNumber?._errors) {
        error(String(formattedError.serialNumber?._errors));
      } else if (formattedError.modelName?._errors) {
        error(String(formattedError.modelName?._errors));
      } else if (formattedError.owner?._errors) {
        error(String(formattedError.owner?._errors));
      } else if (formattedError.warrantyPeriod?._errors) {
        error(String(formattedError.warrantyPeriod?._errors));
      } else if (formattedError.unitPrice?._errors) {
        error(String(formattedError.unitPrice?._errors));
      } else {
        error("An unknown error occurred in the validation process");
      }
    }
  };
  

  return (
    <div>
      <div className="inputcontainer">
      <FontAwesomeIcon icon={faHashtag} className="icon" />
        <input type="text" placeholder="Serial number" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
      </div>
      
      <div className="inputcontainer">
      <FontAwesomeIcon icon={faSquareNfi} className="icon"/>
        <input type="text" placeholder="Model name" value={modelName} onChange={(e) => setModelName(e.target.value)} />
      </div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faUser} className="icon" />
        <input type="text" placeholder="Owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
      </div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faHourglassHalf} className="icon"/>
        <input type="text" placeholder="Warranty period" value={warrantyPeriod} onChange={(e) => setWarrantyPeriod(e.target.value)} />
      </div>

      <div className="inputcontainer">
      <FontAwesomeIcon icon={faMoneyCheckDollar}  className="icon" />
        <input type="text" placeholder="Unit price" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
      </div>

      <button className="save" onClick={handleSubmit}>Register</button>
      <button className="cancel">Cancel</button>
    </div>
  );
}
