import { Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react'
import { Footer, NormalHeaderBar } from '../../Components/index';
import { Link } from 'react-router-dom';
import { FormAddUnit } from '../../Components/Unit/index';

function AddUnit() {

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
                    <Link to={"/login/welcomeadmin/vehicleListAd"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
                    </Link>
                </Grid>
            </Grid>
            <Grid container className="text">
                <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Add New Vehicle</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>

            <Grid container>
                <ThemeProvider theme={theme}>
                    <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
                        <Typography variant='h6' sx={{ marginTop: '-25px' }}>Enter vehicle details</Typography>
                    </Grid>
                </ThemeProvider>
            </Grid>

            <br />
            <Grid container justifyContent='center' textAlign='center'>
                {/* <Grid item xl={5.25} lg={4.65} md={3} xs={1} sm={2}></Grid> */}
                <Grid item xl={4} lg={5} md={4} xs={10.5} sm={6} className="box">

                    <FormAddUnit />

                </Grid>
                {/* <Grid item xl={2} lg={3} md={3} xs={0.5} sm={2}></Grid> */}
            </Grid><br />
            <Grid container>
                <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h5' fontWeight='bold'>

                            To dashboard?
                            <Link to={'/login/welcomeadmin'} style={{ color: 'red' }}>
                                Click here
                            </Link>
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid><br />
            <Footer />

        </div>
    )
}

export default AddUnit