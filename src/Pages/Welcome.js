import React from 'react';
import { FooterIn, Profiles, Tabs } from '../Components/index';
import '../Style/Welcome.css';
import { Grid } from '@mui/material';
// import ViewListPdf from './ViewListPdf';
// import { useLocation } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';


const Welcome = () => {


  // const [tempdata, setTempdata] = useState([]);
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.state && location.state.tempdata) {
  //     setTempdata(location.state.tempdata);
  //   }
  // }, [location.state]);




  const buttonData = [
    { label: 'Employee Details', link: '/login/welcome/employeelist' },
    { label: 'Item Details', link: '/login/welcome/itemList' },
    { label: 'Unit Details', link: '/login/welcome/unitList' },
    { label: 'Vehicle Details', link: '/login/welcome/vehicleList' },
    { label: 'Customer Details', link: '/login/welcome/customerList' },
    { label: 'User Group Details', link: '/login/welcome/userGroupList' },
    { label: 'Job Details' },
    { label: 'Job Allocation' },
    { label: 'Calendar' },
    { label: 'Service Agreement Details' },
    { label: 'Site Visit Details' },
  ];

  // const theme = responsiveFontSizes(createTheme());

  return (
    <>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: 3 }}>
          {/* {console.log("Shitkdlks..........",tempdata)} */}
          <Profiles />
        </Grid>
      </Grid>
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
          <Tabs buttonData={buttonData} />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mt: 3 }}>
          <FooterIn />
        </Grid>
      </Grid >
    </>
  );
};

export default Welcome;
