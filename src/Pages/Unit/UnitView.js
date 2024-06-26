import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { error } from '../../util/Toastify';
import { Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import { FooterIn, NormalHeaderBar } from '../../Components';
import { FormUnitView } from '../../Components/Unit/index';

function UnitView() {

    const { id } = useParams();

    const [unit, setUnit] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUnit = async () => {
            try {
                // console.log(id);
                const response = await axios.get(`http://localhost:8080/api/auth/getUnit?id=${id}`);
                setUnit(response.data);
                setLoading(false);
            } catch (e) {
                error('Error fetching item:' + e);
                setLoading(true);
            }
        };

        fetchUnit();
    }, [id]);


    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    theme.typography.h5 = {
        fontSize: '1.1rem'
    }


    return (
        <div>

            <NormalHeaderBar />
            <Grid container spacing={2}>
                <Grid item position='fixed'>
                    <Link to={"/login/welcome/unitList"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
                    </Link>
                </Grid>
            </Grid>
            <Grid container className="text">
                <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Unit Details</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>

            <Grid container>
                <ThemeProvider theme={theme}>
                    <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
                        <Typography variant='h6' sx={{ marginTop: '-20px' }}>You can view unit details</Typography>
                    </Grid>
                </ThemeProvider>
            </Grid>

            <br />
            <Grid container>
                <Grid item xl={5.25} lg={4.65} md={3} xs={1} sm={2}></Grid>
                <Grid item xl={3} lg={4} md={6} xs={10.5} sm={8} className="box">
                    {loading ? (
                        <p>Loading...</p>
                    ) : unit ? (
                        <FormUnitView unit={unit} />
                    ) : (
                        <p>Unit not found</p>
                    )}
                </Grid>
                <Grid item xl={2} lg={3} md={3} xs={0.5} sm={2}></Grid>
            </Grid><br />
            <Grid container>
                <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h5' fontWeight='bold'>
                            To dashboard?
                            <Link to={'/login/welcome'} style={{ color: 'red' }}>
                                Click here
                            </Link>
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid><br />
            <FooterIn />

        </div>
    )
}

export default UnitView