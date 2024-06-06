import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Notify from '@mui/icons-material/MarkEmailUnread';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import { success } from '../util/Toastify';
// kjsdkj

const ProfilesAdmin = () => {
  const [checked, setChecked] = React.useState(false);
  const [complaindata, setComplaindata] = React.useState([]);
  const [iconColor, setIconColor] = React.useState('secondary');
  const [message, setMessage] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    handleView();

    const eventSource = new EventSource(`http://localhost:8080/api/auth/newupdates`);

    eventSource.onopen = (event) => {
      console.log('SSE connection opened:', event);
    };

    eventSource.onmessage = (event) => {
      console.log('Received new complaint event:', event);
      setIconColor('error');
      console.log('colorchanged')
      handleView();
    };

    eventSource.onerror = (error) => {
      console.error('SSE error:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);




  const handleView = async () => {
    try {
      const result = await axios.post('http://localhost:8080/api/auth/findcomplaint');
      const response = await result.data;
      console.log('Complaints fetched:', response);
      setComplaindata(response);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const handleChange = async (event) => {
    console.log("Switch toggled");
    setChecked(event.target.checked);
    // Use the updated value of checked instead of the stale one
    if (!event.target.checked) {
      setTimeout(async () => {
        try {
          await axios.post('/api/auth/signout', { checked: event.target.checked });
          success(message);
          setMessage("Signed out successfully!");
          navigate('/');
        } catch (error) {
          console.error('Sign out error:', error);
        }
      }, 500); // 500ms delay
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
            <Link to={'/login/complaintread'} state={{ complaindata: complaindata }} >
              <Notify fontSize='medium' sx={{ position: 'absolute', marginTop: '2px' }} />
              <NotificationsIcon color={iconColor} fontSize='small' sx={{ marginBottom: '10px', marginLeft: '10px', position: 'absolute' }} />
            </Link>
          </Grid>
          <Grid item lg={0.8} md={0.8} sm={1.2} xs={1.5}>
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
        <Grid container sx={{ marginTop: '12px' }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign={'right'} sx={{ marginBottom: '10px', marginRight: '20px' }}>
            <Link to={'/signup'}>
              <Button sx={{ backgroundColor: '#6C94F8' }} variant="contained" size='medium'>
                Sign Up
              </Button>
            </Link>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </AppBar>
    </div>
  );
}

export default ProfilesAdmin;
