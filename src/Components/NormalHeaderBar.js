import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { blue} from '@mui/material/colors';

export default function ButtonAppBar() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ width: '100%', height:'80px', background: 'rgb(102, 148, 235)' }}>
        <Link to={"/"}><HomeIcon sx={{ width: '40px', height: '40px',color: blue[900]}} /></Link>
        </Toolbar>
      </AppBar>
      </>
  );
}