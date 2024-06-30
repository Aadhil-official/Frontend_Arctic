import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Grid, Modal, Typography, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';//, useLocation 
import '../Style/Admcomread.css';
// import DeleteIcon from '@mui/icons-material/Delete';
import { NormalHeaderBar } from '../Components/index'
import axios from 'axios';
import { success } from '../util/Toastify';

function Admcomred() {

  const [complaindata, setComplaindata] = React.useState([]);
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [tempdata, setTempdata] = useState([]);
  // const [complaintdatasend, setComplaintdatasend] = useState([]);
  // const [complaindata, setComplaindata] = useState([]);
  const location = useLocation();
  // const complaindata = location.state.complaintdata;

  useEffect(() => {
    axios.post('http://localhost:8080/api/auth/findcomplaint')
      .then(result => {
        // console.log('Complaints fetched:', result.data);
        setComplaindata(result.data);
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
      });
    // handleView1();
    if (location.state && location.state.tempdata) {
      setTempdata(location.state.tempdata);
    }
    // if (location.state && location.state.complaintdata) {
    //   setComplaindata(location.state.complaintdata);
    // }
    // if (location.state && location.state.complaintdatasend) {
    //   setComplaintdatasend(location.state.complaintdatasend);
    // }
  }, [location.state]);//location.state

  const handleView = () => {
    axios.post('http://localhost:8080/api/auth/findcomplaint')
      .then(result => {
        // console.log('Complaints fetched:', result.data);
        setComplaindata(result.data);
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
      });
  }

  const handleOpenModal = (index) => {
    setOpenModalIndex(index);
  };

  // Function to handle closing modal
  const handleCloseModal = () => {
    handleView();
    setOpenModalIndex(null);
  };

  // const handleDelete = (id) => {
  //   axios.delete(`http://localhost:8080/api/auth/deletComplain?id=${id}`)
  //     .then(() => {
  //       success("Succesfully deleted")
  //       setComplaindata(prevData => prevData.filter(complaint => complaint.complain.id !== id));
  //       window.location.reload();
  //     })
  //     .catch(() => { error("Error") })
  // }

  // const handleDeleteAll = () => {
  //   axios.delete(`http://localhost:8080/api/auth/deletComplains`)
  //     .then(() => {
  //       success("Succesfully deleted")
  //     })
  //     .catch(() => { error("Error") })
  // }


  // const handleView1 = () => {
  //   axios.get('http://localhost:8080/api/auth/getAllReviewedComplains')
  //     .then(result => {
  //       // console.log('Complaints fetched:', result.data);
  //       setComplaintdatasend(result.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching complaints:', error);
  //     });
  // };

  const handleDelete = (id) => {

    // console.log("got delete", id);
    // axios.

    // axios.post
    // console.log(id);
    axios.delete(`http://localhost:8080/api/auth/dltComplain?id=${id}`)
      .then(() => {
        success("Successfully reviewed"); // Assuming success is a function to show success message
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
      });
  }

  return (
    <>
      <NormalHeaderBar />
      <Grid container spacing={2} sx={{ position: 'fixed', alignItems: 'center' }}>
        <Grid item xs={6} sx={{ alignItems: 'center' }}>
          <Link to={"/login/welcomeadmin"} >{/* state={{ tempdata }}*/}
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
          </Link>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to={'/login/complaintread/reviewedcomplain'} >{/*, tempdata,state={{ complaintdatasend, complaindata }} */}
            <Button variant='contained' sx={{ margin: '5px' }}>
              Reviewed Complaints
            </Button>
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
      </Grid><br />

      {complaindata.map((complaint, index) => (
        <Grid container key={index}>
          {console.log("dataaa........", complaint)}
          {/* {console.log(complaint)} */}
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign={'center'}>
            {/* {setComplsize(count++)} */}
            {/* {setTempsize(complsize)} */}
            {/* {console.log(count)} */}
            <Button
              variant="contained"
              sx={{ width: '60%', marginBottom: '10px' }}
              onClick={() => handleOpenModal(index)} // Open modal for the current complaint
            >
              Subject: {complaint.complain.subject}, Date: {complaint.complain.complaindate}

              {/* <DeleteIcon onClick={(e) => {
                e.stopPropagation();
                handleDelete(complaint.complain.id);
              }} /> */}
            </Button>
          </Grid>
          <Modal
            open={openModalIndex === index} // Check if this modal should be open
            onClose={handleCloseModal}
            BackdropProps={{
              sx: { backdropFilter: 'blur(8px)' }, // Apply blur effect to the backdrop
            }}
            aria-labelledby={`modal-modal-title-${index}`}
            aria-describedby={`modal-modal-description-${index}`}
          >
            <Box>
              {/* {count++}{console.log(count)} */}
              {/* {setComplsize(count)} */}
              <Grid container className="contant" textAlign="center" sx={{ width: '60%', minWidth: '' }}>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='right' sx={{ marginTop: '-30px', marginBottom: '10px' }}>
                  <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                    <Typography sx={{ mt: 4 }}>
                      {complaint.complain.complaindate}
                    </Typography>
                  </ThemeProvider>
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                    <Typography variant="h6" component="h2">
                      {complaint.complain.subject}
                    </Typography>
                  </ThemeProvider>
                </Grid>

                <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Divider />
                </Grid>


                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                    <Typography variant='body1' sx={{ mt: 2 }}>
                      {complaint.complain.object}
                    </Typography>
                  </ThemeProvider>
                </Grid>

                <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Divider />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='left'>
                  {/*  sx={{ textTransform: 'uppercase' }} */}
                  <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                    <Typography variant="h6" component="h2">
                      From: {complaint.appUser.username}
                    </Typography>
                  </ThemeProvider>
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='left'>
                  <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                    <Typography variant="h6" component="h2">
                      User Group: {complaint.appUser.usergroup}
                    </Typography>
                  </ThemeProvider>
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='left'>
                  <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                    <Typography variant="h6" component="h2">
                      Email: {complaint.appUser.email}
                    </Typography>
                  </ThemeProvider>
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='right'>
                  <Button
                    // variant='contained'
                    // color='black'
                    onClick={() => handleDelete(complaint.complain.complainId)}
                  >
                    <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                      <Typography variant="h6" component="h2">
                        {console.log(complaint.complain.complainId)}
                        Review
                      </Typography>
                    </ThemeProvider>
                  </Button>
                </Grid>


              </Grid>
            </Box>
          </Modal>
        </Grid>
      ))}
    </>
  );
}

export default Admcomred;
