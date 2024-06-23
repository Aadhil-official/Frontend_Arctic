import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { Link } from "react-router-dom";
import Time from "../../Components/SiteVisitComponents/Time";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"; // Import LocalizationProvider

const SiteVisitTwo = () => {
  const [email, setEmail] = useState("");
  const [scheduleDate, setScheduleDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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

    const newSiteVisit = {
      email,
      scheduleDate: scheduleDate.format("YYYY-MM-DD"),
      selectedTime,
    };

    console.log("newSiteVisit:", newSiteVisit);

    try {
      const response = await axios.post("http://localhost:8080/api/v1/siteVisit/addSiteVisit", newSiteVisit);
      console.log("New Site Visit created:", response.data);
      alert("Site Visit scheduled successfully!");

      setEmail("");
      setScheduleDate(null);
      setSelectedTime(null);
    } catch (error) {
      console.error("Error scheduling Site Visit:", error);
      alert("Failed to schedule Site Visit. Please try again later.");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} style={{ textAlign: "center", marginTop: "1rem" }}>
            <Link to={"/"}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png"
                style={{ width: "40px", height: "40px", opacity: "0.6", margin: "1rem" }}
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
                fontSize: "50px",
                marginTop: '1rem'
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
            <Grid item xs={12} sm={6} md={4} style={{ textAlign: "center", marginBottom: "2rem" }}>
              <DatePicker
                label="Select Date"
                value={scheduleDate}
                onChange={(newValue) => setScheduleDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{ textAlign: "center", marginBottom: "2rem" }}>
              <TextField
                label="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={12} style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Time selectedTime={selectedTime} onTimeChange={setSelectedTime} />
            </Grid>
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
  );
};

export default SiteVisitTwo;
