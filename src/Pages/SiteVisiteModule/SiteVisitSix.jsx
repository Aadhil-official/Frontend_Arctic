import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Box, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { FooterIn, NormalHeaderBar } from '../../Components';

const SiteVisitSix = () => {
    const [siteVisits, setSiteVisits] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('location');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Adjust items per page as needed
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/siteVisit/getSiteVisit')
            .then(response => {
                console.log(response.data);
                setSiteVisits(response.data);
            })
            .catch(error => {
                console.error('Error fetching site visits:', error);
                alert('Failed to fetch site visits. Please try again later.');
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    const filteredSiteVisits = siteVisits.filter(visit => {
        if (!searchQuery) return true;
        const value = visit[filterOption];
        return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Reverse the order of site visits to show the most recent first
    const reversedSiteVisits = filteredSiteVisits.reverse();

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = reversedSiteVisits.slice(indexOfFirstItem, indexOfLastItem);

    // Change page function
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleEditVisit = (id) => {
        console.log("Visit ID:", id);
        navigate(`/SiteVisitDetails/${id}`);
    };

    // Pagination component
    const renderPageNumbers = [];
    for (let i = 1; i <= Math.ceil(reversedSiteVisits.length / itemsPerPage); i++) {
        renderPageNumbers.push(
            <Button key={i} onClick={() => paginate(i)} sx={{ margin: '5px' }}>
                {i}
            </Button>
        );
    }

    let theme = createTheme({
        typography: {
            fontFamily: 'Fjalla One, sans-serif',
        },
    });

    theme = responsiveFontSizes(theme);

    return (
        <>
            <NormalHeaderBar />
            <ThemeProvider theme={theme}>
                <Grid item xs={12} style={{ textAlign: "left", margin: "1rem" }}>
                    <Link to={"/SiteVisitDashboard"}>
                    <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" 
            style={{ width: '40px', 
            height: '40px', 
            opacity: '0.6', 
            margin: '15px', 
            
            left: '10px', 
            top: '10px' }} alt='Back' />
                    </Link>
                </Grid>
                <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', marginBottom: '60px' }}>
                    <Grid container textAlign='center' justifyContent='center'>

                        <Grid item xs={12} textAlign='center'>
                            <Typography variant='h' sx={{
                                paddingTop: '-5rem',
                                fontWeight: 'bold',
                                color: 'rgb(26, 99, 209)',
                                fontFamily: "Franklin Gothic ",
                                textAlign: "center",
                                fontSize: "60px"
                            }}>
                                Site Visits
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="center" sx={{
                            paddingTop: '0rem',
                            fontWeight: 'bold',
                            marginBottom: '2rem',
                            fontSize: '15px',
                            color: '#547DD1',
                            fontFamily: 'Franklin Gothic'
                        }}>
                            <Grid item>
                                <h3>View & Update Site Visit list & Schedule A New Site Visit</h3>
                            </Grid>
                        </Grid>

                        <Grid container spacing={4} alignItems="center" sx={{ margin: '10px 0' }} justifyContent="space-between">
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
                                        <MenuItem value="location">Location</MenuItem>
                                        <MenuItem value="vehicleNumber">Vehicle Number</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={4} textAlign="center">
                                <Button
                                    variant="outlined"
                                    sx={{
                                        marginBottom: '3rem',
                                        marginRight: '1rem',
                                        backgroundColor: 'rgb(26, 99, 209)',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'rgb(21, 80, 178)',
                                        },
                                    }}
                                >
                                    <Link to="/SiteVisitOne" style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        fontFamily: 'Franklin Gothic',
                                        fontSize: '18px',
                                    }}>
                                        Schedule A New Site Visit
                                    </Link>
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        marginBottom: '3rem',
                                    }}
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
                            {currentItems.map((visit, index) => (
                                <Grid item xs={12} key={index} sx={{ textAlign: 'center', marginBottom: '10px' }}>
                                    <Box sx={{ boxShadow: 3, borderRadius: 2, p: 2, display: 'inline-block', width: '100%' }}>
                                        <Button
                                            variant="contained"
                                            sx={{ backgroundColor: '#6C94F8', color: 'white', '&:hover': { backgroundColor: '#547DD1' }, width: '100%' }}
                                            onClick={() => handleEditVisit(visit.visitId)}
                                        >
                                            {visit[filterOption]}
                                        </Button>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container justifyContent="center" sx={{ marginTop: '20px' }}>
                            {renderPageNumbers.length > 1 && (
                                <Grid item>
                                    {renderPageNumbers}
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
            <FooterIn />
        </>
    );
};

export default SiteVisitSix;
