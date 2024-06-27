import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField, Button, Paper } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Time from "../../Components/SiteVisitComponents/Time"; // Adjust the path as needed
import GatePass from "./GatePass"; // Adjust the path as needed
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { FooterIn, NormalHeaderBar } from "../../Components";



const SiteVisitOne = () => {
  const [todayDate, setTodayDate] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [email, setEmail] = useState("");
  const [groupName, setGroupName] = useState("");
  const [scheduleDate, setScheduleDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [ setShowForm] = useState(true);//showForm,
  const [isScheduled, setIsScheduled] = useState(false); // Track if scheduled

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

  const navigate = useNavigate();
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

    // Validate email
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
      groupName,
      scheduleDate: scheduleDate.format("YYYY-MM-DD"),
      selectedTime: selectedTime.format("HH:mm"),
    };

    console.log("newSiteVisit:", newSiteVisit);

    try {
      if (todayDate <= scheduleDate.format("YYYY-MM-DD")) {
        const response = await axios.post(
          "http://localhost:8080/api/v1/siteVisit/addSiteVisit",
          newSiteVisit
        );
        console.log("New Site Visit created:", response.data);
        alert("Site Visit scheduled successfully!");
        setIsScheduled(true); // Set scheduling flag
      } else {
        alert("Schedule date should be greater than or equal to today's date");
      }

      // Reset form fields
      setVehicleNumber("");
      setLocation("");
      setJobType("");
      setEmail("");
      setGroupName("");
      setScheduleDate(null);
      setSelectedTime(null);
      setShowForm(true);

      // Navigate to success page or another route
      navigate("/SiteVisitFive"); // Replace with actual route
    } catch (error) {
      console.error("Error scheduling Site Visit:", error);
      alert("Failed to schedule Site Visit. Please try again later.");
    }
  };

  const handleCancel = () => {
    // Reset form fields
    setVehicleNumber("");
    setLocation("");
    setJobType("");
    setEmail("");
    setGroupName("");
    setScheduleDate(null);
    setSelectedTime(null);
    setShowForm(true);
  };

  const generateGatePass = async () => {
    try {
      const passContainer = document.getElementById("gatePassContainer");

      // Use html2canvas to capture the gate pass container
      const canvas = await html2canvas(passContainer, { scale: 2 });

      // Convert canvas to jpeg image
      const imageData = canvas.toDataURL("image/jpeg");

      // Initialize jsPDF
      const pdf = new jsPDF("p", "mm", "a4");

      // Add image to PDF
      pdf.addImage(imageData, "JPEG", 0, 0, 210, 297); // A4 size: 210mm x 297mm

      // Save PDF
      pdf.save("gate_pass.pdf");
    } catch (error) {
      console.error("Error generating gate pass:", error);
      alert("Failed to generate gate pass. Please try again later.");
    }
  };

  return (
    <>
    <NormalHeaderBar/>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} style={{ textAlign: "left", margin: "1rem" }}>
            <Link to={"/SiteVisitDashboard"}>
              <ArrowBackIcon style={{ fontSize: "40px", opacity: "0.6" ,paddingRight:"24rem"}} />
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
              marginTop:"1rem",
              fontSize: '18px', 
              color:'#547DD1',
              fontFamily:"Franklin Gothic Medium"


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
                    label="Enter Group Name"
                    value={groupName}
                    onChange={(event) => setGroupName(event.target.value)}
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
              </Grid>
            </Paper>
          </Grid>
          <Grid container justifyContent="center">
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
              color="secondary"
              onClick={handleCancel}
              style={{ width: "20rem" }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>

      {isScheduled && (
        <Grid container justifyContent="center">
          <Grid item xs={12} style={{ marginBottom: "2rem" }}>
            <GatePass
              id="              gatePassContainer"
              groupName={groupName}
              vehicleNumber={vehicleNumber}
              customerName={email} // Assuming email is used as customer name
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={generateGatePass}
              style={{ width: "20rem" }}
            >
              Generate Gate Pass
            </Button>
          </Grid>
        </Grid>
      )}

    </LocalizationProvider>
    <FooterIn />
    </>
  );
};

export default SiteVisitOne;

