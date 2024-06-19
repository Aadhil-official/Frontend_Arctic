import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">

        
        <Toolbar sx={{ width: '100%', height:'80px', background: 'rgb(102, 148, 235)' }}>
       

  
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}