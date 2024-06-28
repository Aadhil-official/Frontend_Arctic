import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Button, Grid, Typography, Box, ThemeProvider, createTheme, responsiveFontSizes, TextField } from '@mui/material';
import Footer from '../../Components/Footer';

function FeedbackForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [feedback, setFeedback] = useState('');
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

  const handleFeedbackSubmit = async () => {
    try {
      // Assuming you have an endpoint to save feedback
      const response = await axios.post(`http://localhost:8080/api/v1/feedBack/saveFeedback`, {
        visitId: visitDetails.visitId,
        feedback: feedback
      });
      console.log(response.data); // Log the response from MongoDB
      alert('Feedback submitted successfully!');
      // Optionally clear the feedback field after submission
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again later.');
    }
  };

  const handleCancel = () => {
    // Clear the feedback field
    setFeedback('');
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Link to={"/SiteVisitFour"}>
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px', position: 'absolute', left: '10px', top: '10px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>

      <Grid container className='text'>
        <Grid item xs={12} textAlign="center">
          <ThemeProvider theme={theme}>
            <Typography variant="h" 
            sx={{ fontWeight: 'bold',
         
             color: 'rgb(26, 99, 209)',
            fontFamily: "Franklin Gothic Medium",
            textAlign: "center", 
            fontSize: "60px" ,
            marginTop:"1rem"}}>
              Feedback Form
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ paddingTop: '1rem' }}>
            <Grid item>
              <Typography variant='h' sx={{
                fontWeight: 'bold',
                marginBottom: '2rem',
                marginTop:'2rem',
                fontSize: '18px',
                color:'#547DD1',
                fontFamily:'Franklin Gothic',
                 
              }}>
                Add your Feedback here 
              </Typography>
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
          <Grid item xs={12} textAlign="center" style={{ marginTop: '2rem' }}>
            <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#ffffff', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '2rem', maxWidth: '600px', margin: 'auto' }}>
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
                id="vehicleNumber"
                label="Vehicle Number"
                value={visitDetails.vehicleNumber}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                fullWidth
                id="groupName"
                label="Group Name"
                value={visitDetails.groupName}
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
                id="selectedTime"
                label="Time"
                value={visitDetails.selectedTime}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label="Type your Feedback..."
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                sx={{ marginBottom: '1rem' }}
              />
              <Grid container justifyContent="center" spacing={2}>
              <Grid item>
              <Button 
              variant="outlined" 
              style={{ width: "7rem" ,height:"2.3rem"}}
              onClick={() => navigate(-1)}>
                Go Back
              </Button>
              </Grid>
                <Grid item>
                  <Button 
                  variant="contained" 
                  onClick={handleFeedbackSubmit}
                  style={{ width: "6rem" }}
                  >
                    Submit
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

      <Footer />
    </>
  );
}

export default FeedbackForm;
