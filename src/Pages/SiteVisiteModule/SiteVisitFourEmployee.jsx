import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Grid, Typography, Box, Pagination, InputAdornment, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { FooterIn } from '../../Components';
import NormalHeaderIn from '../../Components/NormalHeaderIn';
import SidebarCom from '../../Components/SideBarCom';

const SiteVisitFourEmployee = () => {
  const [siteVisits, setSiteVisits] = useState([]);
  const [filteredVisits, setFilteredVisits] = useState([]);
  const [startedVisits, setStartedVisits] = useState([]);
  const [endedVisits, setEndedVisits] = useState([]);
  const [canceledVisits] = useState([]);
  const [completedVisits, setCompletedVisits] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [visitsPerPage] = useState(4); // Number of site visits per page
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchSiteVisits = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/auth/siteVisit/getSiteVisit');
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set the time to the start of the day for comparison

        const upcomingVisits = response.data.filter(visit => new Date(visit.scheduleDate) > currentDate);
        const todayVisits = response.data.filter(visit => {
          const visitDate = new Date(visit.scheduleDate);
          visitDate.setHours(0, 0, 0, 0);
          return visitDate.getTime() === currentDate.getTime();
        });
        const pastVisits = response.data.filter(visit => new Date(visit.scheduleDate) < currentDate);

        upcomingVisits.sort((a, b) => new Date(a.scheduleDate) - new Date(b.scheduleDate));
        pastVisits.sort((a, b) => new Date(b.scheduleDate) - new Date(a.scheduleDate));

        const allVisits = [...todayVisits, ...upcomingVisits, ...pastVisits];
        setSiteVisits(allVisits);
        setFilteredVisits(allVisits);
      } catch (error) {
        console.error('Error fetching site visits:', error);
        alert('Failed to fetch site visits. Please try again later.');
      }
    };

    fetchSiteVisits();
  }, []);

  const handleStartVisit = async (visitId) => {
    try {
      if (!startedVisits.includes(visitId)) {
        const response = await axios.post(`http://localhost:8080/api/auth/siteVisitStEd/start/${visitId}`);
        console.log(response.data);
        alert('Site Visit started successfully');
        setStartedVisits([...startedVisits, visitId]);
      } else {
        alert('You have already started this site visit.');
      }
    } catch (error) {
      console.error('Error starting site visit:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(`Failed to start site visit: ${error.response.data.message}`);
      } else {
        alert('Already you started this site visit...!');
      }
    }
  };

  const handleEndVisit = async (visitId) => {
    try {
      if (!endedVisits.includes(visitId)) {
        const response = await axios.post(`http://localhost:8080/api/auth/siteVisitStEd/end/${visitId}`);
        console.log(response.data);
        alert('Site Visit ended successfully');
        setEndedVisits([...endedVisits, visitId]);
        const completedVisit = siteVisits.find(visit => visit.visitId === visitId);
        setCompletedVisits([...completedVisits, completedVisit]);
        const updatedVisits = siteVisits.filter(visit => visit.visitId !== visitId);
        setSiteVisits(updatedVisits);
        setFilteredVisits(updatedVisits);
        window.location.reload();
      } else {
        alert('You have already ended this site visit.');
      }
    } catch (error) {
      console.error('Error ending site visit:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(`Failed to end site visit: ${error.response.data.message}`);
      } else {
        alert('Already you end this Site visit...!');
      }
    }
  };

  const handleCancelVisit = async (visitId, visitDetails) => {
    // try {
    //   if (!canceledVisits.includes(visitId)) {
    //     const response = await axios.post(`http://localhost:8080/api/v1/siteVisitStEd/cancel/${visitId}`);
    //     console.log(response.data);
    //     alert('Site Visit canceled successfully');
    //     setCanceledVisits([...canceledVisits, visitId]);
    navigate(`/FeedbackForm/${visitId}`, { state: { visitDetails } }); // Navigate to FeedbackForm with visitDetails
    //   } else {
    //     alert('Now You canceled this site visit.');
    //   }
    // } catch (error) {
    //   console.error('Error canceling site visit:', error);
    //   if (error.response && error.response.data && error.response.data.message) {
    //     alert(`Failed to cancel site visit: ${error.response.data.message}`);
    //   } else {
    //     alert('You Already cancel site visit...!');
    //   }
    // }
  };

  const handleEditVisit = (id) => {
    navigate(`/SiteVisitThree/${id}`);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = siteVisits.filter((visit) =>
      visit.visitId.toLowerCase().includes(searchTerm) ||
      visit.location.toLowerCase().includes(searchTerm) ||
      visit.scheduleDate.toLowerCase().includes(searchTerm)
    );
    setFilteredVisits(filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  // Pagination logic
  const indexOfLastVisit = currentPage * visitsPerPage;
  const indexOfFirstVisit = indexOfLastVisit - visitsPerPage;
  const currentVisits = filteredVisits.slice(indexOfFirstVisit, indexOfLastVisit);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <NormalHeaderIn toggleSidebar={toggleSidebar} />
      {/* {tempdata.usergroup === 'AdminGroup' && <br/>} */}
      <SidebarCom
        isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}
      />
      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>

        <Grid container className='back-icon'>
          <Grid item xs={12} textAlign="left">
            <Link to={"/login/welcome"}>
              <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png"
                style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px', left: '10px', top: '10px' }} alt='Back' />
            </Link>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'} className='text'>
          <Typography variant='h3' sx={{ marginTop: '-3rem', color: 'rgb(26, 99, 209)', fontFamily: "Franklin Gothic Medium", textAlign: "center", fontSize: "60px" }}>{/*,marginTop:"1rem"*/}
            Scheduled Site Visits
          </Typography>
        </Grid>

        <Grid item xs={12} style={{ margin: '20px' }}>
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign="center">
              <TextField
                label="Search Site Visits"
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: '50px',
                  },
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                value={searchTerm}
                onChange={handleSearch}
                sx={{ marginBottom: '2rem', }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign="center">
              {/* <Button
                variant="outlined"
                sx={{
                  marginBottom: '3rem',
                  marginRight: '1rem',
                  backgroundColor: 'rgb(26, 99, 209)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgb(21, 80, 178)',
                  },
                }}
              >
                <Link to="/SiteVisitOne"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontFamily: 'Franklin Gothic',
                    fontSize: '18px',
                  }}>
                  Schedule a new Site Visit
                </Link>
              </Button> */}
              <Button
                variant="outlined"
                sx={{
                  marginBottom: '3rem',
                }}
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ boxShadow: 3, p: 3, borderRadius: 2, backgroundColor: 'white', marginBottom: '2rem' }}>
            {currentVisits.map((visit, index) => (
              <Grid container spacing={2} key={index} alignItems="center" justifyContent="center" sx={{ marginBottom: '1rem' }}>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#0056b3',
                      color: 'white',
                      '&:hover': { backgroundColor: '#1e90ff' },
                      width: '100%'
                    }}
                    onClick={() => handleEditVisit(visit.visitId)}
                  >
                    Visit ID: {visit.visitId}, Location: {visit.location}, Schedule Date: {visit.scheduleDate}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: '100%',
                      backgroundColor: startedVisits.includes(visit.visitId) ? '#6C94F8' : undefined,
                      color: startedVisits.includes(visit.visitId) ? 'white' : undefined,
                    }}
                    onClick={() => handleStartVisit(visit.visitId)}
                    disabled={startedVisits.includes(visit.visitId)}
                  >
                    Start
                  </Button>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: '100%',
                      backgroundColor: endedVisits.includes(visit.visitId) ? '#6C94F8' : undefined,
                      color: endedVisits.includes(visit.visitId) ? 'white' : undefined,
                    }}
                    onClick={() => handleEndVisit(visit.visitId)}
                    disabled={endedVisits.includes(visit.visitId)}
                  >
                    End
                  </Button>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: '100%',
                      //backgroundColor: canceledVisits.includes(visit.visitId) ? '#6C94F8' : undefined,
                      //color: canceledVisits.includes(visit.visitId) ? 'white' : undefined,
                    }}
                    onClick={() => handleCancelVisit(visit.visitId, visit)}
                    disabled={canceledVisits.includes(visit.visitId)}
                  >
                    Feed Back Form
                  </Button>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} textAlign="center">
          <Pagination
            count={Math.ceil(filteredVisits.length / visitsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
          />
        </Grid>
        {/* </Grid> */}
        <FooterIn />
      </div>
    </>
  );
};

export default SiteVisitFourEmployee;

