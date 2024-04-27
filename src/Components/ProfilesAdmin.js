import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { Link, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Notify from '@mui/icons-material/MarkEmailUnread';
import NotificationsIcon from '@mui/icons-material/Notifications';

function ProfilesAdmin() {

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
    <div>
      <AppBar position="static">
        <Grid container spacing={2}>
          <Grid item lg={4.9} md={5} sm={4.5} xs={4}>
            <Link to={"/"}>
              <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.5' }} alt='Back' />
            </Link>
          </Grid>
          <ThemeProvider theme={theme}>
            <Grid item lg={2} md={2} sm={1.6} xs={2.25}>
              <Typography variant="h3">
                Welcome!
              </Typography>
            </Grid>
          </ThemeProvider>
          <Grid item lg={2.9} md={2.8} sm={2.6} xs={2}></Grid>

          <Grid item lg={0.5} md={0.5} sm={0.8} xs={0.8} sx={{ marginTop: '12px' }}>
            <Link to={'/login/complaintread'}>
              <Notify fontSize='medium' sx={{ position: 'absolute', marginTop: '2px' }} />
              <NotificationsIcon color='error' fontSize='string' sx={{ marginBottom: '10px', marginLeft: '10px', position: 'absolute' }} />
            </Link>
          </Grid>
          <Grid item lg={0.7} md={0.8} sm={1.2} xs={1.5}>
            <Typography variant="h5" sx={{ marginTop: '10px' }}>logout</Typography>
          </Grid>
          <Grid item lg={0.5} md={0.5} sm={1} xs={0.5}>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              color='error' sx={{ marginTop: '10px' }}
            />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  )
}

export default ProfilesAdmin