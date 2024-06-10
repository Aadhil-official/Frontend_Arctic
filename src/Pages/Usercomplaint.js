import React, { useEffect, useState } from 'react'
import { NormalHeaderBar, ComplaintForm, Footer } from '../Components/index';
import { Link, useLocation } from 'react-router-dom';
import '../Style/Login.css';
import { Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';


function Usercomplaint() {

  const [tempdata, setTempdata] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.tempdata) {
      setTempdata(location.state.tempdata);
    }
  }, [location.state]);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  theme.typography.h5 = {
    fontSize: '1.1rem'
  }

  return (
    <>
      <NormalHeaderBar />
      <Grid container spacing={2}>
        <Grid item>
          <Link to={"/login/welcome"}>
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', position: 'absolute', margin: '5px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>
      <Grid container className="text">
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
          <ThemeProvider theme={theme}>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Complaints</Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid container>
        <ThemeProvider theme={theme}>
          <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
            <Typography variant='h6'>Enter your complaint here</Typography>
          </Grid>
        </ThemeProvider>
      </Grid>
      <br />
      <Grid container>
        <Grid item xl={5.25} lg={4.65} md={4} xs={1} sm={3}></Grid>
        <Grid item xl={1.5} lg={2.7} md={4} xs={10.5} sm={6} className="box">
          <ComplaintForm state={{ tempdata }} />
        </Grid>
        <Grid item xl={2} lg={3} md={4} xs={0.5} sm={3}></Grid>
      </Grid><br />
      <Grid container>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
          <ThemeProvider theme={theme}>
            <Typography variant='h5' fontWeight='bold'>
              To ignore?
              <Link to={"/login/welcome"} style={{ color: 'red' }}>
                Click here
              </Link>
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid><br />
      <Footer />

    </>
  )
}

export default Usercomplaint