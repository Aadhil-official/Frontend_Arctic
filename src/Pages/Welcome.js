import React, { useState, useEffect } from 'react';
import { FooterIn, Profiles, Tabs } from '../Components/index';
import '../Style/Welcome.css';
import { Grid } from '@mui/material';
import axios from 'axios';
import { BsFillGrid3X3GapFill, BsPeopleFill, BsPersonVcardFill } from 'react-icons/bs';
// import ViewListPdf from './ViewListPdf';
// import { useLocation } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';


const Welcome = () => {
  // const [counts, setCounts] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // const [tempdata, setTempdata] = useState([]);
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.state && location.state.tempdata) {
  //     setTempdata(location.state.tempdata);
  //   }
  // }, [location.state]);




  // const buttonData = [
  //   { label: 'Employee Details', link: '/login/welcome/employeelist' },
  //   { label: 'Item Details', link: '/login/welcome/itemList' },
  //   { label: 'Unit Details', link: '/login/welcome/unitList' },
  //   { label: 'Vehicle Details', link: '/login/welcome/vehicleList' },
  //   { label: 'Customer Details', link: '/login/welcome/customerList' },
  //   { label: 'User Group Details', link: '/login/welcome/userGroupList' },
  //   { label: 'Job Details' },
  //   // { label: 'Job Allocation' },
  //   { label: 'Calendar', link: '/base/calendarEmp' },
  //   { label: 'Service Agreement Details', link: '/ServiceAgreementSix' },
  //   { label: 'Site Visit Details', link: '/SiteVisitFourEmployee' },
  // ];


  // useEffect(() => {
  //   axios.get('http://localhost:8080/counts')
  //     .then(response => {
  //       setCounts(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching counts:', error);
  //     });
  // })


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 899);
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const gapStyle = {
    gap: isSmallScreen ? '50px' : '20px'
  };

  const betStyle = {
    width: isSmallScreen ? '57px' : '',
    display: isSmallScreen ? 'inline-block' : ''
  };
  // const theme = responsiveFontSizes(createTheme());

  return (
    <>

      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: 3 }}>
          {/* {console.log("Shitkdlks..........",tempdata)} */}
          <Profiles />
        </Grid>
      </Grid>

      {/* <Grid container justifyContent='center' textAlign='center' className='main-cards'>
        <Grid item xs={12} sm={12} md={3} lg={2.5} xl={1} className='card'>
          <div style={gapStyle} className='card-inner'>
            <h3>
              <div style={betStyle}></div>
              ITEMS
            </h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{counts.units || 0}</h1>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={2.5} xl={1} className='card'>
          <div style={gapStyle} className='card-inner'>
            <h3>EMPLOYEES</h3>
            <BsPersonVcardFill className='card_icon' />
          </div>
          <h1>{counts.units || 0}</h1>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={2.5} xl={1} className='card'>
          <div style={gapStyle} className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{counts.units || 0}</h1>
        </Grid>

      </Grid><br /><br /> */}
      {/* <Grid container>
        <Grid item xs={12} textAlign='center' justifyContent='center' className='text2'>
          <ThemeProvider theme={theme}>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Dash board</Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid container>
        <ThemeProvider theme={theme}>
          <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
            <Typography variant='h6' sx={{ marginTop: '-25px' }}>Welocom!</Typography>
          </Grid>
        </ThemeProvider>
      </Grid> */}

      <Grid container>

        <Grid item xs={12}>
          <Tabs />
          {/* buttonData={buttonData} */}
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mt: 3 }}>
          <FooterIn />
        </Grid>
      </Grid >
    </>
  );
};

export default Welcome;
