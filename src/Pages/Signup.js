import React from 'react';
import NormalHeaderBar from '../Components/NormalHeaderBar';
import { Link } from 'react-router-dom';
import '../Style/Login.css';
import FormSignup from '../Components/FormSignup';
import { Typography } from '@mui/material';

export default function Signup() {



  return (
    <>
  <NormalHeaderBar />
   
    <div className="text">
       <Typography variant='h3' sx={{fontWeight:'bold'}}><center>Create New User</center></Typography>
      </div>
      
  <div>
   <Typography variant='h4'><center>Enter account details</center></Typography>
      </div>
     
      <br />
      <div className="box">

        <div className="box-content">
        <FormSignup/>

        </div> 
      </div>

      <div>
        <h4><center>  
          <Link to={"/signup"} style={{color:'red'}}>
             Click here to Reset
             </Link>
             </center></h4>
     
       </div>

      <ul className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </ul>
    </>
  );
}
