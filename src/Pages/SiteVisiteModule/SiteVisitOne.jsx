import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField, Button, Paper } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import ArrowBackIcon from "@mui/icons-material/ArrowBack";
//import Footer from "../../Components/Footer";
//import Time from "../../Components/SiteVisitComponents/Time";
// import { saveAs } from "file-saver";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Time from "../../Components/SiteVisitComponents/Time"; // Adjust the path as needed
// import GatePass from "./GatePass"; // Adjust the path as needed
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { FooterIn, NormalHeaderBar } from "../../Components";

const SiteVisitOne = () => {
  const [todayDate, setTodayDate] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [email, setEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [scheduleDate, setScheduleDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const [isScheduled, setIsScheduled] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentDate = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      const day = currentDate.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    setTodayDate(getCurrentDate());
  }, []);

  const jobTypes = [
    { value: "inspectiononly", label: "Inspection only" },
    { value: "serviceOnly", label: "Service Only" },
    { value: "installation", label: "Installation" },
    { value: "breakdowns", label: "Breakdowns" },
    { value: "upgrades", label: "Upgrades" },
    { value: "remove", label: "Remove" },
    { value: "migration", label: "Migration" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !scheduleDate || !selectedTime) {
      alert("Please fill in all the fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const newSiteVisit = {
      vehicleNumber,
      location,
      jobType,
      email,
      customerName,
      scheduleDate: scheduleDate.format("YYYY-MM-DD"),
      selectedTime: selectedTime.format("HH:mm"),
      numberOfEmployees,
    };

    console.log("newSiteVisit:", newSiteVisit);

    try {
      if (todayDate <= scheduleDate.format("YYYY-MM-DD")) {
        const response = await axios.post(
          "http://localhost:8080/api/v1/siteVisit/addSiteVisit",
          newSiteVisit
        );
        
        const visitId = response.data.visitId; // Get site visit ID from response
        setId(visitId); // Store site visit ID
        console.log("New Site Visit created:", visitId);
        alert("Site Visit scheduled successfully!");
        setIsScheduled(true);

        // Reset form fields after successful submission
        setVehicleNumber("");
        setLocation("");
        setJobType("");
        setEmail("");
        setCustomerName("");
        setScheduleDate(null);
        setSelectedTime(null);
        setNumberOfEmployees(0);

        // Navigate after setting the ID
        navigate(`/GatePass/${visitId}`,{state:{numberOfEmployees}});
      } else {
        alert("Schedule date should be greater than or equal to today's date");
      }
    } catch (error) {
      console.error("Error scheduling Site Visit:", error);
      alert("Failed to schedule Site Visit. Please try again later.");
    }
  };

  const handleCancel = () => {
    setVehicleNumber("");
    setLocation("");
    setJobType("");
    setEmail("");
    setCustomerName("");
    setScheduleDate(null);
    setSelectedTime(null);
    setNumberOfEmployees(0);
  };

  return (
    <>
    <NormalHeaderBar/>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} style={{ textAlign: "left", margin: "1rem" }}>
            <Link to={"/SiteVisitDashboard"}>
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" 
            style={{ width: '40px', 
            height: '40px', 
            opacity: '0.6', 
            margin: '15px', 
            
            left: '10px', 
            top: '10px' }} alt='Back' />
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
              Scheduling Site Visit
            </Typography>
          </Grid>
          <Typography
            variant="h6"
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "1rem",
              fontSize: '18px',
              color: '#547DD1',
              fontFamily: "Franklin Gothic Medium"
            }}
          >
            Schedule Site Visit Here
          </Typography>
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
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label="Enter Vehicle Number"
                    value={vehicleNumber}
                    onChange={(event) => setVehicleNumber(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label="Enter Customer Location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label="Enter Customer Name"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    select
                    label="Select Job Type"
                    value={jobType}
                    onChange={(event) => setJobType(event.target.value)}
                    SelectProps={{ native: true }}
                    fullWidth
                  >
                    <option value=""></option>
                    {jobTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="Enter Customer Email"
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
                  <Time
                    selectedTime={selectedTime}
                    onTimeChange={setSelectedTime}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="Selected no of Employees"
                    type="number"
                    value={numberOfEmployees}
                    onChange={(event) => setNumberOfEmployees(event.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              style={{ width: "20rem", marginRight: "1rem",marginBottom:"1rem" }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancel}
              style={{ width: "20rem" ,marginBottom:"1rem"}}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>

      {isScheduled && (
        <Grid container justifyContent="center">
          <Grid item xs={12} style={{ marginBottom: "2rem" }}>
            {/* Optional: Display confirmation message or additional content */}
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`/GatePass/${id}/${numberOfEmployees}`}
              style={{ width: "20rem" }}
            >
              Generate Gate Pass
            </Button>
          </Grid>
        </Grid>
      )}

    </LocalizationProvider><br/><br/>
    <FooterIn />
    </>
  );
};

export default SiteVisitOne;
