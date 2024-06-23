import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes, Box, CircularProgress } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WithoutButton from '../../Components/WithoutButton';
import Footer from '../../Components/Footer';

function ServiceAgreementFour() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [agreement, setAgreement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgreementService = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/agreementService/getAgreementServiceTwo?id=${id}`);
        setAgreement(response.data);
        setLoading(false);
      } catch (e) {
        console.error('Error fetching agreement:', e);
        setLoading(false);
      }
    };

    fetchAgreementService();
  }, [id]);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  theme.typography.h5 = {
    fontSize: '1.1rem'
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Link to={"/ServiceAgreementFive"}>
            <Button startIcon={<ArrowBackIcon />} sx={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '20px' }}>
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Box sx={{ boxShadow: '0 4px 100px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', backgroundColor: 'white', maxWidth: '800px', margin: '0 auto' }}>
        <Grid container className="text" justifyContent="center">
          <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
            <ThemeProvider theme={theme}>
              <Typography variant='h' sx={{ fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem', color: 'rgb(26, 99, 209)', fontFamily: "Franklin Gothic Medium", fontSize:"60px"}}>
                Service Agreement
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" sx={{ paddingTop: '0rem', color: '#547DD1', fontFamily: 'Franklin Gothic', fontSize: '16px' }}>
          <Grid item>
            <Typography variant="h6" sx={{ fontFamily: 'Franklin Gothic', fontSize: '16px' }}>View Service Agreement Details</Typography>
          </Grid>
        </Grid>

        <br />
        <Grid container justifyContent="center">
          <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
            {loading ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
              </Box>
            ) : agreement ? (
              <>
                <WithoutButton agreement={agreement} />
                <Grid container justifyContent="center" sx={{ marginTop: '1rem' }}>
                  <Button variant="outlined" onClick={() => navigate(-1)}>
                    Go Back
                  </Button>
                </Grid>
              </>
            ) : (
              <Typography variant="body1" color="error">Agreement not found</Typography>
            )}
          </Grid>
        </Grid>
      </Box>

      <br />
      <Footer />
    </div>
  );
}

export default ServiceAgreementFour;
