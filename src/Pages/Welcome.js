import React from 'react';
import { FooterIn, Profiles, Tabs } from '../Components/index';
import '../Style/Welcome.css';
import { Grid } from '@mui/material';
// import axios from 'axios';
// import { BsFillGrid3X3GapFill, BsPeopleFill, BsPersonVcardFill } from 'react-icons/bs';

const Welcome = () => {
  // const [employeenum, setEmployeenum] = useState(0);
  // const [itemnum, setItemnum] = useState(0);
  // const [customernum, setCustomernum] = useState(0);
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  console.log("Component rendering...");

  // useEffect(() => {
  //   console.log("Fetching employee count from server...");
  //   axios.get('http://localhost:8080/api/auth/findappusers')
  //     .then(response => {
  //       setEmployeenum(response.data.length);
  //       console.log("Employee count fetched:", response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching employee count:', error);
  //     });

  //   console.log("Fetching item count from server...");
  //   axios.get('http://localhost:8080/api/auth/getAllItem')
  //     .then(response => {
  //       setItemnum(response.data.length);
  //       console.log("Item count fetched:", response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching item count:', error);
  //     });

  //   console.log("Fetching customer count from server...");
  //   axios.get('http://localhost:8080/api/auth/getAllCustomers')
  //     .then(response => {
  //       setCustomernum(response.data.length);
  //       console.log("Customer count fetched:", response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching customer count:', error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 899);
  //     console.log("Window resized, isSmallScreen:", window.innerWidth <= 899);
  //   };

  //   // Initial check on component mount
  //   handleResize();

  //   // Event listener for window resize
  //   window.addEventListener('resize', handleResize);

  //   // Clean up event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const gapStyle = {
  //   gap: isSmallScreen ? '50px' : '20px'
  // };

  // const betStyle = {
  //   width: isSmallScreen ? '57px' : '',
  //   display: isSmallScreen ? 'inline-block' : ''
  // };

  return (
    <>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mb: 3 }}>
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
          <h1>{itemnum}</h1>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={2.5} xl={1} className='card'>
          <div style={gapStyle} className='card-inner'>
            <h3>EMPLOYEES</h3>
            <BsPersonVcardFill className='card_icon' />
          </div>
          <h1>{employeenum}</h1>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={2.5} xl={1} className='card'>
          <div style={gapStyle} className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{customernum}</h1>
        </Grid>
      </Grid>
      <br /><br /> */}

      <Grid container>
        <Grid item xs={12}>
          <Tabs />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mt: 3 }}>
          <FooterIn />
        </Grid>
      </Grid>
    </>
  );
};

export default Welcome;
