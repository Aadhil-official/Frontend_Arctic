import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from '../../Components/Footer';


const ServiceAgreementOne = () => {
  // State variables to store form data
  const [customerName, setCustomerName] = useState("");
  const [location, setLocation] = useState("");
  const [item, setItem] = useState("");
  const [agreementType, setAgreementType] = useState("");
  const [periodOfTheAgreement, setPeriodOfTheAgreement] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [telephone, setTelephone] = useState("");
  const [showForm, setShowForm] = useState(true);

  // Array of agreement types
  const agreementTypes = [
    { value: "ServicesOnly", label: "Services Only" },
    { value: "Maintenance", label: "Maintenance" },
    { value: "FreeServices", label: "Free Services under the warenty period" },
  ];

  // Array of periods
  const periodOfTheAgreements = [
    { value: "One year", label: "One Year" },
    { value: "Two years", label: "Two Years" },
    { value: "Three years", label: "Three Years" },
  ];

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (!customerName || !location || !item || !agreementType || !periodOfTheAgreement || !startDate || !endDate || !telephone) {
      alert("Please fill in all the fields.");
      return;
    }

    // Validate telephone number
    const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!phoneRegex.test(telephone)) {
      alert("Please enter a valid telephone number.");
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
      telephone,
    };

    console.log("newServiceAgreement:", newServiceAgreement);

    try {
      // Post the new service agreement to the API
      const response = await axios.post("http://localhost:8080/api/v1/agreementService/addServiceAgreement", newServiceAgreement);
      console.log("New Service Agreement created:", response.data);
      alert("Data saved successfully!");

      // Reset form fields to empty strings
      setCustomerName("");
      setLocation("");
      setItem("");
      setAgreementType("");
      setPeriodOfTheAgreement("");
      setStartDate("");
      setEndDate("");
      setTelephone("");
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
    setTelephone("");
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
      <Link to={"/ServiceAgreementSix"}>
        <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '1rem' }} alt='Back' />
      </Link>
      {showForm && (
        <>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              style={{
                color: "rgb(26, 99, 209)",
                fontFamily: "Franklin Gothic Medium",
                textAlign: "center",
                fontSize: "70px",
                marginTop: '-2rem'
              }}
            >
              Service Agreement
            </Typography>
          </Grid>
          <div
            className="box"
            style={{
              width: "80%",
              alignItems: "center",
              paddingLeft: "7rem",
              paddingRight: "7rem",
            }}
          >
            <Grid container justifyContent="center" style={{ paddingBottom: '2rem' }}>
              <Grid item>
                <h3>Create A New Service Agreement</h3>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
              <TextField
                label="Customer Name"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
              <TextField
                label="Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
              <TextField
                label="Item"
                value={item}
                onChange={(event) => setItem(event.target.value)}
                fullWidth
              />
            </Grid>
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

             <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
              <TextField
                select
                label="Period of the Agreement"
                value={periodOfTheAgreement}
                onChange={(event) => setPeriodOfTheAgreement(event.target.value)}
                SelectProps={{ native: true }}
                fullWidth
              ><option value=""></option>
               {periodOfTheAgreements.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </TextField>
            </Grid>

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
            <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
              <TextField
                label="Telephone"
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
                fullWidth
                placeholder="e.g., +1 (555) 555-5555"
              />
            </Grid>
          </div>

          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              style={{ width: "20rem", marginRight: "1rem" }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              onClick={handleCancel}
              style={{ width: "20rem" }}
            >
              Cancel
            </Button>
          </Grid>
        </>
      )}
      <Footer/>
    </Grid>
  );
};

export default ServiceAgreementOne;
