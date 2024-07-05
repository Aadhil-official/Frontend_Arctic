import React, { useState, useEffect } from 'react'
import '../Style/Welcome.css';
import { ProfilesAdmin, FooterIn, Tabs } from '../Components/index';
// import { createTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material';
import { BsFillGrid3X3GapFill, BsPeopleFill, BsPersonVcardFill } from 'react-icons/bs';
import axios from 'axios';
import { Grid } from '@mui/material';
// import ViewListPdf from './ViewListPdf';
// import { useLocation } from 'react-router-dom';

function Welcomeadmin() {
  const [counts, setCounts] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // const [tempdata, setTempdata] = useState([]);
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.state && location.state.tempdata) {
  //     setTempdata(location.state.tempdata);
  //     // {console.log(tempdata)}
  //   }
  // }, [location.state]);

  // const buttonData = [
  //   { label: 'Employee Details', link: '/login/welcomeadmin/employeelistad' },
  //   { label: 'Item Details', link: '/login/welcomeadmin/itemListAd' },
  //   { label: 'Unit Details', link: '/login/welcomeadmin/unitListAd' },
  //   { label: 'Vehicle Details', link: '/login/welcomeadmin/vehicleListAd' },
  //   { label: 'Customer Details', link: '/login/welcomeadmin/customerListAd' },
  //   { label: 'User Group Details', link: '/login/welcomeadmin/userGroupListAd' },
  //   { label: 'Job Details' },
  //   // { label: 'Job Allocation' },
  //   { label: 'Calendar', link: '/base/calendar' },
  //   { label: 'Set Reminder', link: '/base/reminder' },
  //   { label: 'Service Agreement Details', link: '/ServiceAgreementSix' },
  //   { label: 'Site Visit Details', link: '/SiteVisitDashboard' }
  // ];

  useEffect(() => {
    axios.get('http://localhost:8080/counts')
      .then(response => {
        setCounts(response.data);
      })
      .catch(error => {
        console.error('Error fetching counts:', error);
      });
  })

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

  return (
    <>

      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: 3 }}>
          <ProfilesAdmin />
        </Grid>
      </Grid>


      <Grid container justifyContent='center' textAlign='center' className='main-cards'>
        <Grid item xs={12} sm={12} md={3} lg={2.5} xl={1} className='card'>
          <div style={gapStyle} className='card-inner'>
            <h3>ITEMS</h3>
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

      </Grid><br /><br />


      <Grid container>
        <Grid item xs={12}>
          <Tabs />
          {/*  buttonData={buttonData}  */}
        </Grid>
        {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mt: 3 }}> */}
        <FooterIn />
        {/* </Grid> */}
      </Grid>
    </>
  )
}

export default Welcomeadmin