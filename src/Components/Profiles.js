import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Login' : 'Logout'}
        />
          
      </FormGroup>
      <AppBar position="static">
        {/* <Toolbar> */}
        <Grid container spacing={2}>
          <Grid item lg={4.9} md={5} sm={5} xs={2.5}>
        <Link to={"/"}> 
        <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity:'0.5'}}/>
    </Link>
    </Grid>
    <Grid item lg={2} md={2} sm={2} xs={2}>
          <Typography variant="h3">
          Welcome!
          </Typography></Grid>
          <Grid item lg={4.1} md={4} sm={4} xs={4.7}></Grid>
          <Grid item lg={1} md={1} sm={1} xs={1} >
          {auth && (
            <div>
             
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={{ width: '40px', height: '40px' ,marginTop:'10px'}}
              >
               <AccountCircle style={{ width: '60px', height: '60px' }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                  
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                  
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
             
            </div>
          )}
          </Grid>
          </Grid>
        {/* </Toolbar> */}
      </AppBar>
    </>
  );
}