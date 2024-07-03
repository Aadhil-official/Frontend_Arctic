import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Grid, Typography, TextField, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { FooterIn, NormalHeaderBar } from "../../Components";

const GatePass = () => {
  const { id } = useParams();
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [employeeNames, setEmployeeNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.numberOfEmployees) {
      setNumberOfEmployees(location.state.numberOfEmployees);
    }
    setEmployeeNames(Array(parseInt(numberOfEmployees)).fill(""));
  }, [numberOfEmployees, location.state]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/siteVisit/getSiteVisitTwo?id=${id}`)
      .then(response => {
        if (response.data) {
          setVehicleNumber(response.data.vehicleNumber || "");
          setCustomerName(response.data.customerName || "");
        } else {
          console.error("Response data is null");
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
    vehicleNumber,
    customerName,
    gpMembers: employeeNames,
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
    <NormalHeaderBar/>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} style={{ textAlign: "left", margin: "1rem" }}>
          <Link to="/SiteVisitDashboard">
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" 
              style={{ width: '40px', height: '40px', opacity: '0.6', margin: '15px', left: '10px', top: '10px' }} 
              alt="Back" 
            />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{
              color: "rgb(26, 99, 209)",
              fontFamily: "Franklin Gothic Medium",
              textAlign: "center",
              fontSize: "60px",
              marginTop: "-5rem",
            }}
          >
            Gate Pass
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Paper
            elevation={3}
            style={{
              padding: "2rem",
              marginBottom: "2rem",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  style={{
                    textAlign: "center",
                    marginBottom: "2rem",
                    marginTop: "1rem",
                    fontSize: '18px',
                    color: '#547DD1',
                    fontFamily: "Franklin Gothic Medium",
                  }}
                >
                  Vehicle Number: {vehicleNumber}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  style={{
                    textAlign: "center",
                    marginBottom: "2rem",
                    fontSize: '18px',
                    color: '#547DD1',
                    fontFamily: "Franklin Gothic Medium",
                  }}
                >
                  Customer Name: {customerName}
                </Typography>
              </Grid>
              {employeeNames.map((name, index) => (
                <Grid item xs={12} key={index}>
                  <TextField
                    label={`Employee ${index + 1} Name`}
                    type="text"
                    value={name}
                    onChange={(e) => handleEmployeeNameChange(index, e.target.value)}
                    fullWidth
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            onClick={handleSave}
            style={{ width: "20rem", marginRight: "1rem", marginBottom: "1rem" }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
      <FooterIn/>
    </>
  );
};

export default GatePass;
