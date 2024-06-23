import React, { useEffect, useState } from "react";
import { Grid, Typography, TextField, Button, Paper } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from '../../Components/Footer';

const ServiceAgreementOne = () => {
  // State variables to store form data
  const [todayDate, setTodayDate] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [location, setLocation] = useState("");
  const [item, setItem] = useState("");
  const [agreementType, setAgreementType] = useState("");
  const [periodOfTheAgreement, setPeriodOfTheAgreement] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const getCurrentDate = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
      const day = currentDate.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    setTodayDate(getCurrentDate());
  }, []);

  // Array of agreement types for the dropdown menu
  const agreementTypes = [
    { value: "ServicesOnly", label: "Services Only" },
    { value: "Maintenance", label: "Maintenance" },
    { value: "FreeServices", label: "Free Services under the warranty period" },
  ];

  // Array of periods for the dropdown menu
  const periodOfTheAgreements = [
    { value: "One year", label: "One Year" },
    { value: "Two years", label: "Two Years" },
    { value: "Three years", label: "Three Years" },
  ];

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (!customerName || !location || !item || !agreementType || !periodOfTheAgreement || !startDate || !endDate) {
      alert("Please fill in all the fields.");
      return;
    }

    // Create a new service agreement object
    const newServiceAgreement = {
      customerName,
      location,
      item,
      agreementType,
      periodOfTheAgreement,
      startDate,
      endDate,
    };

    console.log("newServiceAgreement:", newServiceAgreement);

    try {
      if(todayDate <= startDate && startDate <= endDate){
        // Post the new service agreement to the API
        const response = await axios.post("http://localhost:8080/api/v1/agreementService/addNewServiceAgreement", newServiceAgreement);
        console.log("New Service Agreement created:", response.data);
        alert("Data saved successfully!");
      } else {
        alert("Start date should be greater than or equal to today's date");
      }

      // Reset form fields to empty strings
      setCustomerName("");
      setLocation("");
      setItem("");
      setAgreementType("");
      setPeriodOfTheAgreement("");
      setStartDate("");
      setEndDate("");
      setShowForm(true);
    } catch (error) {
      console.error("Error creating Service Agreement:", error);
    }
  };

  // Handle cancel button click
  const handleCancel = () => {
    setCustomerName("");
    setLocation("");
    setItem("");
    setAgreementType("");
    setPeriodOfTheAgreement("");
    setStartDate("");
    setEndDate("");
    setShowForm(true);
  };

  // Custom styles for right-aligned placeholders
  const inputProps = {
    style: {
      textAlign: "right"
    }
  };

  return (
    <Grid container spacing={1}>
      {/* Back button */}
      <Link to={"/ServiceAgreementSix"}>
        <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '1rem' }} alt='Back' />
      </Link>
      {showForm && (
        <>
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
              {/* Main heading */}
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  style={{
                    color: "rgb(26, 99, 209)",
                    fontFamily: "Franklin Gothic ",
                    textAlign: "center",
                    fontSize: "60px",
                    marginBottom: '1rem'
                  }}
                >
                  Service Agreement
                </Typography>
              </Grid>
              {/* Form title */}
              <Grid container justifyContent="center">
                <Grid item>
                  <h3 style={{ fontFamily:'Franklin Gothic', fontSize: '18px', color:'#547DD1' }}>Create A New Service Agreement</h3>
                </Grid>
              </Grid>
              {/* Customer Name field */}
              <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
                <TextField
                  label="Customer Name"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  fullWidth
                />
              </Grid>
              {/* Location field */}
              <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
                <TextField
                  label="Location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  fullWidth
                />
              </Grid>
              {/* Item field */}
              <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
                <TextField
                  label="Item"
                  value={item}
                  onChange={(event) => setItem(event.target.value)}
                  fullWidth
                />
              </Grid>
              {/* Agreement Type dropdown */}
              <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
                <TextField
                  select
                  label="Agreement Type"
                  value={agreementType}
                  onChange={(event) => setAgreementType(event.target.value)}
                  SelectProps={{ native: true }}
                  fullWidth
                >
                  <option value=""></option>
                  {agreementTypes.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </TextField>
              </Grid>
              {/* Period of the Agreement dropdown */}
              <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
                <TextField
                  select
                  label="Period of the Agreement"
                  value={periodOfTheAgreement}
                  onChange={(event) => setPeriodOfTheAgreement(event.target.value)}
                  SelectProps={{ native: true }}
                  fullWidth
                >
                  <option value=""></option>
                  {periodOfTheAgreements.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </TextField>
              </Grid>
              {/* Start Date field */}
              <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
                <TextField
                  type="date"
                  label="Start Date"
                  value={startDate}
                  onChange={(event) => setStartDate(event.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  InputProps={inputProps}
                  placeholder="MM/DD/YYYY"
                />
              </Grid>
              {/* End Date field */}
              <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
                <TextField
                  type="date"
                  label="End Date"
                  value={endDate}
                  onChange={(event) => setEndDate(event.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  InputProps={inputProps}
                  placeholder="MM/DD/YYYY"
                />
              </Grid>
              {/* Buttons */}
              <Grid item xs={12} container justifyContent="space-between">
                <Grid item>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                    style={{ width: "17rem" }}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCancel}
                    style={{ width: "17rem" }}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </>
      )}
      {/* Footer */}
      <Footer />
    </Grid>
  );
};

export default ServiceAgreementOne;
