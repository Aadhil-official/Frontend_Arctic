import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Pagination, Select, TextField, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FooterIn, NormalHeaderBar } from '../../Components/index';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import '../../Style/Lists/ItemList.css'
import { useUser } from '../../Context/UserContext';

function CustomerListAd() {

    const { tempdata } = useUser();
    const [customers, setCustomers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('customerName');
    const [customersPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/getAllCustomers')
            .then(response => {
                setCustomers(response.data);
                console.log("customers........", response.data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        filteredCustomer = e.target.value;
        setCurrentPage(1);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    const navigate = useNavigate();

    const handleAddCustomer = () => {
        navigate('/login/welcomeadmin/customerListAd/addCustomer');
    }

    let filteredCustomer = customers.filter(customer => {
        if (!searchQuery) return true;
        const value = customer[filterOption];
        return value.toString().toLowerCase().includes(searchQuery.toLowerCase());

    });

    const theme = responsiveFontSizes(createTheme());

    const handleViewCustomer = (id) => {
        navigate(`/login/welcomeadmin/CustomerListAd/edit/${id}`);
    }


    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = filteredCustomer.slice(indexOfFirstCustomer, indexOfLastCustomer);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div>

            <NormalHeaderBar />
            <Grid container position='fixed' justifyContent='right' textAlign='right'>
                <Grid item xs={12}>
                    <Button
                        sx={{
                            marginTop: '10px',
                            marginRight: '2px'
                        }}
                        variant='contained' onClick={handleAddCustomer}>
                        Add Customer
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
                        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Customers Details</Typography>
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
                                    <MenuItem value="customerName">Customer Name</MenuItem>
                                    <MenuItem value="address">Address</MenuItem>
                                    <MenuItem value="contactNumber">Contact Number</MenuItem>
                                    <MenuItem value="email">Email</MenuItem>
                                    <MenuItem value="location">Work from</MenuItem>
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
                    {currentCustomers.map((customer, index) => (
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
                                onClick={() => handleViewCustomer(customer.id)}
                            >
                                <span className='usertext2'>{`Customer ${index + 1} :`}</span>{` ${customer[filterOption]}`} {/*.join(', ') Displaying the value based on the selected filter option */}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Grid><br />

            <Pagination
                count={Math.ceil(filteredCustomer.length / customersPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                color="primary"
            />

            <FooterIn />
        </div>
    )
}

export default CustomerListAd