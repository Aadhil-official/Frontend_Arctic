import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const ServiceAgreementSix = () => {
  const [serviceAgreements, setServiceAgreements] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('customerName');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/agreementService/fetchAgreementService')
     .then(response => {
        console.log(response.data);
        setServiceAgreements(response.data);
      })
     .catch(error => {
        console.error('Error fetching service agreements:', error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredServiceAgreements = serviceAgreements.filter(agreement => {
    if (!searchQuery) return true;
    if (filterOption === 'agreementType') {
      return agreement.agreementType.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      const value = agreement[filterOption];
      return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  const handleEditAgreement = (id) => {
    console.log("Agreement ID:", id);
    navigate(`/ServiceAgreementTwo/${id}`);
  };

  const theme = responsiveFontSizes(createTheme());

  return (
    <>
      <Grid container spacing={-2}>
        <Grid item position='fixed'>
          <Link to={"/login/welcomeadmin"}>
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>

      <Grid container textAlign='center' justifyContent='center'>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'} className='text'>
          <ThemeProvider theme={theme}>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}
            style={{ marginTop: '5rem',
              color:'rgb(26, 99, 209)',
              fontFamily: "Franklin Gothic Medium",
              textAlign: "center",
              fontSize: "70px",}}
            >Service Agreement</Typography>
          </ThemeProvider>
        </Grid>
        <Grid container justifyContent="center"sx={{paddingTop:'0rem'}}>
        <Grid item>
          <h3>View Existing Service Agreements & Add new Service Agreement</h3>
          </Grid>
          </Grid>

        <Grid item xs={12} style={{ margin: '20px' }}>
          <Grid container>
            <Grid item xs={5} sm={5} md={4} lg={1.5} xl={2}>
              <FormControl variant="outlined" sx={{
                minWidth: 225,
                '&.MuiSelect-select': {
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
                  <MenuItem value="customerName">Customer Name</MenuItem>
                  <MenuItem value="location">Location</MenuItem>
                  <MenuItem value="item">Item</MenuItem>
                  <MenuItem value="agreementType">Agreement Type</MenuItem>
                  <MenuItem value="period">Period of Agreement</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={4} lg={8} xl={8}></Grid>
            <Grid item xs={5} sm={5} md={4} lg={1.5} xl={2}>
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
                }}
                label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{paddingBottom:'0.2rem'}}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center"sx={{paddingTop:'3rem'}}>
        <Grid item>
          <Link to="/">
          <button style={{ 
            backgroundColor: 'rgb(26, 99, 209)',
            color: 'white',
            width: '20rem',
            height:'3rem',
            marginBottom: '3rem',
            border:'none',
            borderRadius:'10px',
            cursor:'pointer',
          }} 
          >
            Add new Service Agreement
          </button>
          </Link>
        </Grid>
      </Grid>

        <Grid item xs={12} >
          {filteredServiceAgreements.map((agreement,index) => (
            <Grid item xs={12} key={index}>
              <Button 
              variant="contained"
              sx={{ backgroundColor: '#6C94F8',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#547DD1', // Slightly darker shade for hover effect
                },
                width: '80%',
                marginBottom: '10px',}}
              onClick={() => handleEditAgreement(agreement.id)}>
              {/* {agreement.customerName} */}
             {filterOption === 'customerName'? agreement.customerName: agreement[filterOption]}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      
    </>
  );
};

export default ServiceAgreementSix;
