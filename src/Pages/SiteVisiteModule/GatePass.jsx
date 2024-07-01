import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const GatePass = () => {

  const { id } = useParams();
   console.log("id,number",id);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [employeeNames, setEmployeeNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberOfEmployees ,setNumberOfEmployees] =useState(0);
  const navigate = useNavigate();
  const location = useLocation();



  useEffect(() => {
    if(location.state && location.state.numberOfEmployees){
      setNumberOfEmployees(location.state.numberOfEmployees);
    }
    setEmployeeNames(Array(parseInt(numberOfEmployees)).fill(""));
  }, [numberOfEmployees,location.state]);
     console.log("abc",numberOfEmployees);


  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/siteVisit/getSiteVisitTwo?id=${id}`)
      .then(response => {
        if (response.data) {
          setVehicleNumber(response.data.vehicleNumber || "");
          setCustomerName(response.data.customerName || "");
        } else {
          console.error("Response data is null");
          // You can also set default values here
          setVehicleNumber("");
          setCustomerName("");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching gate pass:", error);
        setLoading(false);
      });
  }, [id]);

  const handleEmployeeNameChange = (index, value) => {
    const newEmployeeNames = [...employeeNames];
    newEmployeeNames[index] = value;
    setEmployeeNames(newEmployeeNames);
  };

  const gatePassData = {
    id: id,
    vehicleNumber:vehicleNumber,
    customerName:customerName ,
    gpMembers: employeeNames
  };

  const handleSave = async () => {
    try {
      await axios.post(`http://localhost:8080/api/v1/gatePass/addGatePass`, gatePassData);
      alert("Employee names saved successfully!");
      navigate("/SiteVisitFive");
    } catch (error) {
      console.error("Error saving employee names:", error);
      alert("Failed to save employee names. Please try again later.");
    }
  };

  
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div id="gate-pass" style={{ padding: "20px", backgroundColor: "#f7f7f7", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Gate Pass</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "20px" }}>
          {/* <p style={{ gridColumn: "span 2" }}><strong>Vehicle Number:</strong> {vehicleNumber}</p>
          <p style={{ gridColumn: "span 2" }}><strong>Customer Name:</strong> {customerName}</p> */}
          {employeeNames.map((name, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <label>
                Employee {index + 1} Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleEmployeeNameChange(index, e.target.value)}
                  style={{ marginLeft: "10px", padding: "5px", borderRadius: "4px", border: "1px solid #ccc", width: "80%" }}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        
        <button onClick={handleSave} style={{ padding: "10px 20px", backgroundColor: "#f44336", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Save</button>
      </div>
    </>
  );
};

export default GatePass;
