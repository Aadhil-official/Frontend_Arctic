import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
// import Switch from '@mui/material/Switch';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Grid, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Notify from '@mui/icons-material/MarkEmailUnread';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import HomeIcon from '@mui/icons-material/Home';
import { success } from '../util/Toastify';
import '../Style/Component/ProfAd.css'

const ProfilesAdmin = ({ tempdata }) => {
  // const [checked, setChecked] = React.useState(true);
  // const [complaindata, setComplaindata] = React.useState([]);
  const [iconColor, setIconColor] = React.useState('#6C94F8');
  // const [tempdata1, setTempdata1] = React.useState([]);
  const [complaintdata, setComplaintdata] = React.useState([]);
  // const [message, setMessage] = React.useState('');
  // const [username] = React.useState(tempdata?.username);
  // const username=React.useRef(tempdata?.username);
  // const final username=tempdata?.username;
  // setTempdata1(tempdata);

  // const location = useLocation();
  // const complaintdata = location.state.complaintdata;
  const navigate = useNavigate();

  // const location = useLocation;

  // let i=1;
  // if(i===1){
  //   setUsername(tempdata?.username);
  //   i++;
  // }// React.useEffect(()=>{
  //   if (location.state && location.state.tempdata) {
  //     setTempdata(location.state.tempdata);
  //   }
  // },[location.state]);
  // console.log(tempdata);
  React.useEffect(() => {

    // if (location.state && location.state.tempdata) {
    //   setTempdata(location.state.tempdata);
    // }
    // const newComplaints = localStorage.getItem('newComplaints');
    // if (newComplaints === 'true') {
    //   setIconColor('error');
    // }
    handleView();

    const eventSource = new EventSource('http://localhost:8080/api/auth/newupdates');

    // eventSource.start = () => {
    //   console.log("SSE connection opened");
    // }

    // eventSource.onopen = () => {
    //   console.log("SSE connection opened");
    //   // setIconColor('error');
    // };


    // eventSource.addEventListener("error",setIconColor("error"))

    // eventSource.onmessage = (event) => {
    //   console.log('New event recived', event.data);
    //   setIconColor('error'); // Change icon color to red when a new complaint is added
    //   handleView(); // Fetch new complaints
    // };

    eventSource.addEventListener('latest update', (event) => {
      // console.log('Event data:', event.data);
      setIconColor('red');
      handleView();
    })

    eventSource.onerror = (error) => {
      // console.error('SSE error:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };

  }, []);

  const handleView = () => {
    axios.post('http://localhost:8080/api/auth/findcomplaint')
      .then(result => {
        // console.log('Complaints fetched:', result.data);
        setComplaintdata(result.data);
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
      });
  };

  const handleChange = async () => {
    // console.log("Switch toggled");
    // setChecked(event.target.checked);
    // if (!event.target.checked) {
    // setTimeout(async () => {
    try {
      await axios.post('http://localhost:8080/api/auth/signout', { checked: false });
      success("Signed out!");
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
    // }, 500); // 500ms delay
    // }
  };

  const handleNotificationClick = () => {
    setIconColor('#6C94F8'); // Change icon color back to secondary after clicking on it
  };

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <AppBar position="static">
        <Toolbar className='topbarpa' >

          <Grid container justifyContent='center' textAlign='center'>
            <ThemeProvider theme={theme}>
              <Grid item md={2.3} sm={3.4} xs={2.8}>
                <Typography className='welcomead' variant="h5">
                  Welcome!
                </Typography>
              </Grid>
              {/* <Grid item md={2.3} xs={2.8} sm={3.4}> */}
              {/* <Typography variant="h4" sx={{ fontWeight: '450', textTransform: 'uppercase' }}> */}
              {/* ADMIN */}
              {/* {username.current} */}
              {/* {tempdata?.username} */}
              {/* </Typography> */}
              {/* </Grid> */}
            </ThemeProvider>
          </Grid>
        </Toolbar>

        {/* {console.log(tempdata)} */}
        <Grid container spacing={2} sx={{ position: 'absolute' }}>
          <Grid item lg={4.9} md={5} sm={4.5} xs={4}>
            <Link to={"/"}>
              <HomeIcon color='action' fontSize='large' sx={{ width: '40px', height: '40px', margin: '5px',marginLeft:'20px' }} alt='Back' />
            </Link>
          </Grid>
          {/* <ThemeProvider theme={theme}> */}
          <Grid item lg={2} md={2} sm={1.6} xs={0.4}></Grid>
          {/* </ThemeProvider> */}
          <Grid item lg={1.9} md={1.5} sm={0.7} xs={0.9}></Grid>

          <Grid item lg={0.5} md={0.5} sm={0.8} xs={1} sx={{ marginTop: '15px' }}>
            <Link to={'/login/complaintread'} state={{ complaintdata: complaintdata, tempdata }} onClick={handleNotificationClick}>
              <Notify fontSize='medium' sx={{ color: '#244FD9', position: 'absolute', marginTop: '2px' }} />
              <NotificationsIcon fontSize='small' sx={{ color: iconColor, marginBottom: '10px', marginLeft: '10px', position: 'absolute' }} />
            </Link>
          </Grid>
          <Grid item lg={1} md={1.61} sm={2.4} xs={3.15}>
            <Link to={'/signup'}>
              <Button sx={{ backgroundColor: '#6C94F8', marginTop: '15px' }} variant="contained" size='small'>
                Create User
              </Button>
            </Link>
            {/* <Typography variant="h5" sx={{ marginTop: '12px' }}>logout</Typography> */}
          </Grid>
          <Grid item lg={1.2} md={1.3} sm={1.78} xs={2.5}>
            {/* <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{
                marginTop: '10px',
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#1B3A8A', // Darker color for checked state
                  '&:hover': {
                    backgroundColor: 'rgba(27, 58, 138, 0.08)',
                  },
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#1B3A8A', // Darker color for checked state
                },
                '& .MuiSwitch-switchBase': {
                  color: '#B0B0B0', // Default color for unchecked state
                  '&:hover': {
                    backgroundColor: 'rgba(176, 176, 176, 0.08)',
                  },
                },
                '& .MuiSwitch-switchBase + .MuiSwitch-track': {
                  backgroundColor: '#E0E0E0', // Default track color for unchecked state
                },
              }}
            /> */}
            {/* <Link to={'/signup'}> */}
            <Button onClick={handleChange} sx={{ backgroundColor: '#6C94F8', marginTop: '15px' }} variant="contained" size='small'>
              Log out
            </Button>
            {/* </Link> */}
          </Grid>
        </Grid>
        {/* <Grid container sx={{ marginTop: '12px' }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign={'right'} sx={{ marginBottom: '10px', marginRight: '20px' }}>

          </Grid>
        </Grid> */}
      </AppBar>
    </div >
  );
}

export default ProfilesAdmin;
