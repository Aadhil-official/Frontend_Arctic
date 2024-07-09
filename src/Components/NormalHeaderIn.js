import { Grid } from '@mui/material'
import React from 'react'
import { FaBars } from "react-icons/fa";
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function NormalHeaderIn({ toggleSidebar }) {
    return (
        <>
            {/* <AppBar position="sticky"> */}
            <Toolbar sx={{ background: 'rgb(25,118,210)', position: "sticky" }} >
                <Grid container>
                    <Grid item xs={6} textAlign='left' sx={{marginTop:'10px'}}>
                        {/* <div className="header"> */}
                        <button className="toggle-btn" onClick={toggleSidebar}> <FaBars fontSize='large'/></button>
                        {/* </div> */}
                    </Grid>
                    <Grid item xs={6} textAlign='right'>
                        <Link to={"/"}><HomeIcon color='action' fontSize='large' /></Link>
                    </Grid>
                </Grid>
            </Toolbar>
            {/* </AppBar> */}
        </>
    )
}

export default NormalHeaderIn