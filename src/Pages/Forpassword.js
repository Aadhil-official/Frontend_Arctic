import '../Style/Forpassword.css';
import { Link } from 'react-router-dom';
import { NormalHeaderBar, Footer, FormForgotPass } from '../Components/index';
import { Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

function ForPassword() {

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
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
              Reset the password
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid container>
        <ThemeProvider theme={theme}>
          <Grid item xl={11} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
          <Typography variant='h6'>
            Enter your existing email
            </Typography>
            </Grid>
        </ThemeProvider>
      </Grid>

      <br />


      <Grid container>
        <Grid item xl={4.75} lg={4.65} md={4} xs={1} sm={3}></Grid>
        <Grid item xl={1.5} lg={2.7} md={4} xs={10.5} sm={6} className="box">
          <FormForgotPass/>
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


      export default ForPassword;
