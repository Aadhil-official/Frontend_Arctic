import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FooterIn, NormalHeaderBar } from '../../Components/index';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import '../../Style/Lists/ItemList.css'

function CustomerLis() {

    const [customers, setCustomers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('customerName');

    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/getAllCustomers')
            .then(response => {
                setCustomers(response.data);
                console.log("The response of list hahahahah...........", response.data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    const navigate = useNavigate();

    const filteredCustomer = customers.filter(customer => {
        if (!searchQuery) return true;

        const value = customer[filterOption];
        return value.toString().toLowerCase().includes(searchQuery.toLowerCase());

    });

    const theme = responsiveFontSizes(createTheme());

    const handleViewCustomer = (id) => {
        navigate(`/login/welcome/customerList/view/${id}`);
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
                        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Customer Details</Typography>
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
                                    <MenuItem value="customerName">Customer name</MenuItem>
                                    <MenuItem value="address">Address</MenuItem>
                                    <MenuItem value="contactNumber">Contact number</MenuItem>
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
                    {filteredCustomer.map((customer, index) => (
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
            </Grid><br /><br />
            <FooterIn />



        </div>
    )
}

export default CustomerLis