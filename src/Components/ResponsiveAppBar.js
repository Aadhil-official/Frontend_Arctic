import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';//,useLocation
import { Grid } from '@mui/material';

export default function ButtonAppBar() {
  // const location = useLocation();
  // const variableReceived = location.state.variableToPass;

  return (
    // <Box>
        <AppBar position="sticky"> 

        
        <Toolbar sx={{ width: '100%', background: 'linear-gradient(to bottom, rgba(75, 117, 245, 0.758), rgb(20, 20, 133))' }}>
        
      <Grid container>
        <Grid item lg={3} md={3} xs ={3} sm={3}>
        <img 
        src="https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0"
        height="80px" 
        alt='logo'
        style={{marginTop:"1%"}}
      ></img></Grid>
      <Grid item lg={4} md={4} sm={4} xs={4} ></Grid>
          <Grid item lg={1} md={1} xs={1} sm={1} style={{marginTop:"2%"}} >
             <Link to={"/"} style={{color:'white',textDecoration:'none'}}>
             <Typography variant="h5" >Home</Typography>
             </Link>
          </Grid>
          
          <Grid item lg={1.5} md={1.5} xs={1.5} sm={1.5} style={{marginTop:"2%"}}>
            <Link to={"/contact"} style={{color:'white',textDecoration:'none'}}>
            <Typography variant="h5" >Contact Us</Typography>
            </Link>
          </Grid>
        
        <Grid item lg={1} md={1} xs={1} sm={1} style={{marginTop:"2%"}}>
        {/* {variableReceived===true ? ( */}
            <Link to={"/login"} style={{color:'white',textDecoration:'none'}}>
            <Typography variant="h5" >Sign In</Typography>
            </Link>
            {/* // ) :( */}
              {/* <Typography variant="h5" >Sign Out</Typography> */}
              {/* )} */}
          </Grid>

        <Grid item lg={1.5} md={1.5} xs={1.5} sm={1.5} style={{marginTop:"2%"}}>  
            {/* {variableReceived===true &&( */}
            <Link to={"/signup"} style={{color:'white',textDecoration:'none'}}>
            <Typography variant="h5" >Sign Up</Typography>
            </Link>
            {/* )} */}
          </Grid>
          
          </Grid>
        </Toolbar>
     </AppBar> 
    // {/* </Box> */}
  );
}
