import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const SiteVisitOne = () => {
  // State variables to store form data
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [showForm, setShowForm] = useState(true);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (!vehicleNumber || !location || !jobType) {
      alert("Please fill in all the fields.");
      return;
    }

    // Create a new site visit object
    const newSiteVisit = {
      vehicleNumber,
      location,
      jobType,
    };

    console.log("newSiteVisit:", newSiteVisit);

    try {
      // Post the new site visit to the API
      const response = await axios.post("http://localhost:8080/api/v1/siteVisit/addSiteVisit", newSiteVisit);
      console.log("New Site Visit created:", response.data);
      alert("Data saved successfully!");

      // Reset form fields to empty strings
      setVehicleNumber("");
      setLocation("");
      setJobType("");
      setShowForm(true);
    } catch (error) {
      console.error("Error creating Site Visit:", error);
    }
  };

  // Handle cancel button click
  const handleCancel = () => {
    setVehicleNumber("");
    setLocation("");
    setJobType("");
    setShowForm(true);
  };

  return (
    <Grid container spacing={1}>
      <Link to={"/"}>
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
                marginTop: '5rem'
              }}
            >
              Site Visit
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
                <h3> Create A New Site Visit Here</h3>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: "1rem" }}>
              <TextField
                label="Vehicle Number"
                value={vehicleNumber}
                onChange={(event) => setVehicleNumber(event.target.value)}
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
                label="Job Type"
                value={jobType}
                onChange={(event) => setJobType(event.target.value)}
                fullWidth
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
    </Grid>
  );
};

export default SiteVisitOne;
