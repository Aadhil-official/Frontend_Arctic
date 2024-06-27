import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintMsgIcon from '../../Components/SiteVisitComponents/PrintMsgIcon';
import HeaderOne from '../../Components/HeaderOne';
import { FooterIn, NormalHeaderBar } from '../../Components';

export default function SiteVisitFive() {
  return (
    <>
      <NormalHeaderBar />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <Link to="/SiteVisitFour">
            <ArrowBackIcon sx={{ fontSize: 30, color: 'rgba(0, 0, 0, 0.54)', margin: '1rem', opacity: "0.6" }} />
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
