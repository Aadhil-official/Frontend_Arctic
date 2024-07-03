import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Grid, Typography,  ThemeProvider, createTheme, responsiveFontSizes, TextField, Paper } from '@mui/material';
//import Footer from '../../Components/Footer';
import SiteVisitFourEmployee from './SiteVisitFourEmployee';
//import { Button, Grid, Typography, ThemeProvider, createTheme, responsiveFontSizes, TextField, Paper } from '@mui/material';
import { FooterIn, NormalHeaderBar } from '../../Components';

function SiteVisitThree() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [visitDetails, setVisitDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVisitDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/api/v1/siteVisit/getSiteVisitTwo?id=${id}`);
        setVisitDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching visit details:', error);
        setLoading(false);
      }
    };

    fetchVisitDetails();
  }, [id]);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  theme.typography.h5 = {
    fontSize: '1.1rem'
  };

  const handleGatePass = () => {
    navigate(`/GatePassDetailsEmployee/${id}`);
  };

  return (
    <>
      <NormalHeaderBar />
      <Grid container className='back-icon'>
        <Grid item xs={12} textAlign="left">
          <Link to={"/SiteVisitFourEmployee"}>
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

      <Grid container className='text'>
        <Grid item xs={12} textAlign="center">
          <ThemeProvider theme={theme}>
            <Typography variant="h" sx={{ fontWeight: 'bold', marginTop: '5rem', color: 'rgb(26, 99, 209)', fontFamily: "Franklin Gothic Medium", textAlign: "center", fontSize: "60px" }}>
              View Site Visit Details
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
          <Grid item xs={6} textAlign="center" style={{ marginTop: '2rem' }}>
            <Paper elevation={4} sx={{ p: 2, borderRadius: 3, boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.2)' }}>
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
                id="location"
                label="Location"
                value={visitDetails.location}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                fullWidth
                id="scheduleDate"
                label="Schedule Date"
                value={visitDetails.scheduleDate}
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
                value={visitDetails.vehicleNumber}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              {/* <TextField
                fullWidth
                id="groupName"
                label="Group Name"
                value={visitDetails.groupName}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              /> */}
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
                id="selectedTime"
                label="Time"
                value={visitDetails.selectedTime} // Ensure visitDetails.time is correctly populated from API response
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              {/* Add more fields as needed */}
              <Button 
              variant="outlined" 
              style={{marginTop:"1rem"}}
              onClick={() => navigate("/SiteVisitFourEmployee")}>
                Go Back
              </Button>
              <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGatePass}
                    style={{marginTop:"1rem"}}
                  >
                    Gate Pass
                  </Button>
                </Grid>
            </Paper>
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

export default SiteVisitThree;
