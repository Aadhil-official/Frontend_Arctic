import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FooterIn, NormalHeaderBar } from '../../Components/index';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import '../../Style/Lists/ItemList.css'

function UnitListAd() {

    const [units, setUnits] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOption, setFilterOption] = useState('modelName');

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
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    const navigate = useNavigate();

    const handleAddUnit = () => {
        navigate('/login/welcomeadmin/unitListAd/addUnit');
    }

    const filteredUnit = units.filter(unit => {
        if (!searchQuery) return true;

        const value = unit[filterOption];
        return value.toString().toLowerCase().includes(searchQuery.toLowerCase());

    });

    const theme = responsiveFontSizes(createTheme());

    const handleViewUnit = (id) => {
        console.log(id)
        navigate(`/login/welcomeadmin/unitListAd/edit/${id}`);
    }

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
                        variant='contained' onClick={handleAddUnit}>
                        Add Unit
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
                    {filteredUnit.map((unit, index) => (
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
            </Grid><br /><br />
            <FooterIn />

        </div>
    )
}

export default UnitListAd