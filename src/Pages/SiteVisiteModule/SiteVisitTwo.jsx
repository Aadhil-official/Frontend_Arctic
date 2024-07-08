import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Paper, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Time from "../../Components/SiteVisitComponents/Time";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FooterIn, NormalHeaderBar } from "../../Components";

const SiteVisitTwo = () => {
  const [email, setEmail] = useState([]);
  const [scheduleDate, setScheduleDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !scheduleDate || !selectedTime) {
      alert("Please fill in all the fields.");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Retrieve data from localStorage
    const vehicleNumber = localStorage.getItem('vehicleNumber');
    const location = localStorage.getItem('location');
    const jobType = localStorage.getItem('jobType');

    if (!vehicleNumber || !location || !jobType) {
      alert("Please fill out the first page before proceeding.");
      return;
    }

    const newSiteVisit = {
      vehicleNumber,
      location,
      jobType,
      email,
      scheduleDate: scheduleDate.format("YYYY-MM-DD"),
      selectedTime: selectedTime.format("HH:mm"),
    };

    console.log("newSiteVisit:", newSiteVisit);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/siteVisit/addSiteVisit", newSiteVisit);
      console.log("New Site Visit created:", response.data);
      alert("Site Visit scheduled successfully!");

      // Clear localStorage after successful submission
      localStorage.removeItem('vehicleNumber');
      localStorage.removeItem('location');
      localStorage.removeItem('jobType');

      // Reset form fields
      setEmail("");
      setScheduleDate(null);
      setSelectedTime(null);

      // Navigate to success page or another route
      navigate("/success-page"); // Replace with actual route
    } catch (error) {
      console.error("Error scheduling Site Visit:", error);
      alert("Failed to schedule Site Visit. Please try again later.");
    }
  };

  return (
    <>
      <NormalHeaderBar />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} style={{ textAlign: "left", margin: "1rem" }}>
              <Link to={"/SiteVisitOne"}>
                <IconButton>
                  <ArrowBackIcon style={{ fontSize: "40px", opacity: "0.6" }} />
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                style={{
                  color: "rgb(26, 99, 209)",
                  fontFamily: "Franklin Gothic Medium",
                  textAlign: "center",
                  fontSize: "50px",
                  marginTop: "1rem",
                }}
              >
                Scheduling Site Visit
              </Typography>
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  marginBottom: "2rem",
                }}
              >
                Schedule Your Site Visit Here!
              </Typography>
            </Grid>
            <Grid container justifyContent="center">
              <Paper elevation={3} style={{ padding: "2rem", marginBottom: "2rem", width: "100%", maxWidth: "600px" }}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      label="Enter your email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <DatePicker
                      label="Select Date"
                      value={scheduleDate}
                      onChange={(newValue) => setScheduleDate(newValue)}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Time selectedTime={selectedTime} onTimeChange={setSelectedTime} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid container justifyContent="center">
              <Button
                variant="contained"
                type="submit"
                style={{ width: "20rem" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </LocalizationProvider>
      <FooterIn />
    </>
  );
};

export default SiteVisitTwo;
