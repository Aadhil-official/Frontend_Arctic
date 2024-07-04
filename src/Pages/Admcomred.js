import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Grid, Modal, Typography, createTheme, responsiveFontSizes, ThemeProvider, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';//, useLocation 
import '../Style/Admcomread.css';
// import DeleteIcon from '@mui/icons-material/Delete';
import { FooterIn, NormalHeaderBar } from '../Components/index'
import axios from 'axios';
import { success } from '../util/Toastify';
import { useUser } from '../Context/UserContext';
import Sidebar from '../Components/Calendar/Sidebar';

function Admcomred() {

  const { tempdata } = useUser();
  // const [role,set]
  const [complaindata, setComplaindata] = React.useState([]);
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [complainPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

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
    // if (location.state && location.state.tempdata) {
    //   setTempdata(location.state.tempdata);
    // }
    // if (location.state && location.state.complaintdata) {
    //   setComplaindata(location.state.complaintdata);
    // }
    // if (location.state && location.state.complaintdatasend) {
    //   setComplaintdatasend(location.state.complaintdatasend);
    // }
  }, []);//location.state

  // This will be 'ADMIN'

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

  const indexOfLastEmployee = currentPage * complainPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - complainPerPage;
  const currentComplaints = complaindata.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };


  return (
    <>
      <NormalHeaderBar />
      {tempdata.usergroup === 'AdminGroup' && <Sidebar />}

      <Grid container position='absolute'>
        <Grid item xs={12} justifyContent='right' textAlign='right'>
          <Link to={'/login/complaintread/reviewedcomplain'} >{/*, tempdata,state={{ complaintdatasend, complaindata }} */}
            <Button variant='contained' sx={{ margin: '5px' }}>
              Reviewed Complaints
            </Button>
          </Link>
        </Grid>
      </Grid >

      <Grid container>
        <Grid item position='fixed'>
          <Link to={tempdata.usergroup === "AdminGroup" ? "/base/dashboard" : "/login/welcomeadmin"}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png"
              style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }}
              alt='Back'
            />
          </Link>
        </Grid>
      </Grid>

      <Grid container >

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign="center">

          <ThemeProvider theme={responsiveFontSizes(createTheme())}>
            <Typography className="text" variant="h2" sx={{ fontWeight: 'bold' }}>
              Complaints
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid><br />

      {
        currentComplaints.map((complaint, index) => (
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
              {/* <Box> */}
              {/* {count++}{console.log(count)} */}
              {/* {setComplsize(count)} */}
              <Grid container textAlign='center' className="contant" sx={{ width: '60%' }}>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='right' sx={{ marginTop: '-30px', marginBottom: '10px' }}>
                  <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                    <Typography sx={{ mt: 4 }}>
                      {complaint.complain.complaindate}
                    </Typography>
                  </ThemeProvider>
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                    <Typography color="black" variant="h6">
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
                </Grid><br />

                <Grid container justifyContent='left' textAlign='left'>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    {/*  sx={{ textTransform: 'uppercase' }} */}
                    <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                      <Typography color="black" variant="h6">
                        From: {complaint.appUser.username}
                      </Typography>
                    </ThemeProvider>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                      <Typography color="black" variant="h6">
                        User Group: {complaint.appUser.usergroup}
                      </Typography>
                    </ThemeProvider>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                      <Typography color="black" variant="h6">
                        Email: {complaint.appUser.email}
                      </Typography>
                    </ThemeProvider>
                  </Grid>

                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='right'>

                  <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                    <Button
                      // variant='contained'
                      // color='black'
                      onClick={() => handleDelete(complaint.complain.complainId)}
                    >
                      <Typography variant="h6">
                        Review
                      </Typography>
                    </Button>
                  </ThemeProvider>
                </Grid>

              </Grid>
              {/* </Box> */}
            </Modal>
          </Grid>
        ))
      }

      <Pagination
        position="fixed"
        count={Math.ceil(complaindata.length / complainPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
      />
      <FooterIn />
    </>
  );
}

export default Admcomred;
