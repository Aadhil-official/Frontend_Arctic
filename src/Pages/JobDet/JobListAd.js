import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Pagination, Select, TextField, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FooterIn } from '../../Components/index';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import '../../Style/Lists/ItemList.css'
import { dismiss, loading, success } from '../../util/Toastify';
import NormalHeaderIn from '../../Components/NormalHeaderIn';
import Sidebar from '../../Components/Calendar/Sidebar';
import SidebarCom from '../../Components/SideBarCom';
import { useUser } from '../../Context/UserContext';

function JobListAd() {

    const { tempdata } = useUser();

    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('customerName');
    const [jobsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        filteredJob = e.target.value;
        setCurrentPage(1);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    const navigate = useNavigate();

    const handleAddJob = () => {
        navigate('/login/welcomeadmin/jobListAd/addjob');
    }

    let filteredJob = jobs.filter(job => {
        if (!searchQuery) return true;

        const value = job[filterOption];
        return value.toString().toLowerCase().includes(searchQuery.toLowerCase());

    });

    const theme = responsiveFontSizes(createTheme());

    const handleViewJob = (id) => {
        console.log(id)
        navigate(`/login/welcomeadmin/jobListAd/edit/${id}`);
    }

    const handleDeleteJob = (id) => {
        const loadingId = loading("Deleting job.....");
        axios.delete(`http://localhost:8080/api/auth/dltJob?id=${id}`)
            .then(() => {
                dismiss(loadingId);
                success("Job successfully deleted");
                window.location.reload();
            })
            .catch(error => {
                dismiss(loadingId);
                console.error('Error deleting jobs:', error);
            });
    }

    const handleCleareJob = () => {
        const loadingId = loading("Clearing all the jobs.....");
        axios.delete('http://localhost:8080/api/auth/clearAllJobs')
            .then(() => {
                dismiss(loadingId);
                success("All Job are successfully deleted");
                window.location.reload();
            })
            .catch(error => {
                dismiss(loadingId);
                console.error('Error deleting jobs:', error);
            });
    }


    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJob.slice(indexOfFirstJob, indexOfLastJob);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>

            <NormalHeaderIn toggleSidebar={toggleSidebar} />
            {/* {tempdata.usergroup === 'AdminGroup' && <br/>} */}
            {tempdata.usergroup === 'AdminGroup' && <Sidebar
                isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}
            />}
            {tempdata.usergroup !== 'AdminGroup' && <SidebarCom
                isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
            <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>

                <Grid container position='fixed' justifyContent='right' textAlign='right'>
                    <Grid item xs={12}>
                        <Button
                            sx={{
                                // marginTop: '10px',
                                marginRight: '5px'
                            }}
                            variant='contained' onClick={handleAddJob}>
                            Add Job
                        </Button>
                        {/* </Grid>
                <Grid item xs={12}> */}
                        <Button
                            sx={{
                                // marginTop: '10px',
                                marginRight: '30px'
                            }}
                            variant='contained' onClick={handleCleareJob}>
                            Clear Jobs
                        </Button>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item position='fixed'>
                        <Link to={"/login/welcomeadmin"}>
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
                            <Grid item xs={2} sm={2} md={4} lg={8} xl={9}></Grid>
                            <Grid item xs={5} sm={5} md={4} lg={2.5} xl={2}>
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
                        {currentJobs.map((job, index) => (
                            <Grid item xs={12} key={index}>
                                <Button variant='contained'
                                    sx={{
                                        backgroundColor: '#6C94F8',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#547DD1', // Slightly darker shade for hover effect
                                        },
                                        width: '70%',
                                        // display: 'flex',
                                        // gap:'10px',
                                        justifyContent: 'flex-start',
                                        marginBottom: '10px',
                                    }}
                                    onClick={() => handleViewJob(job.id)}
                                >
                                    <span className='usertext2'>{`Job ${index + 1} :`}</span>{` ${job[filterOption]}`} {/*.join(', ') Displaying the value based on the selected filter option */}
                                </Button>
                                <Button variant='contained'
                                    color='secondary'
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: '#547DD1', // Slightly darker shade for hover effect
                                        },
                                        // width: '8%',
                                        // display: 'flex',
                                        // gap:'10px',
                                        justifyContent: 'flex-start',
                                        marginBottom: '10px',
                                        marginLeft: '3px'
                                    }}
                                    onClick={() => handleDeleteJob(job.id)}>
                                    Delete
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid><br /><br />

                <Pagination
                    count={Math.ceil(filteredJob.length / jobsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    color="primary"
                />

                <FooterIn />
            </div>
        </div>
    )
}

export default JobListAd