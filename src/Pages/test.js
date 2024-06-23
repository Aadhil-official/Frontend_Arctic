import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography, createTheme, responsiveFontSizes } from '@mui/material';
// import { NormalHeaderBar } from '../Components/index';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '../Style/Component/EmployeeList.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const JobDetails1 = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('item');
  // const [displayfield, setDisplayfield] = useState('');

  const navigate = useNavigate();

 
  useEffect(() => {
    axios.get('https:/localhost:8080/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the jobs!", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };


  const filteredUsers = jobs.filter(job => {
    if (!searchQuery) return true;
    
      const value = user[filterOption];
      return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    
  });

  // navigate('/')
  const handleEditUser = (jobId) => {
        navigate(`/login/welcomeadmin/joblist_Ad/editJob/${jobId}`);
  };

  const theme = responsiveFontSizes(createTheme());

  return (
    <>
      {/* <NormalHeaderBar /> */}
      <Grid container spacing={2}>
        <Grid item position='fixed'>
          <Link to={"/login/welcomeadmin"}>
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>

      <Grid container textAlign='center' justifyContent='center'>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'} className='text'>
          <ThemeProvider theme={theme}>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Job Details</Typography>
          </ThemeProvider>
        </Grid>
       


        <Grid item xs={12} style={{ margin: '20px' }}>
          <Grid container>
            <Grid item xs={5} sm={5} md={4} lg={1.5} xl={1}>
              <FormControl variant="outlined" sx={{
                minWidth: 225,
                '& .MuiSelect-select': {
                  display: 'flex',
                  marginLeft: '10px'
                },
              }}>
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
                  <MenuItem value="item">Item</MenuItem>
                  <MenuItem value="location">Role</MenuItem>
                  <MenuItem value="email">Address</MenuItem>
                  <MenuItem value="itemIssue">Contact Number</MenuItem>
 		<MenuItem value="customerDetailscustomerDetails">Item</MenuItem>
                  <MenuItem value="employeeDetailsemployeeDetails">Role</MenuItem>
                  

                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={4} lg={9} xl={10}></Grid>
            <Grid item xs={5} sm={5} md={4} lg={1.5} xl={1}>
              <TextField
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
                  // value:(
                  //   searchQuery
                  // )
                }}
                // InputLabelProps={{
                //   shrink: searchQuery.length > 0 || undefined,
                // }}
                // sx={{
                //   '& .MuiOutlinedInput-root': {
                //     borderRadius: '50px',
                //   },
                // }}
                label="Search"
                // value=""
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {filteredUsers.map((job, index) => (
            < Grid item xs={12} key={index} >
              {/* {console.log("from start: " + item)} */}
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#6C94F8',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#547DD1', // Slightly darker shade for hover effect
                  },
                  width: '80%',
                  marginBottom: '10px',
                }}
                onClick={() => handleEditUser(job.id)}
              >
                {/* {index} */}
                {`Job: ${user[filterOption]}`} {/*.join(', ') Displaying the value based on the selected filter option */}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid >
    </>
  );
};

export default JobDetails1;