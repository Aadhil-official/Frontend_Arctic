//Back end--->JobList



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Grid,
  Box,
  Typography,
  InputAdornment,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from 'react-router-dom';
import '../Style/Joblist.css';

const JobListnew = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('item');
  const [buttons, setButtons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/auth/findJob')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the jobs!", error);
      });

    axios.get('http://localhost:8080/api/buttons')
      .then(response => {
        setButtons(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the buttons!", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredJobs = jobs.filter(job => {
    if (!searchQuery) return true;
    const value = job[filterOption];
    return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleEditJob = (jobId) => {
    navigate(`/login/welcomeadmin/joblist_Ad/editJob/${jobId}`);
  };

  return (
    <Box>
      {/* Title */}
      <Grid container textAlign='center' justifyContent='center'>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12} className='text'>
          <div className="title">
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Job List</Typography>
          </div>
        </Grid>
      </Grid>
      {/* Filters and Search */}
      <Grid container justifyContent='center' spacing={2} style={{ margin: '20px 0' }}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Filter By</InputLabel>
            <Select
              value={filterOption}
              onChange={handleFilterChange}
              input={
                <OutlinedInput
                  startAdornment={
                    <InputAdornment position="start">
                      <FilterAltIcon />
                    </InputAdornment>
                  }
                  label="Filter By"
                  sx={{ borderRadius: '50px' }}
                />
              }
            >
              <MenuItem value="item">Customer</MenuItem>
              <MenuItem value="location">Date</MenuItem>
              <MenuItem value="email">Team Member</MenuItem>
              <MenuItem value="itemIssue">Vehicle Number</MenuItem>
              <MenuItem value="customerDetails">To Be Invoiced</MenuItem>
              <MenuItem value="employeeDetails">Invoiced</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <TextField
            variant="outlined"
            fullWidth
            InputProps={{
              style: { borderRadius: '50px' },
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>
      {/* Buttons */}
      <Grid container justifyContent='center' spacing={2} style={{ margin: '20px 0' }}>
        {buttons.map((button, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Button variant="contained" fullWidth>{button.label}</Button>
          </Grid>
        ))}
      </Grid>
      {/* Job list */}
      <Grid container justifyContent='center'>
        {filteredJobs.map((job, index) => (
          <Grid item xs={12} md={10} lg={8} key={index} style={{ marginBottom: '10px' }}>
            <Button
              variant='contained'
              fullWidth
              sx={{
                backgroundColor: '#6C94F8',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#547DD1',
                },
                marginBottom: '10px',
              }}
              onClick={() => handleEditJob(job.id)}
            >
              {`Job: ${job[filterOption]}`}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box mt={2}>
        {filteredJobs.map(job => (
          <Box key={job.id} p={2} border={1} borderColor="grey.300" borderRadius={2} mb={2}>
            <Typography variant="h6">{job.title}</Typography>
            <Typography>{job.description}</Typography>
            <Button variant="contained" color="primary" onClick={() => handleEditJob(job.id)}>
              Edit
            </Button>
          </Box>
        ))}
      </Box>
      <footer className="footer">
        <div className="footer-text">
          <center>© 2023 - All Rights Reserved</center>
        </div>
      </footer>
    </Box>
  );
};

export default JobListnew;
