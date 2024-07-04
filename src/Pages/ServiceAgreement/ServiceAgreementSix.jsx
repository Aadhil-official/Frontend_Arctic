import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography, createTheme, responsiveFontSizes, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { FooterIn, NormalHeaderBar } from '../../Components';
import { useUser } from '../../Context/UserContext';

const ServiceAgreementSix = () => {

  const {tempdata} = useUser();
  const [serviceAgreements, setServiceAgreements] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('customerName');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

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
    const { value } = e.target;
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const handleEditAgreement = (id) => {
    console.log("Agreement ID:", id);
    navigate(`/ServiceAgreementTwo/${id}`);
  };

  const theme = responsiveFontSizes(createTheme({
    typography: {
      fontFamily: 'Fjalla One, sans-serif',
    },
  }));

  const filteredItems = serviceAgreements.filter(agreement => {
    if (!searchQuery) return true;
    if (filterOption === 'agreementType') {
      return agreement.agreementType.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      const value = agreement[filterOption];
      return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ThemeProvider theme={theme}>
      <NormalHeaderBar />

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


      <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', marginBottom: '60px' }}>
        <Grid container textAlign='center' justifyContent='center'>
          <Grid item xs={12}>
            <Typography variant='h' sx={{
              color: "rgb(26, 99, 209)",
              fontFamily: "Franklin Gothic ",
              textAlign: "center",
              fontSize: "60px",
              marginBottom: '1rem',
            }}>
              Service Agreement
            </Typography>
          </Grid>
          <Grid container justifyContent="center" sx={{ paddingTop: '0rem' }}>
            <Grid item>
              <Typography variant='h' sx={{
                fontWeight: 'bold',
                marginBottom: '2rem',
                fontSize: '15px',
                color: '#547DD1',
                fontFamily: 'Franklin Gothic',

              }}>
                View Existing Service Agreements & Add new Service Agreement
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={4} alignItems="center" sx={{ margin: '10px 0' }}>
            <Grid item xs={12} sm={4}>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: '300px' }}>
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

            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
              <Button
                variant="outlined"
                sx={{
                  marginBottom: '1rem',
                  marginRight: '1rem',
                  backgroundColor: 'rgb(26, 99, 209)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgb(21, 80, 178)',
                  },
                }}
              >
                <Link to="/ServiceAgreementOne" style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontFamily: 'Franklin Gothic',
                  fontSize: '18px',
                }}>
                  Add new Service Agreement
                </Link>
              </Button>
              <Button
                variant="outlined"
                sx={{ marginBottom: '1rem' }}
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <TextField
                variant="outlined"
                fullWidth
                sx={{ maxWidth: '300px' }}
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
              />
            </Grid>
          </Grid>

          <Grid item xs={8}>
            {currentItems.map((agreement, index) => (
              <Grid item xs={12} key={index} sx={{ textAlign: 'center', marginBottom: '10px' }}>
                <Box
                  sx={{
                    // boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
                    boxShadow: 3,
                    borderRadius: 2,
                    p: 2,
                    // mb: 2,
                    display: 'inline-block',
                    width: '100%',
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#6C94F8',

                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#547DD1',
                      },
                      width: '100%',
                    }}
                    onClick={() => handleEditAgreement(agreement.id)}
                  >
                    {filterOption === 'customerName' ? agreement.customerName : agreement[filterOption]}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid container justifyContent="center" sx={{ marginTop: '20px' }}>
            {filteredItems.length > itemsPerPage && (
              <Grid item>
                {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }, (_, index) => (
                  <Button key={index} onClick={() => paginate(index + 1)} sx={{ margin: '5px' }}>{index + 1}</Button>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
      <FooterIn />
    </ThemeProvider>
  );
};

export default ServiceAgreementSix;
