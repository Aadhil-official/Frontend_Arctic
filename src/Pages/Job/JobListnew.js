import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DetailsIcon from '@mui/icons-material/Details';
import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  Grid,
  Typography,
  Box,
  TextField,

  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { FooterIn } from '../../Components';
import NormalHeaderIn from '../../Components/NormalHeaderIn';
import SidebarCom from '../../Components/SideBarCom';

const JobListnew = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('customername');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [editJobId, setEditJobId] = useState(null);
  const [editJobData, setEditJobData] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  // Fetch jobs data
  useEffect(() => {
    axios.get('http://localhost:8080/api/auth/displayJob')
      .then(response => {
        setJobs(response.data);
        setFilteredJobs(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the jobs!", error);
      });
  }, []);

  // Filter jobs based on search query and filter option
  useEffect(() => {
    const filterJobs = () => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = jobs.filter(job => {
        const value = job[filterOption]?.toString().toLowerCase() || '';
        return value.includes(lowerCaseQuery);
      });
      setFilteredJobs(filtered);
    };

    filterJobs();
  }, [searchQuery, filterOption, jobs]);

  // Event handlers
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Event handlers
  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  //  Event handlers
  const handleEditJob = (jobId) => {
    const jobToEdit = jobs.find(job => job.id === jobId);
    setEditJobId(jobId);
    setEditJobData({ ...jobToEdit });
  };

  //  Event handlers
  const handleSaveJob = () => {
    axios.put(`http://localhost:8080/api/auth/displayJob/updatedjob/${editJobId}`, editJobData)
      .then(response => {
        setJobs(jobs.map(job => job.id === editJobId ? editJobData : job));
        setFilteredJobs(filteredJobs.map(job => job.id === editJobId ? editJobData : job));
        setEditJobId(null);
        setEditJobData({});
      })
      .catch(error => {
        console.error("There was an error updating the job!", error);
      });
  };

  //  Event handlers
  const handleDeleteJob = (jobId) => {
    axios.delete(`http://localhost:8080/api/auth/displayJob/deleteJob/${jobId}`)
      .then(response => {
        setJobs(jobs.filter(job => job.id !== jobId));
        setFilteredJobs(filteredJobs.filter(job => job.id !== jobId));
        console.log("Job deleted successfully");
      })
      .catch(error => {
        console.error("Failed to delete job:", error);
      });
  };

  const handleCancelEdit = () => {
    setEditJobId(null);
    setEditJobData({});
  };

  const handleAddJob = () => {
    navigate('/nj');
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditJobData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <NormalHeaderIn toggleSidebar={toggleSidebar} />
      <SidebarCom
        isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}
      />

      <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>

        <Box>
          {/* Title */}
          <Grid container spacing={2}>
            <Grid item position='fixed'>
              <Link to={"/login/welcome"}>
                <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
              </Link>
            </Grid>
          </Grid>

          <Grid container textAlign='center' justifyContent='center'>
            <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
              <div className="title">
                <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Job List</Typography>
              </div>
            </Grid>
          </Grid>

          {/* Search and Filter */}
          <Grid container spacing={2} alignItems="center" justifyContent="center" mt={2}>
            <Grid item>
              <TextField
                variant="outlined"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

          </Grid>


          {/* Job List Table */}
          <TableContainer component={Paper} mt={4}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Job ID</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Vehicle Number</TableCell>
                  <TableCell>Team Members</TableCell>
                  <TableCell>Status</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {filteredJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>{job.id}</TableCell>
                    <TableCell>
                      {editJobId === job.id ? (
                        <TextField
                          name="customerName"
                          value={editJobData.customerName}
                          onChange={handleEditInputChange}
                        />
                      ) : (
                        job.customerName
                      )}
                    </TableCell>
                    <TableCell>
                      {editJobId === job.id ? (
                        <TextField
                          name="date"
                          value={editJobData.date}
                          onChange={handleEditInputChange}
                        />
                      ) : (
                        job.date
                      )}
                    </TableCell>
                    <TableCell>
                      {editJobId === job.id ? (
                        <TextField
                          name="vehicleNumber"
                          value={editJobData.vehicleNumber}
                          onChange={handleEditInputChange}
                        />
                      ) : (
                        job.vehicleNumber
                      )}
                    </TableCell>
                    <TableCell>
                      {editJobId === job.id ? (
                        <TextField
                          name="teamMembers"
                          value={editJobData.teamMembers}
                          onChange={handleEditInputChange}
                        />
                      ) : (
                        job.teamMembers
                      )}
                    </TableCell>
                    <TableCell>
                      {editJobId === job.id ? (
                        <TextField
                          name="status"
                          value={editJobData.status}
                          onChange={handleEditInputChange}
                        />
                      ) : (
                        job.status
                      )}
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Footer */}
          {/* <div className="footer">
        <div className="footer-text">
          <center>© 2023 - All Rights Reserved</center>
        </div>
      </div> */}
        </Box>
        <FooterIn />
      </div >
    </>
  );
};

export default JobListnew;
