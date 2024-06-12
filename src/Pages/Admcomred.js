import React, { useState } from 'react';
import { Box, Button, Divider, Grid, Modal, Typography, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import '../Style/Admcomread.css';
import { NormalHeaderBar} from '../Components/index'

function Admcomred() {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const location = useLocation();
  const complaindata = location.state.complaindata;

  // var count=0;

  // Function to handle opening modal for a specific complaint
  const handleOpenModal = (index) => {
    setOpenModalIndex(index);
  };

  // Function to handle closing modal
  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <>
    {/* <Nav/> */}
    <NormalHeaderBar/>
    <Grid container spacing={2}>
        <Grid item>
          <Link to={"/login/welcomeadmin"}>
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6',position:'absolute',margin:'5px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>
      <Grid container className="text">
        
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign="center">
            
        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
              Complaints
              </Typography>
              </ThemeProvider>
          </Grid>
      </Grid><br/>

      {complaindata.map((complaint, index) => (
        <Grid container key={index}>
          {console.log(complaindata)}
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign={'center'}>
            {/* {setComplsize(count++)} */}
            {/* {setTempsize(complsize)} */}
            {/* {console.log(count)} */}
            <Button
              variant="contained"
              sx={{ width: '60%', marginBottom: '10px'}}
              onClick={() => handleOpenModal(index)} // Open modal for the current complaint
            >
              Subject: {complaint.subject}, Date: {complaint.complaindate}
            </Button>
          </Grid>
          <Modal
            open={openModalIndex === index} // Check if this modal should be open
            onClose={handleCloseModal}
            aria-labelledby={`modal-modal-title-${index}`}
            aria-describedby={`modal-modal-description-${index}`}
          >
            <Box>
              {/* {count++}{console.log(count)} */}
              {/* {setComplsize(count)} */}
              <Grid container className="contant"  textAlign="center" sx={{width:'60%',minWidth:''}}>
                {/* <Grid item xs={3}></Grid> */}
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                  <Typography variant="h6" component="h2">
                    {complaint.subject}
                    {/* <Divider /><br/>
                
                {complaint.message} */}
                
                  </Typography>
                  </ThemeProvider>
                </Grid>
                {/* <Grid item xs={3}></Grid> */}
                
                <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
                <Divider />
                </Grid>
                {/* <Grid item xs={3}></Grid> */}
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                  <Typography sx={{ mt: 2 }}>
                    {/* {complaint.message} */}
                    
                    {complaint.object}
                    </Typography>
                    </ThemeProvider>
                </Grid>
                {/* <Grid item xs={3}></Grid> */}
              </Grid>
              <ThemeProvider theme={responsiveFontSizes(createTheme())}>
              <Typography sx={{ mt: 4 }}>
                {/* {complaint.message} */}
                {complaint.complaindate}
                </Typography>
                </ThemeProvider>
            </Box>
          </Modal>
        </Grid>
      ))}
    </>
  );
}

export default Admcomred;
