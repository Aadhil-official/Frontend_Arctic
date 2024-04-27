import React from 'react'
import '../Style/Welcome.css';
import { Tabs, ProfilesAdmin, Footer } from '../Components/index';
import { Grid } from '@mui/material';

function Welcomeadmin() {

  const buttonData = [
    { label: 'Employee Details' },
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
        <Grid items xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: 3 }}>
          <ProfilesAdmin />
        </Grid>
      </Grid>
      <Tabs buttonData={buttonData} />
      <Grid container>
        <Grid items xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mt: 3 }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}

export default Welcomeadmin