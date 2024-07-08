import React, { useState } from 'react';
import axios from 'axios';
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography, createTheme, responsiveFontSizes, Box, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../../Components/Footer';

const GatePassList = () => {
  const [gatePasses, setGatePasses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('gatePassId');
  const [currentPage, setCurrentPage] = useState(1);
  const [passesPerPage] = useState(5);

  const navigate = useNavigate();

  //   useEffect(() => {
  //     axios.get('http://localhost:8080/api/v1/siteVisit/fetchGatePass')
  //       .then(response => {
  //         console.log(response.data);
  //         setGatePasses(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching gate passes:', error);
  //       });
  //   }, []);

  axios.get('http://localhost:8080/api/auth/gatePass/fetchGatePass')
    .then(response => {
      console.log(response.data);
      setGatePasses(response.data);
    })
    .catch(error => {
      console.error('Error fetching gate passes:', error);
    });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const handleEditGatePass = (id) => {
    console.log("Gate Pass ID:", id);
    navigate(`/editGatePass/${id}`);
  };

  const indexOfLastPass = currentPage * passesPerPage;
  const indexOfFirstPass = indexOfLastPass - passesPerPage;

  const filteredPasses = gatePasses.filter(pass => {
    if (!searchQuery) return true;
    const value = pass[filterOption];
    return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
  });

  const currentPasses = filteredPasses.slice(indexOfFirstPass, indexOfLastPass);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const theme = responsiveFontSizes(createTheme());

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: '1500px', margin: '0 auto', padding: '2px' }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'left' }}>
              <Link to={"/dashboard"}>
                <IconButton>
                  <ArrowBackIcon style={{ fontSize: 40, color: 'rgba(0, 0, 0, 0.6)' }} />
                </IconButton>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Grid container textAlign='center' justifyContent='center'>
          <Grid item xs={12} textAlign='center'>
            <Typography variant='h3' sx={{ fontWeight: 'bold', margin: '0rem', color: 'rgb(26, 99, 209)', fontFamily: "Franklin Gothic Medium", fontSize: "60px" }}>
              Gate Passes
            </Typography>
            <Typography variant='h6' sx={{ fontWeight: 'bold', margin: '1rem', color: '#547DD1', textAlign: "center", fontSize: "18px", fontFamily: 'Franklin Gothic' }}>
              View and Manage Gate Passes
            </Typography>
          </Grid>

          <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ margin: '20px 0' }}>
            <Grid item xs={12} sm={5} md={4} lg={2}>
              <FormControl variant="outlined" fullWidth sx={{ minWidth: 225 }}>
                <InputLabel>Filter By</InputLabel>
                <Select
                  value={filterOption}
                  onChange={handleFilterChange}
                  input={
                    <OutlinedInput
                      startAdornment={<InputAdornment position="start"><FilterAltIcon /></InputAdornment>}
                      label="Filter By"
                      sx={{ borderRadius: '50px' }}
                    />
                  }
                >
                  <MenuItem value="gatePassId">Gate Pass ID</MenuItem>
                  <MenuItem value="vehicleNumber">Vehicle Number</MenuItem>
                  <MenuItem value="location">Location</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={5} md={4} lg={2.5} textAlign="center">
              <TextField
                variant="outlined"
                fullWidth
                InputProps={{
                  style: { borderRadius: '50px' },
                  startAdornment: (<InputAdornment position='start'><SearchIcon /></InputAdornment>),
                }}
                label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            {currentPasses.map((pass, index) => (
              <Grid item xs={12} key={index} sx={{ boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '20px', marginBottom: '10px' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#6C94F8',
                    color: 'white',
                    '&:hover': { backgroundColor: '#547DD1' },
                    width: '80%',
                  }}
                  onClick={() => handleEditGatePass(pass.id)}
                >
                  Gate Pass ID: {pass.gatePassId} | Vehicle: {pass.vehicleNumber} | Location: {pass.location}
                </Button>
              </Grid>
            ))}
          </Grid>

          <Grid container justifyContent="center" sx={{ marginTop: '20px' }}>
            {filteredPasses.length > passesPerPage && (
              <Grid item>
                {Array.from({ length: Math.ceil(filteredPasses.length / passesPerPage) }, (_, index) => (
                  <Button key={index} onClick={() => paginate(index + 1)} sx={{ margin: '5px' }}>{index + 1}</Button>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default GatePassList;
