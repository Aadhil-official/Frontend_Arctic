import React from 'react'
import '../Style/Welcome.css';
import { ProfilesAdmin, FooterIn, Tabs } from '../Components/index';
import { Grid } from '@mui/material';
// import ViewListPdf from './ViewListPdf';
// import { useLocation } from 'react-router-dom';

function Welcomeadmin() {

  // const [tempdata, setTempdata] = useState([]);
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.state && location.state.tempdata) {
  //     setTempdata(location.state.tempdata);
  //     // {console.log(tempdata)}
  //   }
  // }, [location.state]);

  const buttonData = [
    { label: 'Employee Details', link: '/login/welcomeadmin/employeelistad' },
    { label: 'Item Details', link: '/login/welcomeadmin/itemListAd' },
    { label: 'Unit Details', link: '/login/welcomeadmin/unitListAd' },
    { label: 'Vehicle Details', link: '/login/welcomeadmin/vehicleListAd' },
    { label: 'Customer Details', link: '/login/welcomeadmin/customerListAd' },
    { label: 'User Group Details', link: '/login/welcomeadmin/userGroupListAd' },
    { label: 'Job Details' },
    { label: 'Calendar' },
    { label: 'Job Allocation' },
    { label: 'Service Agreement Details' },
    { label: 'Site Visit Details' },
  ];

  return (
    <>
      <Grid container>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: 3 }}>
          <ProfilesAdmin />
        </Grid>
        <Grid item xs={12}>
          <Tabs buttonData={buttonData} />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mt: 3 }}>
          <FooterIn />
        </Grid>
      </Grid>
    </>
  )
}

export default Welcomeadmin