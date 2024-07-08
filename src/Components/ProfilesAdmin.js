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
import { useUser } from '../Context/UserContext';

const ProfilesAdmin = () => {
  const { tempdata, tempdataGroup } = useUser();

  const relevantPrivileges = tempdataGroup?.relevantPrivileges || [];
  // const [checked, setChecked] = React.useState(true);
  // const [complaindata, setComplaindata] = React.useState([]);
  const [iconColor, setIconColor] = React.useState('#6C94F8');
  // const [tempdata1, setTempdata1] = React.useState([]);
  // const [complaintdata, setComplaintdata] = React.useState([]);
  // const [message, setMessage] = React.useState('');
  // const [username] = React.useState(tempdata?.username);
  // const username=React.useRef(tempdata?.username);
  // const final username=tempdata?.username;
  // setTempdata1(tempdata);

  // const location = useLocation();
  // const complaintdata = location.state.complaintdata;
  const navigate = useNavigate();

  // console.log("this is huiiiiii.....", tempdata);
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
    // handleView();

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

    eventSource.addEventListener('latest update', () => {
      // console.log('Event data:', event.data);
      setIconColor('red');
      // handleView();
    })

    eventSource.onerror = (error) => {
      // console.error('SSE error:', error);
      eventSource.close();
    };

    // setTimeout(() => {
    //   eventSource = new EventSource('http://localhost:8080/api/auth/newupdates');
    // }, 1000); 

    return () => {
      eventSource.close();
    };

  }, []);

  // const handleView = () => {
  //   axios.post('http://localhost:8080/api/auth/findcomplaint')
  //     .then(result => {
  //       // console.log('Complaints fetched:', result.data);
  //       setComplaintdata(result.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching complaints:', error);
  //     });
  // };

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
    <>
      <AppBar position="static" className='topbarem'>
        <Grid container spacing={2} sx={{ position: 'absolute' }}>
          <Grid item xs={6} textAlign='left'>
            <Link to={"/"}>
              <HomeIcon color='action' fontSize='large' sx={{ width: '40px', height: '40px', margin: '5px', marginLeft: '20px' }} alt='Back' />
            </Link>
          </Grid>
          {/* <ThemeProvider theme={theme}> */}
          {/* <Grid item lg={2} md={2} sm={1.9} xs={2.25}></Grid> */}
          {/* </ThemeProvider> */}
          {/* <Grid item lg={3.4} md={2.3} sm={1.5} xs={1}></Grid> */}
          {/* <Grid item lg={0.7} md={0.8} sm={1.2} xs={1.5} >
            <Typography variant="h5" sx={{ marginTop: '12px', marginBottom: '20px' }}>logout</Typography>
          </Grid> */}

          <Grid item xs={6} textAlign='right' sx={{ marginTop: '10px' }}>
            {relevantPrivileges.includes("complain") && (
              <Link to={'/login/complaintread'} onClick={handleNotificationClick}>
                <NotificationsIcon fontSize='small' sx={{ marginTop: '-5px', color: iconColor, position: 'absolute', marginBottom: '-10px', marginLeft: '10px' }} />
                <Notify fontSize='medium' sx={{ color: '#244FD9', marginRight: '20px' }} />
              </Link>
            )}

            {relevantPrivileges.includes("createUser") && (
              <Link to={'/signup'}>
                <Button
                  sx={{ backgroundColor: '#6C94F8', marginRight: '10px' }}
                  variant="contained" size='small'>
                  Create User
                </Button>
              </Link>
            )}

            {/* </Grid>


<Grid item lg={1.2} md={1.3} sm={2.2} xs={2.5}> */}
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
                }
              }}
            /> */}
            <Button onClick={handleChange} sx={{ backgroundColor: '#6C94F8', marginLeft: '10px', marginRight: '10px' }} variant="contained" size='small'>
              Log out
            </Button>
          </Grid>

        </Grid>
        <Grid container justifyContent='center' textAlign='center' sx={{ padding: '15px' }}>
          <ThemeProvider theme={theme}>
            <Grid item xl={5} lg={5} md={5} sm={3.4} xs={2.8}>
              <Typography variant="h5" sx={{ fontWeight: '500' }}>
                <div className='onsmall'></div>
                <span className='welcomeem'>HI, {tempdata.username.toUpperCase()}!</span>
              </Typography>
            </Grid>
            {/* <Grid item md={2.3} xs={2.8} sm={3.4}>
              <Typography variant="h4" sx={{ fontWeight: '450', textTransform: 'uppercase' }}>
                {username}
              </Typography>
            </Grid> */}
          </ThemeProvider>
        </Grid>
        {/* <Grid container sx={{ marginTop: '12px' }}>
          <Grid item lg={10.5} md={10.6} sm={10} xs={9.3}></Grid> */}

        {/* </Grid> */}
      </AppBar>
    </ >
  );
}

export default ProfilesAdmin;
