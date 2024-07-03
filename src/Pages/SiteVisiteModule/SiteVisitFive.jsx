import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintMsgIcon from '../../Components/SiteVisitComponents/PrintMsgIcon';
import HeaderOne from '../../Components/HeaderOne';
import { FooterIn, NormalHeaderBar } from '../../Components';

export default function SiteVisitFive() {
  return (
    <>
      <NormalHeaderBar />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <Link to="/SiteVisitDashboard">
          <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" 
            style={{ width: '40px', 
            height: '40px', 
            opacity: '0.6', 
            margin: '15px', 
            
            left: '10px', 
            top: '10px' }} alt='Back' />
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1, p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paper sx={{ p: 3, boxShadow: 3, textAlign: 'center', maxWidth: 600, minHeight: 150 }}>
            <Box sx={{ mb: 2 }}>
              <PrintMsgIcon />
            </Box>
            <HeaderOne value="Site Visit Scheduled Successfully!" />
          </Paper>
        </Box>
      </Box>
      <FooterIn />
    </>
  );
}
