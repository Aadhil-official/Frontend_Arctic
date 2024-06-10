import React, { useEffect, useState } from 'react';
import { Footer, Profiles, Tabs } from '../Components/index';
import '../Style/Welcome.css';
import { Grid } from '@mui/material';
// import ViewListPdf from './ViewListPdf';
import { useLocation } from 'react-router-dom';


const Welcome = () => {

  const [tempdata, setTempdata] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.tempdata) {
      setTempdata(location.state.tempdata);
    }
  }, [location.state]);

  const buttonData = [
    { label: 'Employee Details', link: '/login/welcome/employeelist' },
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
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: 3 }}>
          {console.log(tempdata)}
          <Profiles state={{ tempdata }} />
        </Grid>
        <Grid item xs={12}>
          {/* <ViewListPdf/> */}
        </Grid>
        <Grid item xs={12}>
          <Tabs buttonData={buttonData} />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mt: 3 }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Welcome;
