import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import { NormalHeaderBar } from '../Components/index';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { purple } from '@mui/material/colors';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';


const EmployeeList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('username');

  useEffect(() => {
    axios.post('http://localhost:8080/api/auth/findappusers')
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };


  const filteredUsers = users.filter(user => {
    if (!searchQuery) return true;
    if (filterOption === 'roles.name') {
      return user.roles.some(role => role.name.toLowerCase().includes(searchQuery.toLowerCase()));
    } else {
      const value = user[filterOption];
      return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  const theme = responsiveFontSizes(createTheme());


  return (
    <>
      <NormalHeaderBar />
      <Grid container spacing={2}>
        <Grid item>
          <Link to={"/login/welcome"}>
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', position: 'absolute', margin: '5px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>
      <Grid container textAlign='center' justifyContent='center'>

        <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'} className='text'>
          <ThemeProvider theme={theme}>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>User Details</Typography>
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
                  <MenuItem value="username">User name</MenuItem>
                  <MenuItem value="roles.name">Role</MenuItem>
                  <MenuItem value="address">Address</MenuItem>
                  <MenuItem value="tel">Contact Number</MenuItem>
                  {/* Add more options as needed */}
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
                  )
                }}
                // sx={{
                //   '& .MuiOutlinedInput-root': {
                //     borderRadius: '50px',
                //   },
                // }}
                label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {filteredUsers.map((user, index) => (
            <Grid item xs={12} key={index}>
              <Button variant='contained'
                sx={{
                  backgroundColor: '#6C94F8',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#547DD1', // Slightly darker shade for hover effect
                  },
                  width: '80%',
                  marginBottom: '10px',
                }}>
                {`User: ${filterOption === 'roles.name' ? user.roles.map(role => role.name) : user[filterOption]}`} {/*.join(', ') Displaying the value based on the selected filter option */}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeeList;
