import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Grid, Typography, Box, ThemeProvider, createTheme, responsiveFontSizes, TextField } from '@mui/material';
import { FooterIn, NormalHeaderBar } from '../../Components';

function SiteVisitDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [visitDetails, setVisitDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updatedVisitDetails, setUpdatedVisitDetails] = useState({}); // Initialize as an empty object

  useEffect(() => {
    const fetchVisitDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/api/auth/siteVisit/getSiteVisitTwo?id=${id}`
        );
        setVisitDetails(response.data);
        setUpdatedVisitDetails(response.data); // Initialize updatedVisitDetails with fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching visit details:", error);
        setLoading(false);
      }
    };

    fetchVisitDetails();
  }, [id]);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  theme.typography.h5 = {
    fontSize: "1.1rem",
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/auth/siteVisit/updateSiteVisit`,
        updatedVisitDetails
      );
      console.log("Visit details updated successfully:", response.data);
      alert("Visit details updated successfully!");
      setVisitDetails(updatedVisitDetails); // Update local state with new details
    } catch (error) {
      console.error(
        "Error updating visit details:",
        error.response ? error.response.data : error.message
      );
      alert(
        `Failed to update visit details. ${
          error.response ? error.response.data : "Please try again later."
        }`
      );
    }
  };

  const handleCancel = () => {
    setUpdatedVisitDetails(visitDetails); // Reset updated details state to original details
  };

  const handleChange = (field, value) => {
    // Update the field in the updatedVisitDetails state
    setUpdatedVisitDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleGatePass = () => {
    navigate(`/GatePassDetails/${id}`);
  };

  return (
    <>
      <NormalHeaderBar />
      <Grid container className='back-icon'>
        <Grid item xs={12} textAlign="left">
          <Link to={"/SiteVisitSix"}>
          <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" 
            style={{ width: '40px', 
            height: '40px', 
            opacity: '0.6', 
            margin: '15px', 
            
            left: '10px', 
            top: '10px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>

      <Grid container className="text">
        <Grid item xs={12} textAlign="center">
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              sx={{
                marginTop: "1rem",
                color: "rgb(26, 99, 209)",
                fontFamily: "Franklin Gothic Medium",
                textAlign: "center",
                fontSize: "70px",
              }}
            >
              Edit Site Visit Details
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid container className="text">
        <Grid item xs={12} textAlign="center">
          <ThemeProvider theme={theme}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginTop: "1rem",
                color: "rgb(26, 99, 209)",
                fontFamily: "Franklin Gothic",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              You can edit Vehicle Number, Location, Group name, Schedule date &
              Time details only
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>

      {loading ? (
        <Grid container justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <p>Loading...</p>
          </Grid>
        </Grid>
      ) : visitDetails ? (
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            textAlign="center"
            style={{ marginTop: "2rem" }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor: "white",
                marginBottom: "2rem",
                boxShadow: 3,
              }}
            >
              <TextField
                fullWidth
                id="visitId"
                label="Visit ID"
                value={visitDetails.visitId}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                fullWidth
                id="jobType"
                label="Job Type"
                value={visitDetails.jobType}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                value={visitDetails.email}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />

              <TextField
                fullWidth
                id="vehicleNumber"
                label="Vehicle Number"
                value={updatedVisitDetails.vehicleNumber}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: false,
                }}
                onChange={(e) => handleChange("vehicleNumber", e.target.value)}
              />
              <TextField
                fullWidth
                id="location"
                label="Location"
                value={updatedVisitDetails.location}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: false,
                }}
                onChange={(e) => handleChange("location", e.target.value)}
              />
              {/* <TextField
                fullWidth
                id="groupName"
                label="Group Name"
                value={updatedVisitDetails.groupName}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: false,
                }}
                onChange={(e) => handleChange("groupName", e.target.value)}
              /> */}
              <TextField
                fullWidth
                id="scheduleDate"
                label="Schedule Date"
                value={updatedVisitDetails.scheduleDate}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: false,
                }}
                onChange={(e) => handleChange("scheduleDate", e.target.value)}
              />
              <TextField
                fullWidth
                id="selectedTime"
                label="Time"
                value={updatedVisitDetails.selectedTime}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: false,
                }}
                onChange={(e) => handleChange("selectedTime", e.target.value)}
              />
              {/* Add more fields as needed */}

              <Grid
                container
                justifyContent="center"
                spacing={2}
                sx={{ marginTop: "1rem" }}
              >
                <Grid item>
                  <Button variant="outlined" onClick={() => navigate("/SiteVisitSix")}>
                    Go Back
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={handleUpdate}>
                    Update
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCancel}
                    style={{ width: "6rem" }}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGatePass}
                  >
                    Gate Pass
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Grid container justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <p>Visit details not found</p>
          </Grid>
        </Grid>
      )}

      <FooterIn />
    </>
  );
}

export default SiteVisitDetails;
