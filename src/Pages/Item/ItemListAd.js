import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Pagination, Select, TextField, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import { FooterIn } from '../../Components/index';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { purple } from '@mui/material/colors';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import '../../Style/Lists/ItemList.css'
import { useUser } from '../../Context/UserContext';
import NormalHeaderIn from '../../Components/NormalHeaderIn';
import SidebarCom from '../../Components/SideBarCom';
import Sidebar from '../../Components/Calendar/Sidebar';
// import { error, success } from '../util/Toastify';


const ItemListAd = () => {

    const { tempdata } = useUser();

    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('name');
    const [itemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/getAllItem')
            .then(response => {
                setItems(response.data);
                console.log("The response of list hahahahah...........", response.data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        filteredItem = e.target.value;
        setCurrentPage(1);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    const navigate = useNavigate();

    const handleAddItem = () => {
        navigate('/login/welcomeadmin/itemListAd/addItem');
    }

    let filteredItem = items.filter(item => {
        if (!searchQuery) return true;
        const value = item[filterOption];
        return value.toString().toLowerCase().includes(searchQuery.toLowerCase());

    });

    const theme = responsiveFontSizes(createTheme());

    const handleViewUser = (id) => {
        navigate(`/login/welcomeadmin/itemListAd/edit/${id}`);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItem.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>            <NormalHeaderIn toggleSidebar={toggleSidebar} />
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
                                marginRight: '30px'
                            }}
                            variant='contained' onClick={handleAddItem}>
                            Add Item
                        </Button>
                    </Grid>
                </Grid>

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


                <Grid container textAlign='center' justifyContent='center'>

                    <Grid item xl={12} lg={12} md={12} xs={12} sm={12} className='text2'>
                        <ThemeProvider theme={theme}>
                            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Item Details</Typography>
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
                                        <MenuItem value="name">Item name</MenuItem>
                                        <MenuItem value="indoorMod">Indoor Modal</MenuItem>
                                        <MenuItem value="outdoorMod">Outdoor Modal</MenuItem>
                                        <MenuItem value="manufacturer">Manufacturer</MenuItem>
                                        <MenuItem value="capacity">Capacity</MenuItem>
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
                        {currentItems.map((item, index) => (
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
                                    onClick={() => handleViewUser(item.id)}
                                >
                                    <span className='usertext2'>{`Item ${index + 1} :`}</span>{` ${item[filterOption]}`} {/*.join(', ') Displaying the value based on the selected filter option */}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid><br />

                <Pagination
                    count={Math.ceil(filteredItem.length / itemsPerPage)}
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

export default ItemListAd;
