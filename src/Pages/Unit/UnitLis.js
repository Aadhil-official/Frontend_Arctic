import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Pagination, Select, TextField, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { FooterIn } from '../../Components/index';
import SearchIcon from '@mui/icons-material/Search';
import NormalHeaderIn from '../../Components/NormalHeaderIn';
import SidebarCom from '../../Components/SideBarCom';

function UnitLis() {

    const [units, setUnits] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('modelName');
    const [unitsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/getAllUnits')
            .then(response => {
                setUnits(response.data);
            })
            .catch(error => {
                console.error('Error fetching units:', error);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        filteredUnit = e.target.value;
        setCurrentPage(1);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    const navigate = useNavigate();

    let filteredUnit = units.filter(unit => {
        if (!searchQuery) return true;

        const value = unit[filterOption];
        return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    });

    const theme = responsiveFontSizes(createTheme());

    const handleViewUnit = (id) => {
        navigate(`/login/welcome/unitList/view/${id}`);
    }


    const indexOfLastUnit = currentPage * unitsPerPage;
    const indexOfFirstUnit = indexOfLastUnit - unitsPerPage;
    const currentUnits = filteredUnit.slice(indexOfFirstUnit, indexOfLastUnit);

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

                    <Grid item xl={12} lg={12} md={12} xs={12} sm={12} className='text2'>
                        <ThemeProvider theme={theme}>
                            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Unit Details</Typography>
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
                                        <MenuItem value="modelName">Model name</MenuItem>
                                        <MenuItem value="indoorSerial">Indoor Serial</MenuItem>
                                        <MenuItem value="outdoorSerial">Outdoor Serial</MenuItem>
                                        <MenuItem value="commissionedDate">Commissioned Date</MenuItem>
                                        <MenuItem value="owner">Owner</MenuItem>
                                        <MenuItem value="warrantyPeriod">Warranty Period</MenuItem>
                                        <MenuItem value="unitPrice">Unit Price</MenuItem>
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
                        {currentUnits.map((unit, index) => (
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
                                    onClick={() => handleViewUnit(unit.id)}
                                >
                                    <span className='usertext2'>{`Unit ${index + 1} :`}</span>{` ${unit[filterOption]}`} {/*.join(', ') Displaying the value based on the selected filter option */}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid><br />

                <Pagination
                    count={Math.ceil(filteredUnit.length / unitsPerPage)}
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

export default UnitLis