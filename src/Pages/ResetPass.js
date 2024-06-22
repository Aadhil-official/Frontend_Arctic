import React from 'react'
import { Link } from 'react-router-dom';
import { NormalHeaderBar, Footer, FormResetPass } from '../Components/index';
import { Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

function ResetPass() {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
  
    theme.typography.h5 = {
      fontSize: '1.1rem'
    }
  
    return (
      <>
        <NormalHeaderBar /><br />
        <Grid container>
          <Grid item xl={11} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
            <img src="https://cdn-icons-png.flaticon.com/128/3000/3000482.png" width="60px" height="60px" align="center" alt='' />
          </Grid>
        </Grid>
        <br />
        <Grid container className="text">
          <Grid item xl={11} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
            <ThemeProvider theme={theme}>
              <Typography variant='h3' sx={{ fontWeight: 'bold',marginTop:'-30px',marginBottom:'-20px' }}>
                Forgot Password
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container>
          <ThemeProvider theme={theme}>
            <Grid item xl={11} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
            <Typography variant='h6'>
              Enter your email and we'll send you a link to reset your password
              </Typography>
              </Grid>
          </ThemeProvider>
        </Grid>
  
        <br />
  
  
        <Grid container>
          <Grid item xl={4.75} lg={4.65} md={4} xs={1} sm={3}></Grid>
          <Grid item xl={1.5} lg={2.7} md={4} xs={10.5} sm={6} className="box">
            <FormResetPass/>
            </Grid>
          <Grid item xl={2} lg={3} md={4} xs={0.5} sm={3}></Grid>
        </Grid><br />
  
  
          <Grid container>
            <Grid item xl={11} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
              <ThemeProvider theme={theme}>
                <Typography variant='h5' fontWeight='bold'>
  
                  Back To Login?<Link to={"/login"} style={{ color: 'red' }} >
                    Click here to login
                  </Link>
  
                </Typography>
              </ThemeProvider>
            </Grid>
          </Grid><br />
  
          <Footer />
        </>
        );
  }

export default ResetPass