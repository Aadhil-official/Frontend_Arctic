import React, { useEffect, useState } from 'react'
import '../Style/Welcome.css';
import { Tabs, ProfilesAdmin, FooterIn } from '../Components/index';
import { Grid } from '@mui/material';
// import ViewListPdf from './ViewListPdf';
import { useLocation } from 'react-router-dom';

function Welcomeadmin() {

  const [tempdata, setTempdata] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.tempdata) {
      setTempdata(location.state.tempdata);
    }
  }, [location.state]);

  const buttonData = [
    { label: 'Employee Details', link: '/login/welcomeadmin/employeelistad' },
    { label: 'Item Details' },
    { label: 'Unit Details' },
    { label: 'Vehicle Details' },
    { label: 'Job Details' },
    { label: 'Service Agreement' },
    { label: 'Calendar' },
    { label: 'Schedule a Site Visit' },
    { label: 'Job Allocation' },
  ];

  return (
    <>
      <Grid container>
        {console.log(tempdata)}
        <Grid items xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: 3 }}>
          <ProfilesAdmin tempdata={tempdata} />
        </Grid>
        {/* <ViewListPdf /> */}
        <Grid item xs={12}>
          <Tabs buttonData={buttonData} />
        </Grid>
        <Grid items xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mt: 3 }}>
          <FooterIn />
        </Grid>
      </Grid>
    </>
  )
}

export default Welcomeadmin