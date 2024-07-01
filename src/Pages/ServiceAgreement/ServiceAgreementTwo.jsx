import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import FormViewOne from '../../Components/FormViewOne';
import Footer from '../../Components/Footer';

function ServiceAgreementTwo() {
    // Extract the `id` parameter from the URL using the `useParams` hook
    const { id } = useParams();

    // State variables
    const [agreement, setAgreement] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch the agreement details when the component mounts or the `id` changes
    useEffect(() => {
        const fetchAgreementService = async () => {
            try {
                // Make a GET request to fetch the agreement details
                const response = await axios.get(`http://localhost:8080/api/v1/agreementService/getAgreementServiceTwo?id=${id}`);
                setAgreement(response.data); // Set the response data to the agreement state
                console.log("Agreement Details:", response.data); // Log the agreement details
                setLoading(false); // Set loading to false as the data is fetched
            } catch (e) {
                // Handle error while fetching data
                // error('Error fetching item:' + e);
                setLoading(true); // Set loading to true if there's an error
            }
        };

        fetchAgreementService(); // Call the fetch function
    }, [id]); // Dependency array with `id` ensures the effect runs when `id` changes

    // Create and customize theme
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    theme.typography.h5 = {
        fontSize: '1.1rem'
    };

    return (
        <div>
            {/* Back button that navigates to the home page */}
            <Grid container spacing={2}>
                <Grid item position='fixed'>
                    <Link to={"/"}>
                        <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
                    </Link>
                </Grid>
            </Grid>

            {/* Title */}
            <Grid container className="text">
                <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold' }}
                            style={{
                                marginTop: '5rem',
                                color: 'rgb(26, 99, 209)',
                                fontFamily: "Franklin Gothic Medium",
                                textAlign: "center",
                                fontSize: "60px",
                            }}
                        >
                            Service Agreement
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>

            {/* Subtitle */}
            <Grid container justifyContent="center" sx={{ paddingTop: '0rem' }}>
                <Grid item>
                    <h3 style={{  fontSize: '18px', color:'#547DD1' ,fontFamily:'Franklin Gothic',}}>View Service Agreement Details</h3>
                </Grid>
            </Grid>

            <br />

            {/* Display agreement details or loading message */}
            <Grid container>
                <Grid item xl={3} lg={3} md={2} xs={1} sm={1}></Grid>
                <Grid item xl={6} lg={6} md={8} xs={10} sm={10} className="box">
                    {loading ? (
                        <p>Loading...</p>
                    ) : agreement ? (
                        console.log("from itemEdit page........" + agreement),
                        // Display the agreement details using the FormView component
                        <div className='SerAgTwo' style={{
                            boxShadow: '0px 1.2px 3px 4px rgba(0, 0, 0, 0.1)', // Add shadow box
                            borderRadius: '10px',
                            padding: '20px',
                            marginBottom: '20px',
                            backgroundColor: 'white'
                        }}>
                            <FormViewOne agreement={agreement} />
                        </div>
                    ) : (
                        <p>Agreement not found</p>
                    )}
                </Grid>
                <Grid item xl={3} lg={3} md={2} xs={1} sm={1}></Grid>
            </Grid>
            <br />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default ServiceAgreementTwo;
