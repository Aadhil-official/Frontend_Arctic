import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar sx={{ width: '100%', background: 'linear-gradient(to bottom, rgba(75, 117, 245, 0.758), rgb(20, 20, 133))' }}>
          <img
            src="https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0"
            width="40%"
            height="80px"
            align="right"
            alt="Tabs Logo"
            style={{ display: 'inline' }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          </Typography>
          <Typography variant="h6" color="white" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/lg"} style={{ textDecoration: 'none', color: 'white' }}>Log In</Link>
          </Typography>
          <Typography variant="h6" color="white" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/ct"} style={{ textDecoration: 'none', color: 'white' }}>Contact Us</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
