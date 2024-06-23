import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import WithoutButton from '../../Components/WithoutButton';
import Footer from '../../Components/Footer';

function ServiceAgreementFour() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [agreement, setAgreement] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAgreementService = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/agreementService/getAgreementServiceTwo?id=${id}`);
        setAgreement(response.data);
        console.log("Agreement Details:", response.data);
        setLoading(false);
      } catch (e) {
        setLoading(true);
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
        <Grid item position='fixed'>
          <Link to={"/ServiceAgreementFive"}>
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>

      <Grid container className="text">
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
          <ThemeProvider theme={theme}>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}
              style={{
                marginTop: '5rem',
                color: 'rgb(26, 99, 209)',
                fontFamily: "Franklin Gothic Medium",
                textAlign: "center",
                fontSize: "70px",
              }}
            >
              Service Agreement
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ paddingTop: '0rem' }}>
        <Grid item>
          <h3>View Service Agreement Details</h3>
        </Grid>
      </Grid>

      <br />
      <Grid container>
        <Grid item xl={3} lg={3} md={2} xs={1} sm={1}></Grid>
        <Grid item xl={6} lg={6} md={8} xs={10} sm={10} className="box">
          {loading ? (
            <p>Loading...</p>
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
            <p>Agreement not found</p>
          )}
        </Grid>
        <Grid item xl={3} lg={3} md={2} xs={1} sm={1}></Grid>
      </Grid>
      <br />
      <Footer />
    </div>
  );
}

export default ServiceAgreementFour;
