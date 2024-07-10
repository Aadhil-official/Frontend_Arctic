import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Pagination, Select, TextField, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import { FooterIn } from '../Components/index';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { purple } from '@mui/material/colors';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import '../Style/Component/EmployeeListAd.css'
import SidebarCom from '../Components/SideBarCom';
import NormalHeaderIn from '../Components/NormalHeaderIn';


const EmployeeList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('username');
  const [employeesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    axios.post('http://localhost:8080/api/auth/findappusers')
      .then(response => {
        setUsers(response.data);
        console.log("The response of list hahahahah...........", response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filteredUsers = e.target.value;
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const navigate = useNavigate();

  let filteredUsers = users.filter(user => {
    if (!searchQuery) return true;
    if (filterOption === 'roles.name') {
      return user.roles.some(role => role.name.toLowerCase().includes(searchQuery.toLowerCase()));
    } else {
      const value = user[filterOption];
      return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  const theme = responsiveFontSizes(createTheme());

  const handleViewUser = (id) => {
    navigate(`/login/welcome/employeelist/view/${id}`);
  }


  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
        <Grid container spacing={2}>
          <Grid item position='fixed'>
            <Link to={"/login/welcome"}>
              <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
            </Link>
          </Grid>
        </Grid>
        <Grid container textAlign='center' justifyContent='center'>

          <Grid item xl={12} lg={12} md={12} xs={12} sm={12} className='text1'>
            <ThemeProvider theme={theme}>
              <Typography variant='h3' sx={{ fontWeight: 'bold' }}>User Details</Typography>
            </ThemeProvider>
          </Grid>

          <Grid item xs={12} style={{ margin: '20px' }}>
            <Grid container justifyContent='center' textAlign='center'>
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
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2} sm={2} md={4} lg={8} xl={10}></Grid>
              <Grid item xs={5} sm={5} md={4} lg={2.5} xl={1}>
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
            {currentUsers.map((user, index) => (
              <Grid item xs={12} key={index}>
                <Button variant='contained'
                  sx={{
                    backgroundColor: '#6C94F8',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#547DD1', // Slightly darker shade for hover effect
                    },
                    width: '80%',
                    // display: 'flex',
                    // gap:'10px',
                    justifyContent: 'flex-start',
                    marginBottom: '10px',
                  }}
                  onClick={() => handleViewUser(user.id)}
                >
                  <span className='usertext'>{`User ${index + 1} :`}</span>{` ${filterOption === 'roles.name' ? user.roles.map(role => role.name) : user[filterOption]}`} {/*.join(', ') Displaying the value based on the selected filter option */}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid><br />

        <Pagination
          count={Math.ceil(filteredUsers.length / employeesPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />

        <FooterIn />
      </div>
    </>
  );
};

export default EmployeeList;
