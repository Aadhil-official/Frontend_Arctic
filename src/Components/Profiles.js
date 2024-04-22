import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';, useNavigate
import { Link, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import ButtonComplain from './ButtonComplain';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function MenuAppBar() {
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const navigate = useNavigate;

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };
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

  // const variableToPass = checked;

  return (
    <>
      <AppBar position="static">
        <Grid container spacing={2}>
          <Grid item lg={4.9} md={5} sm={5} xs={2.5}>
            <Link to={"/"}>
              <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.5' }} alt='Back' />
            </Link>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Typography variant="h3">
              Welcome!
            </Typography></Grid>
          <Grid item lg={2.3} md={2.3} sm={2.3} xs={2.3}></Grid>
          <Grid item lg={1.2} md={1.2} sm={1.2} xs={1.2} sx={{ color: 'orange', marginTop: '10px' }} variant="h5">
           <Link to={'/login/complaint'}>
             <ButtonComplain/>
                </Link>
          </Grid>
          <Grid item lg={0.7} md={0.7} sm={0.7} xs={0.7} >
            <Typography variant="h5" sx={{ color: 'orange', marginTop: '10px' }}>logout</Typography>
          </Grid>
          <Grid item lg={0.5} md={0.5} sm={0.5} xs={0.5} >
          {/* <Link to={'/homes'}> */}
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              color="warning" sx={{ marginTop: '10px' }}
            />
            {/* </Link> */}
          </Grid>
        </Grid>
      </AppBar>
      </>
  );
}