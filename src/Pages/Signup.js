import React from 'react';
import NormalHeaderBar from '../Components/NormalHeaderBar';
import { Link } from 'react-router-dom';
import '../Style/Login.css';
import Button from '../Components/ButtonSignup';
import FormSignup from '../Components/FormSignup';
import { Grid, Typography } from '@mui/material';
import ButtonSignup from '../Components/ButtonSignup';
export default function Signup() {

  return (
    <div>
  <NormalHeaderBar />
   
    <div className="text">
       <Typography variant='h3' sx={{fontWeight:'bold'}}><center>Create New User</center></Typography>
      </div>
      
  <div>
   <p><Typography variant='h4'><center>Enter account details</center></Typography></p>
      </div>
     
      <br />
      <div className="box">

        <div className="box-content">
        <FormSignup/>

        </div> 
      </div>

      <div>
        <p><h4><center>  
          <Link to={"/signup"} style={{color:'red'}}>
             Click here to Reset
             </Link>
             </center></h4></p>
     
       </div>

      <ul className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </ul>
    </div>
  );
}
//  export default Signup;
