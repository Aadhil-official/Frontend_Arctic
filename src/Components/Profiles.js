import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { Link, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import ButtonComplain from './ButtonComplain';
import { createTheme, ThemeProvider, responsiveFontSizes} from '@mui/material/styles';

export default function MenuAppBar() {

  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked === false) {

      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  };

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  

  return (
    <>
      <AppBar position="static">
        <Grid container spacing={2}>
          <Grid item lg={4.9} md={5} sm={4.5} xs={4}>
            <Link to={"/"}>
              <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.5' }} alt='Back' />
            </Link>
          </Grid>
          <ThemeProvider theme={theme}>
            <Grid item lg={2} md={2} sm={1.6} xs={2.25}>
              <Typography variant="h3" sx={{marginTop:'13px'}}>
                Welcome!
              </Typography>
            </Grid>
          </ThemeProvider>
          <Grid item lg={3.4} md={3.3} sm={3.5} xs={2.5}></Grid>
          <Grid item lg={0.7} md={0.8} sm={1.2} xs={1.5} >
            <Typography variant="h5" sx={{ marginTop: '12px',marginBottom:'20px' }}>logout</Typography>
          </Grid>
          <Grid item lg={0.5} md={0.5} sm={1} xs={0.5}>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              color ="error" sx={{ marginTop: '10px' }}
            />
          </Grid>
        </Grid>
        <Grid container sx={{marginTop:'12px'}}>
        <Grid item lg={10.5} md={10.6} sm={10} xs={9.3}></Grid>
        <Grid item lg={1.5} md={1} sm={1.5} xs={1.5} sx={{ marginBottom: '10px',marginTop: '-25px' }}>
          <Link to={'/login/complaint'}>
            <ButtonComplain />
          </Link>
        </Grid>
      </Grid>
      </AppBar>
      
    </>
  );
}