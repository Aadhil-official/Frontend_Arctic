import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Grid, Modal, Typography, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Style/Admcomread.css';
import { NormalHeaderBar } from '../Components/index';
import axios from 'axios';
import { error } from '../util/Toastify';

function ReviewedComplain() {
    const [openModalIndex, setOpenModalIndex] = useState(null);
    const [complaindata, setComplaindata] = useState([]);
    const [complaindata2, setComplaindata2] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.complaintdata) {
            setComplaindata(location.state.complaintdata);
        }
        if (location.state?.complaindata2) {
            setComplaindata2(location.state.complaindata2);
        } else {
            axios.get('http://localhost:8080/api/auth/getAllReviewedComplains')
                .then((res) => {
                    setComplaindata2(res.data);
                }).catch((e) => {
                    error("Error fetching reviewed complaints: " + e);
                });
        }
    }, [location.state]);

    const handleOpenModal = (index) => {
        setOpenModalIndex(index);
    };

    const handleCloseModal = () => {
        setOpenModalIndex(null);
    };

    const handleBackToComplaints = () => {
        navigate('/login/complaintread', { state: { complaintdata: complaindata, complaindata2: complaindata2 } });
    };

    return (
        <>
            <NormalHeaderBar />
            <Grid container spacing={2} sx={{ position: 'fixed', alignItems: 'center' }}>
                <Grid item xs={6} sx={{ alignItems: 'center' }}>
                    <Button onClick={handleBackToComplaints}>
                        <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
                    </Button>
                </Grid>
            </Grid>
            <Grid container className="text">
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign="center">
                    <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                            Reviewed Complaints
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
            <br />
            {complaindata2 && complaindata2.length > 0 ? (
                complaindata2.map((complaint, index) => (
                    <Grid container key={index}>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign={'center'}>
                            <Button
                                variant="contained"
                                sx={{ width: '60%', marginBottom: '10px' }}
                                onClick={() => handleOpenModal(index)}
                            >
                                Subject: {complaint.complain.subject}, Date: {complaint.complain.complaindate}
                            </Button>
                        </Grid>
                        <Modal
                            open={openModalIndex === index}
                            onClose={handleCloseModal}
                            BackdropProps={{
                                sx: { backdropFilter: 'blur(8px)' },
                            }}
                            aria-labelledby={`modal-modal-title-${index}`}
                            aria-describedby={`modal-modal-description-${index}`}
                        >
                            <Box>
                                <Grid container className="contant" textAlign="center" sx={{ width: '60%', minWidth: '' }}>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='right' sx={{ marginTop: '-30px', marginBottom: '10px' }}>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography sx={{ mt: 4 }}>
                                                {complaint.complain.complaindate}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography variant="h6" component="h2">
                                                {complaint.complain.subject}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography sx={{ mt: 2 }}>
                                                {complaint.complain.object}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='left'>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography variant="h6" component="h2">
                                                From: {complaint.appUser.username}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='left'>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography variant="h6" component="h2">
                                                User Group: {complaint.appUser.usergroup}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='left'>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography variant="h6" component="h2">
                                                Email: {complaint.appUser.email}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Modal>
                    </Grid>
                ))
            ) : (
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign="center">
                        <Typography variant="h6" sx={{ marginTop: '20px' }}>
                            No reviewed complaints found.
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </>
    );
}

export default ReviewedComplain;
