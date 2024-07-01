import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { FooterIn, NormalHeaderBar } from '../../Components/index';
import SearchIcon from '@mui/icons-material/Search';

function JobLis() {

    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('customerName');

    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/getAllJobs')
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    const navigate = useNavigate();

    const filteredJob = jobs.filter(job => {
        if (!searchQuery) return true;

        const value = job[filterOption];
        return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    });

    const theme = responsiveFontSizes(createTheme());

    const handleViewJob = (id) => {
        navigate(`/login/welcome/jobList/view/${id}`);
    }

    return (
        <div>

            <NormalHeaderBar />
            <Grid container spacing={2}>
                <Grid item position='fixed'>
                    <Link to={"/login/welcome"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
                    </Link>
                </Grid>
            </Grid>
            <Grid container textAlign='center' justifyContent='center'>

                <Grid item xl={12} lg={12} md={12} xs={12} sm={12} className='text2'>
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
                                    <MenuItem value="vehicleNumber">Vehicle Number</MenuItem>
                                    <MenuItem value="status">Status</MenuItem>
                                    <MenuItem value="customerName">Customer Name</MenuItem>
                                    <MenuItem value="date">Date</MenuItem>
                                    <MenuItem value="teamMembers">Team Members</MenuItem>
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
                    {filteredJob.map((job, index) => (
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
                                onClick={() => handleViewJob(job.id)}
                            >
                                <span className='usertext2'>{`Job ${index + 1} :`}</span>{` ${job[filterOption]}`} {/*.join(', ') Displaying the value based on the selected filter option */}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Grid><br /><br />
            <FooterIn />


        </div>
    )
}

export default JobLis