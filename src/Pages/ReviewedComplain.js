import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Grid, Modal, Typography, createTheme, responsiveFontSizes, ThemeProvider, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';//useLocation,
import '../Style/Admcomread.css';
import { FooterIn } from '../Components/index';
import axios from 'axios';
import { error } from '../util/Toastify';
import NormalHeaderIn from '../Components/NormalHeaderIn';
import Sidebar from '../Components/Calendar/Sidebar';
import { useUser } from '../Context/UserContext';
import SidebarCom from '../Components/SideBarCom';

function ReviewedComplain() {

    const { tempdata } = useUser();
    // const [complaintdatasend, setComplaintdatasend] = useState([]);
    const [openModalIndex, setOpenModalIndex] = useState(null);
    const [complaindata, setComplaindata] = useState([]);
    const [complainPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // if (location.state?.complaintdatasend) {
        //     setComplaintdatasend(location.state.complaintdatasend);
        //  }
        // if (location.state?.complaindata) {
        //     setComplaindata(location.state.complaindata);
        // }
        // else {
        axios.get('http://localhost:8080/api/auth/getAllReviewedComplains')
            .then((res) => {
                // console.log("data fatchet on reeee",res.data)
                setComplaindata(res.data);
            }).catch((e) => {
                error("Error fetching reviewed complaints: " + e);
            });
        // }
    }, []);

    const handleOpenModal = (index) => {
        setOpenModalIndex(index);
    };

    const handleCloseModal = () => {
        setOpenModalIndex(null);
    };

    const handleBackToComplaints = () => {
        navigate('/login/complaintread');//, { state: { complaindata, complaintdatasend } }
    };


    const indexOfLastEmployee = currentPage * complainPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - complainPerPage;
    const currentComplaints = complaindata.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <>
            <NormalHeaderIn toggleSidebar={toggleSidebar} />
            {/* {tempdata.usergroup === 'AdminGroup' && <br/>} */}
            {tempdata.usergroup === 'AdminGroup' && <Sidebar
                isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}
            />}
            {tempdata.usergroup !== 'AdminGroup' && <SidebarCom
                isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
            <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>

                <Grid container spacing={2} sx={{ position: 'fixed', alignItems: 'center' }}>
                    <Grid item xs={6} sx={{ alignItems: 'center' }}>
                        <Button onClick={handleBackToComplaints}>
                            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
                        </Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign="center">
                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                            <Typography variant="h2" className="text" sx={{ fontWeight: 'bold' }}>
                                Reviewed Complaints
                            </Typography>
                        </ThemeProvider>
                    </Grid>
                </Grid>
                <br />
                {/* {complaintdatasend && complaintdatasend.length > 0 ? ( */}
                {currentComplaints.map((complaindata, index) => (
                    <Grid container key={index}>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign={'center'}>
                            <Button
                                variant="contained"
                                sx={{ width: '60%', marginBottom: '10px' }}
                                onClick={() => handleOpenModal(index)}
                            >
                                Subject: {complaindata.reviewedComplain.subject}, Date: {complaindata.reviewedComplain.complaindate}
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
                                                {complaindata.reviewedComplain.complaindate}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography variant="h6">
                                                {complaindata.reviewedComplain.subject}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography sx={{ mt: 2 }}>
                                                {complaindata.reviewedComplain.object}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='left'>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography variant="h6">
                                                From: {complaindata.appUser.username}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='left'>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography variant="h6">
                                                User Group: {complaindata.appUser.usergroup}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign='left'>
                                        <ThemeProvider theme={responsiveFontSizes(createTheme())}>
                                            <Typography variant="h6">
                                                Email: {complaindata.reviewedComplain.email}
                                            </Typography>
                                        </ThemeProvider>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Modal>
                    </Grid>
                ))
                }
                {/* ) : (
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign="center">
                        <Typography variant="h6" sx={{ marginTop: '20px' }}>
                            No reviewed complaints found.
                        </Typography>
                    </Grid>
                </Grid>
            )
            } */}


                <Pagination
                    position="fixed"
                    count={Math.ceil(complaindata.length / complainPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    color="primary"
                />
                <FooterIn />
            </div>
        </>
    );
}

export default ReviewedComplain;
